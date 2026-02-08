<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { 
  Home as HomeIcon, 
  User as UserIcon, 
  Layout as ProjectsIcon, 
  Code2 as SkillsIcon, 
  History as ExperiencesIcon, 
  Send as ContactIcon,
  ExternalLink,
  BookOpen,
  Github,
  Linkedin,
  Twitter,
  Download,
  Moon,
  Sun
} from 'lucide-vue-next'

import Home from './components/Home.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Experiences from './components/Experiences.vue'
import Contact from './components/Contact.vue'

const currentSection = ref('home')
const isDark = ref(false)

const sections = [
  { id: 'home', name: 'Home', icon: HomeIcon, component: Home },
  { id: 'about', name: 'About', icon: UserIcon, component: About },
  { id: 'projects', name: 'Projects', icon: ProjectsIcon, component: Projects },
  { id: 'skills', name: 'Skills', icon: SkillsIcon, component: Skills },
  { id: 'experiences', name: 'Experiences', icon: ExperiencesIcon, component: Experiences },
  { id: 'blog', name: 'Blog', icon: BookOpen, component: null },
  { id: 'contact', name: 'Contact', icon: ContactIcon, component: Contact }
]

const currentComponent = computed(() => {
  const section = sections.find(s => s.id === currentSection.value)
  return section ? section.component : null
})

const handleNav = (id: string) => {
  if (id === 'blog') {
    window.open('https://mfrhn.com', '_blank')
    return
  }
  currentSection.value = id
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  } else {
    isDark.value = false
    document.documentElement.classList.remove('dark')
  }
})
</script>

<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-4 font-sans selection:bg-blue-100 selection:text-blue-600 transition-colors duration-300">
    <div class="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] w-full max-w-7xl flex flex-col lg:flex-row overflow-hidden min-h-[85vh] border border-slate-100 dark:border-slate-800 transition-colors duration-300">
      
      <!-- Sidebar / vCard Info -->
      <aside class="w-full lg:w-[380px] bg-slate-900 dark:bg-slate-950 text-white p-10 flex flex-col border-r border-slate-800 relative">
        <div class="flex-1 flex flex-col items-center text-center">
          <div class="relative mb-8 group">
            <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div class="relative w-40 h-40 bg-slate-800 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Farhan" alt="Profile" class="w-full h-full object-cover" />
            </div>
          </div>
          
          <h1 class="text-3xl font-bold mb-3 tracking-tight">M. Farhan</h1>
          <div class="px-4 py-1.5 bg-blue-500/10 text-blue-400 rounded-full text-sm font-bold border border-blue-500/20 mb-8">
            Web & Mobile Developer
          </div>
          
          <nav class="w-full space-y-2 mb-8">
            <button 
              v-for="item in sections" 
              :key="item.id"
              @click="handleNav(item.id)"
              :class="currentSection === item.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'"
              class="w-full flex items-center gap-4 px-6 py-3.5 rounded-2xl transition-all duration-300 font-medium group"
            >
              <component :is="item.icon" :size="20" :class="currentSection === item.id ? 'text-white' : 'text-slate-500 group-hover:text-blue-400'" />
              {{ item.name }}
              <ExternalLink v-if="item.id === 'blog'" :size="14" class="ml-auto opacity-50" />
            </button>
          </nav>

          <!-- Download CV Button -->
          <a 
            href="/cv-farhan.pdf" 
            download 
            class="w-full flex items-center justify-center gap-3 px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl transition-all duration-300 font-medium border border-slate-700 hover:border-slate-600 group"
          >
            <Download :size="20" class="text-slate-400 group-hover:text-blue-400 transition-colors" />
            Download CV
          </a>
        </div>

        <!-- Sidebar Footer / Socials -->
        <div class="pt-8 border-t border-slate-800 flex justify-center gap-6 mt-6">
          <a href="#" class="text-slate-500 hover:text-blue-400 transition-colors"><Github :size="22" /></a>
          <a href="#" class="text-slate-500 hover:text-blue-400 transition-colors"><Linkedin :size="22" /></a>
          <a href="#" class="text-slate-500 hover:text-blue-400 transition-colors"><Twitter :size="22" /></a>
        </div>
      </aside>

      <!-- Main Content Area -->
      <main class="flex-1 p-8 lg:p-16 overflow-y-auto bg-white dark:bg-slate-900 relative transition-colors duration-300">
        <!-- Theme Toggle Button -->
        <button 
          @click="toggleTheme" 
          class="absolute top-8 right-8 p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-all z-20"
          :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
        >
          <Sun v-if="isDark" :size="20" />
          <Moon v-else :size="20" />
        </button>

        <transition name="fade-slide" mode="out-in">
          <div :key="currentSection" class="h-full">
            <component :is="currentComponent" />
          </div>
        </transition>
      </main>
    </div>
  </div>
</template>

<style>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: #e2e8f0;
  border-radius: 10px;
}
.dark ::-webkit-scrollbar-thumb {
  background: #334155;
}
::-webkit-scrollbar-thumb:hover {
  background: #cbd5e1;
}
.dark ::-webkit-scrollbar-thumb:hover {
  background: #475569;
}
</style>
