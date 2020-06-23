import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';

Vue.use(VueResource);

import VueRouter from 'vue-router';
import routes from './router/router';

Vue.use(VueRouter);



const router = new VueRouter(routes);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
