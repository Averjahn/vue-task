import { createStore } from 'vuex'

export default createStore({
  state: {
    menu: [
      "Преимущества Tele2", "Тарифы", "Акции и спецпредложения",
      "Промотариф Tele2", "Технология eSIM", "Подключение нового абонента"
    ],
    menuVisible: false,
    closeVisible: false
  },
  getters: {
    getMenu(state) {
      return state.menu
    }
  },
  mutations: {
    showMenu(state) {
      state.menuVisible = !state.menuVisible
      if(window.innerWidth > 376){
        state.menuVisible = true
      }
      console.log(innerWidth)
    },
    changeClose(state) {
      state.closeVisible = !state.closeVisible
      console.log(state.menuVisible)
    }
  },
  actions: {
  },
  modules: {
  }
})
