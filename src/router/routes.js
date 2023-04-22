// 引入路由组件
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Register from '@/pages/Register';
import Login from '@/pages/Login';
import Detail from '@/pages/Detail';
// 路由配置信息
export default [
    {
        path: '/detail/:skuid',
        component: Detail,
        meta: { show: true },
    },
    {
        path: '/home',
        component: Home,
        meta: { show: true },
        name: "home"
    },
    {
        path: '/login',
        component: Login,
        meta: { show: false },
        name: "login"

    },
    {
        path: '/search/:keyword?',
        component: Search,
        meta: { show: true },
        name: "search",
        // 路由组件能不能传递props参数？
        // 布尔值写法:params参数
        // props: true
        // 对象写法:额外给路由组件传递一些props
        // props: { a: 1, b: 2 },
        // 函数写法:可以params参数query参数,通过props传递给留有路由组件
        props: ($route) => {
            return { keywork: $route.params.keyword, k: $route.query.k }
        }
    },
    {
        path: '/register',
        component: Register,
        meta: { show: false },
        name: "register"
    },
    // 重定向，在项目跑起来的时候，访问、立马让他回到首页
    {
        path: '*',
        redirect: '/home'
    }

]
