import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MyForm from "@/components/MyForm/MyForm";
import MyProducts from "@/components/MyProducts/MyProducts";
import ProductsItem from "@/components/ProdutsItem/ProductsItem";

createApp(App)
    .use(ProductsItem)
    .use(MyProducts)
    .use(MyForm)
    .use(store)
    .use(router)
    .mount('#app')
