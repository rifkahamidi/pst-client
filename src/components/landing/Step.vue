<template>
  <!-- v-if memastikan data 'step' sudah ada sebelum dirender -->
  <div v-if="step">
    <img :src="'/images/getting-started/' + step.img" :alt="step.title" />
    <h3>{{ step.title }}</h3>
    <p>{{ step.description }}</p>
  </div>
</template>

<script setup>
// Wajib daftarkan props agar variabel 'step' tidak undefined
defineProps({
  step: Object
})
</script>
