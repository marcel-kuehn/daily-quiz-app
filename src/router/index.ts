import { createRouter, createWebHistory, type RouterScrollBehavior } from 'vue-router'
import { routes } from './routes'

const scrollBehavior: RouterScrollBehavior = () => {
  return { top: 0 }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  scrollBehavior
})

export default router
