// boot app
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/style.css'

const app = createApp(App)
app.use(createPinia())

//console.log('booting ava weekly report ui ')
app.mount('#app')
