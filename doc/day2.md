1:编程式路由跳转到当前路由(参数不变),多次执行会抛出NavigationDuplicate警告错误?
-- 路由跳转有两种形式 : 声明式导航 编程式导航
-- 声明式导航没有这类问题,因为vue-router底层已经处理好了
1.1 为什么编程式导航进行路由跳转时,就有这种错误?
最新的vue-router 引入了 Promise
1.2 通过给push方法传递相应的成功或失败的回调函数,可以捕获到当前错误,可以解决.

1.3 通过底部的代码,可以实现解决错误.
this.$router.push({name:"search",params:{keyword:this.keyword},query:{k:this.keyword.toUpperCase()}},()=>{},()=>{});
这种写法,治标不治本,将来在别的组件当中push|replace,编程式导航还是有类似错误.
this是当前组件实例
this.$router属性:当前的这个属性,属性值Vue-router类的一个实例,当注册路由的时候,给组件实例添加的$router|$router属性
push:VueRouter类的一个实例

function VueRouter(){

}

VueRouter.property.push = function(){

}

let $router = new VueRouter();

$router.push(xxx);

2:Home模块组件拆分
-- 先把相应的静态页面完成
-- 拆分出静态组件
-- 获取服务器的数据进行展示

3:三级联动组件完成
-- 用于三级联动，在Home、Search、Detail，把三级联动注册为全局组件。
好处：只需要注册一次，就可以在项目任意的地方使用
4:完成其余静态组件
HTML + CSS + 图片资源  --- 信息【结构、样式、图片资源】
5：POSTMAN测试接口
--- 经过postman工具测试，接口是没有问题的
--- 如果服务器返回数据code字段200，代表服务器返回数据成功
--- 整个项目，接口的前缀 都有/api前缀
6：axios二次封装
XMLRequest、fetch、jQ、axios
6.1 为什么需要二次封装axios？
请求拦截器、响应拦截器：请求拦截器，可以在发请求之前处理一些业务、响应拦截器当服务器数据返回以后，可以处理一些事情

6.2 在项目当中，经常API文件夹【axios】
request.js

6.3 axios基础不好，可以参考github或npm文档

7:接口统一管理
项目很小：完全可以在组件的生命周期函数中发请求
项目大：axios.get('xxx')

7.1 跨域问题
什么是跨域：协议、域名、端口号不同请求，称之为跨域
http://localhost:8080/#/home  --- 前端项目的本地服务器
http://gmall-h5-api.atguigu.cn  --- 后台服务器


8:nprogress进度条的使用
start:进度条开始
done:进度条结束
进度条的颜色可以修改的，当然需要修改人家的样式


9：vuex状态管理库
9.1 vuex是什么？

vuex是官方提供的一个插件，状态管理库，集中式管理项目中组件共用的数据。

切记，并不是全部的项目都需要vuex，如果项目很小，完全不需要vuex，如果项目很大、组件很多、数据很多，数据维护很费劲，Vuex

state
mutations
actions
getters
modules

9.2 vuex的基本使用


9.3 vuex实现模块式开发
如果项目过大,组件过多,接口也很多,数据也很多,可以让Vuex实现模块式开发


10:实现TypeNav三级联动展示数据的业务
