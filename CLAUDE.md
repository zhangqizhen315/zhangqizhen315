This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

个人主页练习项目，基于同一份个人数据，可以做出多套不同风格的页面。灵感来自 CSS 禅意花园。

## 常用命令

```bash
npm run serve    # 启动开发服务器
npm run build    # 构建生产包
npm run lint     # 代码检查
```

无测试套件。

## 技术栈

Vue 3 + Vue Router 4 + Vuex 4 + Less，FontAwesome 图标，PWA 支持（`registerServiceWorker`）。

## 架构

### 路由结构

| 路径 | 说明 |
|------|------|
| `/normal` | Normal 主题，含子路由 `aboutMe`、`work` |
| `/card` | Card 主题 |
| `/project` | 项目列表页 |

根路径 `/` 重定向到 `/normal`。

### 数据层（Vuex）

个人数据全部集中在 store，不分散到组件里：

- `src/store/aboutMe.js` — 个人信息（info、contact、skill、knowledge、resume、projects）
- `src/store/project.js` — 项目数据
- `src/store/index.js` — 根 store，存图片 URL（头像、背景图等）

**所有图片托管在外部图床**（loli.net / sm.ms），不在本地 assets 中。

### 视图结构

```
src/views/
  Normal/        # Normal 主题
    index.vue    # 布局容器（含 Navbar）
    Home.vue     # 首页
    AboutMe.vue  # 关于我
    Main.vue     # 主内容区
    Navbar.vue   # 导航栏
    Work.vue     # 工作经历
  Card/          # Card 主题
    index.vue
    Home.vue
  Project.vue    # 项目列表
```

### 路径别名（vue.config.js）

| 别名 | 指向 |
|------|------|
| `ass` | `@/assets` |
| `com` | `@/components` |
| `vie` | `@/views` |
| `api` | `@/api` |

### 样式

- 全局 reset：`src/assets/css/reset.css`
- Normal 主题全局样式：`src/less/normal.less`
- 组件内用 `<style scoped lang="less">`
- 字体文件在 `src/assets/font/`（思源黑体 Bold/Light + 01.ttf）

## 新增主题

在 `src/views/` 下新建目录，添加 `index.vue`（布局）和子页面，然后在 `src/router/index.js` 注册路由。数据直接从 Vuex store 的 `aboutMe` 和 `project` 模块读取。

## 新增 FontAwesome 图标

在 `src/main.js` 中：1）从对应包 import 图标；2）在 `library.add([...])` 中添加。
