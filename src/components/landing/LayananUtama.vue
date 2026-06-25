<script setup>
import { ref } from 'vue'

const layananList = ref([
  {
    id: 1,
    title: 'Perpustakaan',
    category: 'Layanan Umum',
    description: 'Publikasi statistik terbitan BPS dari berbagai kategori: kependudukan, sosial, sosial ekonomi, pertanian, dan lain-lain.',
    actionText: 'Cari Pustaka',
    badgeText: 'GRATIS',
    icon: 'book-open',
    iconBgColor: 'bg-[#0A397D]',
    isRouter: true,
    to: '/buku-tamu',
    url: 'https://pustaka.bps.go.id'
  },
  {
    id: 2,
    title: 'Konsultasi',
    category: 'Layanan Umum',
    description: 'Konsultasi terkait data, metadata, klasifikasi, dan produk statistik BPS lainnya.',
    actionText: 'Ajukan Konsultasi',
    badgeText: 'GRATIS',
    icon: 'chat-alt',
    iconBgColor: 'bg-[#0A397D]',
    isRouter: false,
    url: '#'
  },
  {
    id: 3,
    title: 'Rekomendasi',
    category: 'Layanan Instansi',
    description: 'Layanan bagi instansi pemerintah yang akan melakukan survei dan mengajukan rekomendasi kegiatan statistik.',
    actionText: 'Minta Rekomendasi',
    badgeText: 'GRATIS',
    icon: 'document-text',
    iconBgColor: 'bg-[#D97706]',
    isRouter: false,
    url: '#'
  }
])
</script>

<template>
  <div class="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
    <!-- Judul Section -->
    <div class="text-center mb-10">
      <h2 class="text-3xl sm:text-4xl font-semibold text-gray-800">Layanan Utama</h2>
    </div>

    <!-- Grid Container untuk Kartu -->
    <div class="max-w-7xl mx-auto flex flex-wrap justify-center gap-6">
      
      <component
        :is="layanan.isRouter ? 'router-link' : 'div'"
        v-for="layanan in layananList" 
        :key="layanan.id"
        :to="layanan.isRouter ? layanan.to : undefined"
        class="relative bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 pt-10 flex flex-col justify-between overflow-hidden border border-gray-100 min-h-[420px] w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]"
        :class="{ 'block cursor-pointer': layanan.isRouter }"
      >
        <!-- Elemen Pita / Ribbon Badge Pojok Kanan Atas -->
        <div class="absolute top-0 right-0 w-28 h-28 overflow-hidden pointer-events-none">
          <div class="absolute top-4 -right-8 w-36 bg-[#3B82F6] text-white text-[10px] font-bold text-center py-1 rotate-45 shadow-sm uppercase tracking-wider flex items-center justify-center gap-1">
            {{ layanan.badgeText }}
            <span v-if="layanan.badgeText === 'BERBAYAR'" class="inline-block bg-white text-[#3B82F6] rounded-full w-3 h-3 text-[8px] text-center leading-3">i</span>
          </div>
        </div>

        <!-- Bagian Atas Kartu (Ikon & Konten) -->
        <div>
          <!-- Lingkaran Ikon -->
          <div :class="['w-16 h-16 rounded-full flex items-center justify-center text-white mb-6 shadow-sm', layanan.iconBgColor]">
            <svg v-if="layanan.icon === 'book-open'" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            <svg v-if="layanan.icon === 'chat-alt'" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
            <svg v-if="layanan.icon === 'document-text'" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          </div>

          <!-- Judul & Kategori Layanan -->
          <h3 class="text-xl font-bold text-[#0A397D] mb-1 leading-tight">
            {{ layanan.title }}
          </h3>
          <div class="flex items-center gap-1 text-gray-500 text-xs font-bold mb-4 uppercase">
            <span>{{ layanan.category }}</span>
            <svg class="w-3.5 h-3.5 inline text-[#0A397D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          </div>

          <!-- Deskripsi -->
          <p class="text-gray-600 text-sm leading-relaxed mb-6">
            {{ layanan.description }}
          </p>
        </div>

        <!-- Bagian Bawah Kartu (Tombol Aksi) -->
        <div class="mt-auto pt-4">
          <a 
            :href="layanan.url" 
            class="inline-block text-[#0A397D] font-semibold text-sm hover:underline"
            @click.stop
          >
            {{ layanan.actionText }} &rarr;
          </a>
        </div>
      </component>

    </div>
  </div>
</template>