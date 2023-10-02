<template>
    <h1 class="text-2xl sm:text-4xl text-red-600 px-8 py-4 font-bold">Search Meals by Name</h1>
    <div class="px-8 py-4 ">
        <input type="text" 
        v-model="keyword"
        class="rounded p-2 border-2 bg-white border-red-600 mb-3 w-full"
        placeholder="Search  for Meals"
        @change="searchMeals" />
    </div>
    <Meals :meals="meals"></Meals>
</template>
<script setup>

import {ref, computed, onMounted} from 'vue'
import store from '../store';
import {useRoute} from 'vue-router';

import Meals from '../components/Meals.vue';

const keyword = ref('');
const route = useRoute();
const meals = computed(()=> store.state.SearchedMeals)
function searchMeals(){
    if(keyword.value){
        store.dispatch('SearchMeals', keyword.value);
    } else {
        store.commit('setSearchedMeals', []);
    }

}
onMounted(()=>{
   keyword.value = route.params.name;
   if (keyword.value){
    searchMeals();
   }
})
</script>