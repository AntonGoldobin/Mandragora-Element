<template>
  <div id="content" class="new-design">
    <container>
      <div class="page-title">
        Checkboxes

        <div class="page-description">

        </div>
      </div>


      <div class="row">
        <div class="elements-block">
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="customCheck1" >
            <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
          </div>

          <div class="custom-control custom-checkbox mt-3">
            <input type="checkbox" class="custom-control-input" id="customCheck2" disabled>
            <label class="custom-control-label" for="customCheck2">Disabled checkbox</label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="code-block">
          <highlight language="html">
            {{ codeCheckbox }}
          </highlight>
        </div>
      </div>

      <div class="page-title mt-5">
        Toggle switch

        <div class="page-description">

        </div>
      </div>


      <div class="row">
        <div class="elements-block">

          <label class="switch">
            <input type="checkbox">
            <span class="slider round"></span>
            <a>Active</a>
          </label>

          <label class="switch ml-5">
            <input type="checkbox" disabled>
            <span class="slider round"></span>
            <a>Disabled</a>
          </label>


        </div>
      </div>
      <div class="row">
        <div class="code-block">
          <highlight language="html">
            {{ codeSwitch }}
          </highlight>
        </div>
      </div>

      <div class="page-title mt-5">
        Radio-buttons
        <div class="page-description">
        </div>
      </div>


      <div class="row">
        <div class="elements-block">

          <input type="radio" class="radio" id="radio-1" name="radio" required/>
          <label for="radio-1">First radio</label>
          <input type="radio" class="radio" id="radio-2" name="radio" required/>
          <label for="radio-2" class="ml-3">Seсond Radio</label>
          <input type="radio" class="radio" id="radio-3" name="radio" required disabled/>
          <label for="radio-3" class="ml-3">Disabled Radio</label>

        </div>
      </div>
      <div class="row">
        <div class="code-block">
          <highlight language="html">
            {{ codeRadio }}
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
                codeCheckbox: `
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="customCheck1" >
        <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
      </div>

      <div class="custom-control custom-checkbox mt-3">
        <input type="checkbox" class="custom-control-input" id="customCheck2" disabled>
        <label class="custom-control-label" for="customCheck2">Disabled checkbox</label>
      </div>
            `,
                codeSwitch: `
      <label class="switch">
        <input type="checkbox">
        <span class="slider round"></span>
        <a>Active</a>
      </label>

      <label class="switch ml-5">
        <input type="checkbox" disabled>
        <span class="slider round"></span>
        <a>Disabled</a>
      </label>
                `,
                codeRadio: `
      <input type="radio" class="radio" id="radio-1" name="radio" required/>
      <label for="radio-1">First radio</label>

      <input type="radio" class="radio" id="radio-2" name="radio" required/>
      <label for="radio-2" class="ml-3">Second Radio</label>
            `

            }
        },
        components: {
            Highlight
        }
    }
</script>





