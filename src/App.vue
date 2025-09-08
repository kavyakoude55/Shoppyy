

<template>
  <div class="min-h-screen flex flex-col">

    <Header class="sticky top-0 z-50" />


    <main class="flex-1">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

</script>
