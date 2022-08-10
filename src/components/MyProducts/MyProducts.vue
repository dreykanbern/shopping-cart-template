<template>
  <div class="content-cart__items-wrapper">
    <transition-group name="flip-list">
      <ProductsItem
          class="items-wrapper__content-item"
          :cart="cart"
          v-for="cart in carts"
          :key="cart.id"
          @delete="$emit('delete', cart)"
      >
      </ProductsItem>
    </transition-group>
  </div>
</template>

<style lang="scss" src="./my-products.scss"></style>

<script>
import ProductsItem from "@/components/ProdutsItem/ProductsItem";
export default {
  name: "MyProducts",
  components: {ProductsItem},
  props: {
    carts: {
      type: Array,
      required: true,
    },
  }
}
</script>

