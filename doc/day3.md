1)完成一级分类动态添加背景颜色
第一种解决方案：采用样式完成（可以的）
第二种解决方案：通过JS完成
2)通过JS控制二三级商品分类的显示与隐藏
最开始的时候是通过css样式display:block|none显示与隐藏二三级商品分类
3)演示卡顿现象


防抖：debounce
节流：throttle

5）完成三级联动节流的操作

6）三级联动组件的路由跳转与传递参数
三级联动用户是可以点击的：一级分类、二级分类、三级分类，当你点击的时候，会从home模块跳转到search模块
一级会把用户选中的产品（产品的名字、产品的Id）在路由跳转的时候，进行传递。

路由跳转：
声明式导航：router-link
编程式导航：push|replace 

三级联动：如果使用声明式导航router-link，可以实现路由的跳转与传递参数
但是需要注意， 出现卡顿现象

router-link ：可以是一个组件 ，当服务器的数据返回之后，循环出很多的router-link组件【创建组建的实例、】1000+

创建组件实例的时候，一瞬间创建1000+很耗内存的，因此出现了卡顿的现象。

7)三级联动的路由跳转与传递参数

<!-- 存在的一些问题:事件委派,是把全部的子节点 -->
<!-- 点击a标签的时候,才会进行路由跳转[怎么能确定点击的一定是a标签] -->
<!-- 存在的另外一个问题:即使你能确定点击的是a标签,如何区分是一级二级三级分类的a标签 -->
<!-- 第一个问题:把子节点当中a标签 ,我加上自定义属性data-categoryName,其余的子节点是没有的 -->