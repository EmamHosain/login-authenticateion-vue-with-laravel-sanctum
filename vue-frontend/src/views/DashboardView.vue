<script setup>
import useAuth from "../composables/auth/useAuth";

const { getAuthenticate: authenticate, getUserData: data } = useAuth();
</script>
<template>
  <div>
    <h1 class="text-center text-2xl">Dashboard page</h1>
    <div v-if="authenticate" class="mt-20">
      <div class="w-96 mx-auto shadow-sm shadow-black p-4">
        <h2 class="text-center font-medium">Authenticate user</h2>
        <h2 class="text-center font-medium">{{ data.email }}</h2>
      </div>

    </div>
    <div v-else>
      <h2 class="text-center text-2xl">Guest user</h2>
    </div>
  </div>
</template>
