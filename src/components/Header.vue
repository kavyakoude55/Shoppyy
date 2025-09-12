<template>
  <header class="sticky top-0 z-50 transition-all duration-300">
    <section
      :class="[
        'w-full',
        isScrolled ? 'bg-gray-800 backdrop-blur-xl shadow-md' : 'bg-gray-700'
      ]"
    >
      <div class="flex items-center justify-between px-4 py-3 md:px-8">
        <!-- Logo -->
        <a href="/" class="text-2xl font-extrabold text-pink-600 hover:text-pink-300">
          Shoppy
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex gap-6 items-center space-x-8" aria-label="Main navigation">
          <router-link
            v-for="item in navItems"
            :key="item.id"
            :to="'/' + item.link"
            class="transition-colors duration-200 text-pink-100 hover:text-pink-400"
          >
            {{ item.name }}
          </router-link>
        </nav>

        <!-- Right Section: Login / User / Cart / Wishlist -->
        <div class="flex items-center space-x-4 relative">
          <!-- Cart -->
          <router-link to="/cart" class="relative p-2 text-gray-200 hover:text-pink-400" aria-label="cart">
            <Icon icon="mdi:cart-outline" class="w-5 h-5" />
            <span
              v-if="cart.itemCount > 0"
              class="absolute -top-1 -right-1 bg-pink-600 text-white text-xs font-bold rounded-full px-1.5"
            >
              {{ cart.itemCount }}
            </span>
          </router-link>

          <!-- Wishlist -->
          <router-link to="/wishlist" class="relative p-2 text-gray-200 hover:text-pink-400" aria-label="wishlist">
            <Icon icon="mdi:heart-outline" class="w-5 h-5" />
            <span
              v-if="wishlist.itemCount > 0"
              class="absolute -top-1 -right-1 bg-pink-600 text-white text-xs font-bold rounded-full px-1.5"
            >
              {{ wishlist.itemCount }}
            </span>
          </router-link>

          <!-- User Dropdown -->
          <div class="relative">
            <button @click="toggleUserDropdown" class="p-2 text-gray-200 hover:text-pink-400" aria-label="account">
              <Icon icon="mdi:account-outline" class="w-5 h-5" />
            </button>

            <div
              v-if="isUserDropdownOpen"
              class="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50"
            >
              <template v-if="user">
                <div class="flex flex-col items-center px-4 py-2 border-b">
                  <img
                    v-if="user.photoURL"
                    :src="user.photoURL"
                    alt="Profile"
                    class="w-12 h-12 rounded-full mb-2"
                  />
                  <span class="font-medium text-gray-800">{{ user.displayName || user.email }}</span>
                  <span class="text-xs text-gray-500">{{ user.email }}</span>
                </div>
                <button
                  @click="handleLogout"
                  class="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                >
                  Logout
                </button>
              </template>

              <template v-else>
                <router-link to="/login" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Login</router-link>
                <router-link to="/signup" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Signup</router-link>
              </template>
            </div>
          </div>

          <!-- Mobile menu toggle -->
          <button
            class="md:hidden p-2 text-gray-200 hover:text-pink-400"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
          >
            <Icon v-if="!isMobileMenuOpen" icon="mdi:menu" class="w-6 h-6" />
            <Icon v-else icon="mdi:close" class="w-6 h-6" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMobileMenuOpen" class="md:hidden bg-white shadow-md rounded-b-lg px-6 py-4 space-y-4">
        <form role="search" aria-label="Mobile search">
          <label class="relative w-full">
            <input
              type="search"
              placeholder="search..."
              class="w-full px-3 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <button type="submit" class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-pink-500">
              <Icon icon="mdi:magnify" class="w-4 h-4" />
            </button>
          </label>
        </form>

        <div class="flex flex-col space-y-3 text-center">
          <router-link
            v-for="item in navItems"
            :key="item.id"
            :to="'/' + item.link"
            class="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors duration-200"
            @click="isMobileMenuOpen = false"
          >
            {{ item.name }}
          </router-link>

          <div class="flex flex-col items-center gap-2 mt-2">
            <template v-if="user">
              <img v-if="user.photoURL" :src="user.photoURL" class="w-10 h-10 rounded-full mb-1" />
              <span class="text-gray-700">{{ user.email }}</span>
              <button @click="handleLogout" class="bg-red-500 text-white px-4 py-1 rounded mt-1">Logout</button>
            </template>
            <template v-else>
              <router-link to="/login" class="bg-green-500 text-white px-4 py-1 rounded mb-1">Login</router-link>
              <router-link to="/signup" class="bg-green-500 text-white px-4 py-1 rounded">Signup</router-link>
            </template>
          </div>
        </div>
      </div>
    </section>
  </header>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { useCartStore } from "../stores/Cart";
import { useWishlistStore } from "../stores/WishList";
import { useAuth } from "../composables/useAuth";

const router = useRouter();
const { user, logout, initAuth } = useAuth();
initAuth();

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const isUserDropdownOpen = ref(false);

const navItems = [
  { id: 1, name: "Home", link: "home" },
  { id: 2, name: "Categories", link: "categories" },
  { id: 3, name: "Products", link: "products" },
  { id: 4, name: "Offers", link: "offers" },
  { id: 5, name: "About", link: "about" },
  { id: 6, name: "Contact", link: "contact" },
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

// Stores
const cart = useCartStore();
const wishlist = useWishlistStore();

// Handlers
const handleLogout = () => {
  logout();
  router.push("/login");
};

const toggleUserDropdown = () => {
  isUserDropdownOpen.value = !isUserDropdownOpen.value;
};
</script>
