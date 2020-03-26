import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:3000/shop',
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
  },
  mutations: {
    SET_PROFILE: (state, params) => {
      state.profile = params;
    },
  },
  actions: {
    async login({ state, commit }, { email, password }) {
      const { data } = await client.post('/login', { email, password });
      commit('SET_PROFILE', data);

      return data;
    },
    async logout({ state, commit }) {
      commit('SET_PROFILE', {});
    },
    async getUseList({ state }, { start, end, page, limit }) {
      const { id } = state.profile;
      const url = `/${id}/sales`;
      const params = { start, end, page, limit };
      const { data } = await client.get(url, { params });

      return data;
    },
    async getPayList({ state }, { page, limit = 10 }) {
      const { id } = state.profile;
      const url = `/${id}/calc`;
      const params = { page, limit };
      const { data } = await client.get(url, { params });

      return data;
    },
  },
  modules: {},
});
