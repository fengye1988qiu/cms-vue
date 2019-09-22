import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/components/home')
    },
    {
      path: '/badminton',
      name: 'Badminton',
      component: () => import('@/components/badminton')
    }
  ]
})
