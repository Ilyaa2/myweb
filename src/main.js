import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";


import 'bootstrap/dist/css/bootstrap.css'


const app = createApp(App);
app.use(router);
app.mount('#app');

function check(){
    return (localStorage.getItem("token") != "" && localStorage.getItem("token") != undefined);
}
router.beforeEach((to, from, next) => {
    if (to.name=== "main"){
        if (check()){ next();} else {alert("Данные не введены"); router.back()}
    } else if (to.name === "start"){
        localStorage.setItem("token","");
        next();
    } else if (to.name==="register" || to.name==="login"){
        localStorage.setItem("token","");
        next();
    }
});





import 'bootstrap/dist/js/bootstrap'


