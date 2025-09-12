import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { Icon } from '@iconify/vue'  
import App from './App.vue'
import router from './router'
import "./assets/main.css";

import "./firebase"; 
const app = createApp(App)

app.component('Icon', Icon) 

app.use(createPinia())
app.use(router)

app.mount('#app')



