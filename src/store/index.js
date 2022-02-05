import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        title: 'one'
      },
      {
        id: 2,
        title: 'two'
      },
      {
        id: 3,
        title: 'three'
      }
    ]
  },
  getters: {
    allTodos: state => state.todos
  },  
  mutations: {
  },
  actions: {
  },
  modules: {

  }
})
