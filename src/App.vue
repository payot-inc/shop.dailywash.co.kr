<template>
  <v-app>
    <LayoutView v-if="hasRootLayout">
      <router-view v-if="hasRootLayout" />
    </LayoutView>
    <router-view v-if="!hasRootLayout" />
  </v-app>
</template>

<script>
import Layout from '@/components/layout.vue';

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    LayoutView: Layout,
  },
  computed: {
    hasRootLayout() {
      return this.$route.name !== 'Login';
    },
  },
};
</script>
