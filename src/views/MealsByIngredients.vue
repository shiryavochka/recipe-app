<template>
    <h1 class="text-2xl sm:text-4xl text-red-600 px-8 py-4 font-bold">Meals </h1>
    <Meals :meals="meals" />
  </template>
  
  <script setup>
  import { computed } from "@vue/reactivity";
  import { onMounted, ref } from "vue";
  import { useRoute } from "vue-router";
  import store from "../store";
  import Meals from '../components/Meals.vue'
  const route = useRoute();
  const meals = computed(() => store.state.mealsByIngredient)
  
  onMounted(() => {
    store.dispatch('searchMealsByIngredient', route.params.ingredient)
  })
  </script>