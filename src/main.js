
import "@/assets/bootstrap/css/bootstrap.min.css";
import "@/assets/bootstrap/js/bootstrap.min.js";
import "@/assets/bootstrap/js/bootstrap.bundle.min.js";


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
