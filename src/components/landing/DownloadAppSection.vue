<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DownloadAppSection',
})
</script>

<template>
  <section class="min-h-screen bg-gray-100 flex items-center justify-center px-6 md:px-16 lg:px-24 overflow-hidden">
    <div class="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div class="flex flex-col space-y-6 max-w-xl">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-950 leading-tight">
          Akses Statistik Indonesia dimana pun, kapan pun.
        </h1>

        <p class="text-gray-600 text-base md:text-lg leading-relaxed">
          Download aplikasi AllStats BPS untuk dapatkan kemudahan akses data BPS seperti: 
          Statistik di sekitarmu, Indikator Strategis, Publikasi Nasional sampai daerah, 
          Tabel Dinamis, dan masih banyak lagi.
        </p>
      </div>

      <div class="relative flex justify-center -mb-20 lg:justify-end w-full">
        <div class="absolute w-72 h-72 bg-blue-200/40 rounded-full blur-3xl top-1/4 right-1/4"></div>

        <img
          src="/images/allstats.png"
          alt="Statistik Indonesia App Mockup"
          class="w-auto h-[500px] md:h-[600px] lg:h-[650px] object-contain drop-shadow-2xl"
        />
      </div>
    </div>
  </section>
</template>

