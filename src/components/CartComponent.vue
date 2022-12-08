<template>
  <div class="cart">
    <h1>Cart</h1>
    <cart-item-component
      v-for="(item, index) in cart"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
    />
  </div>
</template>

<script>
import CartItemComponent from "./CartItemComponent.vue";
import { mapActions } from "vuex";
export default {
  name: "CartComponent",
  components: {
    CartItemComponent,
  },
  props: {
    cart: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {},
  methods: {
    ...mapActions(["deleteFromCartAction"]),
    deleteFromCart(index) {
      this.deleteFromCartAction(index);
    },
  },
};
</script>

<style></style>
