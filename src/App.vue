<template>
  <div>
    <router-view/>
    <FooterGuide v-show="$route.meta.showFoot"/>
  </div>

</template>

<script>
  import FooterGuide from './component/FooterGuide/FooterGuide'

  export default {
    mounted() {
      this.$store.dispatch('getAddress')
      this.$store.dispatch('getUserInfo')
    },
    components: {
      FooterGuide,

    }
  }
</script>

<style scoped>

</style>
