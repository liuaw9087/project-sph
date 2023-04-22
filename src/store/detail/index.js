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
    // 加入购物车的action || 修改某个产品的个数
    async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
        // 发请求:前端带一些参数给服务器[需要储存这些参数],存储成功了,没有返回数据
        // 不需要再三连环(仓库的存储数据了)
        // 注意:async函数执行返回的结果一定是promise[要么成功,要么失败]
        let result = await reqAddOrUpdateShopCart(skuId, skuNum);
        if (result.code == 200) {
            // 返回的是成功的标记
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'))
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