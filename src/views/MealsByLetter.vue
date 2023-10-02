<template>
    <h1 class="text-2xl sm:text-4xl text-red-600 px-8 py-4 font-bold">Search Meals by Letter</h1>
  <div class="flex justify-center flex-wrap mt-2 gap-5 px-8 py-4">
      <router-link :to="{ name: 'byLetter', params: {letter}}" :key="letter" v-for="letter of letters" class="bg-gray-200 hover:bg-red-200 p-3 inline-block rounded-xl">
      {{ letter }}</router-link>
      </div>
    
        <Meals :meals="meals"></Meals>
</template>
<script setup>
import {computed,onMounted ,watch}from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import Meals from '../components/Meals.vue';

const route = useRoute();
const letters='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const meals= computed(()=> store.state.mealsByLetter);

watch(route,()=>{
    store.dispatch('SearchMealsByLetter', route.params.letter)
})

onMounted(()=> {
    store.dispatch('SearchMealsByLetter', route.params.letter)
})
</script>