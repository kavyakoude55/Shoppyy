import { createRouter, createWebHistory } from 'vue-router'



import Home from '../components/Home.vue'
import Products from '../components/Products.vue'
import Categories from '../components/Categories.vue'
import Offers from '../components/Offers.vue'
import About from '../components/About.vue'

import Contact from '../components/Contact.vue'
import Cart from '../components/Cart.vue'
import WishList from '../components/WishList.vue'
import Payment from '../components/Payment.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/home', redirect: '/' },
  { path: '/products', name: 'Products', component: Products },
  { path: '/categories', name: 'Categories', component: Categories },
  { path: '/offers', name: 'Offers', component: Offers },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/cart', name: 'Cart', component: Cart },
  { path: '/wishlist', name: 'WishList', component: WishList },
  { path: '/payment', name: 'Payment', component: Payment },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
