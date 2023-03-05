<template>
  <p>Авторизируйтесь</p>
<!--  тут должно  быть два элемента один из которых авторизация, другой регистрация-->
  <button type="button" @click="sendDot">Оправить пост запрос</button>
  <button type="button" @click="getDot">Запрос на получение точек</button>
  <button type="button" @click="signIn">Sign in</button>
</template>

<script>
export default {
  name: "Authorization",
  methods: {
    // headers.append('Authorization', 'Basic ' + base64.encode(username + ":" + password));
    sendDot() {
      fetch(this.$root.$data.myurl + 'dot', {
        method: 'POST', headers: {'Content-Type': 'application/json', "Authorization": 'Basic dXNlcjp1c2Vy'},
        body: JSON.stringify({x: '2', y: '5', r: '1'})
      })
          .then(function (response) {
            response.json().then(function (data) {
              console.log('data', data);
            })
          })
    },
    getDot() {
      fetch(this.$root.$data.myurl + 'dot', {
        method: 'GET', headers: {'Content-Type': 'application/json', "Authorization": 'Basic dXNlcjp1c2Vy'},
      })
          .then(function (response) {
            response.json().then(function (data) {
              console.log('data', data);
            })
          })
    }
  }
}
</script>

<style scoped>

</style>