---
title: Events Calendar
---

<script setup>
import { ref, onMounted } from 'vue'
import ical from 'ical-generator'

const events = ref([
  {
    title: 'Trans Pride March',
    start: new Date('2024-06-15T10:00:00'),
    end: new Date('2024-06-15T16:00:00'),
    description: 'Annual Trans Pride March celebrating visibility and equality'
  },
  {
    title: 'Healthcare Rights Workshop',
    start: new Date('2024-05-01T14:00:00'),
    end: new Date('2024-05-01T16:00:00'),
    description: 'Learn about your healthcare rights and available resources'
  }
])

onMounted(() => {
  const calendar = ical({
    name: 'Trans Rights Events',
    events: events.value.map(event => ({
      start: event.start,
      end: event.end,
      summary: event.title,
      description: event.description
    }))
  })
})
</script>

# Upcoming Events

<div class="space-y-6">
  <div v-for="event in events" :key="event.title" class="announcement-card">
    <h3 class="text-xl font-semibold mb-2">{{ event.title }}</h3>
    <p class="text-sm text-gray-400 mb-2">
      {{ event.start.toLocaleDateString() }} {{ event.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }}
    </p>
    <p>{{ event.description }}</p>
  </div>
</div>

<div class="mt-8">
  <a href="#" class="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-[#5bcefa] to-[#f5a9b8] text-white font-semibold hover:opacity-90 transition-opacity">
    Add to Calendar (iCal)
  </a>
</div>