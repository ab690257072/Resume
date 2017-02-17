import Home from './components/Home.vue'
import Portfolio from './components/Portfolio.vue'

export default {
  routes: [{
      path: '/home',
      component: Home
    },
    {
      path: '/portfolio',
      component: Portfolio
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
}