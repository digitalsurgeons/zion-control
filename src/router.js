import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/:property',
      name: 'property',
      component: Home
    },
    {
      path: '/:property/:environment',
      name: 'environment',
      component: Home
    },
    {
      path: '/:property/:environment/:command',
      name: 'command',
      component: Home
    },
  ]
})
