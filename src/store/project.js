
export default {
  namespaced: true,
  state: {
    // 放数据
    projects: [
      {
        title: 'normal',
        imgUrl: 'https://s2.loli.net/2022/06/14/aGy9bqzw3sxoIDE.png',
        description: '基本的个人主页样式, 一种尽可能简单的样式',
        router: '/normal'
      },
      {
        title: 'card',
        imgUrl: 'https://s2.loli.net/2022/06/14/axegPbdvJsumzXl.png',
        description: '卡片式的个人主页样式, 所有信息, 以简单卡片来展示',
        router: '/card'
      }
    ],
    description: {
      p1: '这既我的个人网站, 也是一个用来练习前端的小项目.',
      p2: '这个项目灵感来源于',
      csszen: {
        t: 'css禅意花园',
        r: 'http://www.csszengarden.com/tr/zh-cn/',
      },
      p3: '这个项目中个人信息的内容完全一样, 通过做成不同 vue 组件, 来使其展示成完全不同的主页样式.'
    }
  },
  actions: {
    // 放提交动作, 两个参数 context, value. context 是上下文, 其中包含 commit
  },
  mutations: {
    // 修改数据, 两个参数 state, value. state 是本模块的数据
  },
  getters: {
    // 获取数据, 四个参数 state, getter, stateAll, getterAll. state 是当前模块的 state, stateAll 是所有模块的 state. getter 是本模块的所有 getters, getterAll 是所有模块的 getters
  }
}
