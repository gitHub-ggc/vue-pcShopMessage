import Vue from 'vue'
import App from './App.vue'
import router from "./router/router"
import elementUi from "element-ui"
import axios from "axios"
// 引入element的css文件
import "element-ui/lib/theme-chalk/index.css"
import "./assets/css/reset.css"
import echarts from "echarts";
Vue.prototype.$echarts = echarts;
Vue.prototype.$http=axios;
axios.defaults.baseURL="http://localhost:8080"

Vue.use(elementUi);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
