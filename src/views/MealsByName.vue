<template>
    <div class="p-8">
        <input type="text" 
        v-model="keyword"
        class="rounded border-2 border-gray-200 w-full" 
    placeholder="Search  for Meals"
    @change="searchMeals" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">   
        <div v-for="meal of meals" :key="meal.idMeal"  class="bg-white shadow rounded-xl ">
            <img :src="meal.strMealThumb" alt="" class="rounded-t-xl h-48 w-full object-cover">
           <div class="p-3">
            <h3 class="font-bold">{{ meal.strMeal }}</h3>
            <p>dsa asd dsa ds fd  fg f gdf  ds  sf dsfdfsdjkf sdfdsf sdfjsd fmsd fdf sdmf d</p>
            <div class="flex items-center justify-between">
                <a class="px-3 py-2 rounded border-2 border-red-600 bg-red-500 text-white hover:bg-red-600 transition-colors" :href="meal.strYoutube" target="_blank">Youtube</a>
                <router-link :to="{name:'mealDetails', params:{id: meal.idMeal}}" 
                class="px-3 py-2 rounded border-2 border-blue-600 hover:text-white hover:bg-blue-500 transition-colors">View</router-link>
            
            </div>
           </div>
           

        </div>
        
   
        </div>
</template>
<script setup>

import {ref, computed, onMounted} from 'vue'
import store from '../store';
import {useRoute} from 'vue-router';


const keyword = ref('');
const route = useRoute();
const meals = computed(()=> store.state.SearchedMeals)
function searchMeals(){
 store.dispatch('SearchMeals', keyword.value);

}
onMounted(()=>{
   keyword.value = route.params.name;
   if (keyword.value){
    searchMeals();
   }
})
</script>