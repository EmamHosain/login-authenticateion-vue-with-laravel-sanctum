<script setup>
import { reactive, ref } from 'vue';
import useAuth from '../composables/auth/useAuth';

const { register } = useAuth();
const formData = reactive({
    name: '',
    email: '',
    password: '',
    'confirm-password': ''
})
</script>
<template>
    <div class="container mx-auto mt-8">
        <h1 class="text-3xl font-bold mb-4 text-center">Registration Page</h1>
        <form id="registrationForm" @submit.prevent="register(formData)"
            class="w-full max-w-md p-4 mx-auto bg-gray-200 rounded-md">
            <div class="mb-4">
                <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
                <input type="text" id="username" v-model="formData.name" placeholder="Enter your username"
                    class="form-input w-full">
            </div>
            <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" v-model="formData.email" placeholder="Enter your email" class="form-input w-full">
            </div>
            <div class="mb-4">
                <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="password" v-model="formData.password" placeholder="Enter your password"
                    class="form-input w-full">
            </div>
            <div class="mb-4">
                <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input type="password" id="confirmPassword" v-model="formData.confirmPassword"
                    placeholder="Confirm your password" class="form-input w-full">
            </div>
            <button type="submit"
                class="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Register</button>
        </form>
    </div>
</template>
  
 
  