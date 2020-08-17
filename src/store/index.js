import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: []
  },
  mutations: {
    updateNote(state, payload) {
      state.notes.push(payload)
    }
  },
  actions: {},
  modules: {}
})
