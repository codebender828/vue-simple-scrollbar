import VueRouter from 'vue-router'
import Vue from 'vue'
import NProgress from 'nprogress'

const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('./views/index.vue' /* webpackChunkName: "home" */)
  },
  {
    name: 'showcase',
    path: '/showcase',
    component: () => import('./views/showcase.vue' /* webpackChunkName: "showcase" */)
  }
]

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeResolve((to, from, next) => {
  if (to.path) {
    NProgress.start()
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
