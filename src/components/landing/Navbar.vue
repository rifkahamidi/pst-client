<script setup lang="ts">
const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <nav class="bg-[#00224D] text-white px-6 py-4 md:px-16 lg:px-24 flex items-center justify-between shadow-md z-10 sticky top-0">
    <div class="flex items-center gap-3">
      <img src="/images/PST3.svg" alt="Logo PST" class="h-10 w-auto object-contain" />
      <div class="leading-tight">
        <h1 class="font-bold text-sm md:text-base tracking-wide">Pelayanan Statistik Terpadu</h1>
        <p class="text-xs text-gray-300">BPS Kabupaten Kaimana</p>
      </div>
    </div>

    <div class="flex items-center gap-6 md:gap-8 text-sm md:text-base">
      <!-- Menggunakan event @click.prevent agar tidak crash dengan router -->
      <a 
        href="#layanan-utama" 
        @click.prevent="scrollToSection('layanan-utama')" 
        class="hover:text-blue-300 transition-colors cursor-pointer"
      >
        Layanan
      </a>
      
      <a 
        href="#footer" 
        @click.prevent="scrollToSection('footer')" 
        class="hover:text-blue-300 transition-colors cursor-pointer"
      >
        Kontak
      </a>

      <button
        class="border border-white hover:bg-white hover:text-[#00224D] text-white font-medium px-5 py-1.5 rounded-full transition-all duration-200"
      >
        Masuk
      </button>
    </div>
  </nav>
</template>