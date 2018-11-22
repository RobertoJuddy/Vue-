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

  }
}
