<template>
  <table id="table_dots" class="table table-bordered">
    <thead>
    <tr>
      <td>X</td>
      <td>Y</td>
      <td>R</td>
      <td>Result</td>
    </tr>
    </thead>
    <tbody>
    <table-row v-for="dot in dots" :key="dot.id" :dot="dot"/>
    </tbody>
  </table>
</template>

<script>
import TableRow from "@/components/form/TableRow.vue";

export default {
  name: "TableComponent",
  props: ["dots"],
  components: {
    TableRow
  },
}
</script>

<style scoped>
#table_dots {
  width: 500px;
  margin: 0 auto;
  margin-top: 70px;
}
</style>