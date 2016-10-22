import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app'

Vue.config.debug = true

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '*',
            component: App
        }
    ]
})

new Vue({
    router: router,
    template : '<router-view class="view"></router-view>'
}).$mount('#app')