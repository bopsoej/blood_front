import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'
import Axios from 'axios'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css';

// Vue.use(Axios)
Vue.use(ElementUi)
Vue.prototype.$http=Axios;
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
