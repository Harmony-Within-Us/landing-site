---
layout: home
hero:
  name: "Harmony Within Us"
  tagline: Fostering serenity and connection, a dedicated space for transgender individuals navigating life.

  actions:
    - theme: brand
      text: Learn More
      link: /what-are-trans-rights
    - theme: alt
      text: Get Support
      link: /support
features:
  - icon: 💕
    title: Acceptance
    details: Everyone deserves to live authentically and be accepted for who they are
  - icon: 🌈
    title: Equality
    details: Trans rights are fundamental human rights that must be protected
  - icon: 🤝
    title: Support
    details: Find resources and support for trans individuals and allies
---

::: danger
UNFINISHED WEBSITE, PLEASE DO NOT USE YET
:::

<script setup>
import { ref, onMounted } from 'vue'
import { format } from 'date-fns'

const announcements =
  {
    title: "Lorem Ipsum",
    date: "2024-01-01",
    content: "Lorem ipsum...",
    image: "/images"
  }

const posts = ref([
  {
    title: "Understanding Gender Identity",
    date: "2024-04-20",
    excerpt: "Exploring the spectrum of gender identity and expression...",
    image: "/images/gender-identity.jpg"
  },
  {
    title: "Supporting Trans Youth",
    date: "2024-04-15",
    excerpt: "Resources and guidance for families and educators...",
    image: "/images/trans-youth.jpg"
  }
])

const formatDate = (date) => format(new Date(date), 'MMMM d, yyyy')
</script>

<div class="max-w-6xl mx-auto px-4 space-y-16">
  <section class="mb-12">
    <h2 class="text-4xl font-bold mb-8 bg-gradient-to-r from-[#5bcefa] via-[#f5a9b8] to-white bg-clip-text text-transparent">
      Latest Announcements
    </h2>
        <div class="announcement-card flex flex-col md:flex-row items-center gap-8">
          <div class="md:w-1/2">
            <h3 class="text-2xl font-semibold mb-3">{{ announcements.title }}</h3>
            <p class="text-sm text-gray-400 mb-3">{{ announcements.date }}</p>
            <p class="text-lg">{{ announcements.content }}</p>
          </div>
          <div class="md:w-1/2 h-64 bg-gradient-to-br from-[#5bcefa]/20 to-[#f5a9b8]/20 rounded-xl"></div>
        </div>

  </section>

  <section class="mb-12">
    <h2 class="text-4xl font-bold mb-8 bg-gradient-to-r from-[#5bcefa] via-[#f5a9b8] to-white bg-clip-text text-transparent">
      Recent Blog Posts
    </h2>
    <div class="grid md:grid-cols-2 gap-8">
      <div v-for="post in posts" :key="post.title" class="blog-card group">
        <div class="h-48 mb-4 bg-gradient-to-br from-[#5bcefa]/20 to-[#f5a9b8]/20 rounded-xl 
                    transform transition-transform group-hover:scale-105"></div>
        <h3 class="text-2xl font-semibold mb-3">{{ post.title }}</h3>
        <p class="text-sm text-gray-400 mb-3">{{ formatDate(post.date) }}</p>
        <p class="mb-4">{{ post.excerpt }}</p>
        <a href="#" class="inline-block text-[#5bcefa] hover:text-[#f5a9b8] transition-colors">
          Read more →
        </a>
      </div>
    </div>
  </section>

  <!-- <section class="grid md:grid-cols-3 gap-8">
    <div v-for="feature in $frontmatter.features" :key="feature.title" class="feature-card">
      <div class="text-4xl mb-4">{{ feature.icon }}</div>
      <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
      <p>{{ feature.details }}</p>
    </div>
  </section> -->
</div>