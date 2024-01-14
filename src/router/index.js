import { createRouter, createWebHistory } from '@ionic/vue-router';

const routes = [
  {
    path: '',
    redirect: '/folder/Inbox'
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/FolderPage.vue')
  },
  {
    path: '/home',
    component: () => import ('../views/Home.vue')
  },
  {
    path: '/user/:id/points',
    component: () => import ('../views/user/Points.vue')
  },
  {
    path: '/items',
    component: () => import ('../views/Items.vue')
  },
  {
    path: '/items/:id',
    component: () => import ('../views/Preview.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
