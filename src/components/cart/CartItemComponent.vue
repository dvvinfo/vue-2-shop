<template>
  <div class="cart-item">
    <img class="cart-item__img" :src="imgLink" :alt="cart_item_data.name" />
    <div class="cart-item__info">
      <p class="cart-item__name">{{ cart_item_data.name }}</p>
      <p class="cart-item__price">Price: {{ cart_item_data.price }} p</p>
      <p class="cart-item__article">Price: {{ cart_item_data.article }}</p>
    </div>
    <div class="catalog-item__quantity">
      <p>Qty:</p>
      <span>
        <span class="quantity__btn" @click="decrementItem">-</span>
        {{ cart_item_data.quantity }}
        <span class="quantity__btn" @click="incrementItem">+</span>
      </span>
    </div>
    <button class="btn" @click="deleteFromCart">delete</button>
  </div>
</template>

<script>
export default {
  name: "CartItemComponent",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    imgLink: function () {
      const fileName = this.cart_item_data.image;
      return require(`../../assets/images/${fileName}`);
    },
  },
  methods: {
    decrementItem() {
      this.$emit("decrement");
    },
    incrementItem() {
      this.$emit("increment");
    },
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
  },
};
</script>

<style lang="scss">
.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding * 2;
  margin: $margin * 2;
  &__img {
    width: 100px;
  }
  .quantity__btn {
    cursor: pointer;
    padding: 5px 10px;
    border: 1px solid gray;
    font-size: 20px;
  }
}
</style>
