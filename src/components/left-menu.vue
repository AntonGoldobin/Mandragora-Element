<template>
  <div id="nav-left">
    <div class="menu-title">Меню</div>
    <b-list-group class="left-menu" >
      <b-list-group-item href="#"><router-link to="/">Загрузка АП</router-link></b-list-group-item>
      <b-list-group-item href="#"><router-link to="/bar">Загрузка KPI</router-link></b-list-group-item>
      <b-list-group-item href="#foobar" disabled>Контракты</b-list-group-item>
    </b-list-group>
  </div>
</template>
