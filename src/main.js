import Vue from 'vue'
import App from './App.vue'
import router from "./router/routers";
import store from './store/'
import Paginate from 'vuejs-paginate'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'




Vue.config.productionTip = false

Vue.component('paginate', Paginate)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  store,

  render: h => h(App),
}).$mount('#app')
