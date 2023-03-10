import {createRouter, createWebHistory} from "vue-router";
import Registration from "@/components/Registration.vue";
import MainPage from "@/components/MainPage.vue";
import Login from "@/components/Login.vue";
import StartPage from "@/components/StartPage.vue";

export default createRouter({
    history: createWebHistory(),
    routes :[
        {path: '/main', name: "main", component: MainPage},
        {path: '/login', name: "login", component: Login},
        {path: '/register', name: "register", component: Registration},
        {path: '/:catchAll(.*)', name: "start", component: StartPage}
    ]
});

