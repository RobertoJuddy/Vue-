import Vue from 'vue'
import App from './App'

import store from './store'
import router from './router'
import TopHeader from './component/TopHeader/TopHeader.vue'
import Split from './component/Split/Split'
import { Button } from 'mint-ui';

Vue.component(Button.name, Button);

Vue.component('TopHeader', TopHeader)

Vue.component('Split', Split)

import './mock/MockServe'

new Vue({
  el:'#app',
  render:h => h(App),
  router,
  store
})

