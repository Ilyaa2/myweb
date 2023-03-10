<template>
<!--    <h1>efeew</h1>-->
    <router-view></router-view>
</template>


<script>
export default{
  name: "App",
  data(){
    return{
      myurl:"http://localhost:8080/"
    }
  }
}
</script>