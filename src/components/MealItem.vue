<template>
     <div  class="bg-white shadow rounded-xl ">
            <img :src="meal.strMealThumb" alt="" class="rounded-t-xl h-48 w-full object-cover">
           <div class="p-3">
            <h3 class="font-bold">{{ meal.strMeal }}</h3>
            <p>dsa asd dsa ds fd  fg f gdf  ds  sf dsfdfsdjkf sdfdsf sdfjsd fmsd fdf sdmf d</p>
            <div class="flex items-center justify-between">
                <YouTubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
                <router-link :to="{name:'mealDetails', params:{id: meal.idMeal}}" 
                class="px-3 py-2 rounded border-2 border-blue-600 hover:text-white hover:bg-blue-500 transition-colors">View</router-link>
            
            </div>
           </div>
           

        </div>
</template>
<script setup> 
// import YouTubeButton from'../YouTubeButton.vue';
const {meal} = defineProps({
    meal:{
        required: true,
        type:Object
    }
})
</script>