<template>
  <div class="main-wrapper">
    <h1>{{ title }}</h1>
    <CatalogComponent />
    <cart-component />
  </div>
</template>

<script>
import CatalogComponent from "./CatalogComponent.vue";
import CartComponent from "./CartComponent.vue";
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
  computed: {},
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
