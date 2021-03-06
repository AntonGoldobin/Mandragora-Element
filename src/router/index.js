import Vue from 'vue'
import Router from 'vue-router'
import AppButtons from '../components/buttons.vue'
import AppInputs from '../components/inputs.vue'
import AppDroplists from '../components/droplists.vue'
import AppDropdowns from '../components/dropdowns.vue'
import Checkboxes from '../components/checkboxes.vue'
import Alerts from '../components/alerts.vue'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Buttons',
      component: AppButtons
    },
    {
      path: '/inputs',
      name: 'Inputs',
      component: AppInputs
    },
    {
        path: '/droplists',
        name: 'Droplists',
        component: AppDroplists
    },
    {
        path: '/dropdowns',
        name: 'Dropdowns',
        component: AppDropdowns
    },
    {
      path: '/checkboxes',
      name: 'Checkboxes',
      component: Checkboxes
    },
    {
      path: '/alerts',
      name: 'Alerts',
      component: Alerts
    }
  ]
})
