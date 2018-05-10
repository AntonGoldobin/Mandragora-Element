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
            }
        },
        components: {
            Highlight
        }
    }
</script>
