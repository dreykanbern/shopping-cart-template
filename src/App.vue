<template>

<div class="container">
  <div class="header-cart">
      <h1 class="header-cart__h1">Добавление товара</h1>
      <button class="header-cart__sort-btn">
        По умолчанию
      </button>
  </div>
  <div class="content-cart">
    <form class="content-cart__creating-cart" @submit.prevent>
        <label class="creating-cart__label">Наименование товара</label>
        <input
            v-model="title"
            type="text"
            class="creating-cart__input"
            placeholder="Введите наименование товара"
        >
        <label class="creating-cart__label">Описание товара</label>
        <!-- Do not use the height attribute => use rows -->
        <textarea
            v-model="description"
            rows="5"
            class="creating-cart__input"
            placeholder="Введите описание товара"
        ></textarea>
        <label class="creating-cart__label">Ссылка на изображение товара</label>
        <input
            v-model="img"
            type="text"
            class="creating-cart__input"
            placeholder="Введите ссылку"
        >
        <label class="creating-cart__label">Цена товара</label>
        <input
            v-model="price"
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
    <div class="content-cart__items-wrapper">
      <div
          class="items-wrapper__content-item"
          v-for="cart in carts"
          :key="cart.id"
          @mouseenter="deleteProduct"
      >
        <img class="content-item__img" :src="cart.img" alt="default image">
        <button
            class="content-item__delete-btn"
            @click="deleteProduct"
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
    </div>
  </div>
</div>

</template>

<style lang='scss' src="@/scss/app.scss"></style>

<script>
export default {
  data() {
    return {
      carts: [
        {id: 1,
          img:'https://klike.net/uploads/posts/2019-06/1560329641_2.jpg',
          title: 'Наименование товара',
          description:'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price:'10 500',
        },
        {id: 2,
          img:'https://avatarko.ru/img/kartinka/2/igrushka_lyagushka_1402.jpg',
          title: 'Наименование товара',
          description:'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price:'10 000',
        },
        {id: 3,
          img:'https://i.pinimg.com/originals/81/5f/bf/815fbf725e476c105c9cec6275f94571.jpg',
          title: 'Наименование товара',
          description:'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price:'10 000',
        },
        {id: 4,
          img:'https://st4.depositphotos.com/3566499/21339/i/600/depositphotos_213391924-stock-photo-cute-brown-dog-sitting-isolated.jpg',
          title: 'Наименование товара',
          description:'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price:'12 000',
        },
        {id: 5,
          img:'https://super01.ru/pictures/product/big/56871_big.png',
          title: 'Наименование товара',
          description:'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price:'10 000',
        },
        {id: 6,
          img:'https://content2.rozetka.com.ua/goods/images/big/175590351.png',
          title: 'Наименование товара',
          description:'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price:'10 000',
        },
      ],
      title: "",
      description: "",
      price:"",
      img: "",
    }
  },
  methods: {
    createProduct() {
      const newProduct = {
        id: Date.now(),
        title: this.title,
        description: this.description,
        price: this.price,
        img: this.img,
      }
      this.carts.push(newProduct);
      this.title = "";
      this.description = "";
      this.price = "";
      this.img = "";
    },
    deleteProduct(cart) {
      this.carts = this.carts.filter(c => c.id !== cart.id)
    }
  }
}

</script>