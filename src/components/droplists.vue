<template>
  <div id="content" class="new-design">
    <container>

      <div class="page-title">
        Multiselect (Vue.js)

        <div class="page-description">

        </div>
      </div>


      <div class="row">
        <div class="elements-block">

          <label class="typo__label">Single select / dropdown</label>
          <multiselect v-model="value" deselect-label="Can't remove this value" track-by="name" label="name" placeholder="Select one" :options="options" :searchable="false" :allow-empty="false">
            <template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.name }}</strong> is written in<strong>  {{ option.language }}</strong></template>
          </multiselect>

        </div>
      </div>
      <div class="row">
        <div class="code-block">
          <highlight language="html">
            {{ codeMultiselect }}
          </highlight>
          <highlight language="javascript">
            {{ codeMultiselectJS }}
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
                value: null,
                options: [
                    { name: 'Vue.js', language: 'JavaScript' },
                    { name: 'Rails', language: 'Ruby' },
                    { name: 'Sinatra', language: 'Ruby' },
                    { name: 'Laravel', language: 'PHP', $isDisabled: true },
                    { name: 'Phoenix', language: 'Elixir' }
                ],
                codeMultiselectJS :`
      data () {
            return {
                value: null,
                options: [
                    { name: 'Vue.js', language: 'JavaScript' },
                    { name: 'Rails', language: 'Ruby' },
                    { name: 'Sinatra', language: 'Ruby' },
                    { name: 'Laravel', language: 'PHP', $isDisabled: true },
                    { name: 'Phoenix', language: 'Elixir' }
                ]
                }
              }
                `,
                codeMultiselect: `
      <label class="typo__label">Single select / dropdown</label>
      <multiselect v-model="value" deselect-label="Can't remove this value" track-by="name" label="name" placeholder="Select one" :options="options" :searchable="false" :allow-empty="false">
        <template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.name }}</strong> is written in<strong>  {{ option.language }}</strong></template>
      </multiselect>
`
            }
        }
    }

</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
