<script setup>
const props = defineProps({
  event: {
    required: true
  }
}) 
</script>
<template>
    <div v-if="event" >
      <p>Register</p>
    </div>
</template>