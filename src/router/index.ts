import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/LoginView.vue')
    },
    {
        path: '/patients',
        name: 'patient-dashboard',
        component: () => import('../views/LoginView.vue')
    },
    {
        path: '/doctors',
        name: 'doctor-dashboard',
        component: () => import('../views/LoginView.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        // redirect: '/'
        component: () => import('../views/NotFound.vue')
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
