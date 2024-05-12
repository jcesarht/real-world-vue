<script setup>
const props = defineProps({
  event: {
    required: true
  }
}) 
</script>
<template>
    <div v-if="event" >
      <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
      <p>{{ event.description }}</p>
    </div>
</template>