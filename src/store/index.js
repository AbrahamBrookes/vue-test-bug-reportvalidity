import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Test: {
      namespaced: true,
      actions: {
        store(){
          console.log('test module store called')
        }
      }
    }
  },
});
