<template>
    <div class="p-8">
        <input type="text" 
        v-model="keyword"
        class="rounded border-2 border-gray-200 w-full" 
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