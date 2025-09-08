<template>
  <div id="offers" class="container scroll-mt-20 mx-auto px-4 py-12">
    <h2 class="text-3xl font-bold text-amber-950 text-center mb-2">Special Offers</h2>
    <br/>
    <p class="text-center text-gray-300 mb-12"></p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="offer in currentOffers" 
      :key="offer.id" :class="[offer.bgColor, 
      'rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-110']">
          <div class="p-6">
            <div class="flex justify-between items-start mb-4">
               <h3 :class="[offer.textColor, 'text-xl font-semibold']">{{ offer.title }}</h3>
               <span class="bg-white shadow-md rounded-full p-3">
                  <Icon :icon="offer.discount.includes('%') ? 'material-symbols:percent' :'mdi:gift' "
                  :class="[offer.textColor, 'text-2xl']" />
               </span>
            </div>
            
            <p class="text-gray-700 mb-6">{{ offer.description }}</p>
            <div class="flex items-center text-gray-600 mb-6">
              <Icon icon="svg-spinners:clock" class="mr-2" />
              <span>Ends On: {{ offer.endDate }}</span>
            </div>

            <div class="bg-white rounded-lg p-4 mb-4">
              <p class="text-sm text-gray-500 mb-1">Use Code</p>
              <p class=" font-extrabold font-mono text-lg text-red-950">{{ offer.code }}</p>
            </div>
            <br />
            <button 
            :class="[offer.textColor, 'w-full py-3 rounded-lg font-semibold border', 
              offer.textColor.replace('text', 'border'), 
              'hover:bg-white transition-colors duration-300'
            ]">Claim Offers</button>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
const currentOffers = ref([
  {
    id: 1,
    title: 'Hot sale',
    description: 'Upto 30% off on our Perfume Collection',
    discount: '30%',
    endDate: '2025-09-22',
    code: 'HOT30',
    bgColor: 'bg-orange-100',
    textColor: 'text-amber-700'
  },
  {
    id: 2,
    title: 'Free Perfume offer',
    description: 'Upto 30% off on our Perfume Collection',
    discount: 'Gift',
    endDate: '2025-09-22',
    code: 'FREEPERFUME',
    bgColor: 'bg-purple-200',
    textColor: 'text-amber-700'
  },
  {
    id: 3,
    title: 'Mega Combo Sale',
    description: 'Upto 40% off on our Combo Collection',
    discount: '30%',
    endDate: '2025-09-22',
    code: 'NEW20',
    bgColor: 'bg-orange-100',
    textColor: 'text-amber-700'
  },
  {
    id: 4,
    title: 'Cool Monsoon Edition',
    description: 'Upto 30% off on our Perfume Collection',
    discount: '30%',
    endDate: '2025-09-22',
    code: 'MONSOON30',
    bgColor: 'bg-purple-200',
    textColor: 'text-amber-700'
  },
  {
    id: 5,
    title: 'Free Gifts',
    description: 'Shop upto 3000 to get the free gifts',
    discount: 'Gift',
    endDate: '2025-09-22',
    code: 'FREEGIFTS',
    bgColor: 'bg-orange-100',
    textColor: 'text-amber-700'
  },
  {
    id: 6,
    title: 'Special Birthday Discount',
    description: 'Upto 25% off on our Birthday Shopping and avail new gifts on your Big Day!',
    discount: '25%',
    endDate: '2025-09-22',
    code: 'BIRTHDAY',
    bgColor: 'bg-purple-200',
    textColor: 'text-amber-700'
  }
])

</script>

