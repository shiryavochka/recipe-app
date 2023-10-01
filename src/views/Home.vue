<template>
  <div class="flex flex-col p-8">
    <input type="text" class="rounded border-2 border-gray-200 w-full" 
    placeholder="Search  for Meals" />

    <div class="flex justify-center mt-2 gap-1">
      <router-link :to="{ name: 'byLetter', params: {letter}}" :key="letter" v-for="letter of letters">
      {{ letter }}</router-link>
      </div>
    </div>

</template>
<script setup>
import { computed, onMounted } from 'vue';
import store from '../store'; 
import axiosClient from '../axiosClient';

const letters='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

onMounted(async ()=>{
  const response = await axiosClient.get('/list.php?i=list')
  console.log(response.data)
})
</script>