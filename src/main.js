import { createApp } from 'vue'
import App from './App.vue'
import login from './components/login.vue'
import card from './components/card.vue'
import registrer from './components/registrer.vue'

createApp(App).mount('#app'),
createApp(login).mount('#login')
createApp(card).mount('#card')
createApp(registrer).mount('#registrer')
