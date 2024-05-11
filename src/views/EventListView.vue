<script setup>
import EventCard from '@/components/EventCard.vue';
import { ref, onMounted } from 'vue';
import  eventClient  from '@/services/EventService.js'

const events = ref(null)

onMounted(() => {
 eventClient.getEvents()
 .then((response) =>{
    events.value = response.data
  }).catch((error)=>{

  })
})
</script>

<template>
  <main>
    <h1>Events for Good</h1>
    <div class="events">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </div>
  </main>
</template>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
