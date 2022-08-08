<template>

<div class="container">
  <div class="header-cart">
      <h1 class="header-cart__h1">Добавление товара</h1>
      <button class="header-cart__sort-btn">
        По умолчанию
      </button>
  </div>
  <div class="content-cart">
    <div class="content-cart__creating-cart">
      <label class="creating-cart__label">Наименование товара</label>
      <input
          class="creating-cart__input"
          placeholder="Введите наименование товара"
      >
      <label class="creating-cart__label">Описание товара</label>
      <!-- Do not use the height attribute => use rows -->
      <textarea
          rows="5"
          class="creating-cart__input"
          placeholder="Введите описание товара"
      ></textarea>
      <label class="creating-cart__label">Ссылка на изображение товара</label>
      <input
          class="creating-cart__input"
          placeholder="Введите ссылку"
      >
      <label class="creating-cart__label">Цена товара</label>
      <input
          class="creating-cart__input"
          placeholder="Введите цену"
      >
      <button class="creating-cart__btn non-active"
      >
        Добавить товар
      </button>
    </div>
    <div class="content-cart__items-wrapper">
      <div
          class="items-wrapper__content-item"
      >
        <img class="content-item__img" src="@/assets/img/default-image.png" alt="default image">
        <button class="content-item__delete-btn">
          <img class="delete-btn__img" src="@/assets/img/delete-icon.svg" alt="delete-icon">
        </button>
        <div class="content-item__text-attr">

          <h2 class="text-attr__h2">Наименование товара</h2>
          <p class="text-attr__description">
            Довольно-таки интересное описание товара в несколько строк.
            Довольно-таки интересное описание товара в несколько строк</p>
          <span class="text-attr__cost">10 000 руб.</span>

        </div>


      </div>
    </div>
  </div>
</div>

</template>

<style lang='scss' src="@/scss/app.scss"></style>

<script>
export default {

}

</script>