<template>
<!--  <p>Здесь главная страница</p>-->
<!--  <button type="button" @click="sendDot">Отправить</button>-->
<!--  <button type="button" @click="getDot">Получить</button>-->
  <form-component/>
</template>

<script>
import FormComponent from "@/components/form/FormComponent.vue";
export default {
  name: "MainPage",
  components:{
    FormComponent
  }
}
</script>

<style>
  p{
    text-align: center;
  }
</style>