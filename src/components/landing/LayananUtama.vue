<template>
  <div>
    <h2 class="text-3xl sm:text-4xl font-semibold text-center pt-6">Layanan Utama</h2>

    <div class="flex flex-wrap gap-6 justify-center bg-gray-50 p-8">
      
      <router-link to="/buku-tamu" class="block bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500 w-full max-w-sm">
        <div class="flex items-center gap-4">
          <div class="text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div>
            <span class="text-xs font-bold text-blue-600 uppercase">Layanan Umum</span>
            <h3 class="text-xl font-bold">Perpustakaan</h3>
          </div>
        </div>
        <p class="mt-4 text-gray-600">Publikasi statistik terbitan BPS dari berbagai kategori: kependudukan, sosial, sosial ekonomi, pertanian, dan lain-lain.</p>
        <a href="https://pustaka.bps.go.id" class="mt-4 inline-block text-blue-600 font-semibold hover:underline">Cari Pustaka &rarr;</a>
      </router-link>

      </div>
  </div>
</template>