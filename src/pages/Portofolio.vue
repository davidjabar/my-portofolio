<script setup>
import { Icon } from '@iconify/vue'


const myStack = [
  { name: 'Vue', icon: 'mdi:vuejs', color: 'text-green-500' },
  { name: 'Tailwind', icon: 'mdi:tailwind', color: 'text-info' },
  { name: 'CSS3', icon: 'mdi:language-css3', color: 'text-blue-500' },
  { name: 'HTML5', icon: 'mdi:language-html5', color: 'text-orange-500' },
  { name: 'JavaScript', icon: 'mdi:language-javascript', color: 'text-yellow-400' },
  { name: 'Python', icon: 'mdi:language-python', color: 'text-blue-400' },
  { name: 'Laravel', icon: 'mdi:laravel', color: 'text-error' },
  { name: 'Django', icon: 'simple-icons:django', color: 'text-success' },
  { name: 'FastAPI', icon: 'simple-icons:fastapi', color: 'text-teal-400' },
  { name: 'Flask', icon: 'simple-icons:flask', color: 'text-gray-400' },
  { name: 'Streamlit', icon: 'simple-icons:streamlit', color: 'text-red-400' },
  { name: 'Airflow', icon: 'simple-icons:apacheairflow', color: 'text-info' },
  { name: 'Docker', icon: 'mdi:docker', color: 'text-blue-600' },
  { name: 'Luigi', icon: 'mdi:pipe', color: 'text-red-500' },
  { name: 'PySpark', icon: 'simple-icons:apachespark', color: 'text-orange-400' },
  { name: 'Alteryx', icon: 'simple-icons:alteryx', color: 'text-blue-700' },
  { name: 'Git', icon: 'mdi:git', color: 'text-orange-600' },
  { name: 'GitHub', icon: 'mdi:github', color: 'text-base-content' },
]
</script>

<template>
  <section class="py-20 bg-base-300 min-h-screen">
    <div class="max-w-6xl mx-auto px-6 text-center">

      <div class="mb-16">
        <h1 class="text-4xl md:text-5xl font-black mb-4 tracking-tight">WORK IN PROGRESS..</h1>
        <h2 class="text-xl md:text-2xl font-semibold opacity-80">I'm Currently Building my Own Portfolio</h2>
        <div class="divider divider-primary w-24 mx-auto my-8"></div>
        <h3 class="text-lg opacity-60 italic">While waiting, feel free to explore my tech stack:</h3>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div
          v-for="stack in myStack"
          :key="stack.name"
          class="group bg-base-100 p-6 rounded-2xl shadow-lg border border-white/5 transition-all duration-300 hover:bg-neutral hover:scale-105 flex flex-col items-center justify-center gap-4"
        >
          <Icon
            :icon="stack.icon"
            class="text-5xl transition-transform group-hover:rotate-12"
            :class="stack.color"
          />
          <span class="font-bold text-sm tracking-wide group-hover:text-white">{{ stack.name }}</span>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.bg-base-100 {
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
}
</style>