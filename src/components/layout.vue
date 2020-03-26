<template>
  <div id="wrap">
    <Header />
    <div id="container">
      <SideView/>
      <div id="contents">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./header.vue";
import SideView from "./side.vue"

export default {
  components:{
    Header, SideView
  }
}

</script>

<style lang="scss" scoped>


</style>