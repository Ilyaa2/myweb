<template>
  <router-link to="/start" style="margin: 0 auto; display: block; text-align: center">Разлогиниться</router-link>
  <canvas-component ref="canvas" @needR="this.$refs.canvas.rValue = this.rValue" @validateR="validateR"
                    @send-dot-to-parent="sendDot"/>
    <div id="error"></div>
  <div class="d-flex justify-content-center align-self-center">
    <button-xcomponents ref="x_comp"/>

    <button type="button" class="btn btn-success" @click="trySubmit" id="submit">Отправить</button>

    <button-rcomponents ref="r_comp" @changed="rChanged"/>
  </div>

  <!--  <input type="text" class="form-control" placeholder="Enter Y" v-model="yText" id="y">-->
  <text-ycomponent id="y" ref="y_comp"/>

  <!--  <button type="button" class="btn btn-warning" @click="getDots" style="margin: 0 auto; display: block">Получить точки</button>-->
  <!--  <button type="button" class="btn btn-warning" @click="clearCanvas" style="margin: 0 auto; display: block">Очистить канвас</button>-->
  <table-component :dots="dots"/>
</template>


<script>
import ButtonXcomponents from "@/components/form/ButtonXcomponents.vue";
import ButtonRcomponents from "@/components/form/ButtonRcomponents.vue";
import CanvasComponent from "@/components/form/CanvasComponent.vue";
import TableComponent from "@/components/form/TableComponent.vue";
import data from "bootstrap/js/src/dom/data";
import TextYcomponent from "@/components/form/TextYcomponent.vue";
import router from "@/router";

export default {
  name: "FormComponent",
  components: {TextYcomponent, ButtonRcomponents, ButtonXcomponents, CanvasComponent, TableComponent},
  data() {
    return {
      //yText: "",
      dots: [],
      rValue: "",
    }
  },
  beforeRouteLeave() {
    localStorage.setItem("token", "");
  },
  methods: {
    trySubmit: function () {
      //валидация

      this.sendDot(this.collectData());
    },

    //метод, который на вход получает message, который он должен заинлайнить в #error
    //чтоб его мог использовать как канвас, так и этот компонент

    sendDot(transferObject) {
      let dots = this.dots;
      let canvas = this.$refs.canvas;

      let x_comp = this.$refs.x_comp;
      let y_comp = this.$refs.y_comp;
      fetch(this.$root.$data.myurl + 'dot', {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer_' + localStorage.getItem("token")},
        body: JSON.stringify(
            transferObject
        )
      }).then(res => {
            res.json().then(function (data) {
              //console.log("data", data, data.length);
              dots.push(data);
              canvas.drawDot(data);
              x_comp.buttonX = "";
              y_comp.yText = "";
            })
      }).catch(e => {
        alert("Incorrect or expired JWT token");
        router.push("login");
      })
    },

    collectData() {
      return {
        x: String(this.$refs.x_comp.buttonX),
        y: String(this.$refs.y_comp.yText),
        r: String(this.$refs.r_comp.buttonR)
      };
    },
    /*
    getDots() {
      let dots = this.dots;
      fetch(this.$root.$data.myurl + 'dot', {
            method: "GET",
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer_' + localStorage.getItem("token")
            }
          }
      ).then(function (responce) {
        console.log(responce.status);
        responce.json().then(function (data) {
          dots.splice(0);
          data.forEach(item => dots.push(item));
        })
      })
    },

     */
    getDots() {
      let dots = this.dots;
      fetch(this.$root.$data.myurl + 'dot', {
            method: "GET",
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer_' + localStorage.getItem("token")
            }
          }
      ).then((res) => {
        res.json().then(function (data) {
          dots.splice(0);
          data.forEach(item => dots.push(item));
        })
      }).catch((e) => {
        alert("Incorrect or expired JWT token");
        router.push("login");
      })
    },

    rChanged(value) {
      this.rValue = value;
      let canvas = this.$refs.canvas;
      fetch(this.$root.$data.myurl + 'dot/' + value, {
        method: "GET",
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer_' + localStorage.getItem("token")
        }
      }).then(res => {
        res.json().then(function (data) {
          canvas.drawCanvas();
          data.forEach(item => canvas.drawDot(item));
        })
      }).catch((e) => {
        alert("Incorrect or expired JWT token");
        router.push("login");
      })
    },
    validateR() {
      alert("please enter r");
    }
  },
  mounted() {
    this.getDots();
  }
}
</script>

<style scoped>
#y {
  width: 180px;
  height: 50px;
  margin: 0 auto;
  margin-top: 20px;
}


#error {

  width: 500px;
  margin: 0 auto;
  /*margin: 20px;*/
  padding: 5px;
  text-align: center;
  /*border: #222222 dashed;*/
}

#submit {
  margin: 0 40px;
  /*height: 50px;*/
}

</style>