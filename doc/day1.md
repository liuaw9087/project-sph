1： vue-cli脚手架初始化项目
node + webpack + 淘宝镜像

node_module 放置的是项目依赖
public 文件夹：放的静态页面，需要注意的时，放在public文件夹中的静态资源，webpack进行打包的时候，会原封不动的打包到dist文件夹中。

src文件夹（源代码文件夹）：
    assets文件夹：一般放置的也是静态资源，一般放置的是多个组件，共用的静态资源，需要注意，放置再assets文件夹里面的静态资源，再webpack打包的时候，webpack会把静态资源当作一个模块，打包再js文件夹中。
    components文件夹：放置的是非路由组件。
    App.vue:唯一的根组件，Vue当中的组件(.vue)
    main.js:程序的入口文件，也是整个程序中最先执行的文件。
babel.config.js:配置文件（babel相关）。

package.json文件：认为是项目的身份证，记录项目叫做什么、项目中有哪些依赖、项目怎么运行。

package-lock.json:缓存性文件

README.md：说明性的文件
2.项目的其他配置
---package
    2.1 项目运行起来的时候，让浏览器自动打开。
    "scripts": {
    "serve": "vue-cli-service serve --open --host=localhost",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
  2.2 eslint校验功能关闭
  --- 在根目录下，创建一个vue.config.js文件
  比如：声明变量但没有使用，eslint就会报错
  2.3 src文件夹目录的简写方式，配置别名。 【@代表的是src文件夹，这样的文件过多，找的时候方便】
3. 路由的分析
前端的所谓路由：KV键值对。
vue-router
key：URL（地址栏中的路径）
value：相应的路由组件

注意：项目上中下结构。
路由组件：
Home首页的路由组件、search路由组件、login登录的路由、Register注册路由
非路由组件：
Header【首页、搜索页】、
Footer【在首页、搜索页】，但是在登录页面是没有的
4、完成非路由组件Header与Footer业务
在咱们的项目中，不再以html和css 为主，主要搞业务、逻辑
在开发项目的时：
1、书写静态页面（HTML+CSS）
2、拆分组件
3、获取服务器的数据动态展示
4、完成相应的动态业务逻辑

注意1：创建组建的时候，组件结构+结构的样式+图片资源
注意2：咱们的项目采用的 是less样式，需要通过less、less-loader进行处理less，把less样式变成css样式，浏览器才可以识别
注意3：如果想让组件识别less样式，需要在style标签身上加上lang属性
4.1 使用组件的步骤
-创建或者定义组件
-引入
-注册
-使用
5.路由组件的搭建
Vue-router
在上面分析的时候，路由组件应该有四个：Home、Search、Login、Register
-components文件夹：放置非路由组件
-pages|views文件夹：经常放置路由组件
5.1配置路由
项目当中配置的路由一般放置在router文件夹中
5.2 路由组件与非路由组件的区别
1：路由组件一般放置在pages|views文件夹，非路由组件一般放置在components文件夹中
2：路由组件一般需要在router文件夹中进行注册（使用的即为组件的名字），非路由组件在使用的时候，一般都是以标签的形式使用，
3:注册完路由，不管是路由组件、还是非路由组件身上都有$route、$router属性

$route:一般是获取路由信息【路由、query、params】
$router:一般是进行编程式导航进行路由跳转【push|replace】
5.3 路由的跳转
路由的跳转有两种形式：
声明式导航router-link,可以进行路由的跳转
编程式导航push|replace：可以进行路由跳转

编程式导航：声明式导航能做的，声明式导航都能做
但是编程式导航除了可以进行路由跳转，还可以做一些其他的业务逻辑、

6 Footer组件的显示与隐藏
显示或者是隐藏组件 v-if|v-show
Footer组件：在Home、Search显示Footer组件
6.1 可以根据组件身上的$route获取当前路由的信息，通过路由的路径判断Footer显示与隐藏。
6.2 配置路由的时候，可以给路由添加元信息【meta】，路由需要的是配置对象，它的key不能瞎写，胡写乱写。

8）路由传参
8.1 路由跳转有几种方式？
比如：A->B
声明式导航：router-link （务必有to属性）,可以实现路由跳转
编程式导航：利用的是组件实例的$router.push|replace方法，可以实现路由的跳转。（可以书写一些自己的业务）
8.2：路由传参，参数有几种写法？
params参数：属于路径当中的一部分，需要注意，在配置路由的时候需要占位。
query参数：不属于路径中的一部分，类似于ajax中的queryString。 /home?k = v & kv = ，不需要占位

路由传参的相关面试题：
1：路由传递参数（对象写法）path是否可以结合params参数一起用？
2：如何指定params参数可传可不传？
比如：配置路由的时候params参数已经占位了，但是路由跳转的时候就不传递，路径就会出现问题
3：params参数可以传递也可以不传递，但是如果传递是空串，如何解决？
4：路由组件能不能传递props数据？
