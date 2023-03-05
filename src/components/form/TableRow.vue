<template>
  <tr :class="{green: isColorGreen, red: isColorRed}">
    <td class="x">{{dot.x}}</td>
    <td class="y">{{dot.y}}</td>
    <td class="r">{{dot.r}}</td>
    <td class="verdict">{{dot.verdict}}</td>
  </tr>
</template>

<script>
export default {
  name: "TableRow",
  props: ["dot"],
  data(){
    return{
      isColorRed : false,
      isColorGreen : false
    }
  },

  mounted(){
    if (this.dot.verdict==="Out"){
      this.isColorRed = true;
    } else{
      this.isColorGreen = true;
    }
  }

}
</script>

<style scoped>
  .red{
    background-color: #ef6565;
  }

  .green{
    background-color: #57c057;
  }
</style>