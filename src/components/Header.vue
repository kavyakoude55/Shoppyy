<template>
  <header class="sticky top-0 z-50 transition-all duration-300">
    <section
      :class="[
        'w-full',
        isScrolled
          ? 'bg-gray-800 backdrop-blur-xl shadow-md'
          : 'bg-gray-700'
      ]"
    >
      <div class="flex items-center justify-between px-4 py-3 md:px-8">
        <a
          href="/"
          class="text-2xl font-extrabold text-pink-600 hover:text-pink-300"
        >
          Shoppy
        </a>

        <nav
          class="hidden md:flex gap-6 items-center  space-x-8"
          aria-label="Main navigation"
        >
          <router-link
            v-for="item in navItems"
            :key="item.id"
            :to="'/' + item.link"
            class="transition-colors duration-200 text-pink-100 hover:text-pink-400"
          >
            {{ item.name }}
          </router-link>
        </nav>

        <div class="flex items-center space-x-4">
          <!-- Search -->
          <form
            class="hidden md:block w-48 lg:w-64"
            role="search"
            aria-label="Site search"
          >
            <label class="relative w-full">
              <input
                type="search"
                placeholder="search..."
                class="w-full px-3 py-2 text-xs border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <button
                type="submit"
                class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-pink-400"
              >
                <Icon icon="mdi:magnify" class="w-4 h-4" />
              </button>
            </label>
          </form>

    
<router-link to="/wishlist" class="relative p-2 text-gray-200 hover:text-pink-400" aria-label="wishlist">
  <Icon icon="mdi:heart-outline" class="w-5 h-5" />
  <span
    v-if="wishlist.itemCount > 0"
    class="absolute -top-1 -right-1 bg-pink-600 text-white text-xs font-bold rounded-full px-1.5"
  >
    {{ wishlist.itemCount }}
  </span>
</router-link>

 <router-link to="/cart" class="relative p-2 text-gray-200 hover:text-pink-400" aria-label="cart">
          <Icon icon="mdi:cart-outline" class="w-5 h-5" />
          <span
            v-if="cart.itemCount > 0"
            class="absolute -top-1 -right-1 bg-pink-600 text-white text-xs font-bold rounded-full px-1.5"
          >
            {{ cart.itemCount }}
          </span>
        </router-link>
          <!-- Account -->
          <button class="p-2 text-gray-200 hover:text-pink-400" aria-label="account">
            <Icon icon="mdi:account-outline" class="w-5 h-5" />
          </button>

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
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden bg-white shadow-md rounded-b-lg px-6 py-4 space-y-4"
      >
        <form role="search" aria-label="Mobile search">
          <label class="relative w-full">
            <input
              type="search"
              placeholder="search..."
              class="w-full px-3 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <button
              type="submit"
              class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-pink-500"
            >
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
        </div>
      </div>
    </section>
  </header>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { ref, onMounted, onUnmounted } from "vue";
import { useCartStore } from '../stores/Cart'
import { useWishlistStore } from '../stores/WishList'

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

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
</script>



