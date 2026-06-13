<script lang="ts">
import { defineComponent } from 'vue'
import BaseButton from '@/components/base/Button.vue'

export default defineComponent({
  name: 'LandingHero',
  components: {
    BaseButton,
  },
})
</script>

<template>
  <section
    class="flex-grow bg-[#0A3981] text-white px-6 py-12 md:px-16 lg:px-24 flex items-center justify-center relative overflow-hidden"
  >
    <div class="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div class="lg:col-span-10 space-y-4 max-w-xl">
        <h2 class="text-5xl md:text-6xl font-extrabold leading-tight tracking-wide">
          Pelayanan <br /> Statistik <br /> Terpadu
        </h2>

        <p class="text-gray-200 text-sm md:text-base leading-relaxed font-light">
          Selamat datang di Pelayanan Statistik Terpadu BPS Kabupaten Kaimana. <br />Di website ini
          Anda dapat menemukan berbagai layanan yang kami sediakan dan informasi kontak yang dapat
          dihubungi. <br />
        </p>

        <router-link to="/buku-tamu">
          <BaseButton
            class="max-w-full px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white"
          >
            Isi Buku Tamu
          </BaseButton>
        </router-link>
      </div>

      <div class="flex justify-center w-full lg:pr-10">
        <img
          src="/images/service.png"
          alt="Ilustrasi Pelayanan Data Statistik"
          class="h-auto object-contain transition-all duration-200"
        />
      </div>
    </div>
  </section>
</template>

