// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import BlogsPage from '../pages/BlogsPage.vue'
import TalentPage from '../pages/TalentPage.vue'
import JobsPage from '../pages/JobsPage.vue'
import ContactPage from '../pages/ContactPage.vue'
import BlogDetailPage from '@/pages/BlogDetailPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: { title: 'Home - Tech Consulting' }
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
    meta: { title: 'About Us - Tech Consulting' }
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: BlogsPage,
    meta: { title: 'Blogs - Tech Consulting' }
  },
  {
    path: '/blog/:id',
    name: 'BlogDetail',
    component: BlogDetailPage
  },
  {
    path: '/find-talent',
    name: 'FindTalent',
    component: TalentPage,
    meta: { title: 'Find a Talent - Tech Consulting' }
  },
  {
    path: '/find-job',
    name: 'FindJob',
    component: JobsPage,
    meta: { title: 'Find a Job - Tech Consulting' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
    meta: { title: 'Contact Us - Tech Consulting' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

// Update page title based on route meta
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Tech Consulting'
  next()
})

export default router