<template>
<div>
    <div  class="bg-blue-50 text-gray-600 text-sm h-8 w-full flex items-center justify-center cursor-pointer hover:bg-blue-100 transition"
      @click="scrollToTop"
    >
      Back on Top
</div>
<div class="bg-gray-950 text-gray-300 pt-12 pb-6">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
                <h3 class="text-xl font-bold text-white mb-4">Fashion World</h3>
                <p class="mb-4">Your Premier destination for Exclusive Fashion Products across the World.</p>
                <div class="flex space-x-4 gap-3">
                    <a v-for="(social,index) in socialLinks"
                    :href="social.url" :key="index" 
                    class="text-gray-400 hover:text-white">
                    <Icon :icon="social.icon" class="w-5 h-5" />
                </a>
                </div>
            </div>

            <div>
                <h3 class="text-lg font-semibold text-white mb-4">Quick Links</h3>
                <ul class="space-y-2 gap-3">
                    <li v-for="(link, index) in quickLinks" :key="index">
                        <a href="#" class="hover:text-white transition">{{ link }}</a>
                    </li> 
                </ul>
            </div>


            <div>
                <h3 class="text-lg font-semibold text-white mb-4">News Letter</h3>
                <p class="mb-4">Subscribe our News Letter to get the latest Updates on our New Arrivals and Special Offers.</p>
                <form class="flex">
                    <input type="text" placeholder="Your Email Address" 
                    class="px-4 py-2 w-full rounded-lg focus:outline-none text-white border border-pink-500" required>
                    <button type="submit" class="bg-pink-900 hover:bg-pink-400 text-white px-4 py-2 
                    rounded-r transition">Subscribe</button>
                </form>

                <div class="mt-4 flex items-center">
                    <Icon icon="fa6-solid:envelope" class="w-5 h-5 mr-2" />
                    <span>. support@shoppy.com</span>
                </div>
            </div>
        </div>

        <div class="border-t border-gray-900 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {{ new Date().getFullYear() }} Shoppy. All rights reserved</p>
            <div class="flex space-x-6 mt-4 md:mt-0">
                <Icon v-for="(icon, index) in paymentIcons" :key="index" :icon="icon" class="h-6 w-8 mr-9" />
            </div>
        </div>
    </div>
</div>
</div>
</template>

<script setup>
import { ref } from 'vue';
const quickLinks = ref(['Home', 'Shop', 'New Arrivals', 'Best Sellers', 'Gifts']);
const customerService = ref(['Contact Us', 'FAQs', 'Shipping Policy', 'Returns & Exchange', 'Privacy Policy']);
const paymentIcons = ref(['logos:visa', 'logos:mastercard', 'logos:paypal', ]);
const socialLinks= ref([
    {icon: 'fa6-brands:facebook-f', url:'#'},
    {icon: 'fa6-brands:instagram', url:'#'},
    {icon: 'fa6-brands:twitter', url:'#'},
    {icon: 'fa6-brands:youtube', url:'#'},
])


const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

</script>