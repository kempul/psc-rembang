import Vue from 'vue'
import Router from 'vue-router'
//import Home from './views/Home.vue'
import Peta from './views/Peta.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Peta
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/peta',
      name: 'peta',
      component: Peta
    }
  ]
})
