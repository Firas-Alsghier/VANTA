<script setup>
import { ArrowRight } from 'lucide-vue-next';
import { newArrivals } from '~/data/home';
</script>

<template>
  <section
    id="new-arrivals"
    class="scroll-mt-20 w-full px-gutter md:px-margin lg:px-margin-lg py-space-xl bg-surface"
  >
    <div
      class="flex flex-col sm:flex-row sm:items-end justify-between pb-space-md border-b border-line gap-space-sm mb-space-lg"
    >
      <div>
        <span
          class="text-label-mono uppercase text-on-surface-variant block mb-1"
          >CATALOG // SECTOR 01</span
        >
        <h2
          class="font-display text-headline-md sm:text-headline-lg text-primary uppercase tracking-tight"
        >
          NEW ARRIVALS
        </h2>
        <p class="text-body-md text-on-surface-variant">
          DROP 04.2 / RIGID CUTS &amp; KINETIC SILHOUETTES
        </p>
      </div>
      <NuxtLink
        to="/new-arrivals"
        class="group flex items-center gap-2 text-label-caps uppercase text-on-surface hover:text-on-surface-variant transition-colors"
      >
        <span>View All (24 Silhouettes)</span>
        <ArrowRight
          :size="16"
          :stroke-width="1.5"
          class="group-hover:translate-x-1 transition-transform"
        />
      </NuxtLink>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter border-b border-line pb-space-xl"
    >
      <ProductCard
        v-for="product in newArrivals"
        :key="product.id"
        :product="product"
        variant="arrival"
      />
    </div>
  </section>
</template>
