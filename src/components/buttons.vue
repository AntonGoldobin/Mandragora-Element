<template>
  <div id="content" class="new-design">
    <container>
      <div class="page-title">
        Buttons

        <div class="page-description">
          В ките используются только 2 вида основных кнопок - более очевидный для действия элемент, залитый <b>Primary</b> цветом, и дополнительный - <b>Outline</b>
        </div>
      </div>


      <div class="row">
        <div class="elements-block">
          <button type="button" class="btn btn-primary">Primary</button>
          <button type="button" class="btn btn-primary" disabled>Disabled</button>
        </div>
      </div>
      <div class="row">
        <div class="code-block">
          <highlight language="html">
            {{ codeButton }}
          </highlight>
        </div>
      </div>

      <div class="row">
        <div class="elements-block">
          <button type="button" class="btn btn-primary"><i class="fas fa-plus"></i>Primary</button>
          <button type="button" class="btn btn-primary" disabled><i class="fas fa-plus"></i>Disabled</button>
        </div>
      </div>
      <div class="row">
        <div class="code-block">
          <highlight language="html">
            {{ codeButtonIcon }}
          </highlight>
        </div>
      </div>

      <div class="row">
        <div class="elements-block">
          <button type="button" class="btn btn-outline-secondary">Secondary</button>
          <button type="button" class="btn btn-outline-secondary" disabled>Disabled</button>
        </div>
      </div>
      <div class="row">
        <div class="code-block">
          <highlight language="html">
            {{ codeButtonOutline }}
          </highlight>
        </div>
      </div>

      <div class="row">
        <div class="elements-block">
          <button type="button" class="btn btn-outline-secondary"><i class="far fa-clone"></i>Secondary</button>
          <button type="button" class="btn btn-outline-secondary" disabled><i class="far fa-clone"></i>Disabled</button>
        </div>
      </div>
      <div class="row">
        <div class="code-block">
          <highlight language="html">
            {{ codeButtonOutlineIcon }}
          </highlight>
        </div>
      </div>

    <div class="page-title mt-5">
      Text buttons
      <div class="page-description">

      </div>
    </div>

    <div class="row">
      <div class="elements-block">
        <button type="button" class="btn btn-link">Active</button>
        <button type="button" class="btn btn-link" disabled>Disabled</button>
      </div>
    </div>
    <div class="row">
      <div class="code-block">
        <highlight language="html">
          {{ codeTextButton }}
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
              codeButton: `
      <button type="button" class="btn btn-primary">Primary</button>

      <button type="button" class="btn btn-primary" disabled>Disabled</button>`,
              codeButtonIcon: `
      <button type="button" class="btn btn-primary"><img src="../assets/plus-icon.png">Primary</button>

      <button type="button" class="btn btn-primary" disabled><img src="../assets/plus-icon.png">Disabled</button>`,
              codeButtonOutline: `
      <button type="button" class="btn btn-outline-secondary">Secondary</button>

      <button type="button" class="btn btn-outline-secondary" disabled>Disabled</button>`,
              codeButtonOutlineIcon: `
      <button type="button" class="btn btn-outline-secondary"><img src="../assets/copy-icon.png">Secondary</button>

      <button type="button" class="btn btn-outline-secondary" disabled><img src="../assets/copy-icon.png" class="svg">Disabled</button>`,
              codeTextButton: `
     <button type="button" class="btn btn-link">Active</button>

     <button type="button" class="btn btn-link" disabled>Disabled</button>`
          }
      },
      components: {
          Highlight
      }
  }
</script>





