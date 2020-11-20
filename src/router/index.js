import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Home from '@/views/home'
import Layout from '@/views/layout'
Vue.use(VueRouter)

// 路由配置表
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    // 命名路由 layout 有一个默认子路由，这个名字没有意义
    // 正确的做法是：如果有默认子路由，就不要给父路由起名字
    // 默认子路由只有一个
    // name: 'layout',
    component: Layout,
    children: [
      {
        // 子路由
        path: '', // path为空，会默认作为子路由渲染
        name: 'home',
        component: Home
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
