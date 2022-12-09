<template>
  <div class="catalog">
    <router-link :to="{ name: 'cart', params: { cart: cart } }">
      <div class="total-block">Cart: {{ cart.length }}</div>
    </router-link>
    <h1>Catalog</h1>
    <div class="catalog__list">
      <catalog-item-component
        v-for="product in products"
        :key="product.article"
        :product="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import CatalogItemComponent from "./CatalogItemComponent.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "CatalogComponent",
  components: {
    CatalogItemComponent,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["products", "cart"]),
  },
  methods: {
    ...mapActions(["getProductsFromApi", "addToCartActions"]),
    addToCart(data) {
      this.addToCartActions(data);
    },
  },
  mounted() {
    this.getProductsFromApi().then((response) => {
      if (response.data) {
        console.log("Data arrived!");
      }
    });
  },
};
</script>

<style lang="scss">
.catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
.total-block {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: $padding * 2;
  border: 1px solid gray;
}
</style>
