import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
  },
  getters: {
    products: (state) => {
      return state.products;
    },
  },
  mutations: {
    setProductsToStart(state, products) {
      state.products = products;
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
  },
  modules: {},
});
