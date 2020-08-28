import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: [],
    labels: []
  },
  mutations: {
    updateNote(state, payload) {
      state.notes.push(payload)
    },
    updateLabel(state, payload) {
      state.labels.push(payload)
    }
  },
  getters: {
    labelNames: state => {
      return state.labels.map(labels => labels.title)
    }
  }
})
