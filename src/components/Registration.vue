<template>
  <p>Зарегистрируйтесь</p>
  <br>
  <label for="login">Имя</label>
  <input v-model="username" id="login">
  <br>
  <label for="password">Пароль</label>
  <input v-model="password" id="password">
  <br>
  <button type="button" @click="signUp">Зарегаться</button>
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
    // headers.append('Authorization', 'Basic ' + base64.encode(username + ":" + password));
    sendDot() {
      fetch(this.$root.$data.myurl + 'dot', {
        method: 'POST', headers: {'Content-Type': 'application/json', "Authorization": 'Bearer_'+localStorage.getItem("token")},
        body: JSON.stringify({x: '2', y: '5', r: '1'})
      })
          .then(function (response) {
            response.json().then(function (data) {
              console.log('data', data);
            })
          })
    },

    getDot() {
      fetch(this.$root.$data.myurl + 'dots', {
        method: 'GET', headers: {'Content-Type': 'application/json', "Authorization": 'Bearer_'+localStorage.getItem("token")},
      })
          .then(function (response) {
            response.json().then(function (data) {
              console.log('data', data);
            })
          })
    },

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
                console.log('data', data);
                localStorage.setItem("token", data.token);
                router.push("main");
              }
            })
          })
    }
  }
}
</script>

