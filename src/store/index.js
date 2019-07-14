import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuCollapse: false
  },
  mutations: {
    toggleMenuCollapse(state, collapse) {
      state.menuCollapse = collapse
    }
  },
  actions: {}
})
