<script setup>
import { ref, onMounted } from 'vue';

// State untuk mengatur muncul/hilangnya pop-up
const isPopupOpen = ref(false);

// Fungsi untuk menutup pop-up
const closePopup = () => {
  isPopupOpen.value = false;
};

// Ketika halaman web selesai dimuat, otomatis buka pop-up
onMounted(() => {
  // Opsional: berikan sedikit delay (misal 500ms) agar transisi terasa lebih halus
  setTimeout(() => {
    isPopupOpen.value = true;
  }, 500);
});
</script>

<template>
  <div 
    v-if="isPopupOpen" 
    class="fixed inset-0 z-50 flex items-center justify-center p-4"
  >
    <div 
      @click="closePopup" 
      class="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
    ></div>

    <div class="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden z-10 flex flex-col transform transition-all duration-300">
      
      <div class="bg-white px-4 py-2 flex justify-end items-center border-b border-gray-100">
        <button 
          @click="closePopup" 
          class="text-gray-400 hover:text-gray-700 font-bold text-xl p-1 transition-colors"
        >
          ✕
        </button>
      </div>

      <div class="relative bg-[#0A3981] p-1 flex flex-col justify-center items-center">
        <img 
          src="/images/banner-pengumuman.png" 
          alt="Pengumuman PST BPS" 
          class="w-full h-auto object-contain"
        />
        
        </div>

    </div>
  </div>
</template>