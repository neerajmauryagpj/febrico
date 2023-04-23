import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/dashboard',
    name: 'Layout',
    component: () => import("@/views/layout/Layout"),
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/pages/Dashboard')
      },
      {
        path: '/history',
        name: 'history',
        component: () => import("@/views/pages/History")
      },
      {
        path: '/credit-plan',
        name: 'credit-plan',
        component: () => import("@/views/pages/CreditPlan")
      },
      {
        path: '/payment',
        name: 'payment',
        component: () => import("@/views/pages/PaymentInformation")
      },
      {
        path: '/payment-success',
        name: 'payment-success',
        component: () => import("@/views/pages/PaymentSuccess")
      },

    ]
  },
  {
    // path: "*",
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import('@/views/pages/error/FourZeroFour')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
