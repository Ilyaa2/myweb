<template>
  <router-link to="/start" style="margin: 0 auto; display: block; text-align: center">Стартовая страница</router-link>
  <br/>
  <div style="display: block; margin: 0 auto; text-align: center">
  <p>Залогиньтесь</p>
  <br>
  <label for="login">Имя</label>
  <input v-model="username" id="login">
  <br>
  <label for="password">Пароль</label>
  <input v-model="password" id="password">
  <br>
  <button type="button" @click="signIn">Войти</button>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "Login",
  data(){
    return{
      username:"",
      password:""
    }
  },
  methods: {
    signIn() {
      fetch(this.$root.$data.myurl + 'auth/login', {
        method: 'POST',
        //mode: 'no-cors',
        dataType: "json",
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json',},
        body: JSON.stringify({username: this.username, password: this.password})
      })
          .then(function (response) {
            response.json().then(function (data) {
              if (data.status==403){
                alert("Wrong username or password");
                localStorage.setItem("token", "");
              } else {
                localStorage.setItem("token", data.token);
                router.push("main");
              }
            })
          })
    },


  }
}
</script>

<style scoped>

</style>