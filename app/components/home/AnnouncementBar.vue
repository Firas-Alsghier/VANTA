<script setup>
import { announcements } from '~/data/home';
</script>

<template>
  <aside
    aria-label="Brand announcement"
    class="w-full bg-surface-container-lowest border-y border-line py-3 overflow-hidden select-none"
  >
    <div
      class="flex items-center whitespace-nowrap gap-space-xl text-label-caps tracking-widest text-on-surface uppercase animate-pulse"
    >
      <!-- Second copy is decorative and only shown on large screens, as in Stitch -->
      <div
        v-for="copy in 2"
        :key="copy"
        :aria-hidden="copy === 2"
        class="items-center gap-space-lg shrink-0"
        :class="copy === 2 ? 'hidden lg:flex' : 'flex'"
      >
        <template v-for="message in announcements" :key="message">
          <span>{{ message }}</span>
          <span class="w-1.5 h-1.5 bg-primary rotate-45 inline-block" />
        </template>
      </div>
    </div>
  </aside>
</template>
