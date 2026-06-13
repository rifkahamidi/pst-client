<template>
  <div class="col-span-12 lg:col-span-6">
    <div class="w-full">
      <!-- Langsung panggil variabel gambar di sini -->
      <img :src="buyAndTradeImg" class="mt-4 sm:-mt-4" alt="Buy and Trade" />
    </div>
  </div>
</template>

<script setup lang="ts">
// Di Vue 3 + Vite, cukup import gambar seperti ini.
// Variabel 'buyAndTradeImg' otomatis bisa langsung dibaca oleh <template> di atas.
import buyAndTradeImg from '@/assets/img/buy-and-trade.webp'
</script>