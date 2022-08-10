<template>

  <div class="header-cart__sort-btn">
    <select
        v-model="modelValue"
        @change="changeOption"
    >
      <option
          class="disabled"
          disabled value=""
      >
        По умолчанию
      </option>
      <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
      >
        {{option.name}}
      </option>
    </select>
  </div>

</template>

<style lang="scss" src="./my-select.scss" scoped></style>

<script>
export default {
  name: "MySelect",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

