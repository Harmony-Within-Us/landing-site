---
title: Archive
---

<script setup>
import { ref, onMounted } from 'vue'
import * as d3 from 'd3'

const posts = ref([
  { date: '2024-04-20', title: 'Understanding Gender Identity' },
  { date: '2024-04-15', title: 'Supporting Trans Youth' },
  { date: '2024-04-10', title: 'Trans Healthcare Guide' },
  { date: '2024-04-05', title: 'Allies in Action' },
  { date: '2024-04-01', title: 'Legal Rights Update' }
])

onMounted(() => {
  // Timeline Visualization
  const timeline = d3.select('#timeline')
    .append('svg')
    .attr('width', '100%')
    .attr('height', 400)

  // Activity Graph
  const activityData = d3.group(posts.value, d => d3.timeMonth(new Date(d.date)))
  const graph = d3.select('#activity-graph')
    .append('svg')
    .attr('width', '100%')
    .attr('height', 200)
})
</script>

# Archive

<div class="timeline-container">
  <div class="timeline-line"></div>
  <div class="space-y-8">
    <template v-for="post in posts" :key="post.date">
      <div class="flex items-center justify-between">
        <div class="w-5/12 text-right pr-8">
          <h3 class="font-semibold">{{ post.title }}</h3>
        </div>
        <div class="w-2/12 flex justify-center">
          <div class="w-4 h-4 rounded-full bg-[#5bcefa] border-4 border-[#f5a9b8]"></div>
        </div>
        <div class="w-5/12 pl-8">
          <p class="text-sm text-gray-400">{{ new Date(post.date).toLocaleDateString() }}</p>
        </div>
      </div>
    </template>
  </div>
</div>

<div class="activity-graph mt-12">
  <h2 class="text-2xl font-bold mb-4">Publishing Activity</h2>
  <div id="activity-graph"></div>
</div>