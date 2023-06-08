import { createApp } from 'vue'
import {createPinia} from "pinia";
import './style.css'
import App from './App.vue'
import './index.css'
const pinia = createPinia();

let app = createApp(App)
    app.use(pinia)
    app.mount('#app')


