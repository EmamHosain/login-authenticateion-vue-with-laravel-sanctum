import axios from 'axios'
import { computed, reactive, ref } from 'vue'
import router from '../../router'

const state = reactive({
    authenticated: false,
    user: {}
})
export default function useAuth() {
    const errors = ref(null)
    const setAuthenticate = (authenticate) => {
        state.authenticated = authenticate;
    }
    const setUser = (user) => {
        state.user = user
    }

    // computed function will be run auto, 
    // kono karone jodi state.authenticated value change hoy,
    // tahole getAuthenticate er value auto change hobe, karon computed function er vlaue auto change hoi
    const getAuthenticate = computed(() => state.authenticated)
    const getUserData = computed(() => state.user);


    const attempt = async () => {

        try {
            let res = await axios.get('/api/user');
            setAuthenticate(true);
            setUser(res.data);
            return res;
        } catch (er) {
            setAuthenticate(false);
            setUser({});
            // console.log(er)
        }
    }

    const login = async (credentials) => {
        errors.value = null;
        try {
            await axios.get('sanctum/csrf-cookie');
            const res = await axios.post('/login', credentials)
            await attempt();
            await router.push({ name: 'dashboard-page' })
        } catch (er) {
            setAuthenticate(false);
            setUser({});
            console.log(er)
            if (er.response.status === 422) {
                errors.value = er.response.data.errors
            }

        }

    }

    const logout = async () => {
        await axios.post('/logout');
        setAuthenticate(false);
        setUser({});
        await router.push({ name: 'login-page' })
    }

    const register = async (data) => {
        try {
            const res = await axios.post('/register', data);
            await attempt();
            router.push({ name: 'dashboard-page' })

        } catch (er) {

        }
    }

    return { login, getUserData, getAuthenticate, attempt, logout, errors, register }
}