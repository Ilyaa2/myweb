<template>
  <header>
<!--    <h1>efeew</h1>-->
    <router-view></router-view>
  </header>
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