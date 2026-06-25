<script setup>
import { ref, onMounted } from 'vue'
import Announcement from '@/components/Announcement.vue'
import LayananUtama from '@/components/landing/LayananUtama.vue'
import BukuTamu from '@/components/landing/LayananUtama.vue'


// State untuk input pencarian jika dibutuhkan nanti
const searchTerm = ref('')


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
  <Announcement
      :is-open="isPopupOpen" 
      @close="isPopupOpen = false" 
    />
    
    <div v-if="isPopupOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div @click="closePopup" class="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"></div>
      <div class="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden z-10 flex flex-col transform transition-all duration-300">
        <div class="bg-white px-4 py-2 flex justify-end items-center border-b border-gray-100">
          <button @click="closePopup" class="text-gray-400 hover:text-gray-700 font-bold text-xl p-1 transition-colors">✕</button>
        </div>
        <div class="relative bg-[#0A3981] p-1 flex flex-col justify-center items-center">
          <!-- <img src="/images/banner-pengumuman.png" alt="Pengumuman PST BPS" class="w-full h-auto object-contain" /> -->
        </div>
      </div>
    </div>

    <nav class="bg-[#00224D] text-white px-6 py-4 md:px-16 lg:px-24 flex items-center justify-between shadow-md z-10">
      <div class="flex items-center gap-3">
        <img src="/images/PST3.svg" alt="Logo PST" class="h-10 w-auto object-contain" />
        <div class="leading-tight">
          <h1 class="font-bold text-sm md:text-base tracking-wide">Pelayanan Statistik Terpadu</h1>
          <p class="text-xs text-gray-300">BPS Kabupaten Kaimana</p>
        </div>
      </div>

      <div class="flex items-center gap-6 md:gap-8 text-sm md:text-base">
        <a href="#" class="hover:text-blue-300 transition-colors">Layanan</a>
        <a href="#" class="hover:text-blue-300 transition-colors">Kontak</a>
        
        <div class="flex items-center gap-1 cursor-pointer hover:text-blue-300 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.6 9h16.8M3.6 15h16.8" />
          </svg>
          <span class="font-medium">ID</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        <button class="border border-white hover:bg-white hover:text-[#00224D] text-white font-medium px-5 py-1.5 rounded-full transition-all duration-200">
          Masuk/Daftar
        </button>
      </div>
    </nav>

    <section class="bg-[#0A3981] text-white px-6 md:px-16 lg:px-24 flex items-center justify-center relative overflow-hidden h-[calc(100vh-72px)] min-h-[500px]">
      <div class="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div class="lg:col-span-6 space-y-6 max-w-2xl">
          <h2 class="text-5xl md:text-6xl font-extrabold leading-tight tracking-wide">
            Pelayanan <br> Statistik <br> Terpadu
          </h2>
          
          <p class="text-gray-200 text-sm md:text-base leading-relaxed font-light">
            Selamat datang di Pelayanan Statistik Terpadu BPS Kabupaten Kaimana. Di website ini Anda dapat menemukan berbagai layanan yang kami sediakan dan informasi kontak yang dapat dihubungi. <br>
            <span class="font-normal">#MelayaniDenganHati </span>
          </p>
          
          <div class="pt-4 space-y-2">
            <div class="flex items-center justify-between max-w-md">
              <label class="font-bold text-sm md:text-base tracking-wide">Apa yang Anda cari hari ini?</label>
              <span class="text-xs text-gray-300 flex items-center gap-1">
                Search by <span class="text-[#FFB200] font-bold">AllStats</span> <span class="text-teal-400 font-medium">search</span>
              </span>
            </div>

            <div class="relative max-w-md text-gray-800">
              <input 
                v-model="searchTerm"
                type="text" 
                placeholder="Masukkan kata kunci pencarian disini..." 
                class="w-full bg-[#EAEAEA] placeholder-gray-500 rounded-lg pl-5 pr-12 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-400 font-medium text-sm transition-all shadow-md"
              />
              <button class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-700 hover:text-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="lg:col-span-6 flex justify-center lg:justify-end w-full">
          <img 
            src="/images/PST3.svg" 
            alt="Ilustrasi Pelayanan Data Statistik" 
            class="w-full max-w-md md:max-w-xl h-auto object-contain"
          />
        </div>

      </div>
    </section>

    <LayananUtama />

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
              <svg viewBox="0 0 512 512" class="w-8 h-8 mr-3" xmlns="http://www.w3.org/2000/svg"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 36l191 191-191 191V36zM325.3 277.7l60.1 60.1L104.6 499l220.7-221.3zm5.2-21.7L465 256 330.5 256z" fill="#fff"/></svg>
              <div class="text-left">
                <div class="text-[10px] uppercase leading-none">Temukan di</div>
                <div class="text-xl font-bold leading-none mt-1">Google Play</div>
              </div>
            </a>
            <a href="#" target="_blank" class="inline-flex items-center bg-black text-white px-4 py-2 rounded-lg border border-gray-700 hover:bg-gray-900 transition duration-200">
              <svg viewBox="0 0 384 512" class="w-8 h-8 mr-3" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-11.4 0-43.8-19.1-72.9-19.1-37.5 0-71.7 21.3-91.1 54.8-39.2 67.3-10 167.9 27.8 222.8 18.5 26.9 40.4 56.9 69.3 55.9 28.1-1.1 38.6-18 72.2-18 33.3 0 43 18 72.2 17.4 29.3-.5 48.3-27.1 66.2-53.1 20.7-29.8 29.2-58.7 29.5-60.2-1.2-.5-56.6-21.7-56.9-82.9zM260.6 86c15.4-18.6 25.9-44.4 23.1-70.1-22.1 0.9-48.8 14.8-64.7 33.3-14.3 16.6-26.8 43.1-23.4 68.1 24.5 2 49.6-12.7 65-31.3z"/></svg>
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

    <footer class="bg-[#00337C] text-white py-16 px-6 md:px-16 lg:px-24">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        <div class="space-y-6">
          <h2 class="text-3xl font-bold tracking-wide">Hubungi Kami</h2>
          <div class="text-gray-200 text-sm md:text-base leading-relaxed space-y-1">
            <p>Gedung 2 Lantai 1.</p>
            <p>Pelayanan Statistik Terpadu. Badan Pusat Statistik.</p>
            <p>Jl. Dr. Sutomo 6-8 Jakarta 10710 Indonesia</p>
          </div>
          <div class="text-gray-200 text-sm md:text-base space-y-1">
            <p class="font-bold text-white">Jam Layanan:</p>
            <p>– Senin-Kamis: 08.30–15.30 WIB (tanpa jam istirahat)</p>
            <p>– Jumat: 08.30–16.00 WIB (tanpa jam istirahat)</p>
          </div>
          <div class="space-y-3 pt-2 text-gray-200 text-sm md:text-base">
            <div class="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <a href="mailto:pst@bps.go.id" class="hover:underline">pst@bps.go.id</a>
            </div>
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <div class="leading-tight">
                <p>Telp (62-21) 3507057 (direct)</p>
                <p>Faks (62-21) 3857046</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span>RRMP+VW (-6.1653197,106.8362427)</span>
            </div>
          </div>
          <div class="pt-4">
            <img src="/images/berakhlak.png" alt="Logo BerAKHLAK - Bangga Melayani Bangsa" class="h-12 w-auto object-contain bg-white p-1 rounded" />
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>