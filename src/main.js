import Vue from 'vue'
import VueRouter from 'vue-router'
import {
  Progress,
  Collapse,
  CollapseItem
} from 'element-ui'
import App from './App.vue'
import AV from 'leancloud-storage'
import routes from './router.config.js'
import store from './store.js'

Vue.use(VueRouter);
Vue.use(Progress);
Vue.use(Collapse);
Vue.use(CollapseItem);

var APP_ID = 'vhWbPkYgAIof0ll7XLiWoXpU-gzGzoHsz';
var APP_KEY = '5lDmKMG2sAUuamLMLza37lpL';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
const router = new VueRouter({
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  },
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});