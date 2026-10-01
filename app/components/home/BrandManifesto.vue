<script setup>
import { manifestoPillars } from '~/data/home';
</script>

<template>
  <section
    class="w-full px-gutter md:px-margin lg:px-margin-lg py-space-xl bg-surface-container-lowest relative overflow-hidden"
  >
    <div class="max-w-4xl mx-auto text-center space-y-space-md relative z-10">
      <div class="inline-flex items-center gap-3">
        <span class="h-px w-8 bg-primary" />
        <span class="text-label-caps uppercase tracking-widest text-on-surface"
          >Architectural Philosophy</span
        >
        <span class="h-px w-8 bg-primary" />
      </div>

      <h2
        class="font-display text-display-hero-mobile md:text-display-hero text-primary uppercase tracking-tighter leading-none"
      >
        LESS NOISE.<br />MORE YOU.
      </h2>

      <p
        class="text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed"
      >
        VANTA creates everyday pieces designed around movement, simplicity, and
        personal style. We reject disposable trends in pursuit of timeless
        architectural silhouettes crafted to last a lifetime.
      </p>

      <div
        class="pt-space-md grid grid-cols-2 sm:grid-cols-4 gap-gutter border-t border-line max-w-3xl mx-auto"
      >
        <div
          v-for="(pillar, index) in manifestoPillars"
          :key="pillar"
          class="text-left"
        >
          <span class="font-display text-headline-sm text-primary block">{{
            String(index + 1).padStart(2, '0')
          }}</span>
          <span class="text-label-caps uppercase text-on-surface-variant">{{
            pillar
          }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
