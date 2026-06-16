<script lang="ts">
import { defineComponent, PropType } from 'vue'

export type LayananCardVariant = 'blue' | 'orange'

export default defineComponent({
  name: 'LayananCard',
  props: {
    title: { type: String, required: true },
    subtitleTag: { type: String, required: true },
    description: { type: String, required: true },
    linkText: { type: String, required: true },
    linkHref: { type: String, required: true },
    badgeText: { type: String, default: 'Gratis' },
    variant: { type: String as PropType<LayananCardVariant>, default: 'blue' },
  },
  computed: {
    iconClass(): string {
      return this.variant === 'orange' ? 'bg-orange-600' : 'bg-blue-950'
    },
  },
})
</script>

<template>
  <div
    class="relative w-72 h-[450px] bg-white rounded-2xl shadow-lg flex flex-col justify-between overflow-hidden border border-gray-100 p-6 pt-12 hover:bg-blue-200"
  >
    <div class="absolute top-0 right-0 w-28 h-28 overflow-hidden pointer-events-none">
      <div
        class="absolute bg-blue-600 text-white text-xs font-bold uppercase tracking-wider text-center py-1.5 w-40 top-6 -right-10 rotate-45 shadow-sm"
      >
        {{ badgeText }}
      </div>
    </div>

    <div class="flex flex-col items-center flex-grow text-center">
      <div
        :class="['w-20 h-20 rounded-full flex items-center justify-center text-white mb-5 shadow-sm', iconClass]"
      >
        <!-- icon -->
        <slot name="icon" />
      </div>

      <h3 class="text-blue-950 font-extrabold text-2xl mb-1">{{ title }}</h3>

      <div class="flex items-center justify-center gap-1.5 text-gray-500 font-bold text-sm mb-4">
        <span>{{ subtitleTag }}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 text-blue-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      </div>

      <p class="text-gray-500 text-sm leading-relaxed px-2 text-justify md:text-center">{{ description }}</p>
    </div>

    <div class="mt-6 text-center w-full">
      <a
        :href="linkHref"
        target="_blank"
        class="inline-block text-blue-900 font-bold hover:text-blue-700 hover:underline transition-colors duration-200"
      >
        {{ linkText }}
      </a>
    </div>
  </div>
</template>

