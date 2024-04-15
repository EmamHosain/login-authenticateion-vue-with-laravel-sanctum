<script setup>
import { reactive } from 'vue';
import useAuth from '../composables/auth/useAuth.js'
const formValue = reactive({
    email: '',
    password: ''
})

const { login, getUserData: user, getAuthenticate: authenticate, errors } = useAuth();

</script>
<template>
    <div class="container mx-auto mt-8">
        <h1 class="text-3xl font-bold mb-4 text-center">Login Page</h1>
        <form @submit.prevent="login(formValue)" class=" w-96 mx-auto p-4 bg-gray-300">
            <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" v-model="formValue.email" placeholder="Enter your email"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">

                <div v-if="errors">
                    <span class=" text-xs text-red-500">{{ errors.email[0] }}</span>
                </div>
            </div>
            <div class="mb-4">
                <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="password" v-model="formValue.password" placeholder="Enter your password"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                <div v-if="errors">
                    <span class=" text-xs text-red-500">{{ errors.password[0] }}</span>
                </div>
            </div>
            <button type="submit"
                class="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
        </form>
    </div>
</template>
  

  