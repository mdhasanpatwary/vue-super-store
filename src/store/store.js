export const storage = {
  state: {
    inventory: [],
    cart: [],
    loading: true
  },
  getters: {
    getInventory(state) {
      return state.inventory
    },
    getCart(state) {
      return state.cart
    },
    getLoading(state) {
      return state.loading
    }
  },
  mutations: {
    addToCart(state, payload) {
      state.cart.push(payload)
    },
    addToInventory(state, payload) {
      state.inventory = payload
    },
    removeItem(state, payload) {
      state.cart.splice(payload, 1)
    },
    getLoading(state, payload) {
      state.loading = payload
    },
    clearCart(state) {
      state.cart = []
    }
  },
  actions: {
    addToCart(context, payload) {
      context.commit('addToCart', payload)
    },
    addToInventory(context, payload) {
      context.commit('addToInventory', payload)
    },
    removeItem(context, payload) {
      context.commit('removeItem', payload)
    },
    getLoading(context, payload) {
      context.commit('getLoading', payload)
    },
    clearCart(context) {
      context.commit('clearCart')
    }
  }
}
