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
      <div>
        <nav>
          <router-link :to="{name: 'event-details', params: {id}}"> Details</router-link> |
          <router-link :to="{name: 'event-register', params: {id }}"> Register</router-link> |
          <router-link :to="{name: 'event-edit', params: {id }}"> Edit</router-link>
        </nav>
      </div>
      <p><span>Register</span></p>
    </div>
</template>