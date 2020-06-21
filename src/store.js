import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
  },
  getters: {
    user(state){
      return state.user;
    },
  },
  actions: {
  },
  mutations: {
    updateUser(state, { user }) {
      Vue.set(state, "user", user);
    },
  }
});