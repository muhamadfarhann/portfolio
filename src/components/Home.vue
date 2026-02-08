<script setup lang="ts">
import { Rocket, Star } from 'lucide-vue-next'
</script>

<template>
  <section class="animate-in">
    <div class="mb-12">
      <h2 class="text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight transition-colors duration-300">
        Building Digital <span class="text-blue-600 dark:text-blue-400">Experiences</span>
      </h2>
      <p class="text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed transition-colors duration-300">
        I am a Web and Mobile Developer with a focus on creating high-quality applications using Laravel and Flutter. 
        I believe in clean code and user-centric design.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="p-6 bg-blue-50 dark:bg-slate-800 rounded-2xl border border-blue-100 dark:border-slate-700 group hover:shadow-lg transition-all duration-300">
        <div class="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
          <Rocket :size="24" />
        </div>
        <h3 class="text-xl font-bold mb-2 dark:text-white transition-colors duration-300">High Performance</h3>
        <p class="text-slate-600 dark:text-slate-400 transition-colors duration-300">Optimized code for fast and smooth user experiences across all devices.</p>
      </div>

      <div class="p-6 bg-amber-50 dark:bg-slate-800 rounded-2xl border border-amber-100 dark:border-slate-700 group hover:shadow-lg transition-all duration-300">
        <div class="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
          <Star :size="24" />
        </div>
        <h3 class="text-xl font-bold mb-2 dark:text-white transition-colors duration-300">Quality First</h3>
        <p class="text-slate-600 dark:text-slate-400 transition-colors duration-300">Strict adherence to best practices and clean architecture in every project.</p>
      </div>
    </div>
  </section>
</template>
