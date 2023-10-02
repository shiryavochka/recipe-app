<template>
    <a 
    class="px-2 sm:px-4 py-2 rounded border-2 border-red-600 bg-red-500 text-white hover:bg-red-600 transition-colors" 
    :href="href" 
    target="_blank">
    <slot></slot></a>
</template>
<script setup>
const props=defineProps({
    href:String
})
</script>