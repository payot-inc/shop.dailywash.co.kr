<template>
  <div id="header">
    <div class="logo">
      데일리워시 관리자
    </div>
    <div class="user">
      <span>{{ profile.owner }}님, 안녕하세요</span>
      <v-btn @click="doLogout" width="80px" height="30px" outlined color="#fff" class="logoutBtn">로그아웃</v-btn>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['profile']),
  },
  methods: {
    ...mapActions(['logout']),
    doLogout() {
      this.logout();
      this.$router.push({ name: 'Login' });
    },
  },
};
</script>
