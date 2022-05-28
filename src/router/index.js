import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    //name: 'home',
    //component: () => import('../views/Normal/index.vue'),
    redirect: '/normal'
  },
  {
    path: '/normal',
    name: 'normal',
    component: () => import('../views/Normal/index.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/Normal/Home.vue')
      },
      {
        path: 'aboutMe',
        // name: 'aboutMe',
        component: () => import('../views/Normal/AboutMe.vue')
      },
      {
        path: 'work',
        // name: 'work',
        component: () => import('../views/Normal/Work.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
