<template>
     <h1 class="text-2xl sm:text-4xl text-red-600 px-8 py-4 font-bold">Ingredients</h1>
    <div class="px-8 py-2">
   
        <input
            type="text"
            v-model="keyword"
            class="rounded p-2 border-2 bg-white border-red-600 mb-3 w-full"
            placeholder="Search for Ingredients"
        />
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 ">
            <router-link
            :to="{
            name: 'byIngredient',
            params: { ingredient: ingredient.strIngredient },
            }"
            v-for="ingredient of computedIngredients"
            :key="ingredient.idIngredient"
            class="block bg-white rounded p-3 mb-3 shadow"
        >
        <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>

      </router-link>
        </div>
        
    </div>
</template>
  
<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient";

const keyword = ref("");
const ingredients = ref([]);
const computedIngredients = computed(() => {
    if (!computedIngredients) return ingredients;
    return ingredients.value.filter((i) => i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase()));
});
  
onMounted(() => {
    axiosClient.get("list.php?i=list").then(({ data }) => {
      ingredients.value = data.meals;
    });
  });
</script>