// search模块的小仓库
import { reqGetSearchInfo } from "@/api";
const state = {
    // 仓库初始化状态
    searchList: {}
};
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList;
    }
};
const actions = {
    // 获取search模块数据
    async getSearchList({ commit }, params) {
        // 当前这个reqGetSearchInfo这个函数在调用获取服务器数据的时候，至少传递一个函数（空对象）
        // params形参：是当用户派发action的时候，第二个参数传递过来的，知道是一个空对象
        let result = await reqGetSearchInfo(params);
        if (result.code == 200) {
            commit("GETSEARCHLIST", result.data);
        }
    }
};
// 计算属性，在项目中，为了简化仓库中的数据而生
// 项目当中getters主要的作用是简化仓库中的数据（简化数据而生）
// 可以把我们将在在组件当中需要用的数据简化一下【将来组件获取数据的时候就方便了】
const getters = {
    // 当前形参state，是当前仓库中的state，而并非大仓库中的state
    goodsList(state) {
        // 如果服务器的数据回来了，就是一个数据
        // 如果网络不好，就会返回一个undifined
        // 计算新的属性的属性值，至少保留一个空数组
        return state.searchList.goodsList || [];
    },
    trademarkList(state) {
        return state.searchList.trademarkList;
    },
    attrsList(state) {
        return state.searchList.attrsList;
    }
};
export default {
    state,
    mutations,
    actions,
    getters
}