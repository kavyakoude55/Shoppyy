<template>
  <div class="px-4 py-8 max-w-5xl mx-auto">
    <h1 class="text-3xl font-bold text-amber-950 mb-6">Your Wishlist</h1>

    <div v-if="wishlistItems.length === 0" class="text-center text-gray-500">
      <p>No items in your wishlist yet.</p>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        v-for="item in wishlistItems"
        :key="item.id"
        class="flex items-center justify-between bg-white shadow rounded-lg p-4"
      >
      
        <div class="flex items-center gap-2.5 space-x-4">
          <img
            :src="item.Image"
            :alt="item.name"
            class="w-20 h-20 object-cover rounded-lg"
          />
          <div>
            <h2 class="text-lg font-semibold text-gray-800">
              {{ item.name }}
            </h2>
            <p class="text-pink-600 font-bold">₹{{ item.price }}</p>
          </div>
        </div>

        <!-- Actions -->
        <div class="flex items-center gap-2 space-x-3">
          <button
            @click="addToCart(item)"
            class="px-3 py-1 bg-pink-500 text-white rounded-lg hover:bg-pink-600 text-sm"
          >
            Add to Cart
          </button>
          <button
            @click="removeFromWishlist(item.id)"
            class="px-3 py-1 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 text-sm"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useWishlistStore } from "../stores/WishList";
import { useCartStore } from "../stores/Cart";









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

const wishlistStore = useWishlistStore();
const cartStore = useCartStore()

const wishlistItems = wishlistStore.items;

const addToCart = (item) => {
  cartStore.addToCart(item);
  cartStore.addToCart(item.id);
  
};

const removeFromWishlist = (item) => {
  wishlistStore.removeFromWishList(item.id);
};
</script>
