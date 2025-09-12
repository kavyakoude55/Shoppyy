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

import {ref, computed, onMounted, onBeforeUnmount, watch} from 'vue';
import { useCartStore } from '../stores/Cart';
import { useWishlistStore } from '../stores/WishList';
import { Icon } from '@iconify/vue';


import { useRoute } from 'vue-router';

const route = useRoute();

import women1 from '../assets/women/women1.jpeg';
import perfume1 from '../assets/perfume/perfume1.jpg';
import women2 from '../assets/women/women2.jpeg';
import perfume2 from '../assets/perfume/perfume2.jpg';
import women3 from '../assets/women/women3.jpeg';
import kid1 from '../assets/kids/kids1.jpeg';

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
import women16 from '../assets/women/women16.jpeg';
import women17 from '../assets/women/women17.jpeg';
import women18 from '../assets/women/women18.jpeg';
import men1 from '../assets/men/men1.jpeg';
import men2 from '../assets/men/men2.jpeg';
import men3 from '../assets/men/men3.jpeg';
import men4 from '../assets/men/men4.jpeg';
import perfume3 from '../assets/perfume/perfume3.jpg';
import perfume4 from '../assets/perfume/perfume4.jpg';
import perfume5 from '../assets/perfume/perfume5.jpg';
import perfume6 from '../assets/perfume/perfume6.jpg';
import perfume7 from '../assets/perfume/perfume7.jpeg';
import perfume8 from '../assets/perfume/perfume8.jpeg';
import perfume9 from '../assets/perfume/perfume9.jpeg';
import perfume10 from '../assets/perfume/perfume10.jpeg';
import perfume11 from '../assets/perfume/perfume11.jpeg';
import perfume12 from '../assets/perfume/perfume12.jpeg';
import perfume13 from '../assets/perfume/perfume13.jpeg';
import perfume14 from '../assets/perfume/perfume14.jpg';
import kids1 from '../assets/kids/kids1.jpeg';
import kids2 from '../assets/kids/kids2.jpeg';  
import kids3 from '../assets/kids/kids3.jpeg';
import kids4 from '../assets/kids/kids4.jpeg';  
import kids5 from '../assets/kids/kids5.jpeg';
import kids6 from '../assets/kids/kids6.jpeg';
import kids7 from '../assets/kids/kids7.jpeg';
import kids8 from '../assets/kids/kids8.jpeg';
import kids9 from '../assets/kids/kids9.jpeg';
import kids10 from '../assets/kids/kids10.jpeg';
import kids11 from '../assets/kids/kids11.jpeg';
import kids12 from '../assets/kids/kids12.jpeg';

import footwear1 from '../assets/footwear/footwear1.jpeg';
import footwear2 from '../assets/footwear/footwear2.jpeg';
import footwear3 from '../assets/footwear/footwear3.jpeg';
import footwear4 from '../assets/footwear/footwear4.jpeg';
import footwear5 from '../assets/footwear/footwear5.jpeg';
import footwear6 from '../assets/footwear/footwear6.jpeg';
import footwear7 from '../assets/footwear/footwear7.jpeg';
import footwear8 from '../assets/footwear/footwear8.jpeg';
import footwear9 from '../assets/footwear/footwear9.jpeg';
import footwear10 from '../assets/footwear/footwear10.jpeg';


const productsPerPage = ref(4)

const products = ref([
    {id: 9, name: 'Levrey', price: 99.99, rating: 4.2, Image: kid1, discount: 25, category: "kids"},
    
    {id: 16, name: 'Floral', price: 99.99, rating: 4.5, Image: men1, discount: 20, category: "Men"},
    {id: 17, name: 'Floral', price: 99.99, rating: 4.5, Image: men2, discount: 20, category: "Men"},
 

    {id: 20, name: 'Floral', price: 99.99, rating: 4.5, Image: men3, discount: 20, category: "Men"},

    {id: 24, name: 'Floral', price: 99.99, rating: 4.5, Image: men4, discount: 20, category: "Men"},
    
    
    // women
    {id: 1, name: 'Floral', price: 99.99, rating: 4.5, Image: women1, discount: 20, category: "Women"},
    {id: 2, name: 'Floral', price: 99.99, rating: 4.5, Image: women2, discount: 20, category: "Women"},
    {id: 3, name: 'Floral', price: 99.99, rating: 4.5, Image: women3, discount: 20, category: "Women"},
    {id: 4, name: 'Floral', price: 99.99, rating: 4.5, Image: women4, discount: 20, category: "Women"},
    {id: 5, name: 'Floral', price: 99.99, rating: 4.5, Image: women5, discount: 20, category: "Women"},
    {id: 6, name: 'Floral', price: 99.99, rating: 4.5, Image: women6, discount: 20, category: "Women"},
    {id: 8, name: 'Levrey', price: 99.99, rating: 4.2, Image: women7, discount: 25, category: "Women"},
    {id: 12, name: 'polaru', price: 99.99, rating: 4.9, Image: women8, discount: 12, category: "Women"},
    {id: 13, name: 'Floral', price: 99.99, rating: 4.5, Image: women9, discount: 20, category: "Women"},
    {id: 14, name: 'Floral', price: 99.99, rating: 4.5, Image: women10, discount: 20, category: "Women"},
    
    {id: 25, name: 'Floral', price: 99.99, rating: 4.5, Image: women11, discount: 20, category: "Women"},
    {id: 26, name: 'Floral', price: 99.99, rating: 4.5, Image: women12, discount: 20, category: "Women"},
    {id: 27, name: 'Floral', price: 99.99, rating: 4.5, Image: women13, discount: 20, category: "Women"},
    {id: 28, name: 'Floral', price: 99.99, rating: 4.5, Image: women14, discount: 20, category: "Women"},
    {id: 29, name: 'Floral', price: 99.99, rating: 4.5, Image: women15, discount: 20, category: "Women"},
    {id: 30, name: 'Floral', price: 99.99, rating: 4.5, Image: women16, discount: 20, category: "Women"},
    {id: 31, name: 'Floral', price: 99.99, rating: 4.5, Image: women17, discount: 20, category: "Women"},
    {id: 32, name: 'Floral', price: 99.99, rating: 4.5, Image: women18, discount: 20, category: "Women"},


    //kids

    {id: 10, name: 'Levrey', price: 99.99, rating: 4.2, Image: kids1, discount: 25, category: "Kids"},
    {id: 18, name: 'Levrey', price: 99.99, rating: 4.2, Image: kids2, discount: 25, category: "Kids"},
    {id: 19, name: 'Levrey', price: 99.99, rating: 4.2, Image: kids3, discount: 25, category: "Kids"},
    {id: 21, name: 'Levrey', price: 99.99, rating: 4.2, Image: kids4, discount: 25, category: "Kids"},
    {id: 22, name: 'Levrey', price: 99.99, rating: 4.2, Image: kids5, discount: 25, category: "Kids"},
    {id: 23, name: 'Levrey', price: 99.99, rating: 4.2, Image: kids6, discount: 25, category: "Kids"},
    {id: 33, name: 'Levrey', price: 99.99, rating: 4.2, Image: kids7, discount: 25, category: "Kids"},          
    {id: 34, name: 'Levrey', price: 99.99, rating: 4.2, Image: kids8, discount: 25, category: "Kids"},
    {id: 35, name: 'Levrey', price: 99.99, rating: 4.2, Image: kids9, discount: 25, category: "Kids"},
    {id: 36, name: 'Levrey', price: 99.99, rating: 4.2, Image: kids10, discount: 25, category: "Kids"},
    {id: 37, name: 'Levrey', price: 99.99, rating: 4.2, Image: kids11, discount: 25, category: "Kids"},
    {id: 38, name: 'Levrey', price: 99.99, rating: 4.2, Image: kids12, discount: 25, category: "Kids"},

    //footwear

    {id: 39, name: 'Levrey', price: 99.99, rating: 4.2, Image: footwear1, discount: 25, category: "Footwear"},
    {id: 40, name: 'Levrey', price: 99.99, rating: 4.2, Image: footwear2, discount: 25, category: "Footwear"},
    {id: 41, name: 'Levrey', price: 99.99, rating: 4.2, Image: footwear3, discount: 25, category: "Footwear"},
    {id: 42, name: 'Levrey', price: 99.99, rating: 4.2, Image: footwear4, discount: 25, category: "Footwear"},  
    {id: 43, name: 'Levrey', price: 99.99, rating: 4.2, Image: footwear5, discount: 25, category: "Footwear"},
    {id: 44, name: 'Levrey', price: 99.99, rating: 4.2, Image: footwear6, discount: 25, category: "Footwear"},
    {id: 45, name: 'Levrey', price: 99.99, rating: 4.2, Image: footwear7, discount: 25, category: "Footwear"},
    {id: 46, name: 'Levrey', price: 99.99, rating: 4.2, Image: footwear8, discount: 25, category: "Footwear"},
    {id: 47, name: 'Levrey', price: 99.99, rating: 4.2, Image: footwear9, discount: 25, category: "Footwear"},
    {id: 48, name: 'Levrey', price: 99.99, rating: 4.2, Image: footwear10, discount: 25, category: "Footwear"},

    //perfume
    
    {id:11, name: 'lawrey', price: 99.99, rating: 4.3, Image: perfume2, discount: 27, category: "Perfume"},
    {id: 15, name: 'pooluru', price: 99.99, rating: 4.7, Image: perfume3, discount: 18, category: "Perfume"},
    {id: 7, name: 'Flowry', price: 99.99, rating: 4.8, Image: perfume1, discount: 15, category: "Perfume"},
    {id: 49, name: 'Flowry', price: 99.99, rating: 4.8, Image: perfume4, discount: 15, category: "Perfume"},
    {id: 50, name: 'Flowry', price: 99.99, rating: 4.8, Image: perfume5, discount: 15, category: "Perfume"},
    {id: 51, name: 'Flowry', price: 99.99, rating: 4.8, Image: perfume6, discount: 15, category: "Perfume"},
    {id: 52, name: 'Flowry', price: 99.99, rating: 4.8, Image: perfume7, discount: 15, category: "Perfume"},
    {id: 53, name: 'Flowry', price: 99.99, rating: 4.8, Image: perfume8, discount: 15, category: "Perfume"},
    {id: 54, name: 'Flowry', price: 99.99, rating: 4.8, Image: perfume9, discount: 15, category: "Perfume"},
    {id: 55, name: 'Flowry', price: 99.99, rating: 4.8, Image: perfume10, discount: 15, category: "Perfume"},
    {id: 56, name: 'Flowry', price: 99.99, rating: 4.8, Image: perfume11, discount: 15, category: "Perfume"},
    {id: 57, name: 'Flowry', price: 99.99, rating: 4.8, Image: perfume12, discount: 15, category: "Perfume"},
    {id: 58, name: 'Flowry', price: 99.99, rating: 4.8, Image: perfume13, discount: 15, category: "Perfume"},
    {id: 59, name: 'Flowry', price: 99.99, rating: 4.8, Image: perfume14, discount: 15, category: "Perfume"},

])






const categories = ref(["All", "Women", "Men", "Kids", "Footwear", "Festive", "Perfume", "Jwellery", "Accesories", "Bags"]);

const selectedCategory = ref("All");
const currentSlide = ref(0);


const filteredProducts = computed(() => {
  if (!products.value) return []

  if (selectedCategory.value === "All") return products.value

  return products.value.filter(
    product => product.category === selectedCategory.value
  )
})



const visibleProducts = computed(() => {

  if (selectedCategory.value === "All") {
    return filteredProducts.value;
  }


  const start = currentSlide.value * productsPerPage.value;
  return filteredProducts.value.slice(start, start + productsPerPage.value);
});

onMounted(() => {
  if (route.query?.category) {
    selectedCategory.value = String(route.query.category)
  }
})


watch(() => route.query.category, (newCat) => {
  if (newCat) selectedCategory.value = newCat;
}, { immediate: true });



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
        productsPerPage.value = 6;
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



