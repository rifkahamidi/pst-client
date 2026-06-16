<script lang="ts">
import { defineComponent } from 'vue'
import LayananCard from '@/components/landing/LayananCard.vue'

export default defineComponent({
  name: 'LayananUtama',
  components: {
    LayananCard,
  },
})
</script>

<template>
  <div>
    <h2 class="text-3xl sm:text-4xl font-semibold text-center pt-6">Layanan Utama</h2>

    <div class="flex flex-wrap gap-6 justify-center bg-gray-50 p-8">
      <LayananCard
        title="Perpustakaan"
        subtitleTag="Layanan Umum"
        description="Publikasi statistik terbitan BPS dari berbagai kategori: kependudukan, sosial, sosial ekonomi, pertanian, dan lain-lain."
        linkText="Cari Pustaka"
        linkHref="https://pustaka.bps.go.id"
        variant="blue"
      >
        <template #icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </template>
      </LayananCard>

      <LayananCard
        title="Konsultasi"
        subtitleTag="Layanan Umum"
        description="Konsultasi terkait data, metadata, klasifikasi dan produk statistik BPS lainnya"
        linkText="Ajukan Konsultasi"
        linkHref="https://pustaka.bps.go.id"
        variant="blue"
      >
        <template #icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </template>
      </LayananCard>

      <LayananCard
        title="Rekomendasi"
        subtitleTag="Layanan Instansi"
        description="Layanan bagi instansi pemerintah yang akan melakukan survei dan mengajukan rekomendasi kegiatan statistik"
        linkText="Minta Rekomendasi"
        linkHref="https://pustaka.bps.go.id"
        variant="orange"
      >
        <template #icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </template>
      </LayananCard>
    </div>
  </div>
</template>

