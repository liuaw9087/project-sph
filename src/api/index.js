// 当前这个模块：对API进行统一管理
import requests from './request';
import mockRequests from './mockAjax'
// 三级联动接口
// /api/product/getBaseCategoryList get 无参数

export const reqCategoryList = () => {
  // 发请求:axios发请求返回的结果是promise对象
  return requests({
    url: '/product/getBaseCategoryList',
    method: 'get'
  })
}
// 获取banner（Home首页轮播图接口）
export const reqGetBannerList = () => mockRequests.get('/banner')

// 获取floor数据
export const reqFloorList = () => mockRequests.get('/floor')

// 获取搜索模块数据 地址： /api/list 请求方式：POST 参数：请求需要带参数
/*
{
  "category3Id": "61",
  "categoryName": "手机",
  "keyword": "小米",
  "order": "1:desc",
  "pageNo": 1,  
  "pageSize": 10,
  "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
  "trademark": "4:小米"
}
*/
// 当前这个函数不需要接受任何外部传递参数
// 当前这个接口（获取搜索模块的数据），给服务器传递一个默认参数【至少是一个空对象】
export const reqGetSearchInfo = (params) => requests({ url: "/list", method: "post", data: params })

// 获取产品详细信息的接口
export const reqGoodsInfo = (skuid) => requests({ url: `/item/${skuid}`, method: 'get' });

// 将产品添加到购物车中（获取更新某一个产品的个数）
// api/cart/addToCart/{skuId}/{skuNum} POST
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: "post" });

