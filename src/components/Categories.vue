<template>
   <section id="categories" class="py-16 scroll-mt-20 bg-white text-center">
        <div class="container mx-auto px-4">
            <div class="w-full flex flex-col items-center text-center mb-12">
                <h1 class="text-3xl font-bold text-amber-950 mb-3">Explore our Fashion collection</h1>
                <p class="text-lg text-gray-800 max-w-2xl mx-auto ">Discover Outfits that match your personality</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
                <div v-for="(category, index) in categories"
                :key="index" 
                class="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-115">
                
                <div class="h-64 overflow-hidden">
                    <img :src="category.image" alt="category.alt" 
                    class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
                </div>

                <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent">
                    <router-link 
                        :to="{ path: '/products', query: { category: category.slug } }"
                        class="text-xl font-semibold text-white hover:text-black"
                        >
                        {{ category.title }}
                    </router-link>
                    <p class="text-gray-200 mt-1 hover:text-black">{{ category.description }}</p>
                    </div>
                </div>
            </div>
            </div>
      
   </section>
</template>
<script setup>
import { ref } from 'vue';

import category1 from '../assets/women/women.jpeg';
import category2 from '../assets/men/men.jpeg';
import category3 from '../assets/kids/kids.jpeg';
import category4 from '../assets/footwear/Footwear.jpeg';
import category5 from '../assets/festive/Festive.jpeg';
import category6 from '../assets/jwellery/Jwellery.jpeg';
import category7 from '../assets/accesories/Accesories.jpeg';
import category9 from '../assets/bag/bag.jpeg'
import category8 from '../assets/perfume/perfume.jpg'



const categories = ref([
    {slug: "Women", image:category1, title: "Women's Collection", description: "Embrace the beauty with our outfits", alt: "Women's Collection"},
    {slug: "Men", image:category2, title: "Men's Collection", description: "Grab the attention with our Bold Oufits", alt: "Men's Collection"},
    {slug: "Kids", image:category3, title: "Kids Collection", description: "Cute little outfits for cute little kids", alt: "Kids Collection"},
    {slug: "Footwear", image:category4, title: "Footwear Collection", description: "Every Step with Confidence Towards the Success", alt: "Footwear Collection"},
    {slug: "Festive", image:category5 , title: "Festive Collection", description: "Celebrate Your festivals with our new collection", alt: "Festive Collection"},
    {slug: "Jwellery", image:category6, title: "Jwellery Collection", description: "Exclusive Jwellery collection must in your bag", alt: "Jwellery Collection"},
    {slug: "Accesories", image:category7, title: "Accesories Collection", description: "Complete your look with minimal Accesories", alt: "Accesories Collection"},
    {slug: "Perfume", image:category8, title: "Perfume Collection", description: "Shower your Fragrance wherever you go", alt: "Perfume Collection"},
    {slug: "Bags", image:category9, title: "Bag Collection", description: "Carry your Essentials with style", alt: "Bag Collection"},
])
</script>