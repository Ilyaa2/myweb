<template>
  <div>R:</div>
  <div class="btn-group-vertical">

    <div class="form-check">
      <input class="form-check-input" type="radio" name="radio" id="exampleRadios1" value="0" v-model="buttonR">
      <label class="form-check-label" for="radio1">
        0
      </label>
    </div>

    <div class="form-check">
      <input class="form-check-input" type="radio" name="radio" id="radio2" value="0.5" v-model="buttonR">
      <label class="form-check-label" for="radio2">
        0.5
      </label>
    </div>

    <div class="form-check">
      <input class="form-check-input" type="radio" name="radio" id="radio3" value="1" v-model="buttonR">
      <label class="form-check-label" for="radio3">
        1
      </label>
    </div>
  </div>

  <div class="btn-group-vertical">
    <div class="form-check">
      <input class="form-check-input" type="radio" name="radio" id="radio4" value="1.5" v-model="buttonR">
      <label class="form-check-label" for="radio4">
        1.5
      </label>
    </div>

    <div class="form-check">
      <input class="form-check-input" type="radio" name="radio" id="radio5" value="2" v-model="buttonR">
      <label class="form-check-label" for="radio5">
        2
      </label>
    </div>

    <div class="form-check">
      <input class="form-check-input" type="radio" name="radio" id="radio6" value="2.5" v-model="buttonR">
      <label class="form-check-label" for="radio6">
        2.5
      </label>
    </div>
  </div>

  <div class="btn-group-vertical">
    <div class="form-check">
      <input class="form-check-input" type="radio" name="radio" id="radio7" value="3" v-model="buttonR">
      <label class="form-check-label" for="radio7">
        3
      </label>
    </div>


    <div class="form-check">
      <input class="form-check-input" type="radio" name="radio" id="radio8" value="3.5" v-model="buttonR">
      <label class="form-check-label" for="radio8">
        3.5
      </label>
    </div>

    <div class="form-check">
      <input class="form-check-input" type="radio" name="radio" id="radio9" value="4" v-model="buttonR">
      <label class="form-check-label" for="radio9">
        4
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonRcomponents",
  emits: ["changed"],
  data() {
    return {
      buttonR: ""
    }
  },

  watch: {
    buttonR(){
      this.$emit("changed", this.buttonR);
    }
  }

}
</script>

<style scoped>

</style>