---
name: run-project
description: >
  启动开发服务器、截图验证页面效果、构建并部署到 GitHub Pages。
  触发词：/run-project、跑项目、run serve、看效果、截图、build、构建、部署、push 到 github pages、发布
---

# zhangqizhen315 项目运行 & 部署 Skill

## 一、启动开发服务器

```bash
npm run serve > /tmp/vue-serve.log 2>&1 &
until grep -q "App running" /tmp/vue-serve.log; do sleep 1; done
echo "Server ready at http://localhost:8080"
```

服务器就绪后，可以访问以下路由：

| 路由 | 说明 |
|------|------|
| `http://localhost:8080/` | 重定向到 /normal |
| `http://localhost:8080/normal` | Normal 主题首页 |
| `http://localhost:8080/normal/aboutMe` | 关于我 |
| `http://localhost:8080/normal/work` | 工作经历 |
| `http://localhost:8080/card` | Card 主题 |
| `http://localhost:8080/project` | 项目列表 |

## 二、截图验证页面效果

**关键约束（必须遵守）：**

1. 环境中存在 HTTP 代理（`http_proxy=http://127.0.0.1:20171`），Firefox headless 默认走代理，**无法访问 localhost**，截图会是空白。必须使用带 `network.proxy.type=0` 的 profile 绕过代理。
2. 多个页面截图必须**顺序执行**，不能并发。

**初始化 profile（每次新会话执行一次）：**
```bash
mkdir -p /tmp/ff-noproxy-profile
echo 'user_pref("network.proxy.type", 0);' > /tmp/ff-noproxy-profile/user.js
```

**截图固定模板：**
```bash
firefox --screenshot /tmp/screenshot-<name>.png --window-size 1280,800 --profile /tmp/ff-noproxy-profile <url>
ls -lh /tmp/screenshot-<name>.png
```

截图后用 Read 工具查看图片内容验证效果。若文件 < 10KB 仍是空白，检查 profile 是否已创建、`user.js` 内容是否正确。

## 三、修改项目

**数据层**（只改这两个文件，不要把数据写进组件）：
- 个人信息：`src/store/aboutMe.js`（info、contact、skill、knowledge、resume、projects、certificates）
- 项目数据：`src/store/project.js`
- 图片 URL：`src/store/index.js`（头像、背景图等，均为外部图床链接）

**静态资源规则**：
- 图片：放外部图床（loli.net / sm.ms），不放 `src/assets/`
- PDF 等文件：放 `public/`，构建后访问路径为 `/<filename>`（例：`/certificate-xxx.pdf`）

**修改后**：webpack HMR 自动重新编译，无需重启服务器，直接刷新截图验证即可。

## 四、构建 & 部署到 GitHub Pages

**严格按以下步骤顺序执行，不可跳步：**

### Step 1：构建
```bash
# 在项目根目录执行
npm run build
```
构建产物输出到 `dist/`（已在 `.gitignore` 中，不会被源码仓库跟踪）。

### Step 2：同步到部署目录
```bash
rsync -av --delete \
  --exclude='.git' \
  --exclude='CNAME' \
  dist/ \
  zhangqizhen315.github.io/
```

### Step 3：检查 CNAME
```bash
cd zhangqizhen315.github.io
git diff --cached CNAME
```
只有文件权限变化（`mode change 100644 => 100755`）是正常的，内容不应有变化。若内容被修改，执行 `git checkout CNAME` 恢复。

### Step 4：提交并推送部署仓库
```bash
git add -A
git commit -m "更新构建产物：<本次改动描述>"
git push origin main
```

### Step 5：提交源码仓库
回到项目根目录，单独提交源文件变更：
```bash
cd /data/documents/project/zhangqizhen315
git add src/store/aboutMe.js src/views/Normal/AboutMe.vue  # 按实际改动文件列出
git commit -m "<功能描述>"
git push origin main
```

**两个仓库说明：**

| 仓库 | 路径 | 内容 |
|------|------|------|
| 源码仓库 | `/data/documents/project/zhangqizhen315/` | `src/`、`public/`、配置文件 |
| 部署仓库 | `/data/documents/project/zhangqizhen315/zhangqizhen315.github.io/` | `dist/` 构建产物 |

两个仓库**分开 commit**，`git push` 各自独立执行。GitHub Pages 生效通常需要 1-2 分钟。
