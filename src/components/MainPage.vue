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
  },
  methods:{
    sendDot(){
      fetch(this.$root.$data.myurl + 'dot', {method: 'POST', headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({x: '3', y:'5',r:'1'})})
          .then(function (response) {
            response.json().then(function (data) {
              console.log('data', data);
            })
          })
    },
    getDot(){
        fetch(this.$root.$data.myurl + 'dot').then(function(responce){
          responce.json().then(function (data){
            console.log("data",data);
          })
        })
    }
  }
}
</script>

<style>
  p{
    text-align: center;
  }
</style>