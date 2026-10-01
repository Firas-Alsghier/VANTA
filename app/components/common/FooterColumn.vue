<script setup>
defineProps({
  title: { type: String, required: true },
  links: { type: Array, required: true }, // [{ label, to }]
});
</script>

<template>
  <div class="space-y-space-md">
    <span
      class="text-label-caps uppercase text-on-surface tracking-wider block"
      >{{ title }}</span
    >
    <ul class="space-y-2.5 text-body-sm text-on-surface-variant">
      <li v-for="link in links" :key="link.label">
        <NuxtLink
          :to="link.to"
          class="hover:text-on-surface transition-colors"
          >{{ link.label }}</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>
