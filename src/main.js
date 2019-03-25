import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import 'todomvc-app-css/index.css'
import 'todomvc-common/base.css'

new Vue({
  render: h => h(App),
}).$mount('#app')
