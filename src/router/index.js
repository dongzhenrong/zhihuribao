import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Me from '../views/Me.vue'
import Xiangqing from '../views/Xiangqing.vue'
import Pinglun from '../views/Pinglun.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Pinglun',
    component: Pinglun
  },
  {
    path: '/',
    name: 'Xiangqing',
    component: Xiangqing
  },
  {
    path: '/',
    name: 'Me',
    component: Me
  },
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
