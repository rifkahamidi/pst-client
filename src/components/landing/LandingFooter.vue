<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LandingFooter',
})
</script>

<template>
  <footer class="bg-[#00337C] text-white py-4 px-10 md:px-16 lg:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
      <div class="space-y-6">
        <h2 class="text-3xl font-bold tracking-wide">Hubungi Kami</h2>

        <div class="text-gray-200 text-sm md:text-base leading-relaxed space-y-1">
          <p>Pelayanan Statistik Terpadu. BPS Kabupaten Kaimana.</p>
          <p>Jl. Casuarina No. 11</p>
        </div>

        <div class="text-gray-200 text-sm md:text-base space-y-1">
          <p class="font-bold text-white">Jam Layanan:</p>
          <p>– Senin-Kamis: 08.30–15.30 WIB (tanpa jam istirahat)</p>
          <p>– Jumat: 08.30–16.00 WIB (tanpa jam istirahat)</p>
        </div>

        <div class="space-y-3 pt-2 text-gray-200 text-sm md:text-base">
          <div class="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-white flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <a href="mailto:bps9102@bps.go.id" class="hover:underline">bps9102@bps.go.id</a>
          </div>

          <div class="flex items-start gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-white mt-0.5 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.55 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <div class="leading-tight">
              <p>Telp (62-957) 21662</p>
              <p>Faks (62-957) 21846</p>
            </div>
          </div>
        </div>

        <div class="pt-4">
          <img
            src="/images/berakhlak.png"
            alt="Logo BerAKHLAK - Bangga Melayani Bangsa"
            class="h-18 w-auto object-contain bg-white p-1 rounded"
          />
        </div>
      </div>
    </div>

    <hr class="border-t border-gray-600 my-6" />
    <p class="text-sm text-white-500">Hak Cipta © {{ new Date().getFullYear() }} BPS Kabupaten Kaimana</p>
  </footer>
</template>

