<template>

<div class="container">
  <div class="header-cart">
      <h1 class="header-cart__h1">Добавление товара</h1>
      <my-select
          v-model="selectSort"
          :options="sortOptions"
      ></my-select>
  </div>
  <div class="content-cart">
    <my-form
        @create="createProduct"
    ></my-form>
    <my-products
        :carts="cartsSorted"
        @delete="deleteProduct"
    ></my-products>
  </div>
</div>

</template>

<style lang='scss' src="@/scss/app.scss"></style>

<script>
import MyForm from "@/components/MyForm/MyForm";
import MyProducts from "@/components/MyProducts/MyProducts";
import MySelect from "@/components/MySelect/MySelect";
export default {
  components: {MySelect, MyProducts, MyForm},
  data() {
    return {
      carts: [
        {
          id: 1,
          img: 'https://klike.net/uploads/posts/2019-06/1560329641_2.jpg',
          title: 'Наименование товара',
          description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: '10 500',
        },
        {
          id: 2,
          img: 'https://avatarko.ru/img/kartinka/2/igrushka_lyagushka_1402.jpg',
          title: 'Наименование товара',
          description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: '10 000',
        },
        {
          id: 3,
          img: 'https://i.pinimg.com/originals/81/5f/bf/815fbf725e476c105c9cec6275f94571.jpg',
          title: 'Наименование товара',
          description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: '10 000',
        },
        {
          id: 4,
          img: 'https://st4.depositphotos.com/3566499/21339/i/600/depositphotos_213391924-stock-photo-cute-brown-dog-sitting-isolated.jpg',
          title: 'Наименование товара',
          description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: '12 000',
        },
        {
          id: 5,
          img: 'https://super01.ru/pictures/product/big/56871_big.png',
          title: 'Наименование товара',
          description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: '10 000',
        },
        {
          id: 6,
          img: 'https://content2.rozetka.com.ua/goods/images/big/175590351.png',
          title: 'Наименование товара',
          description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: '10 000',
        },
      ],
      selectSort: "",
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'price', name: 'По цене min'},
        {value: 'price', name: 'По цене max'},
      ]
    }
  },
  methods: {
    createProduct(cart) {
      this.carts.push(cart);
    },
    deleteProduct(cart) {
      this.carts = this.carts.filter(c => c.id !== cart.id)
    }
  },
  computed: {
    cartsSorted() {
      return [...this.carts].sort((a, b) => {
          return a[this.selectSort]?.localeCompare(b[this.selectSort])
      })
    }
  }
}

</script>