<script setup lang="ts">
import { User, MapPin, Briefcase, GraduationCap } from 'lucide-vue-next'
</script>

<template>
  <section class="animate-in">
    <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3 transition-colors duration-300">
      <User class="text-blue-600 dark:text-blue-400" /> About Me
    </h2>

    <div class="prose prose-slate max-w-none mb-12">
      <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed transition-colors duration-300">
        Hello! I'm M. Farhan, a developer based in Indonesia. I have a deep passion for software development, 
        specifically in bridging the gap between web and mobile platforms. 
      </p>
      <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mt-4 transition-colors duration-300">
        With several years of experience in the industry, I have honed my skills in Laravel for robust backend 
        solutions and Flutter for cross-platform mobile excellence. I enjoy solving complex problems and 
        turning ideas into reality through code.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl transition-colors duration-300">
        <MapPin class="text-blue-500 dark:text-blue-400" />
        <div>
          <p class="text-xs text-slate-400 dark:text-slate-500 uppercase font-bold tracking-wider">Location</p>
          <p class="font-medium dark:text-white">Bandung, Jawa Barat, Indonesia</p>
        </div>
      </div>
      <div class="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl transition-colors duration-300">
        <Briefcase class="text-blue-500 dark:text-blue-400" />
        <div>
          <p class="text-xs text-slate-400 dark:text-slate-500 uppercase font-bold tracking-wider">Role</p>
          <p class="font-medium dark:text-white">Fullstack Developer</p>
        </div>
      </div>
    </div>
  </section>
</template>
