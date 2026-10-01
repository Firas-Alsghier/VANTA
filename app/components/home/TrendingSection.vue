<script setup>
import { trending, trendingFilters } from '~/data/home';

// Visual state only, as in Stitch. Add a `filter` field to each product and a computed list when you want real filtering.
const activeFilter = ref(trendingFilters[0]);
</script>

<template>
  <section
    class="w-full px-gutter md:px-margin lg:px-margin-lg py-space-xl bg-surface"
  >
    <div
      class="flex flex-col md:flex-row md:items-end justify-between pb-space-md border-b border-line gap-space-sm mb-space-lg"
    >
      <div>
        <span
          class="text-label-mono uppercase text-on-surface-variant block mb-1"
          >ARCHIVE RELEASES // POPULAR DEMAND</span
        >
        <h2
          class="font-display text-headline-md sm:text-headline-lg text-primary uppercase tracking-tight"
        >
          TRENDING IN THE ARCHIVE
        </h2>
        <p class="text-body-md text-on-surface-variant">
          Most coveted silhouettes this week based on global showroom velocity.
        </p>
      </div>

      <div class="flex items-center gap-1.5 flex-wrap">
        <button
          v-for="filter in trendingFilters"
          :key="filter"
          type="button"
          class="px-3 py-1 text-label-caps uppercase transition-colors"
          :class="
            activeFilter === filter
              ? 'bg-primary text-on-primary'
              : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
          "
          @click="activeFilter = filter"
        >
          {{ filter }}
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
      <ProductCard
        v-for="product in trending"
        :key="product.id"
        :product="product"
        variant="trending"
      />
    </div>
  </section>
</template>
