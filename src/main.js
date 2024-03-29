import Vue from 'vue';
import App from './App.vue';

import './assets/main.css';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import router from './router/index';

import Vuelidate from 'vuelidate'


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use(Vuelidate)


new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app');
