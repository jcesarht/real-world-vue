<script setup>
import { ref, onMounted } from 'vue'
import eventService from '@/services/EventService.js'

const event = ref(null)

const props = defineProps({
  id: {
    required: true
  }
}) 

onMounted(()=>{
    eventService.getEvent(props.id)
    .then((response)=>{
        event.value = response.data
        console.log(event)
    })
    .catch((error)=>{
        console.log(error);
    })
})
</script>
<template>
    <div v-if="event" >
      <h1>{{ event.title }}</h1>
      <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
      <p>{{ event.description }}</p>
    </div>
</template>