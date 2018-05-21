<template>
  <div id="content" class="new-design">
    <container>
      <div class="page-title">
        Inputs
        <div class="page-description">

        </div>
      </div>


      <div class="row">
        <div class="elements-block">
          <div class="col-sm-4">
            <label for="exampleInputName">Name</label>
            <input type="text" class="form-control" id="exampleInputName" placeholder="Enter name">
          </div>

          <div class="col-sm-6">
            <label for="exampleInputNumber">Number</label>
            <input type="tel" class="form-control" id="exampleInputNumber" placeholder="Enter phone-number">
          </div>

          <div class="col-sm-12">
            <label for="exampleInputDesc">Description</label>
            <input type="email" class="form-control" id="exampleInputDesc" placeholder="Enter description">
          </div>

        </div>
      </div>
      <div class="row">
        <div class="code-block">
          <highlight language="html">
            {{ codeInput }}
          </highlight>
        </div>
      </div>
      <!-- INPUT ACCEPT AND ERROR-->
      <div class="page-description">
        Отображение ошибки ввода выводится с использованием класса <b>error</b>, правильного - классом <b>accept</b>.
      </div>

      <div class="row">
        <div class="elements-block">
          <div class="col-sm-6">
            <div class="error">
              <label for="exampleInputName">Name</label>
              <input type="text" class="form-control" id="exampleInputName" placeholder="Enter name">
              <span class="fas fa-times"></span>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="accept">
              <label for="exampleInputNumber">Number</label>
              <input type="tel" class="form-control" id="exampleInputNumber" placeholder="Enter phone-number">
              <span class="fas fa-check"></span>
            </div>
          </div>

          <div class="col-sm-6">
            <label for="exampleInputDesc">Description</label>
            <input type="email" class="form-control" id="exampleInputDesc" placeholder="Enter description" disabled>
          </div>

        </div>
      </div>
      <div class="row">
        <div class="code-block">
          <highlight language="html">
            {{ codeInputError }}
          </highlight>
        </div>
      </div>
      <!-- INPUT WITH IMG-->
      <div class="row">
        <div class="elements-block">

          <div class="input-group col-6">
            <input type="text" class="form-control" placeholder="Поиск по наименованию">
            <div class="input-group-append">
              <button class="btn" type="button">
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>

        </div>
      </div>
      <div class="row">
        <div class="code-block">
          <highlight language="html">
            {{ codeInputIcon }}
          </highlight>
        </div>
      </div>

    </container>
  </div>
</template>
<script>
    import hljs from 'highlight.js'
    import Highlight from 'vue-highlight-component'

    export default {
        data() {
            return {
                codeInput: `
         <div class="col-sm-4">
            <label for="exampleInputName">Name</label>
            <input type="text" class="form-control" id="exampleInputName" placeholder="Enter name">
          </div>

          <div class="col-sm-6">
            <label for="exampleInputNumber">Number</label>
            <input type="tel" class="form-control" id="exampleInputNumber" placeholder="Enter phone-number">
          </div>

          <div class="col-sm-12">
            <label for="exampleInputDesc">Description</label>
            <input type="email" class="form-control" id="exampleInputDesc" placeholder="Enter description">
          </div>
                `,
                codeInputError: `
          <div class="col-sm-6">
            <label for="exampleInputName">Name</label>
            <input type="text" class="form-control error" id="exampleInputName" placeholder="Enter name">
          </div>

          <div class="col-sm-6">
            <label for="exampleInputNumber">Number</label>
            <input type="tel" class="form-control accept" id="exampleInputNumber" placeholder="Enter phone-number">
          </div>

          <div class="col-sm-6">
            <label for="exampleInputDesc">Description</label>
            <input type="email" class="form-control" id="exampleInputDesc" placeholder="Enter description" disabled>
          </div>
                `,
                codeInputIcon: `
          <div class="input-group">
            <input type="text" class="form-control col-6" placeholder="Поиск по наименованию">
            <div class="input-group-append">
              <button class="btn" type="button">
                <img src="../assets/search-icon.svg">
              </button>
            </div>
          </div>
                `
            }
        },
        components: {
            Highlight
        }
    }
</script>
