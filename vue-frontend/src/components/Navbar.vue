<script setup>
import useAuth from "../composables/auth/useAuth";

const { getAuthenticate: authenticate, logout } = useAuth();
</script>

<template>
    <div class="bg-gray-800">
        <nav class="container mx-auto px-4 py-6 flex">
            <div class="w-2/5">
                <h1 class="text-white font-medium text-xl">Logo</h1>
            </div>
            <div class="w-3/5">
                <ul class="flex justify-end items-center">
                    <li>
                        <router-link :to="{ name: 'home-page' }" class="text-white hover:text-gray-300 ">Home</router-link>
                    </li>


                    <template v-if="authenticate">
                        <li>
                            <router-link :to="{ name: 'dashboard-page' }"
                                class="text-white hover:text-gray-300 ">Dashboard</router-link>
                        </li>

                    </template>
                    <template v-else>
                        <li>
                            <router-link :to="{ name: 'register-page' }"
                                class="text-white hover:text-gray-300 ">Register</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'login-page' }"
                                class="text-white hover:text-gray-300 ">Login</router-link>
                        </li>
                    </template>

                    <template v-if="authenticate">
                        <li>
                            <button @click="logout" class="text-white hover:text-gray-300 ">Logout</button>
                        </li>
                    </template>
                </ul>
            </div>
        </nav>

    </div>
</template>

<style scoped>
a,
button {
    margin-left: 1.5rem;
}

.router-link-active {
    text-decoration: underline;

}
</style>
  