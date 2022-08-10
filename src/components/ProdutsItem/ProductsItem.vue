<template>
  <div>
    <img class="content-item__img" :src="cart.img" alt="default image">
    <button
        class="content-item__delete-btn"
        @click="$emit('delete', cart)"
    >
      <img class="delete-btn__img" src="@/assets/img/delete-icon.svg" alt="delete-icon">
    </button>
    <div class="content-item__text-attr">

      <h2 class="text-attr__h2">{{cart.title}}</h2>
      <p class="text-attr__description">
        {{cart.description}}
      </p>

      <span class="text-attr__cost">{{cart.price}}</span>

    </div>
  </div>
</template>

<style lang="scss" src="./products-item.scss" scoped></style>

<script>
export default {
  name: "ProductsItem",
  props: {
    cart: {
      type: Object,
      required: true,
    },
  }
}
</script>