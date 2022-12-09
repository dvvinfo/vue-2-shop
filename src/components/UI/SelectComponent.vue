<template>
  <div class="select">
    <div class="select__title" @click="areOptionsVisible = !areOptionsVisible">
      {{ selected }}
    </div>
    <div class="select__options" v-if="areOptionsVisible">
      <span
        @click="selectOption(option)"
        v-for="option in options"
        :key="option.value"
        class="select__item"
      >
        {{ option.name }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectComponent",
  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    selected: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      areOptionsVisible: false,
    };
  },
  methods: {
    selectOption(option) {
      this.$emit("select", option);
      this.areOptionsVisible = false;
    },
    hideSelect(e) {
      if (
        document.querySelector(".select__options") &&
        !document.querySelector(".select__options").contains(e.target)
      ) {
        this.areOptionsVisible = false;
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.hideSelect.bind(this), true);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.hideSelect, true);
  },
};
</script>

<style lang="scss">
.select {
  position: relative;
  width: 200px;
  line-height: normal;
  border: 1px solid gray;
  &__title {
    font-size: 18px;
    cursor: pointer;
    padding: 5px 0;
  }
  &__options {
    position: absolute;
    top: 27px;
    right: 0;
    width: 99%;
    border: 1px solid gray;
  }
  &__item {
    display: block;
    margin: 0;
    cursor: pointer;
    font-size: 16px;
    padding: 5px 0;
    &:hover {
      background-color: gray;
      color: white;
    }
  }
}
</style>
