<script setup lang="ts">
import { ref, watch } from 'vue'
import { Layout, ExternalLink, Github, ChevronLeft, ChevronRight, X } from 'lucide-vue-next'

interface Project {
  title: string;
  description: string;
  tech: string[];
  images: string[];
}

const projects: Project[] = [
  {
    title: 'Todo App',
    description: 'A comprehensive task management application with real-time sync.',
    tech: ['Laravel', 'Flutter'],
    images: [
      'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584713503693-bb386ec95cf2?q=80&w=1000&auto=format&fit=crop'
    ],
  },
  {
    title: 'Online Queue System',
    description: 'A digital queuing solution to reduce physical wait times in offices.',
    tech: ['Laravel', 'Flutter'],
    images: [
      'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop'
    ],
  },
  {
    title: 'Employee Presence',
    description: 'Biometric and GPS-based attendance system for modern companies.',
    tech: ['Laravel', 'Flutter'],
    images: [
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?q=80&w=1000&auto=format&fit=crop'
    ],
  }
]

const selectedProject = ref<Project | null>(null)
const currentImageIndex = ref(0)

// Preload images to ensure instant switching
const preloadImages = (images: string[]) => {
  images.forEach(src => {
    const img = new Image()
    img.src = src
  })
}

const openGallery = (project: Project) => {
  selectedProject.value = project
  currentImageIndex.value = 0
  document.body.style.overflow = 'hidden'
  preloadImages(project.images) // Trigger preload
}

const closeGallery = () => {
  selectedProject.value = null
  document.body.style.overflow = 'auto'
}

const nextImage = (e?: Event) => {
  e?.stopPropagation()
  if (!selectedProject.value) return
  currentImageIndex.value = (currentImageIndex.value + 1) % selectedProject.value.images.length
}

const prevImage = (e?: Event) => {
  e?.stopPropagation()
  if (!selectedProject.value) return
  currentImageIndex.value = (currentImageIndex.value - 1 + selectedProject.value.images.length) % selectedProject.value.images.length
}

const setImage = (index: number) => {
  currentImageIndex.value = index
}

// Keyboard navigation
watch(selectedProject, (newVal) => {
  if (newVal) {
    window.addEventListener('keydown', handleKeydown)
  } else {
    window.removeEventListener('keydown', handleKeydown)
  }
})

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'ArrowRight') nextImage()
  if (e.key === 'ArrowLeft') prevImage()
  if (e.key === 'Escape') closeGallery()
}
</script>

<template>
  <section class="animate-in">
    <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3 transition-colors duration-300">
      <Layout class="text-blue-600 dark:text-blue-400" /> My Projects
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div 
        v-for="project in projects" 
        :key="project.title"
        class="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden group hover:shadow-xl transition-all flex flex-col h-full duration-300"
      >
        <div class="relative overflow-hidden aspect-video cursor-pointer" @click="openGallery(project)">
          <img 
            :src="project.images[0]" 
            :alt="project.title"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
            <span class="text-white font-medium px-4 py-2 border border-white rounded-full backdrop-blur-sm">View Gallery</span>
          </div>
          <!-- Multiple images indicator -->
          <div class="absolute bottom-3 right-3 bg-black/50 backdrop-blur-md px-2 py-1 rounded text-white text-xs font-bold">
            {{ project.images.length }} Photos
          </div>
        </div>
        
        <div class="p-6 flex flex-col flex-1">
          <div class="flex gap-2 mb-3">
            <span 
              v-for="t in project.tech" 
              :key="t"
              class="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full transition-colors duration-300"
            >
              {{ t }}
            </span>
          </div>
          <h3 class="text-xl font-bold mb-2 dark:text-white transition-colors duration-300">{{ project.title }}</h3>
          <p class="text-slate-500 dark:text-slate-400 text-sm mb-4 flex-1 transition-colors duration-300">{{ project.description }}</p>
          
          <div class="flex gap-4 mt-auto">
            <button class="flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
              <ExternalLink :size="16" /> Demo
            </button>
            <button class="flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
              <Github :size="16" /> Repo
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Enhanced Image Modal / Gallery -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="selectedProject" 
        class="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
        @click="closeGallery"
      >
        <button 
          class="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-2"
          @click="closeGallery"
        >
          <X :size="32" />
        </button>

        <div class="relative w-full max-w-5xl aspect-video max-h-[80vh] flex items-center justify-center" @click.stop>
          
          <!-- Previous Button -->
          <button 
            @click="prevImage"
            class="absolute left-4 z-20 p-3 rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-all -translate-y-1/2 top-1/2"
          >
            <ChevronLeft :size="24" />
          </button>

          <!-- Main Image -->
          <div class="relative w-full h-full flex items-center justify-center overflow-hidden rounded-lg">
             <Transition
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="opacity-0"
              enter-to-class="opacity-100"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <img 
                :key="currentImageIndex"
                :src="selectedProject.images[currentImageIndex]" 
                class="absolute inset-0 w-full h-full object-contain shadow-2xl select-none"
                alt="Project Screenshot"
              />
            </Transition>
          </div>

          <!-- Next Button -->
          <button 
            @click="nextImage"
            class="absolute right-4 z-20 p-3 rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-all -translate-y-1/2 top-1/2"
          >
            <ChevronRight :size="24" />
          </button>

          <!-- Image Indicators / Dots -->
          <div class="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
            <button 
              v-for="(_, index) in selectedProject.images" 
              :key="index"
              @click="setImage(index)"
              class="w-2.5 h-2.5 rounded-full transition-all"
              :class="index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'"
            ></button>
          </div>
          
          <!-- Caption / Counter -->
          <div class="absolute top-4 left-4 bg-black/50 px-3 py-1 rounded-full text-white text-sm font-medium backdrop-blur-md z-20">
            {{ selectedProject.title }} • {{ currentImageIndex + 1 }} / {{ selectedProject.images.length }}
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>
