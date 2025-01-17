import type { RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { layout: 'center' }
  },
  {
    path: '/success',
    name: 'success',
    component: () => import('../views/SuccessView.vue'),
    meta: { layout: 'center' }
  },
  {
    path: '/challenges/:id',
    name: 'challenge',
    component: () => import('../views/ChallengeView.vue'),
    meta: { layout: 'center' }
  },
  {
    path: '/challenges/:id/success',
    name: 'challenge-success',
    component: () => import('../views/ChallengeSuccessView.vue'),
    meta: { layout: 'center' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFoundView.vue'),
    meta: { layout: 'center' }
  }
]
