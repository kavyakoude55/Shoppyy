<template>
  <section class="py-12 bg-gray-50" id="products">
    <main class="container mx-auto px-4">

      <!-- Header with Title + Intro -->
      <header class="mb-10 text-center">
        <h2 class="text-3xl font-bold text-amber-900">Our Featured Products</h2>
        <p class="text-gray-600 mt-2 max-w-2xl mx-auto">
          Explore our wide range of collections. Choose from categories and find your favorites.
        </p>
      </header>

      <!-- Layout: Sidebar (categories) + Products -->
      <section class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        <!-- Sidebar: Categories -->
        <aside class="lg:col-span-1 bg-white shadow-md rounded-lg p-6 h-fit">
          <h3 class="font-bold text-lg text-gray-800 mb-4">Categories</h3>
          <ul class="space-y-3">

            <li v-for="cat in categories" :key="cat">
              <button
                @click="selectedCategory = cat"
                :class="[
                  'w-full text-left px-3 py-2 rounded-md transition',
                  selectedCategory === cat
                    ? 'bg-pink-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-pink-100'
                ]"
              >
                {{ cat }}
              </button>
            </li>
          </ul>
        </aside>

        <!-- Products Grid -->
        <section class="lg:col-span-3">
         <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <li v-for="product in visibleProducts" :key="product.id"
                class="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:scale-105"> 
              <article>
                <figure class="relative">
                  <img :src="product.Image" :alt="product.name" class="w-full h-64 object-cover" />
                  <figcaption v-if="product.discount > 0"
                              class="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    -{{ product.discount }}%
                  </figcaption>
                  <button @click="toggleWishList(product)"
                          class="absolute top-3 left-3 p-2 bg-white rounded-full shadow-md hover:bg-pink-100 text-gray-700"
                          aria-label="Add to wishlist">
                 <Icon icon="mdi:heart-outline" width="18" height="18" />
                  </button>
                </figure>

                <section class="p-4">
                  <!-- Rating -->
                  <div class="flex items-center mb-2">
                    <Icon v-for="i in 5" :key="i" icon="line-md:star-alt-filled" width="16" height="16"
                          :class="i <= Math.floor(product.rating) ? 'text-yellow-500' : 'text-gray-300'" />
                    <span class="text-sm text-gray-500 ml-1">({{ product.rating }})</span>
                  </div>

                  <!-- Title -->
                  <h3 class="text-lg font-semibold text-gray-800 mb-1">{{ product.name }}</h3>

                  <!-- Price + Cart -->
                  <footer class="flex items-center justify-between">
                    <div>
                      <span class="text-lg font-bold text-pink-600">
                        ${{ (product.price * (1 - product.discount / 100)).toFixed(2) }}
                      </span>
                      <span v-if="product.discount > 0"
                            class="text-sm text-gray-600 line-through ml-2">
                        ${{ product.price.toFixed(2) }}
                      </span>
                    </div>

                    <button @click="add(product)"
                            class="p-2 bg-pink-950 rounded-full text-white hover:bg-pink-700 transition-colors"
                            aria-label="Add to Cart">
                      <Icon icon="icon-park-solid:shopping" width="18" height="18" />
                    </button>
                  </footer>
                </section>
              </article>
            </li>
          </ul>
        </section>

      </section>
    </main>
  </section>
</template>
<script setup>

import {ref, computed, onMounted, onBeforeUnmount} from 'vue';
import { useCartStore } from '../stores/Cart';
import { useWishlistStore } from '../stores/WishList';

import women1 from '../assets/women/women1.jpeg';
import perfume1 from '../assets/perfume/perfume1.jpg';
import women2 from '../assets/women/women2.jpeg';
import perfume2 from '../assets/perfume/perfume2.jpg';
import women3 from '../assets/women/women3.jpeg';
import women4 from '../assets/women/women4.jpeg';
import women5 from '../assets/women/women5.jpeg';
import women6 from '../assets/women/women6.jpeg';
import women7 from '../assets/women/women7.jpeg';
import women8 from '../assets/women/women8.jpeg';
import women9 from '../assets/women/women9.jpeg';
import women10 from '../assets/women/women10.jpeg';
import women11 from '../assets/women/women11.jpeg';
import women12 from '../assets/women/women12.jpeg';
import women13 from '../assets/women/women13.jpeg';
import women14 from '../assets/women/women14.jpeg';
import women15 from '../assets/women/women15.jpeg';
import women16 from '../assets/women/women15.jpeg';
import women17 from '../assets/women/women15.jpeg';
import women18 from '../assets/women/women15.jpeg';
import men1 from '../assets/men/men1.jpeg';
import men2 from '../assets/men/men2.jpeg';
import men3 from '../assets/men/men3.jpeg';
import men4 from '../assets/men/men4.jpeg';
import perfume3 from '../assets/perfume/perfume3.jpg';



const productsPerPage = ref(4)

const products = ref([
    {id: 1, name: 'Floral', price: 99.99, rating: 4.5, Image: women1, discount: 20, category: "Women"},
    {id: 2, name: 'Floral', price: 99.99, rating: 4.5, Image: women2, discount: 20, category: "Women"},
    {id: 3, name: 'Floral', price: 99.99, rating: 4.5, Image: women3, discount: 20, category: "Women"},
    {id: 4, name: 'Floral', price: 99.99, rating: 4.5, Image: women4, discount: 20, category: "Women"},
    {id: 5, name: 'Floral', price: 99.99, rating: 4.5, Image: women5, discount: 20, category: "Women"},
    {id: 6, name: 'Floral', price: 99.99, rating: 4.5, Image: women6, discount: 20, category: "Women"},
    {id: 7, name: 'Flowry', price: 99.99, rating: 4.8, Image: perfume1, discount: 15, category: "Perfume"},
    {id: 8, name: 'Levrey', price: 99.99, rating: 4.2, Image: women7, discount: 25, category: "Women"},
    {id: 9, name: 'Floral', price: 99.99, rating: 4.5, Image: kid1, discount: 20, category: "Kids"},
    {id: 10, name: 'Floral', price: 99.99, rating: 4.5, Image: kid2, discount: 20, category: "Kids"},
    {id:11, name: 'lawrey', price: 99.99, rating: 4.3, Image: perfume2, discount: 27, category: "Perfume"},
    {id: 12, name: 'polaru', price: 99.99, rating: 4.9, Image: women8, discount: 12, category: "Women"},
    {id: 13, name: 'Floral', price: 99.99, rating: 4.5, Image: women9, discount: 20, category: "Women"},
    {id: 14, name: 'Floral', price: 99.99, rating: 4.5, Image: women10, discount: 20, category: "Women"},
    {id: 15, name: 'pooluru', price: 99.99, rating: 4.7, Image: perfume3, discount: 18, category: "Perfume"},
    {id: 16, name: 'Floral', price: 99.99, rating: 4.5, Image: men1, discount: 20, category: "Men"},
    {id: 17, name: 'Floral', price: 99.99, rating: 4.5, Image: men2, discount: 20, category: "Men"},
    {id: 18, name: 'Floral', price: 99.99, rating: 4.5, Image: accesory1, discount: 20, category: "Accesories"},
    {id: 19, name: 'Floral', price: 99.99, rating: 4.5, Image: bag1, discount: 20, category: "Bags"},
    {id: 20, name: 'Floral', price: 99.99, rating: 4.5, Image: men3, discount: 20, category: "Men"},
    {id: 21, name: 'Floral', price: 99.99, rating: 4.5, Image: jwellery2, discount: 20, category: "Jwellery"},
    {id: 22, name: 'Floral', price: 99.99, rating: 4.5, Image: footwear1, discount: 20, category: "Footwear"},
    {id: 23, name: 'Floral', price: 99.99, rating: 4.5, Image: footwear2, discount: 20, category: "Footwear"},
    {id: 24, name: 'Floral', price: 99.99, rating: 4.5, Image: men4, discount: 20, category: "Men"},
    {id: 25, name: 'Floral', price: 99.99, rating: 4.5, Image: women11, discount: 20, category: "Women"},
    {id: 26, name: 'Floral', price: 99.99, rating: 4.5, Image: women12, discount: 20, category: "Women"},
    {id: 27, name: 'Floral', price: 99.99, rating: 4.5, Image: women13, discount: 20, category: "Women"},
    {id: 28, name: 'Floral', price: 99.99, rating: 4.5, Image: women14, discount: 20, category: "Women"},
    {id: 29, name: 'Floral', price: 99.99, rating: 4.5, Image: women15, discount: 20, category: "Women"},
    {id: 30, name: 'Floral', price: 99.99, rating: 4.5, Image: women16, discount: 20, category: "Women"},
    {id: 31, name: 'Floral', price: 99.99, rating: 4.5, Image: women17, discount: 20, category: "Women"},
    {id: 32, name: 'Floral', price: 99.99, rating: 4.5, Image: women18, discount: 20, category: "Women"},

    

])






const categories = ref(["All", "Women", "Men", "Kids", "Footwear", "Festive", "Perfume", "Jwellery", "Accesories", "Bags"]);

const selectedCategory = ref("All");
const currentSlide = ref(0);


// 👉 your logic goes here
const filteredProducts = computed(() => {
  if (selectedCategory.value === "All") return products.value;
  return products.value.filter((p) => p.category === selectedCategory.value);
});

const totalSlides = computed(() =>
  Math.ceil(filteredProducts.value.length / productsPerPage.value)
);

const visibleProducts = computed(() => {
  const start = currentSlide.value * productsPerPage.value;
  return filteredProducts.value.slice(start, start + productsPerPage.value);
});

onMounted(() => {
  if (route.query.category) {
    selectedCategory.value = route.query.category;
  }
});


watch(() => route.query.category, (newCat) => {
  if (newCat) selectedCategory.value = newCat;
}, { immediate: true });

import { useRoute } from 'vue-router';

const route = useRoute();

const handleResize = () => {
    if(window.innerWidth < 640){
        productsPerPage.value = 1;
    }
    else if (window.innerWidth < 768){
        productsPerPage.value = 2;
    }
    else if (window.innerWidth <1024){
        productsPerPage.value = 3;
    }
    else{
        productsPerPage.value = 4;
    }
}
onMounted(() => {
    handleResize();
    window.addEventListener('resize',handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})


const cart = useCartStore()
const wishlist = useWishlistStore()

function add(product) {
  cart.addToCart(product)
}


function toggleWishList(product) {
    wishlist.addToWishList(product)
}


</script>



