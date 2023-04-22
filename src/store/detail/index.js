import { reqGoodsInfo, reqAddOrUpdateShopCart } from "@/api";
const state = {
    goodInfo: {}
}
const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo;
    }
}
const actions = {
    // 获取产品信息的api
    async getGoodInfo({ commit }, skuId) {
        let result = await reqGoodsInfo(skuId);
        if (result.code == 200) {
            commit('GETGOODINFO', result.data);
        }
    },
    // 将产品添加到购物车当中
    async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
        let result = await reqAddOrUpdateShopCart(skuId, skuNum);
        // 当前的这个函数如果执行返回的是Promise
        if (result.code == 200) {
            return 'ok'
        } else {
            // 代表加入购物车失败
            return Promise(new Error('faile'));
        }
    }
}
const getters = {
    // 路径导航简化的数据
    categoryView(state) {
        // 比如：state.goodInfo初始状态空对象，空对象categoryView属性值undefined
        return state.goodInfo.categoryView || {};
    },
    // 简化产品信息的数据
    skuInfo(state) {
        return state.goodInfo.skuInfo || {};
    },
    // 平台售卖属性的简化
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList || [];
    }

}

export default {
    state,
    mutations,
    actions,
    getters
}