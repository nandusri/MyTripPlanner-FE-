import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from './http';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  created() {
    const userToken = localStorage.getItem('token')
    if (userToken) {
      this.$http.defaults.headers.common['Authorization'] = `token ${userToken}`
    }
  },
  render: h => h(App)
}).$mount("#app");
