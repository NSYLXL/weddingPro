import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue' 
// import Login from '../views/Login.vue'
// import Register from '../views/Register.vue'
// import WeddingPhoto from '../views/WeddingPhoto.vue'
// import Service from '../views/Service.vue'
// import Travel from '../views/Travel.vue'
// import News from '../views/News.vue'
// import Detail from '../views/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/order',
    component:()=>import('../views/Order.vue')
  },
  {
    path:'*',
    component:()=>import('../views/Erro.vue')
  },
  {
    path:'/detail',
    component:()=>import('../views/Detail.vue')
  },
  {
    path:'/news',
    component:()=>import('../views/News.vue')
  },
  {
    path:'/travel',
    component:()=>import('../views/Travel.vue')
  },
  {
    path:'/service',
    component:()=>import('../views/Service.vue')
  },
  {
    path:'/photo',
    component:()=>import('../views/WeddingPhoto.vue')
  },
  {
    path:'/register',
    component:()=>import('../views/Register.vue')
  },
  {
    path:'/login',
    component:()=>import('../views/Login.vue')
  },
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
