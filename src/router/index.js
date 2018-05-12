import Vue from 'vue'
import Router from 'vue-router'
import AppButtons from '../components/buttons.vue'
import AppInputs from '../components/inputs.vue'
import AppDropdowns from '../components/dropdowns.vue'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Buttons',
      component: AppButtons
    },
    {
      path: '/Inputs',
      name: 'Inputs',
      component: AppInputs
    },
    {
        path: '/Dropdowns',
        name: 'Dropdowns',
        component: AppDropdowns
    }
  ]
})
