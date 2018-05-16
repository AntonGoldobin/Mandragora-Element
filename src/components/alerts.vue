<template>
  <div id="content" class="new-design">
    <container>
      <div class="page-title">
        Alerts
        <div class="page-description">

        </div>
      </div>
      <div class="row">
        <div class="elements-block">
          <div class="alert alert-primary" role="alert">
            <img class="alert-icon" src="../assets/accept-icon.png"/>
            A simple primary alert—check it out!

            <div class="close">
              <img src="../assets/close.png"/>
            </div>
          </div>


          <div class="alert alert-danger" role="alert">
            <img class="alert-icon" src="../assets/error-icon.png"/>
            A simple danger alert—check it out!

            <div class="close">
              <img src="../assets/close.png"/>
            </div>
          </div>

          <div class="alert alert-warning" role="alert">
            <img class="alert-icon" src="../assets/warning-icon.png"/>
            A simple warning alert—check it out!

            <div class="close">
              <img src="../assets/close.png"/>
            </div>
          </div>

        </div>
      </div>
      <div class="row">
        <div class="code-block">
          <highlight language="html">
            {{ codeAlerts }}
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
                codeAlerts: `
      <div class="alert alert-primary" role="alert">
        <img class="alert-icon" src="../assets/accept-icon.png"/>
        A simple primary alert—check it out!

        <div class="close">
          <img src="../assets/close.png"/>
        </div>
      </div>


      <div class="alert alert-danger" role="alert">
        <img class="alert-icon" src="../assets/error-icon.png"/>
        A simple danger alert—check it out!

        <div class="close">
          <img src="../assets/close.png"/>
        </div>
      </div>

      <div class="alert alert-warning" role="alert">
        <img class="alert-icon" src="../assets/warning-icon.png"/>
        A simple warning alert—check it out!

        <div class="close">
          <img src="../assets/close.png"/>
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





