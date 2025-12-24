import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Experience from '../pages/Experience.vue'
import Awards from '../pages/Awards.vue'
import Portfolio from '../pages/Portofolio.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/experience', component: Experience },
    { path: '/awards', component: Awards },
    { path: '/portfolio', component: Portfolio },
  ],
})

export default router
