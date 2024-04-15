import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home-page',
        component: Home
    },
    {
        path: '/dashboard',
        name: 'dashboard-page',
        component: () => import('../views/DashboardView.vue')
    },
    {
        path: '/login',
        name: 'login-page',
        component: () => import('../views/LoginView.vue')
    },
    {
        path: '/register',
        name: 'register-page',
        component: () => import('../views/RegisterView.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notfound-page',
        component: () => import('../views/NotFoundPageView.vue')
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;