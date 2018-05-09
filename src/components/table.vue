<template>
  <div id="content">
    <div class="page-title">
      Загрузка KPI
      <b-btn variant="primary" class="button-upload button-right" v-b-modal.ap-upload>Загрузить АП</b-btn>
      <b-modal id="ap-upload" hide-footer title="Загрузка адресной программы">
        <p class="my-4">Что-то</p>
        <b-btn variant="primary" class="button-upload button-right">Загрузить</b-btn>
      </b-modal>
    </div>
    <app-settings></app-settings>
    <vuetable ref="vuetable"
              api-url="https://vuetable.ratiw.net/api/users"
              :fields="fields"
              pagination-path=""
              @vuetable:pagination-data="onPaginationData"
    ></vuetable>
    <vuetable-pagination
              ref="pagination"
              @vuetable-pagination:change-page="onChangePage"

    ></vuetable-pagination>
  </div>
</template>

<script>
  import Vuetable from 'vuetable-2/src/components/Vuetable.vue'
  import accounting from 'accounting'
  import moment from 'moment'
  import VuetablePagination from 'vuetable-2/src/components/VuetablePagination.vue'

  export default {
    components: {
      Vuetable,
      VuetablePagination
    },
    data() {
      return{
        fields: [
          {
            name: 'name',
            title: 'Имя',
            callback: 'allcap'
          },
          {
            name: 'email',
            titleClass: ''
          },
          {
            name: 'birthdate',
            title: 'Дата рождения',
            callback: 'formatDate|DD-MM-YYYY'
          },
          {
            name: 'nickname',
            title: 'Ник-нейм',
            dataClass: 'text-right'
          },
          {
            name: 'gender',
            title: 'Пол',
            callback: 'genderLabel'
          },
          {
            name: 'salary',
            title: 'Зарплата',
            callback: 'formatNumber'
          }
        ]
      }
    },
    methods: {
      allcap (value){
        return value.toUpperCase()
      },
      genderLabel (value){
        return value === 'M'
          ? '<span class="text-primary">Male</span>'
          : '<span class="text-warning">Female</span>'

      },
      formatNumber(value) {
        return accounting.formatNumber(value, 2)
      },
      formatDate (value, fmt='D MMM YYYY'){
        return (value === null)
          ? ''
          : moment(value, 'YYYY-MM-DD').format(fmt)
      },
      onPaginationData (paginationData) {
        this.$refs.pagination.setPaginationData(paginationData)
      },
      onChangePage (page) {
        this.$refs.vuetable.changePage(page)
      }
    }
  }
</script>
