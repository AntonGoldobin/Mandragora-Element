<template>
  <div id="filter">
    <div>
      <!-- our triggering (target) element -->
      <b-btn
            class="btn-filter"
            id="exPopoverReactive1"
            :disabled="popoverShow"
            ref="button">
          <img src="../assets/search-icon.svg">
      </b-btn>
    </div>
    <!-- output from the popover interaction -->
    <b-card title="Returned values:" v-if="input1Return && input2Return">
      <p class="card-text" style="max-width:20rem;">
        Name: <strong>{{ input1Return }}</strong><br>
        Color: <strong>{{ input2Return }}</strong>
      </p>
    </b-card>

    <!-- Our popover title and content render container -->
    <!-- We use placement 'auto' so popover fits in the best spot on viewport -->
    <!-- We specify the same container as the trigger button, so that popover is close to button -->
    <b-popover target="exPopoverReactive1"
               triggers="click"
               :show.sync="popoverShow"
               placement="auto"
               container="filter"
               ref="popover"
               @show="onShow"
               @shown="onShown"
               @hidden="onHidden">
      <template slot="title">
        <b-btn @click="onClose" class="close" aria-label="Close">
          <span class="d-inline-block" aria-hidden="true">&times;</span>
        </b-btn>
        Interactive Content
      </template>
      <b-container>
        <b-row>
          <b-col>
            <b-form-group label="Name" label-for="pop1"
                          :state="input1state" class="mb-1"
                          placeholder="Enter your name"
                          invalid-feedback="This field is required">
              <b-form-input ref="input1" id="pop1" :state="input1state" size="sm" v-model="input1" />
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label="Color" label-for="pop2"
                          :state="input2state" class="mb-1"
                          placeholder="Pick a color"
                          invalid-feedback="This field is required">
              <b-form-select size="sm" id="pop2" :state="input2state" v-model="input2" :options="options" />
            </b-form-group>
          </b-col>
        </b-row>
            <b-btn @click="onOk" size="sm" variant="primary button-right">Применить</b-btn>
      </b-container>
    </b-popover>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input1: '',
      input1state: null,
      input2: '',
      input2state: null,
      options: [{text: '- Choose 1 -', value: ''}, 'Red', 'Green', 'Blue'],
      input1Return: '',
      input2Return: '',
      popoverShow: false
    }
  },
  watch: {
    input1 (val) {
      if (val) {
        this.input1state = true;
      }
    },
    input2 (val) {
      if (val) {
        this.input2state = true;
      }
    }
  },
  methods: {
    onClose () {
      this.popoverShow = false;
    },
    onOk () {
      if (!this.input1) { this.input1state = false; }
      if (!this.input2) { this.input2state = false; }
      if (this.input1 && this.input2) {
        this.onClose();
        /* "Return" our popover "form" results */
        this.input1Return = this.input1;
        this.input2Return = this.input2;
      }
    },
    onShow () {
      /* This is called just before the popover is shown */
      /* Reset our popover "form" variables */
      this.input1 = '';
      this.input2 = '';
      this.input1state = null;
      this.input2state = null;
      this.input1Return = '';
      this.input2Return = '';
    },
    onShown () {
      /* Called just after the popover has been shown */
      /* Transfer focus to the first input */
      this.focusRef(this.$refs.input1);
    },
    onHidden () {
      /* Called just after the popover has finished hiding */
      /* Bring focus back to the button */
      this.focusRef(this.$refs.button);
    },
    focusRef (ref) {
      /* Some references may be a component, functional component, or plain element */
      /* This handles that check before focusing, assuming a focus() method exists */
      /* We do this in a double nextTick to ensure components have updated & popover positioned first */
      this.$nextTick(() => {
        this.$nextTick(() => { (ref.$el || ref).focus() });
      });
    }
  }
}
</script>
