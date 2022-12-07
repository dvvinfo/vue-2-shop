<template>
  <div class="home">
    <main-wrapper-component />
  </div>
</template>

<script>
// @ is an alias to /src
import MainWrapperComponent from "@/components/MainWrapperComponent.vue";
export default {
  name: "HomeView",
  components: {
    MainWrapperComponent,
  },
};
</script>
