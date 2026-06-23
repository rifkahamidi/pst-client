import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/LandingPage/Index.vue'),
      meta: {
        title: 'eCommerce Dashboard',
      },
    },
    {
      path: '/',
      name: 'buku-tamu',
      component: () => import('../views/User/BukuTamu.vue'),
      meta: {
        title: 'Buku Tamu',
      },
    },
    
    {
      path: '/signin',
      name: 'Signin',
      component: () => import('../views/Auth/Signin.vue'),
      meta: {
        title: 'Signin',
      },
    },
  ],
})

export default router

router.beforeEach((to, from, next) => {
  document.title = `Vue.js ${to.meta.title} | TailAdmin - Vue.js Tailwind CSS Dashboard Template`
  next()
})
