<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Announcement from '@/components/landing/Announcement.vue'
import Navbar from '@/components/landing/Navbar.vue'
import Pst from '@/components/landing/Pst.vue'
import LayananUtama from '@/components/landing/LayananUtama.vue'
import AllStatBanner from '@/components/landing/AllStatBanner.vue'
import Footer from '@/components/landing/Footer.vue'

// State untuk Pop-up Pengumuman Otomatis
const isPopupOpen = ref(false)

const closePopup = () => {
  isPopupOpen.value = false
}

onMounted(() => {
  setTimeout(() => {
    isPopupOpen.value = true
  }, 500)
})
</script>

<template>
  <div class="min-h-screen flex flex-col font-sans bg-gray-50">
    <!-- Pop-up Pengumuman -->
    <Announcement 
      :is-open="isPopupOpen" 
      @close="closePopup" 
    />
    
    <!-- Layout Utama -->
    <Navbar />
    <Pst />
    <LayananUtama />
    <AllStatBanner />
    <Footer />
  </div>
</template>