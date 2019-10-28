import axios from 'axios';
import Vue from 'vue';

const state = {
  products: [],
  sortBy: 'id',
  sortAscending: true,
  cart: [],
  cartTotal: 0,
};

const getters = {
  allProducts: (state) => state.products,
  sortedItems: (state) => {
    const sortKey = state.sortBy ? state.sortBy.toLowerCase() : 'id';
    const tempState = state.products;
    if (sortKey === 'id' || sortKey === 'price') {
      tempState.sort((a, b) => parseFloat(a[sortKey]) - parseFloat(b[sortKey]));
    } else {
      tempState.sort((a, b) => {
        let compare = 0;
        if (a[sortKey].toLowerCase() > b[sortKey].toLowerCase()) {
          compare = 1;
        } else if(b[sortKey].toLowerCase() > a[sortKey].toLowerCase()) {
          compare = -1;
        }
        return compare;
      });
    };
    if (!state.sortAscending) tempState.reverse();
    return tempState;
  },
  productsInCart: (state) => state.cart,
  cartTotal: (state) => {
    let totalPrice = 0;
    state.cart.map(item => {
      totalPrice += item.price * item.quantity;
    })

    return totalPrice;
  }
};

const actions = {
  async fetchProducts({ commit }) {
    const response = await axios.get('http://localhost:3000/products');
    commit('setProducts', response.data);
  },
  setSort({ commit }, payload) {
    commit('setSort', payload);
  },
  addToCart({ commit }, item) {
    commit('addToCart', item);
  },
  removeFromCart({ commit }, item) {
    commit('removeFromCart', item);
  }
};

const mutations = {
  setProducts: (state, products) => state.products = products,
  setSort: (state, payload) => {
    state.sortBy = payload.parameter;
    state.sortAscending = payload.ascending;
  },
  addToCart: (state, item) => {
    let found = state.cart.find(product => product.id === item.id);
    if (found) {
      console.log(found);
      found.quantity++;
    } else {
      Vue.set(item, 'quantity', 1);
      state.cart.push(item);
    }
  },
  removeFromCart: (state, item) => state.cart = state.cart.filter(product => product.id !== item.id)
};

export default {
  state,
  getters,
  actions,
  mutations,
}