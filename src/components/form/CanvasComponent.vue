<template>
  <canvas ref="canvas" id="canvas" @click="trySendDotToParent($event)"
          style="border:1px solid #000000; display: block; margin: 0 auto;" width="500" height="500"/>

<!--  <button type="button" @click="drawDot({id:'3', x:'2', y:'3',r:'3',verdict:'In'})"-->
<!--  style="display:block; margin: 0 auto">НАжать</button>-->
</template>

<script>
export default {
  name: "CanvasComponent",
  emits: ["needR",'validateR', "sendDotToParent"],
  data(){
    return{
      canvas: "",
      rValue:""
    }
  },
  methods:{
    drawCanvas: function(){
      //let canvas = document.getElementById('canvas');
      //this.canvas = this.$refs.canvas;

      //Эти присваивания заставляют затереть, все что было нарисовано на канвасе, потому что состояние обновилось, а значит обновляется элемент
      this.canvas.height = 500;
      this.canvas.width = 500;

      let con = this.canvas.getContext('2d');
      con.beginPath();
      con.clearRect(0, 0, this.canvas.width, this.canvas.height);
      //con.fillStyle = "rgb(255, 255, 255)";
      //con.fillRect(0, 0, canvas.width, canvas.height);
      con.fillStyle = '#3399ff';
      con.lineWidth = 2.0;

      con.beginPath();
      con.moveTo(250, 15);
      con.lineTo(250, 485);
      con.stroke();

      con.beginPath();
      con.moveTo(15, 250);
      con.lineTo(485, 250);
      con.stroke();


      con.beginPath();
      con.arc(250, 250, 200, -Math.PI/2, 0);
      con.lineTo(250, 250);
      con.lineTo(250, 15);
      con.fill();
      con.stroke();

      con.beginPath();
      con.moveTo(150, 250);
      con.lineTo(250, 250);
      con.lineTo(250, 250 + 100);
      con.fill();
      con.stroke();


      con.beginPath();
      con.fillRect(251, 251, 99, 200); // (x,y) - центр, потом (width,height)
      con.stroke();

      //север
      con.moveTo(240, 50);
      con.lineTo(260, 50);
      con.fillStyle = 'black';
      con.font = "30px Verdana";
      con.fillText("R", 260, 50)

      //восток
      con.moveTo(450, 240);
      con.lineTo(450, 260);
      con.fillText("R", 455, 250)

      //юг
      con.moveTo(240, 450);
      con.lineTo(260, 450);
      con.fillText("-R", 270, 460)

      //запад
      con.moveTo(50, 240);
      con.lineTo(50, 260);
      con.fillText("-R", 15, 250)

      con.stroke();
    },
    //1ый эмит родительскому элементу потом надо будет пробросить ошибку, мол, чтоб пользователь понимал, что нужно ввести радиус прежде чем кликать
    //2ой эмит. Родителю пробрасываем, мол на график кликнули, изволь в переменную в дате записать значение через this.$refs.canvas.r
    //а в этом методе мы смотрим на r и валидируем.
    trySendDotToParent(e){
      this.$emit('needR');
      if (this.rValue == null || this.rValue ===""){
        this.$emit('validateR');
      } else{
        const arr_x = [ -2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2];

        let x = (e.offsetX - 250) / 200 * this.rValue;
        let y = -e.offsetY + 250;

        let Realy = y / 200 * this.rValue;
        let Realx;
        let minDiff = Infinity;
        for (let i = 0; i < arr_x.length; i++) {
          if (Math.abs(arr_x[i] - x) < minDiff) {
            minDiff = Math.abs(arr_x[i] - x);
            Realx = arr_x[i];
          }
        }
        this.$emit("sendDotToParent", {
          x: String(Realx),
          y: String(Realy),
          r: String(this.rValue)
        });
      }
    },
    drawDot(dot){
      //console.log(dot);
      let con = this.canvas.getContext('2d');
      if (dot.verdict === "In") {
        con.fillStyle = '#008000';
      } else {
        con.fillStyle = '#900';
      }

      con.beginPath();
      if (dot.r === 0){
        con.arc(250, 250,
            4, 0, 2 * Math.PI)
      } else {
        con.arc(dot.x / dot.r * 200 + 250,
            -(dot.y / dot.r) * 200 + 250,
            4, 0, 2 * Math.PI)
      }
      con.fill();
      con.stroke();
    }
  },
  mounted() {
    this.canvas = this.$refs.canvas;
    this.drawCanvas();
  }
}
</script>

<style scoped>
  #canvas{
    margin-bottom: 500px;
  }
</style>