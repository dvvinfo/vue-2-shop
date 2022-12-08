<template>
  <div class="catalog">
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
    ...mapGetters(["products"]),
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
</style>
