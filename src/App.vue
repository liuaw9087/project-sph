<template>
  <div>
    <Header></Header>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!-- 在Home或Search显示的，在登录、注册时是隐藏的 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "app",
  components: {
    Header,
    Footer,
  },
  mounted() {
    // 派发一个action||获取商品分类的三级列表数据
    this.$store.dispatch("categoryList");
  },
};
</script>

<style scoped>
</style>