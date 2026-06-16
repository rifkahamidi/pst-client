<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LandingNavbar',
})
</script>

<template>
  <nav
    class="bg-[#00224D] text-white px-6 py-4 md:px-16 lg:px-10 flex items-center justify-between shadow-md z-10"
  >
    <div class="flex items-center">
      <img src="/images/PST3.svg" alt="Logo PST" class="h-8 w-12 object-contain" />
      <div class="leading-tight">
        <h1 class="font-bold text-sm md:text-base tracking-wide">Pelayanan Statistik Terpadu</h1>
        <p class="text-xs text-gray-300">BPS Kabupaten Kaimana</p>
      </div>
    </div>

    <div class="flex items-center gap-6 md:gap-8 text-sm md:text-base">
      <a href="#" class="hover:text-blue-300 transition-colors">Layanan</a>
      <a href="#" class="hover:text-blue-300 transition-colors">Kontak</a>

      <div class="flex items-center gap-1 cursor-pointer hover:text-blue-300 transition-colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.6 9h16.8M3.6 15h16.8" />
        </svg>
        <span class="font-medium">ID</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3 w-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="3"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <button
        class="border border-white hover:bg-white hover:text-[#00224D] text-white font-medium px-5 py-1.5 rounded-full transition-all duration-200"
      >
        Masuk/Daftar
      </button>
    </div>
  </nav>
</template>

