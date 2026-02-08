<script setup lang="ts">
import { Code2, Smartphone, Terminal } from 'lucide-vue-next'

const skillGroups = [
  {
    name: 'Backend Development',
    icon: Terminal,
    skills: [
      { name: 'Laravel', level: 90, color: 'bg-red-500' },
      { name: 'PHP', level: 85, color: 'bg-indigo-500' },
      { name: 'MySQL/PostgreSQL', level: 80, color: 'bg-blue-500' }
    ]
  },
  {
    name: 'Mobile Development',
    icon: Smartphone,
    skills: [
      { name: 'Flutter', level: 95, color: 'bg-blue-400' },
      { name: 'Dart', level: 90, color: 'bg-cyan-500' },
      { name: 'Firebase', level: 75, color: 'bg-amber-500' }
    ]
  }
]
</script>

<template>
  <section class="animate-in">
    <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3 transition-colors duration-300">
      <Code2 class="text-blue-600 dark:text-blue-400" /> Technical Skills
    </h2>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div v-for="group in skillGroups" :key="group.name">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400 transition-colors duration-300">
            <component :is="group.icon" :size="20" />
          </div>
          <h3 class="text-xl font-bold dark:text-white transition-colors duration-300">{{ group.name }}</h3>
        </div>

        <div class="space-y-6">
          <div v-for="skill in group.skills" :key="skill.name">
            <div class="flex justify-between mb-2">
              <span class="font-medium text-slate-700 dark:text-slate-300 transition-colors duration-300">{{ skill.name }}</span>
              <span class="text-slate-400 dark:text-slate-500 text-sm font-bold transition-colors duration-300">{{ skill.level }}%</span>
            </div>
            <div class="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden transition-colors duration-300">
              <div 
                class="h-full transition-all duration-1000 ease-out rounded-full"
                :class="skill.color"
                :style="{ width: `${skill.level}%` }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
