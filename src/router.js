import {createRouter, createWebHistory} from "vue-router";
import Authorization from "@/components/Authorization.vue";
import MainPage from "@/components/MainPage.vue";

export default createRouter({
    history: createWebHistory(),
    routes :[
        {path: '/main', component: MainPage},
        {path: '/', component: Authorization}
    ]
});