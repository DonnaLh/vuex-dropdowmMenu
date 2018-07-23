import Vue from 'vue'
import Router from 'vue-router'
import Select1 from '@/components/select1'
import Increment from '@/components/Increment'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Select1',
      component: Select1
    },
    {
      path: '/increment',
      name: 'Increment',
      component: Increment
    }
  ]
})
