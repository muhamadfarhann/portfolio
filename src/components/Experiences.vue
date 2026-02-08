<script setup lang="ts">
import { History, Building2 } from 'lucide-vue-next'

const experiences = [
  {
    company: 'PT. Pegadaian Galeri 24',
    role: 'Fullstack Developer',
    period: '2023 - Present',
    description: 'Leading the development of internal systems and mobile applications using Laravel and Flutter.'
  },
  {
    company: 'PT. Pacifica Raya Teknologi',
    role: 'Mobile Developer',
    period: '2021 - 2023',
    description: 'Focused on developing cross-platform mobile solutions for various clients with a strong emphasis on UX.'
  }
]
</script>

<template>
  <section class="animate-in">
    <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3 transition-colors duration-300">
      <History class="text-blue-600 dark:text-blue-400" /> Work Experience
    </h2>

    <div class="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-700 before:to-transparent transition-colors duration-300">
      <div 
        v-for="(exp, index) in experiences" 
        :key="exp.company"
        class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
      >
        <!-- Icon -->
        <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-300">
          <Building2 :size="18" />
        </div>
        
        <!-- Content -->
        <div class="w-[calc(100%-4rem)] md:w-[45%] p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
          <div class="flex items-center justify-between mb-1">
            <h3 class="font-bold text-slate-900 dark:text-white transition-colors duration-300">{{ exp.company }}</h3>
            <span class="text-xs font-bold text-blue-600 dark:text-blue-400 px-2 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full transition-colors duration-300">{{ exp.period }}</span>
          </div>
          <div class="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3 transition-colors duration-300">{{ exp.role }}</div>
          <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-300">{{ exp.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
