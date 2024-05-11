<script setup>
import {ref,computed} from 'vue';
import {useRoute} from 'vue-router';

const route = useRoute();
const page = computed(()=>{route.query.page || 1});
</script>

<template>
    <div>
        <h1>You are on page {{ $route.query.page }}</h1>
    </div>
</template>
<style >

</style>