import { createStore } from 'vuex'
import aboutMe from './aboutMe.js'
import project from './project'

export default createStore({
  state: {
    avatar: 'https://s2.loli.net/2022/06/14/6QldwhAVJjCUKBH.jpg',
    eye: 'https://s2.loli.net/2022/06/14/ICyptREwzvsUb2r.png',
    myHome1: 'https://s2.loli.net/2022/06/14/Ij1dCnQeu2UTXN9.jpg',
    myHome2: 'https://s2.loli.net/2022/06/14/3TK8Ub7jvViuPxq.jpg',
    myHome3: 'https://s2.loli.net/2022/06/14/ZLhFgNMmUkGzcQo.jpg',
    myHome4: 'https://sm.ms/delete/3oaMbFf4tgPOLmHuNY875SJ1CT',
    myWork1: 'https://sm.ms/delete/7Lyr6vkzeaCHo941dEXWMOK8PR',
    myWork2: 'https://s2.loli.net/2022/06/14/IgvOiW4tV5xAdUP.jpg'
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    aboutMe,
    project
  }
})
