<script setup>
import {ref,computed} from 'vue';

const props = defineProps(['page']);
</script>

<template>
    <div v-if="page">
        <h1>You are on page {{ page }}</h1>
    </div>
</template>
<style >

</style>