<template>
  <div class="catalog-item">
    <h1>CatalogComponent</h1>
    <catalog-item-component />
  </div>
</template>

<script>
import CatalogItemComponent from "./CatalogItemComponent.vue";
export default {
  name: "CatalogComponent",
  components: {
    CatalogItemComponent,
  },
};
</script>

<style></style>
