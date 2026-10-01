<script setup>
import { ArrowRight, ArrowDown } from 'lucide-vue-next';
import { heroImage } from '~/data/home';
</script>

<template>
  <section class="relative w-full overflow-hidden bg-surface-container-low">
    <div
      class="w-full px-gutter md:px-margin lg:px-margin-lg pt-space-lg md:pt-space-xl pb-space-xl"
    >
      <!-- Meta row -->
      <div
        class="flex flex-col md:flex-row md:items-center justify-between pb-space-md border-b border-line gap-space-sm"
      >
        <div class="flex items-center gap-space-md">
          <span class="inline-block w-2 h-2 bg-primary" />
          <span
            class="text-label-caps uppercase text-on-surface tracking-widest"
            >Collection 04 / Edition 2025</span
          >
          <span
            class="text-on-surface-variant text-label-mono hidden sm:inline-block"
            >// DEPT. 01 — RUNWAY &amp; STREET</span
          >
        </div>
        <div
          class="text-label-mono text-on-surface-variant tracking-wider flex items-center gap-space-md"
        >
          <span>COORDINATES: 35.6762° N, 139.6503° E</span>
          <span class="w-1 h-1 bg-outline rounded-full" />
          <span>AUTUMN / WINTER ARCHIVE</span>
        </div>
      </div>

      <div
        class="mt-space-lg grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-gutter-lg items-end"
      >
        <!-- Image (8 cols) -->
        <div
          class="lg:col-span-8 relative group overflow-hidden bg-surface-container"
        >
          <div
            class="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden"
          >
            <img
              :src="heroImage"
              alt="VANTA technical streetwear campaign in a brutalist concrete interior"
              class="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 ease-out scale-100 group-hover:scale-[1.02]"
            />
            <div
              class="absolute inset-0 bg-linear-to-t from-primary/60 via-transparent to-transparent pointer-events-none"
            />

            <div
              class="absolute top-space-md left-space-md bg-surface/90 backdrop-blur-sm px-3 py-1.5 flex items-center gap-2"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
              <span
                class="text-label-mono text-primary uppercase tracking-widest"
                >LIVE LOOKBOOK — SILHOUETTE 01</span
              >
            </div>

            <div
              class="absolute bottom-space-md left-space-md right-space-md flex items-end justify-between text-on-primary"
            >
              <div class="max-w-md">
                <span
                  class="text-label-mono tracking-widest block uppercase text-primary-fixed opacity-90"
                >
                  Look 04.14 // Structured Nylon
                </span>
                <p
                  class="text-body-sm text-surface-container-low hidden sm:block mt-1"
                >
                  Sculptural windbreakers paired with kinetic modular cargo and
                  molded sole profile.
                </p>
              </div>
              <div
                class="text-label-mono px-2.5 py-1 bg-primary text-on-primary border border-outline"
              >
                FIG. 2025.A
              </div>
            </div>
          </div>
        </div>

        <!-- Copy + actions (4 cols) -->
        <div
          class="lg:col-span-4 flex flex-col justify-between self-stretch pt-space-md lg:pt-0 border-t lg:border-t-0 lg:border-l border-line lg:pl-space-lg"
        >
          <div>
            <div
              class="inline-flex items-center gap-2 mb-space-sm px-2 py-0.5 bg-surface-container-highest"
            >
              <span class="text-label-caps uppercase text-on-surface"
                >Architectural Utility</span
              >
            </div>
            <h1
              class="font-display text-display-hero-mobile lg:text-headline-lg text-primary uppercase tracking-tight leading-none mb-space-md"
            >
              BUILT FOR<br />YOUR<br />EVERYDAY.
            </h1>
            <p
              class="text-body-lg text-on-surface-variant max-w-sm mb-space-lg"
            >
              Essential pieces. Modern silhouettes. Made to move with you
              through harsh metropolitan geography and quiet spatial interludes.
            </p>
          </div>

          <div class="space-y-3 pt-space-sm">
            <NuxtLink
              to="/#new-arrivals"
              class="group w-full flex items-center justify-between bg-primary text-on-primary px-space-md py-4 text-label-caps uppercase border border-primary hover:bg-surface-container-lowest hover:text-primary transition-colors"
            >
              <span>Shop New Arrivals</span>
              <ArrowRight
                :size="18"
                :stroke-width="1.5"
                class="group-hover:translate-x-1 transition-transform"
              />
            </NuxtLink>
            <NuxtLink
              to="/#flagship-campaign"
              class="w-full flex items-center justify-between bg-transparent text-on-surface px-space-md py-3.5 text-label-caps uppercase border border-outline hover:border-primary hover:bg-surface-container-high transition-colors"
            >
              <span>Explore KINETIC-01</span>
              <ArrowDown :size="18" :stroke-width="1.5" />
            </NuxtLink>
            <div
              class="pt-space-md flex items-center justify-between text-on-surface-variant text-label-mono"
            >
              <span>VANTA ARCHIVE // SERIES 04</span>
              <span>LIMITED QUANTITIES</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
