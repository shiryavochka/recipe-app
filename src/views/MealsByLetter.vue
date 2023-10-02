<template>
  <div class="flex justify-center mt-2 gap-1">
      <router-link :to="{ name: 'byLetter', params: {letter}}" :key="letter" v-for="letter of letters">
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