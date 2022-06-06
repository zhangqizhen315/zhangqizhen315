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
        //name: 'home',
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
  },
  {
    path: '/card',
    name: 'card',
    component: () => import('../views/Card/index.vue'),
    children: [
      {
        path: '',
        //name: 'home',
        component: () => import('../views/Card/Home.vue')
      }
    ]
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('../views/Project.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
