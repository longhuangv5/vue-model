import Vue from 'vue'
import Router from 'vue-router'

import main from '../components/main'

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        redirect: '/main'
    }, {
        path: '/main',
        name: 'main',
        component: main
    }]
})
