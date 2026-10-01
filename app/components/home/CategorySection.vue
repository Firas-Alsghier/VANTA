<script setup>
import { ArrowRight } from 'lucide-vue-next';
import { categories } from '~/data/home';
</script>

<template>
  <section
    class="w-full px-gutter md:px-margin lg:px-margin-lg py-space-xl bg-surface-container-low"
  >
    <div
      class="flex flex-col md:flex-row md:items-end justify-between mb-space-lg pb-space-sm border-b border-line"
    >
      <div>
        <span
          class="text-label-mono uppercase text-on-surface-variant block mb-1"
          >ARCHETYPES // DISCIPLINE</span
        >
        <h2
          class="font-display text-headline-md sm:text-headline-lg text-primary uppercase tracking-tight"
        >
          CATEGORIES
        </h2>
      </div>
      <p class="text-body-md text-on-surface-variant max-w-sm mt-2 md:mt-0">
        Engineered systems designed to interact seamlessly across layers,
        weights, and metropolitan environments.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
      <NuxtLink
        v-for="category in categories"
        :key="category.id"
        :to="category.to"
        class="group relative block aspect-[3/4] bg-surface-container overflow-hidden border border-line"
      >
        <img
          :src="category.image"
          :alt="category.alt"
          loading="lazy"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
        />
        <div
          class="absolute inset-0 bg-linear-to-t from-primary/80 via-primary/20 to-transparent"
        />
        <div
          class="absolute inset-0 p-space-md flex flex-col justify-between text-on-primary"
        >
          <div class="flex items-center justify-between">
            <span
              class="text-label-mono tracking-widest uppercase bg-surface/20 backdrop-blur-sm px-2 py-0.5"
            >
              {{ category.code }}
            </span>
            <span class="text-label-mono">{{ category.count }}</span>
          </div>
          <div>
            <h3
              class="font-display text-headline-md text-on-primary uppercase tracking-tight mb-1"
            >
              {{ category.name }}
            </h3>
            <p class="text-body-sm text-primary-fixed opacity-90 mb-3">
              {{ category.description }}
            </p>
            <div
              class="flex items-center gap-1 text-label-caps uppercase tracking-wider group-hover:translate-x-1 transition-transform"
            >
              <span>Shop Now</span>
              <ArrowRight :size="14" :stroke-width="1.5" />
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>
