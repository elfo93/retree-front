export const state = () => ({
      listOrder: [],
})

export const mutations = {

  addItem(state, item) {

      let foundIndex = state.listOrder.findIndex((product) => product._id === item._id)

      if (foundIndex !== -1){
        console.info("Incrementa cantidad")
        let productUpdated = state.listOrder[foundIndex]
        productUpdated.quantity += 1
        state.listOrder[foundIndex] = productUpdated
      }

      if(foundIndex === -1){

          item.quantity = 1
        state.listOrder.push(item)
      }
  },

  removeItem(state, item) {
    let foundIndex = state.listOrder.findIndex((product) => product._id === item._id)

    if(foundIndex !== -1){
      state.listOrder.splice(foundIndex, 1)
    }
  },

}

export const getters = {
  listOrderCount(state) {
    if (state.listOrder.length === 0) {
      return 0;
    }
    return state.listOrder
      .map((item) => item.quantity)
      .reduce((acum, current) => acum + current);
  }
}
