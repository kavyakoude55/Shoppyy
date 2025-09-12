<script setup>
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "vue-router";

const props = defineProps({
  product: Object
});

const authStore = useAuthStore();
const router = useRouter();

function addToWishlist(product) {
  if (!authStore.isLoggedIn()) {
    alert("You must login to add products to wishlist.");
    router.push("/login");
    return;
  }
  console.log("Added to wishlist:", product);
}

function addToCart(product) {
  if (!authStore.isLoggedIn()) {
    alert("You must login to add products to cart.");
    router.push("/login");
    return;
  }
  console.log("Added to cart:", product);
}
</script>

<template>
  <div class="border rounded-xl p-4 shadow-md">
    <h2 class="text-lg font-bold">{{ product.name }}</h2>
    <p class="text-gray-500">₹{{ product.price }}</p>
    <div class="flex gap-2 mt-3">
      <button class="bg-blue-500 text-white px-3 py-1 rounded"
              @click="addToCart(product)">Add to Cart</button>
      <button class="bg-pink-500 text-white px-3 py-1 rounded"
              @click="addToWishlist(product)">❤️ Wishlist</button>
    </div>
  </div>
</template>
