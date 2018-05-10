<template>
  <div id="nav-left">
    <div class="menu-title">Menu</div>
    <b-list-group class="left-menu" >
      <b-list-group-item href="#"><router-link to="/">Buttons</router-link></b-list-group-item>
      <b-list-group-item href="#"><router-link to="/Inputs">Inputs</router-link></b-list-group-item>
      <b-list-group-item href="#foobar" disabled>Alerts</b-list-group-item>
    </b-list-group>
  </div>
</template>
