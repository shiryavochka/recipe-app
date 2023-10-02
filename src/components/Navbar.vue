<template>
    <header class="bg-white shadow-md h-16 flex justify-between items-center">
        <router-link :to="{name:'home' }" class=" sm:flex  hidden uppercase text-red-600 font-bold inline-flex items-center h-full px-5">
        Home
        </router-link>
    <div class="flex items-center gap-1  h-full">
        <router-link  :to="{name : 'byName'}" class="inline-flex items-center  font-bold transition-colors px-2 h-full hover:bg-red-200">
        Search Meals
        </router-link >
        <router-link :to="{name : 'byLetter'}" class="inline-flex items-center font-bold transition-colors px-2 h-full hover:bg-red-200">
        Meals By Letter
        </router-link>
        <router-link  :to="{name : 'ingredients'}" class="inline-flex items-center font-bold px-2 h-full  transition-colors hover:bg-red-200">
        Meals By Ingredients
        </router-link>
    </div>
    </header>
</template>