import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import useAuth from './composables/auth/useAuth'

const { attempt } = useAuth();

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

const app = createApp(App)
app.use(router)

// if attept function return authenticate user when the page is reload, then page is mounted, otherwise page is not mounted
attempt().then(() => {
    app.mount('#app')
})
