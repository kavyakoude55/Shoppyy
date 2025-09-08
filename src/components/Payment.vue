<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-amber-50 ">
    <h1 class="text-3xl font-bold text-gray-800 mb-6">Payment Options</h1>

    <div class="space-y-3 mb-6 w-full max-w-md">
      <div class="pb-2 ">
        <button disabled class="w-full bg-gray-300 text-gray-600 py-2 rounded-lg cursor-not-allowed mb-5">
        UPI
      </button>
      </div>
      <div class=" pb-2">
        <button disabled class="w-full bg-gray-300 text-gray-600 py-2 rounded-lg cursor-not-allowed mb-5">
        Card/Debit
      </button>
      </div>
      <div class="pb-2 mb-6">
        <button disabled class="w-full bg-gray-300 text-gray-600 py-2 rounded-lg cursor-not-allowed mb-5">
        Wallet
      </button>
      </div>
    </div>

    
    <div class="p-1">
      <label class="flex items-center space-x-2 cursor-pointer">
        <input
          type="radio"
          value="COD"
          v-model="selectedPayment"
          class="accent-pink-600"
        />
        <span class="text-lg text-black font-semibold">Cash on Delivery</span>
      </label>
    </div>

    
    <div class="p-2 w-100">
        <button
      @click="confirmOrder"
      :disabled="selectedPayment !== 'COD'"
      class="w-full max-w-md bg-pink-600 text-white py-2 px-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Confirm Order
    </button>

    </div>
    
    <div
      v-if="orderConfirmed"
      class="mt-6 p-4 bg-green-200 text-green-700 rounded-lg text-center w-full max-w-md"
    >
      🎉 Your order is confirmed! Thank you for shopping.
      <router-link to="/home" class="block mt-4 text-pink-600 underline">
        Back to Home
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCartStore } from "../stores/Cart";

const cart = useCartStore();
const selectedPayment = ref(null);
const orderConfirmed = ref(false);

function confirmOrder() {
  if (selectedPayment.value === "COD") {
    orderConfirmed.value = true;

    // Clear cart
    cart.clearCart(); 
  }
}
</script>
