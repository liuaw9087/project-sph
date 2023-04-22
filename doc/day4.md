复习：
1）商品分类的三级列表由静态变为动态形式【获取服务器的数据：解决代理跨域问题】
2）函数的防抖与节流【面试的频率很高】
3）路由跳转 ：声明式导航（router-link） 、编程式导航
编程式导航解决这个问题：自定义属性



1）开发search模块中的typeNav商品分类菜单(过渡动画效果)

过渡动画:前提组件|元素务必要有v-if|v-show指令才可以进行过渡动画

2) 现在咱们的商品分类三级列表可以进行优化？
在App跟组件当中发请求【根组件mounted】执行一次

3）合并params与query参数


4）开发Home首页当中的listcontainer组件与floor组件
但是这里需要知道一件事：服务器返回的数据（接口）只有商品分类数据，对于listContainer组件与Floor组件数据服务器中没有
mock数据（模拟）：如果你想模拟数据，需要用到一个插件mockjs

使用步骤：
1）在项目中的src文件夹中创建mock文件夹
2）第二部准备json数据（mock文件夹中创建相应的JSON文件）-----格式化一下，别留有空格（跑不起来的）
3）把mock数据需要的图片放置到public文件夹中【public文件夹在打包的时候，会把相应的资源原封不动的打包到dist文件夹中】
4）第四步开始mockServe.js，通过mockjs模块实现
5）mockServe.js文件在入口文件中引入（至少需要执行一次，才能模拟数据）

5)listContainer开发重点？
安装swiper插件：最新版本6，安装的是swiper5版本
cnpm install --save swiper@5
