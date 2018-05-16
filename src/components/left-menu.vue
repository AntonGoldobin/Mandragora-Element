<template>
  <div id="nav-left">
    <div class="menu-title">Menu</div>
    <b-list-group class="left-menu" >
      <b-list-group-item href="#"><router-link to="/">Buttons</router-link></b-list-group-item>
      <b-list-group-item href="#"><router-link to="/inputs">Inputs</router-link></b-list-group-item>
      <b-list-group-item href="#"><router-link to="/droplists">Droplists</router-link></b-list-group-item>
      <b-list-group-item href="#"><router-link to="/dropdowns">Dropdowns</router-link></b-list-group-item>
      <b-list-group-item href="#"><router-link to="/checkboxes">Checkboxes</router-link></b-list-group-item>
      <b-list-group-item href="#foobar" disabled>Alerts</b-list-group-item>
    </b-list-group>
  </div>
</template>
