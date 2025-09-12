<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from "@/composables/useAuth";

const email = ref("");
const password = ref("");
const errorMessage = ref("");
const router = useRouter();
const { login, error } = useAuth();

async function handleLogin() {
  try {
    await login(email.value, password.value);
    email.value = "";
    password.value = "";
    
    router.push("/"); 
  } catch (err) {
    console.error(err);
    errorMessage.value = error.value || "Login failed. Please try again.";
  }
}
</script>

<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-50">
    <div class="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
      <h1 class="text-2xl font-bold mb-4 text-center text-blue-950">Login</h1>
      <input v-model="email" type="email" placeholder="Email"
             class="border p-2 w-full rounded mb-3 text-blue-900" />
      <input v-model="password" type="password" placeholder="Password"
             class="border p-2 w-full rounded mb-3 text-blue-900" />
      <p v-if="errorMessage" class="text-red-500 text-sm mb-3">{{ errorMessage }}</p>
      <button @click="handleLogin"
              class="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded w-full">
        Login
      </button>
    </div>
  </div>
</template>
