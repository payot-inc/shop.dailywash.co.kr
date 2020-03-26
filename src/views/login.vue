<template>
  <div class="login">
    <div class="loginBox">
      <div class="loginTitle">
        <h2>Daily Wash Login</h2>
        <p>데일리세탁 로그인</p>
      </div>
      <div class="inputGroup">
        <v-text-field label="아이디" color="#2816A7" single-line v-model="email" />
        <v-text-field
          label="비밀번호"
          color="#2816A7"
          single-line
          type="password"
          v-model="password"
        />
      </div>
      <v-btn
        width="100%"
        height="45px"
        elevation="0"
        color="#2816A7"
        class="loginBtn"
        @click="doLogin({ email, password })"
        >로그인</v-btn
      >
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data: () => ({
    email: '',
    password: '',
  }),
  methods: {
    ...mapActions(['login']),
    async doLogin({ email, password }) {
      try {
        const test = await this.login({ email, password });
        this.$router.push({ name: 'Main' });
      } catch (error) {
        console.log(error.response);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  background: #262542;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .loginBox {
    background: #fff;
    width: 360px;
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.2);

    .loginTitle {
      margin-bottom: 40px;
      text-align: center;

      h2 {
        color: #262542;
        font-size: 32px;
        letter-spacing: -1px;
        font-family: 'Roboto';
      }
      p {
        color: #888;
        margin-top: 5px;
      }
    }

    .loginBtn {
      color: #fff;
      margin-top: 30px;
    }
  }
}
</style>
