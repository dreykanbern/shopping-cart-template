<template>
  <form class="content-cart__creating-cart" @submit.prevent>
    <label class="creating-cart__label">Наименование товара</label>
    <input
        v-model="cart.title"
        type="text"
        class="creating-cart__input"
        placeholder="Введите наименование товара"
    >
    <label class="creating-cart__label">Описание товара</label>
    <!-- Do not use the height attribute => use rows -->
    <textarea
        v-model="cart.description"
        rows="5"
        class="creating-cart__input"
        placeholder="Введите описание товара"
    ></textarea>
    <label class="creating-cart__label">Ссылка на изображение товара</label>
    <input
        v-model="cart.img"
        type="text"
        class="creating-cart__input"
        placeholder="Введите ссылку"
    >
    <label class="creating-cart__label">Цена товара</label>
    <input
        v-model="cart.price"
        type="text"
        class="creating-cart__input"
        placeholder="Введите цену"
    >
    <button
        class="creating-cart__btn non-active"
        @click="createProduct"
    >
      Добавить товар
    </button>
  </form>
</template>

<style lang="scss" src="./my-form.scss" scoped></style>

<script>
export default {
  name: 'MyForm',
  data() {
    return {
      cart:{
        title: "",
        description: "",
        price: "",
        img: "",
      }
    }
  },
  methods: {
   createProduct() {
     this.cart.id = Date.now();
     this.$emit('create', this.cart)
     this.cart = {
       title: "",
       description: "",
       price: "",
       img: "",
     }
   },
  }
}
</script>



