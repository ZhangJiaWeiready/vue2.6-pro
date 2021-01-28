/*
 * @Author: zhangjiawei
 * @Date: 2021-01-22 20:02:07
 */
import Vue from 'vue'
import NProgress from 'nprogress'
import store from 'store'
import 'nprogress/nprogress.css'
import VueRouter from 'vue-router'
import utils from '@/utils'
Vue.use(VueRouter)
const loginRoutePath = '/login'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home/index.vue'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import(/* webpackChunkName: 'home' */'../views/Home/index.vue'),
        meta: {
          auth: true,
          title: '首页'
        },
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */'../views/Login/index.vue'),
    meta: {
      auth: true,
      title: '登录页'
    }
  },
  {
    path: '/testVModel',
    name: 'TestVModel',
    component: () => import(/* webpackChunkName: "testVModel" */ '../views/TestVModel/'),
    meta: {
      auth: true,
      title: '手写双向数据绑定'
    }
  }
]

const router = new VueRouter({
  history: 'history',
  routes
})
/**
 * 路由拦截
 * 权限校验
 */
router.beforeEach(async (to, from, next) => {
  // 进度条开始
  NProgress.start()
  console.log('to', to);
  // 判断加载的路由是否需要登录校验
  if (to.matched.some((r) => r.meta.auth)) {
    const token = store.get('token')
    if (token) {
      if (to.path === loginRoutePath) {
        next({ path: '/' })
        NProgress.done();
      } else {
        next()
      }
    } else {
      if (to.name === 'Login') {
        next()
        NProgress.done();
        return;
      }
      next({
        name: 'Login',
        query: {
          redirect: to.fullPath,
        },
      });
      NProgress.done();
    }
  } else {
    next()
  }
})
router.afterEach((to) => {
  NProgress.done();
  utils.setPageTitle(to.meta.title)
})
export default router