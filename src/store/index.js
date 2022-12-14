import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
  },
  getters: {
    products: (state) => {
      return state.products;
    },
    cart: (state) => {
      return state.cart;
    },
  },
  mutations: {
    setProductsToStart(state, products) {
      state.products = products;
    },
    setCart(state, product) {
      if (state.cart.length) {
        let isProductExist = false;
        state.cart.map((item) => {
          if (item.article === product.article) {
            isProductExist = true;
            item.quantity++;
          }
        });
        if (!isProductExist) {
          state.cart.push(product);
        }
      } else {
        state.cart.push(product);
      }
    },
    removeFromCart(state, index) {
      state.cart.splice(index, 1);
    },
    setIncrement(state, index) {
      state.cart[index].quantity++;
    },
    setDecrement(state, index) {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--;
      }
    },
  },
  actions: {
    getProductsFromApi({ commit }) {
      return axios("http://localhost:3000/products", {
        method: "GET",
      })
        .then((products) => {
          commit("setProductsToStart", products.data);
          return products;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    addToCartActions({ commit }, product) {
      commit("setCart", product);
    },
    incrementCartItemAction({ commit }, index) {
      commit("setIncrement", index);
    },
    decrementCartItemAction({ commit }, index) {
      commit("setDecrement", index);
    },
    deleteFromCartAction({ commit }, index) {
      commit("removeFromCart", index);
    },
  },
  modules: {},
});
