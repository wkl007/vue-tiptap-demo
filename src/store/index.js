import { createStore } from 'vuex'

const store = createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
})

export function setupStore (app) {
  app.use(store)
}

export default store
