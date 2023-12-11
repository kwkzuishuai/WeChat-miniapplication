import Vue from "vue";
import App from "./app.vue";

//设置vue的提示功能关闭
Vue.config.productionTip = false

//生命当前组件的类型
App.mpType = 'app' //声明组件为应用
// 生成应用实例
const app = new Vue(App)
//挂载整个应用
app.$mount()
