// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false;
Vue.prototype.centerNotice = new Vue();


Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: './static/imgs/error.png',
    loading: './static/imgs/loading.gif',
    attempt: 1
});

/* eslint-disable no-new */
window.appVue = new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
});

