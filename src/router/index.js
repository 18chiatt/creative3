import Vue from 'vue'
import VueRouter from 'vue-router'
import Explain from "../views/Explain.vue"
import AddItems from "../views/AddItem.vue"
import ViewItems from "../views/viewItems.vue"
import Solve from "../views/Solve.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Explination',
    component: Explain
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/AddItems',
    name:'Add Items',
    component: AddItems,
  },
  {
    path:"/viewItems",
    name:"View Items",
    component:ViewItems
  },
  {
    path:"/Solve",
    name:"Solve",
    component:Solve,

    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
