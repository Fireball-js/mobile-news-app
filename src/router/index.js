import Router from 'vue-router'
import Vue from 'vue'
import '../assets/reset.css'
import mainindex from '../components/MainIndex.vue'
import melonvideo from '../components/Melonvideo.vue'
import cinema from '../components/Cinema.vue'
import login from '../components/login.vue'
import usercenter from '../components/userCenter.vue'


Vue.use(Router)
export default new Router({
    routes: [{
            path: '/',
            name: 'mainindex',
            component: mainindex
        },
        {
            path: '/melonvideo',
            name: 'melonvideo',
            component: melonvideo
        },
        {
            path: '/cinema',
            name: 'cinema',
            component: cinema
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/usercenter',
            name: 'usercenter',
            component: usercenter
        },

    ]
})