/*
 * @Author: zhangjiawei
 * @Date: 2021-01-22 20:02:07
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home/index.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */'../views/Login')
  },
  {
    path: '/testVModel',
    name: 'TestVModel',
    component: () => import(/* webpackChunkName: "testVModel" */ '../views/TestVModel/')
  }
]

const router = new VueRouter({
  history: 'history',
  routes
})

export default router