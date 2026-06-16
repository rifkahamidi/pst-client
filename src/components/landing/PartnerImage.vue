<template>
  <div>
    <img :src="img" class="sm:w-1/2 lg:w-72 mx-auto" alt="Partner Logo" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  img: string // Menerima data gambar matang dari Index.vue
}>()
</script>