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
    <b-table :items="items"></b-table>
  </div>
</template>

<script>
const items = [
  { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
  { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
]

export default {
  data () {
    return {
      items: items
    }
  }
}
</script>
