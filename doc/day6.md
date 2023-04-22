复习:
1)search模块需要的服务器数据已经请求到了,而且存储于vuex仓库当中,而且有一些数组的数据 已经通过getters进行简化
切记:getters简化数据而生
2)商品列表 平台售卖属性已经动态数据 来自于服务器的数据

1)动态开发面包屑中的分类名
变成是导航路由跳转 [自己条自己]
2)动态开发面包屑中的关键字清除以后,需要让兄弟组件Header组件中的关键字清除
props:父子
自定义事件:子父
vuex:万能
插槽:父子
pubsub-js:万能(少)
$bus:全局事件总线

![image-20230223212945598](https://liuaw-1300876371.cos.ap-nanjing.myqcloud.com/typora-img/image-20230223212945598.png)

![image-20230223213012101](https://liuaw-1300876371.cos.ap-nanjing.myqcloud.com/typora-img/image-20230223213012101.png)

![image-20230223213016919](https://liuaw-1300876371.cos.ap-nanjing.myqcloud.com/typora-img/image-20230223213016919.png)

![image-20230223213020368](https://liuaw-1300876371.cos.ap-nanjing.myqcloud.com/typora-img/image-20230223213020368.png)


3)动态点击品牌信息,传递给父组件,父组件通过查询条件查询商品
用到子传父,这里使用自定义事件

![image-20230223220854916](https://liuaw-1300876371.cos.ap-nanjing.myqcloud.com/typora-img/image-20230223220854916.png)

![image-20230223220913640](https://liuaw-1300876371.cos.ap-nanjing.myqcloud.com/typora-img/image-20230223220926429.png)

![image-20230223220932075](https://liuaw-1300876371.cos.ap-nanjing.myqcloud.com/typora-img/image-20230223220932075.png)

![image-20230223220936427](https://liuaw-1300876371.cos.ap-nanjing.myqcloud.com/typora-img/image-20230223220936427.png)

/*************************************************************************************************************************/


箭头图标：阿里图标库
2）很多电商平台为什么用分页？
