<template>
    <div class="bg-white shadow rounded-xl">
      <img :src="meal.strMealThumb" alt="" class="rounded-t-xl h-48 w-full object-cover">
      <div class="p-3">
        <h3 class="font-bold ">{{ meal.strMeal }}</h3>
        <p class="pb-4">{{ truncatedInstructions }}</p>
        <div class="flex items-center justify-between">
          <ButtonForItem :href="meal.strYoutube">Youtube</ButtonForItem>
          <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
            class="px-3 py-2 rounded border-2 border-orange-600 bg-orange-500 text-white hover:bg-orange-600 transition-colors">Detail</router-link>
        </div>
      </div>
    </div>
</template>
  
<script setup>
import ButtonForItem from './ButtonForItem.vue';
import { computed } from 'vue'; 
  
const { meal } = defineProps({
    meal: {
      required: true,
      type: Object,
    },
});
 
const truncatedInstructions = computed(() => {
    if (!meal.strInstructions) return meal.strInstructions;
    const maxLength = 100;
    if (meal.strInstructions.length <= maxLength) return meal.strInstructions;
    return meal.strInstructions.substring(0, maxLength) + '...';
  });
</script>  