export const state = () => ({
  allProducts: [],
  currentId: '',
  cart: [],
})

export const mutations = {
  setAllProducts(state, allProducts) {
    state.allProducts = [...allProducts]
    localStorage.setItem('allProducts', JSON.stringify(allProducts))
  },
  setCurrentId(state, id) {
    state.currentId = id
  },
  addProductToCart(state, product) {
    if (state.cart.includes(product)) {
      return
    }
    state.cart.push(product)

    localStorage.setItem('cart', JSON.stringify(state.cart))
  },
}

export const getters = {
  getAllCart(state) {
    return state.cart
  },
  getPriceOfCart(state) {
    const getCart = localStorage.getItem('cart')
    const cart = JSON.parse(getCart)
    const subtotal = cart
      .filter((item) => item.price)
      .map((item) => +item.price)
      .reduce((sum, current) => sum + current)

    return subtotal
  },
  getSimilarProducts(state) {
    const getSimilarProducts = localStorage.getItem('allProducts')
    const similar = JSON.parse(getSimilarProducts)
    const products = []

    for (let i = 0; i < 5; i++) {
      const rand = Math.floor(Math.random() * similar.length)
      products.push(similar[rand])
    }
    return products
  },
  getAllProducts(state) {
    return state.allProducts
  },
  getCurrentID(state) {
    return state.currentId
  },
}
