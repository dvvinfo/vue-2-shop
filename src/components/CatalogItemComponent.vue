<template>
  <div class="catalog-item">
    <img class="catalog-item__img" :src="imgLink" :alt="product.name" />
    <p class="catalog-item__name">{{ product.name }}</p>
    <p class="catalog-item__price">Price: {{ product.price }} p</p>
    <button class="catalog-item__btn btn" @click="addToCart">
      Add to cart
    </button>
  </div>
</template>

<script>
export default {
  name: "CatalogItemComponent",
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    imgLink: function () {
      const fileName = this.product.image;
      return require(`../assets/images/${fileName}`);
    },
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product);
    },
  },
};
</script>

<style lang="scss">
.catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding * 2;
  margin: $margin * 2;
  &__img {
    width: 100px;
  }
}
</style>
