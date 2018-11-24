export default {

  totalPrice (state) {

    return state.cartFoods.reduce((pre,food)=>{

      return pre+food.count*food.price

    },0)

  },
  totalCount (state) {

    return state.cartFoods.reduce((pre,food)=>{

      return pre+food.count

    },0)

  },


  ratingsCount (state) {
    return state.ratings.length
  },

  // 满意的评价的总数据
  positiveRatingsCount (state) {
    return state.ratings.reduce((pre, rating) => pre + (rating.rateType===0 ? 1 : 0), 0)
  }
}
