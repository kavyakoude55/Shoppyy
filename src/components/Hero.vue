<template>
    <section id="home" class=" bg-amber-50 scroll-mt-5 py-20 bg-image ">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  flex items-center justify-between flex-col-reverse lg:flex-row gap-10 lg:gap-30">
            <div class="text-center lg:text-left flex-1">
                <h1 class="text-4xl sm:text-5xl font-bold text-amber-900 mb-10">
                  Discover the best deals on top products
                </h1>
                <br />
                <p class="text-gray-700 mt-8 text-lg">
                  Exclusive Discounts and Offers on everything you love❤️. Shop now and be the first to grab the latest trends.
                </p>
                <br />
                <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <router-link
                    to="/products"
                    class="px-6 py-3 bg-pink-900 text-white font-bold rounded-lg shadow hover:bg-pink-700 transition"
                  >
                    Shop Now
                  </router-link>
                  <router-link
                    to="/offers"
                    class="px-6 py-3 border-2 border-pink-900 text-pink-900 font-bold rounded-lg hover:bg-pink-100 transition"
                  >
                    View Offers
                  </router-link>
               </div>
             </div>

            <div class="w-full lg:w-1/2 flex justify-center">
                <img src="../assets/Hero.jpeg" alt="hero-product" class="w-3/4 lg:w-full max-w-md mx-auto rounded-xl shadow-lg mr-5"/>
            </div>
         </div>
        

    </section>
</template>