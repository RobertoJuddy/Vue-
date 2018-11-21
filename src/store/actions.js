import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
  reqUserInfo,
  reqLogout,
  reqShopGoods,
  reqShopInfo,
  reqShopRatings
} from '../api'

import {
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
  RECEIVE_ADDRESS,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  RECEIVE_GOODS
} from './mutation-types'

export default {

  async getAddress({commit, state}) {
    const {longitude, latitude} = state
    const result = await reqAddress(longitude, latitude)
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }

  },
  async getFoodCategorys({commit}) {
    const result = await reqFoodCategorys()
    if (result.code === 0) {
      const foodCategorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys: foodCategorys})
    }
  },

  async getShops({commit, state}) {
    const {longitude, latitude} = state
    const result = await reqShops({latitude, longitude})
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },

  //保存user
  saveUser({commit}, user) {
    commit(RECEIVE_USER, {user})
  },

  //获取商铺信息
  async getUserInfo({commit}) {
    const result = await reqUserInfo()
    if (result.code === 0) {
      const user = result.data
      commit(RECEIVE_USER, {user})
    }
  },

  //登出
  async logout ({commit}){
    const result = await reqLogout()
    if(result.code === 0 ){
      commit (RESET_USER)
    }
  },

  async getShopInfo({commit}) {
    const result = await reqShopInfo()
    if(result.code===0) {
      const info = result.data
      commit(RECEIVE_INFO, {info})
    }
  },

// 异步获取商家评价列表
  async getShopRatings({commit}) {
    const result = await reqShopRatings()
    if(result.code===0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
    }
  },

// 异步获取商家商品列表
  async getShopGoods({commit} , cb) {
    const result = await reqShopGoods()
    if(result.code===0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})

      typeof cb === 'function' && cb()
    }
  },


}
