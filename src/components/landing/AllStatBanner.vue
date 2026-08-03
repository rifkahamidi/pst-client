<script setup lang="ts">
// Props atau logika dapat ditambahkan di sini jika dibutuhkan nantinya
</script>

<template>
  <section class="bg-gray-100 flex items-center justify-center px-6 py-12 md:px-16 lg:px-24 overflow-hidden pb-0">
    <div class="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
      
      <div class="flex flex-col space-y-6 max-w-xl pb-12">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-950 leading-tight">
          Akses Statistik Indonesia dimana pun, kapan pun.
        </h1>
        <p class="text-gray-600 text-base md:text-lg leading-relaxed">
          Download aplikasi AllStats BPS untuk dapatkan kemudahan akses data BPS seperti: 
          Statistik di sekitarmu, Indikator Strategis, Publikasi Nasional sampai daerah, 
          Tabel Dinamis, dan masih banyak lagi.
        </p>
        
        <div class="flex flex-wrap gap-4">
          <a href="#" target="_blank" class="inline-flex items-center bg-black text-white px-4 py-2 rounded-lg border border-gray-700 hover:bg-gray-900 transition duration-200">
            <svg viewBox="0 0 512 512" class="w-8 h-8 mr-3" xmlns="http://www.w3.org/2000/svg">
              <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 36l191 191-191 191V36zM325.3 277.7l60.1 60.1L104.6 499l220.7-221.3zm5.2-21.7L465 256 330.5 256z" fill="#fff"/>
            </svg>
            <div class="text-left">
              <div class="text-[10px] uppercase leading-none">Temukan di</div>
              <div class="text-xl font-bold leading-none mt-1">Google Play</div>
            </div>
          </a>

          <a href="#" target="_blank" class="inline-flex items-center bg-black text-white px-4 py-2 rounded-lg border border-gray-700 hover:bg-gray-900 transition duration-200">
            <svg viewBox="0 0 384 512" class="w-8 h-8 mr-3" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-11.4 0-43.8-19.1-72.9-19.1-37.5 0-71.7 21.3-91.1 54.8-39.2 67.3-10 167.9 27.8 222.8 18.5 26.9 40.4 56.9 69.3 55.9 28.1-1.1 38.6-18 72.2-18 33.3 0 43 18 72.2 17.4 29.3-.5 48.3-27.1 66.2-53.1 20.7-29.8 29.2-58.7 29.5-60.2-1.2-.5-56.6-21.7-56.9-82.9zM260.6 86c15.4-18.6 25.9-44.4 23.1-70.1-22.1 0.9-48.8 14.8-64.7 33.3-14.3 16.6-26.8 43.1-23.4 68.1 24.5 2 49.6-12.7 65-31.3z"/>
            </svg>
            <div class="text-left">
              <div class="text-[10px] uppercase leading-none">Download di</div>
              <div class="text-xl font-bold leading-none mt-1">App Store</div>
            </div>
          </a>
        </div>
      </div>

      <div class="relative flex justify-center lg:justify-end items-end w-full">
        <div class="absolute w-72 h-72 bg-blue-200/40 rounded-full blur-3xl -z-10 top-1/4 right-1/4"></div>
        <img src="/images/allstats.png" alt="Statistik Indonesia App Mockup" class="w-auto h-[500px] md:h-[600px] lg:h-[650px] object-contain drop-shadow-2xl block align-bottom" />
      </div>

    </div>
  </section>
</template>