import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/css/reset.css'

//引入 FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faXmark, faUserTie, faBriefcase, faJetFighterUp, faBook, faEnvelope, faBlog, faCodeBranch} from '@fortawesome/free-solid-svg-icons' // 每添加一个图标, 需要在这里引入一下
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add([faBars, faXmark, faUserTie, faBriefcase, faJetFighterUp, faBook, faEnvelope, faBlog, faCodeBranch]) // 每添加一个图标, 需要在这里添加一下
createApp(App)
  .use(store)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon) // 添加 FontAwesomeIcon 组件
  .mount('#app')
