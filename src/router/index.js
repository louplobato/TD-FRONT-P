import { createRouter, createWebHistory } from 'vue-router'
import simple from '../pages/simple.vue'
import liste from '../pages/liste.vue'
import listeFetch from '../pages/listeFetch.vue'
import Edit from '../pages/edit/new.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name: 'HomeView', component: HomeView },
        { path: '/simple', name: 'simple', component: simple },
        { path: '/liste', name: 'liste', component: liste },
        { path: '/listeFetch', name: 'listeFetch', component: listeFetch },
        { path: '/new', name: 'Edit', component: Edit },
    ]
})

export default router
