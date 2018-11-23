<template>
  <div class="cartcontrol">
    <transition name="food">
      <div class="iconfont icon-remove_circle_outline" v-if="food.count" @click="updateCount(false)"></div>
    </transition>

    <div class="cart-count" v-if="food.count">{{food.count}}</div>
    <div class="iconfont icon-add_circle" @click="updateCount(true)"></div>
  </div>
</template>

<script>
  export default {
    props : {
      food : Object,

    },
    methods : {
      updateCount(isAdd) {
        this.$store.dispatch('updateCount',{food:this.food ,isAdd })
      },

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)

    .icon-remove_circle_outline
      display: inline-block
      padding 6px
      line-height 24px
      font-size 24px
      color #02a774
      &.food-enter-active,&.food-leave-active
        transition all .3s
      &.food-enter,&.food-leave-to
        transform translateX(20px) rotate(180deg)
        opacity 0
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
    .icon-add_circle
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color #02a774
</style>

