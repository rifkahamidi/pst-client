<script setup>
defineProps({
  isOpen: Boolean
})
const emit = defineEmits(['close'])
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4">
    <div @click="$emit('close')" class="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"></div>
    <div class="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden z-10 flex flex-col transform transition-all duration-300">
      <div class="bg-white px-4 py-2 flex justify-end items-center border-b border-gray-100">
        <button @click="$emit('close')" class="text-gray-400 hover:text-gray-700 font-bold text-xl p-1 transition-colors">✕</button>
      </div>
      <div class="relative bg-white p-6 text-center">
        <h2 class="text-xl font-bold text-[#0A3981] mb-4">Pengumuman Penting</h2>
        <p class="text-gray-600 mb-6">
          Sehubungan dengan kebijakan WFH, layanan kunjungan langsung pada hari Jumat dialihkan menjadi layanan online.
        </p>
        <a href="https://pst.bps.go.id" class="inline-block bg-[#0A3981] text-white px-6 py-2 rounded-full font-bold hover:bg-blue-900 transition-colors">
          Kunjungi Layanan Online
        </a>
      </div>
    </div>
  </div>
</template>