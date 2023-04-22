import Vue from 'vue'
import App from './App.vue'
// 三级联动组件--全局组件
import TypeNav from '@/components/TypeNav'
import Carsousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
// 第一个参数：全局组件的名字 第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carsousel.name, Carsousel);
Vue.component(Pagination.name, Pagination);
Vue.config.productionTip = false
// 引入路由
import router from '@/router';
// 引入仓库
import store from '@/store';
// 引入mockServe.js ----mock数据
import '@/mock/mockServe'

// 测试
/* import { reqCategoryList } from '@/api';
// reqCategoryList(); */
// 引入swiper样式
import "swiper/css/swiper.css"
new Vue({
  render: h => h(App),
  // 注册全局事件总线 $bus配置
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  // 注册路由：底下的写法是KV一致，省略V
  // 注册路由信息：在这里书写router的时候，组件身上都拥有$route,$router属性
  router,
  // 注册仓库:组件实例的身上会多一个属性$store属性
  store
}).$mount('#app')
