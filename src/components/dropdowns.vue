<template>
  <div id="content" class="new-design">
    <container>

      <div class="page-title">
        Droplists
        <div class="page-description">
          Выпадающие списки построены на сторонней библиотеке <a href="https://popper.js.org/">Popper.js</a>, которая
          обеспечивает динамическое позиционирование и обнаружение в виде виджета. Обязательно включите
          <a href="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js">popper.min.js</a>
          перед JavaScript Bootstrap или используйте bootstrap.bundle.min.js / bootstrap.bundle.js, который содержит
          Popper.js. Popper.js не используется для размещения выпадающих списков в navbars.
          Если вы строите JavaScript из исходного кода, для этого требуется <a href="https://getbootstrap.com/docs/4.1/getting-started/javascript/#util">util.js</a>.
        </div>
      </div>

      <div class="row">
        <div class="elements-block">

          <div class="dropdown">
            <img src="../assets/menu-icon.png" class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </div>

        </div>
      </div>
      <div class="row">
        <div class="code-block">
          <highlight language="html">
            {{ codeDropdown }}
          </highlight>
        </div>
      </div>

    </container>
  </div>
</template>
<script>
    import Multiselect from 'vue-multiselect'
    import hljs from 'highlight.js'
    import Highlight from 'vue-highlight-component'

    export default {
        components: {
            Multiselect, Highlight
        },
        data () {
            return {
                codeDropdown:`
      <div class="dropdown">
        <img src="../assets/menu-icon.png" class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </div>
                `
            }
        }
    }

</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
