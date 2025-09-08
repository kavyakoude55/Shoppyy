<template>
  <div class="border rounded-lg p-4">
    <img :src="product.image" :alt="product.name" class="w-32 h-32 object-cover" />
    <h3 class="mt-2 font-semibold">{{ product.name }}</h3>
    <p class="text-sm text-gray-500">{{ product.price }}</p>

    <!-- Add to Wishlist -->
    <button 
      class="mt-2 px-3 py-1 bg-pink-600 text-white rounded hover:bg-pink-500"
      @click="addToWishlist(product)"
    >
      Add to Wishlist
    </button>
  </div>
</template>

<script setup>
import { useWishlistStore } from '../src/stores/WishList'

const wishlist = useWishlistStore()

const props = defineProps({ 
  product: Object
})



function addToWishlist(product) {
  wishlist.addToWishlist(product)
}
</script>
