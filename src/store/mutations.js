import {RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  ADD_FOODS_COUNT,
  REDUCE_FOODS_COUNT,
  Empty_CART
} from './mutation-types'

import Vue from 'vue'
export default {
  [RECEIVE_ADDRESS](state, {address}) {
    state.address = address
  },
  [RECEIVE_CATEGORYS](state, {categorys}) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state, {shops}) {
    state.shops = shops
  },
  [RECEIVE_USER](state, {user}) {
    state.user = user
  },
  [RESET_USER] (state) {
    state.user = {}
  },
  [RECEIVE_GOODS] (state,{goods}){
    state.goods = goods
  },
  [RECEIVE_RATINGS] (state,{ratings}){
    state.ratings = ratings
  },
  [RECEIVE_INFO] (state,{info}){
    state.info = info
  },

  //点击增加购物车数量
  [ADD_FOODS_COUNT] (state,{food}){
    if(food.count){
      food.count++
    }else{
      //为了可以使自定义的count属性有数据绑定
      Vue.set(food ,'count' ,1)
      //把新增的food放到购物车cartFoods里
      state.cartFoods.push(food)
    }
  },

  //点击减少购物车数量
  [REDUCE_FOODS_COUNT] (state,{food}){
    if(food.count){
      food.count--
    }
    //当购物车数量清空时候，清空购物车里面的cartFoods
    if(food.count === 0){
      state.cartFoods.splice(state.cartFoods.indexOf(food) ,1)

    }
  },

  //清空购物车
  [Empty_CART](state){
    state.cartFoods.forEach((food)=>{
      food.count = 0
    })
    state.cartFoods = []
  }
}
