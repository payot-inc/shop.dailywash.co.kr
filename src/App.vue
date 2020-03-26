<template>
  <v-app>
    <LayoutView>
      <router-view />
    </LayoutView>
  </v-app>
</template>

<script>
import Layout from '@/components/layout.vue'

export default {
  name: "App",
  components:{
    LayoutView:Layout
  }

};
</script>
