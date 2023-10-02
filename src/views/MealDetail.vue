<template>
    <div class="max-w-[800px] mx-auto">
        <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="">
       <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
        <div>
            <span class="font-bold">Category:</span> 
            {{meal.strCategory}}
        </div>
        <div>
            <span class="font-bold">Area:</span> 
            {{meal.strArea}}
        </div>
        <div>
            <span class="font-bold">Tags:</span> 
            {{meal.strTags}}
        </div>           
       </div>

        <div class="my-3">
            {{ meal.strInstructions }}
        </div>

       <div class="grid grid-cols-1 sm:grid-cols-2">
            <div>
                <h2 class="text-2xl font-semibold mb-3">Ingredients:</h2>
                <ul>
                    <template v-for="(el, ind) of new Array(20)">
                        <li v-if="meal[`strIngredient${ind+1}`]">
                        {{ meal[`strIngredient${ind+1}`] }}
                        </li>
                    </template>
                </ul>

            </div>
            <div>
                <h2 class="text-2xl font-semibold mb-3">Measures:</h2>
                <ul>
                    <template v-for="(el, ind) of new Array(20)">
                        <li v-if="meal[`strMeasure${ind+1}`]">
                        {{ meal[`strMeasure${ind+1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
       </div>
       <div class="mt-4 ">
        <YoutubeButton :href="meal.strYoutube">Go to Youtube</YoutubeButton>
        <Youtubebutton :href="meal.strSource">View Original Source</YoutubeButton>

       </div>
    </div>

</template>
<script setup>
import {ref,onMounted} from 'vue';
import { useRoute } from 'vue-router'; 
import axiosClient from '../axiosClient'; 

const route = useRoute();
const meal =ref({})

onMounted(()=>{
    axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then(({data})=>{
        meal.value=data.meals[0] || {};
    })
})
</script>