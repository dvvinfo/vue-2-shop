<template>
  <div class="main-wrapper">
    <h1>{{ title }}</h1>
    <CatalogComponent />
    <cart-component v-if="cart.length" :cart="cart" />
  </div>
</template>

<script>
import CatalogComponent from "./CatalogComponent.vue";
import CartComponent from "./CartComponent.vue";
import { mapGetters } from "vuex";
export default {
  name: "MainWrapperComponent",
  components: {
    CatalogComponent,
    CartComponent,
  },
  data() {
    return {
      title: "MainWrapper",
    };
  },
  computed: {
    ...mapGetters(["cart"]),
  },
  methods: {},
  watch: {},
  mounted() {},
};
</script>

<style>
.main-wrapper {
  max-width: 900px;
  margin: 0 auto;
}
</style>
