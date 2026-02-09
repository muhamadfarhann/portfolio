<script setup lang="ts">
import { Mail, Instagram, MessageCircle, Send } from 'lucide-vue-next'

const contacts = [
  {
    name: 'WhatsApp',
    value: '+62 877 2225 0220',
    link: 'https://wa.me/6287722250220',
    icon: MessageCircle,
    color: 'bg-green-500'
  },
  {
    name: 'Instagram',
    value: '@_mfrhnn_',
    link: 'https://instagram.com/_mfrhnn_',
    icon: Instagram,
    color: 'bg-pink-600'
  },
  {
    name: 'Email',
    value: 'han@mfrhn.com',
    link: 'mailto:han@mfrhn.com',
    icon: Mail,
    color: 'bg-blue-600'
  }
]
</script>

<template>
  <section class="animate-in">
    <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3 transition-colors duration-300">
      <Send class="text-blue-600 dark:text-blue-400" /> Get In Touch
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <a 
        v-for="contact in contacts" 
        :key="contact.name"
        :href="contact.link"
        target="_blank"
        class="flex flex-col items-center p-8 bg-slate-50 dark:bg-slate-800 rounded-3xl border border-transparent hover:border-blue-200 dark:hover:border-blue-500 hover:bg-white dark:hover:bg-slate-700 transition-all duration-300 group"
      >
        <div 
          class="w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform"
          :class="contact.color"
        >
          <component :is="contact.icon" :size="32" />
        </div>
        <h3 class="text-lg font-bold mb-1 dark:text-white transition-colors duration-300">{{ contact.name }}</h3>
        <p class="text-slate-500 dark:text-slate-400 text-sm transition-colors duration-300">{{ contact.value }}</p>
      </a>
    </div>

    <div class="bg-blue-600 dark:bg-blue-700 rounded-3xl p-10 text-white text-center transition-colors duration-300">
      <h3 class="text-2xl font-bold mb-4">Let's work together on your next project!</h3>
      <p class="text-blue-100 mb-8 max-w-lg mx-auto">
        I'm currently available for freelance work and full-time opportunities. 
        Feel free to reach out for any inquiries.
      </p>
      <a 
        href="mailto:contact@mfrhn.com" 
        class="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-colors"
      >
        <Mail :size="20" /> Hire Me Now
      </a>
    </div>
  </section>
</template>
