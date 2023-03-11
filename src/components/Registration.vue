<template>
  <router-link to="/start" style="margin: 0 auto; display: block; text-align: center">Стартовая страница</router-link>
  <br/>
  <div style="margin: 0 auto; display: block; text-align: center">
  <p>Зарегистрируйтесь</p>
  <label for="login">Имя</label>
  <input v-model="username" id="login">
  <br/>
  <label for="password">Пароль</label>
  <input v-model="password" id="password">

  <br>
  <button type="button" @click="signUp">Зарегистрироваться</button>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "Authorization",
  data() {
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    signUp() {
      fetch(this.$root.$data.myurl + 'auth/register', {
        method: 'POST',
        //mode: 'no-cors',
        dataType: "json",
        headers: {'Content-Type': 'application/json','Accept': 'application/json',},
        body: JSON.stringify({username: this.username, password: this.password})
      })
          .then(function (response) {
            response.json().then(function (data) {
              if (data.status == 409){
                alert("The user with this name already exists");
              } else {
                localStorage.setItem("token", data.token);
                router.push("main");
              }
            })
          })
    }
  }
}
</script>

