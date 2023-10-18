import AdminDashboard from '@/views/AdminDashboard.vue'
import TestTableVue from '@/views/TestTable.vue'

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'AdminDashboard',
    component: AdminDashboard
  },
  {
    path: '/table',
    name: 'TestTable',
    component: TestTableVue
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
