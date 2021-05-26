import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from "../components/Register";
import LoginPage from "../components/LoginPage";
import UserPage from "../components/UserPage";
import Favorite from "../components/Favorite";

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [

        {
          path: '/',
            name:'/LoginPage',
            component: LoginPage
        },
        {
            path: '/Register',
            component: Register
        },
        {
            path:'/user-page',
            component: UserPage
        },
        {
            path: '/favorites',
            component: Favorite
        }


    ]


})