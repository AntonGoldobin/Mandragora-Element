<template>
  <b-container>
    <b-row class="filters-block table-row">
     <b-col cols="5">
       <div class="input-group mb-3">
        <input type="text" class="form-control form-control-primary" placeholder="Поиск по наименованию" aria-label="Recipient's username" aria-describedby="basic-addon2">
        <div class="input-group-append">
          <button class="btn" type="button">
            <img src="../assets/search-icon.svg">
          </button>
        </div>
      </div>
      </b-col>
      <b-col cols="7">
        <app-filter class="button-right"></app-filter>
      </b-col>
    </b-row>
  </b-container>
</template>
