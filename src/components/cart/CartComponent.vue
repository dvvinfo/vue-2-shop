<template>
  <div class="cart">
    <router-link :to="{ name: 'catalog' }">
      <div class="total-block">Back to catalog</div>
    </router-link>
    <h1>Cart</h1>
    <p v-if="!cart.length">there are no product in cart ...</p>
    <cart-item-component
      v-for="(item, index) in cart"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
      @increment="increment(index)"
      @decrement="decrement(index)"
    />
    <div class="cart__total">
      <div class="total__name">Total:</div>
      <div>{{ cartTotalCost }} p</div>
    </div>
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
  computed: {
    cartTotalCost() {
      let result = [];
      if (this.cart.length) {
        for (let item of this.cart) {
          result.push(item.price * item.quantity);
        }
        result = result.reduce(function (sum, el) {
          return sum + el;
        });
        return result;
      } else {
        return 0;
      }
    },
  },
  methods: {
    ...mapActions([
      "deleteFromCartAction",
      "incrementCartItemAction",
      "decrementCartItemAction",
    ]),
    increment(index) {
      this.incrementCartItemAction(index);
    },
    decrement(index) {
      this.decrementCartItemAction(index);
    },
    deleteFromCart(index) {
      this.deleteFromCartAction(index);
    },
  },
};
</script>

<style lang="scss">
.cart {
  margin-bottom: 71px;
  &__total {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    padding: $padding * 3;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(11, 202, 11);
    color: #fff;
    font-size: 20px;
  }
  .total__name {
    margin-right: $margin;
  }
}
</style>
