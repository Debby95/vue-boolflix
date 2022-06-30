import Vue from 'vue';
import App from './App.vue';
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import CountryFlag from 'vue-country-flag'
import "flag-icons/css/flag-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


Vue.config.productionTip = false
Vue.component('country-flag', CountryFlag)

new Vue({
  render: h => h(App),
}).$mount('#app')
