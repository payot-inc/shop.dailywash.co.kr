import Vue from 'vue';
import VueRouter from 'vue-router';
import { isEmpty } from 'lodash';
import store from '../store';

import Home from '../views/Home.vue';
import Login from '../views/login.vue';
import Calculate from '../views/calculate.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/calculate',
    name: 'Calculate',
    component: Calculate,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // 로그인 이동이 아니면서 업체정보가 없는 경우
  if (to.name !== 'Login' && isEmpty(store.state.profile)) {
    next({ name: 'Login' });
  } else if (to.name === 'Login') {
    // 로그인 페이지로 이동한다면 기본적으로 로그아웃을 진행
    store.commit('SET_PROFILE', {});
    next();
  } else {
    next();
  }
});
export default router;
