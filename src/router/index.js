import Vue from 'vue'
import Router from 'vue-router'
import AppTable from '../components/table.vue'
import AppTable2 from '../components/table2.vue'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Foo',
      component: AppTable
    },
    {
      path: '/bar',
      name: 'Bar',
      component: AppTable2
    }
  ]
})
