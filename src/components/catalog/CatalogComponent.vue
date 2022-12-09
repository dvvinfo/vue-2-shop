<template>
  <div class="catalog">
    <router-link :to="{ name: 'cart', params: { cart: cart } }">
      <div class="total-block">Cart: {{ cart.length }}</div>
    </router-link>
    <h1>Catalog</h1>
    <select-component
      :options="categories"
      :selected="selected"
      @select="sortByCategories"
    />
    <div class="catalog__list">
      <catalog-item-component
        v-for="product in filteredProducts"
        :key="product.article"
        :product="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import CatalogItemComponent from "./CatalogItemComponent.vue";
import SelectComponent from "@/components/UI/SelectComponent.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "CatalogComponent",
  components: {
    CatalogItemComponent,
    SelectComponent,
  },
  data() {
    return {
      categories: [
        { name: "Все", value: "a" },
        { name: "Мужские", value: "m" },
        { name: "Женские", value: "f" },
      ],
      selected: "All",
      sortedProducts: [],
    };
  },
  computed: {
    ...mapGetters(["products", "cart"]),
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        return this.products;
      }
    },
  },
  methods: {
    ...mapActions(["getProductsFromApi", "addToCartActions"]),
    addToCart(data) {
      this.addToCartActions(data);
    },
    select(option) {
      this.selected = option.name;
    },
    sortByCategories(category) {
      this.selected = category.name;
      this.sortedProducts = [...this.products];
      if (category) {
        this.sortedProducts = this.sortedProducts.filter((e) => {
          this.selected === category.name;
          return e.category === category.name;
        });
      }
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
