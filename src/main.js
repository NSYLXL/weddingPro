import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MyHeader from './components/MyHeader.vue'
Vue.component('my-header',MyHeader)
import MyFooter from './components/MyFooter.vue'
Vue.component('my-footer',MyFooter)
import MyCount from './components/MyCount.vue'
Vue.component('my-count',MyCount)

import axios from 'axios'
axios.defaults.baseURL='http://127.0.0.1:3000';
Vue.prototype.axios=axios;
import echarts from 'echarts';
Vue.prototype.$echarts=echarts;

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import { Carousel} from 'element-ui'
Vue.use(Carousel);

// import BaiduMap from 'vue-baidu-map'
// Vue.use(BaiduMap,{
//   ak:'xjGpyd04I0EMLKoEAC0Vzss8ICFf5HbS'
// })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
