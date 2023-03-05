<template>
  <div>X:</div>
    <div class="btn-group-vertical">

      <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio1" autocomplete="off" v-model="buttonX" value="-2">
      <label class="btn btn-outline-danger" for="vbtn-radio1">-2</label>
      <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio2" autocomplete="off" v-model="buttonX" value="-1.5">
      <label class="btn btn-outline-danger" for="vbtn-radio2">-1.5</label>
      <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio3" autocomplete="off" v-model="buttonX" value="-1">
      <label class="btn btn-outline-danger" for="vbtn-radio3">-1</label>
    </div>
    <div class="btn-group-vertical">
      <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio4" autocomplete="off" v-model="buttonX" value="-0.5">
      <label class="btn btn-outline-danger" for="vbtn-radio4">-0.5</label>
      <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio5" autocomplete="off" v-model="buttonX" value="0">
      <label class="btn btn-outline-danger" for="vbtn-radio5">0</label>
      <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio6" autocomplete="off" v-model="buttonX" value="0.5">
      <label class="btn btn-outline-danger" for="vbtn-radio6">0.5</label>
    </div>
    <div class="btn-group-vertical">
      <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio7" autocomplete="off" v-model="buttonX" value="1">
      <label class="btn btn-outline-danger" for="vbtn-radio7">1</label>
      <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio8" autocomplete="off" v-model="buttonX" value="1.5">
      <label class="btn btn-outline-danger" for="vbtn-radio8">1.5</label>
      <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio9" autocomplete="off" v-model="buttonX" value="2">
      <label class="btn btn-outline-danger" for="vbtn-radio9">2</label>
    </div>
</template>

<script>
export default {
  name: "ButtonXcomponents",
  data() {
    return {
      buttonX: ""
    }
  }
}
</script>

<style scoped>
div.btn-group-vertical{
  height: 100px;
}
</style>