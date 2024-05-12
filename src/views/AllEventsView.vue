<script setup>
import {ref,computed, onMounted, watchEffect} from 'vue';
import EventCard from '@/components/EventCard.vue';
import eventClient from '@/services/EventService.js'
import { RouterLink } from 'vue-router';

const props = defineProps(['page']);
const events = ref('');
const totalRecords = ref(0);
const page = computed(
    ()=>{
        return props.page;   
    }
)
//We calculate the total pages
const hasTotalPage = computed(
    ()=>{
        return Math.ceil(totalRecords.value/3);
    }
);

/**
 * onMounted just is used only when the compoment is initialized and have reactives values
 * and watchEffect is the same that onMounted but work during all navegation
 */
onMounted(()=>{
    watchEffect( ()=> {
        events.value = null;
        eventClient.getEvents( 3, page.value)
        .then(
            (response)=>{
                events.value = response.data
                //Below we get the total records fo our services'data
                totalRecords.value = response.headers['x-total-count']
            }
        ).catch(
            (error)=>{
                console.log(error);
            }
        )
    });
});
</script>

<template>
    <div v-if="page">
        <h1>You are on page {{ page }}</h1>
    </div>
    <div class="events">
        <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>
        <div class="pagination">
            <router-link 
                id="page-prev"
                :to="{name: AllEventsView, query: {page: page - 1} }"
                rel="prev"
                v-if="page > 1"
            >
                <label> Prev </label>
            </router-link>
            <router-link 
                id="page-next"
                :to="{name: AllEventsView, query: {page: page + 1} }"
                rel="forward"
                v-if="page < hasTotalPage"
            >
                <label> Next </label>
            </router-link>
        </div>
    </div>
</template>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}

</style>