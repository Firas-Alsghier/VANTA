<script setup>
import { brand, footerColumns, legalLinks } from '~/data/home';
</script>

<template>
  <footer
    class="w-full bg-surface-container-low border-t border-line pt-space-xl pb-space-lg"
  >
    <div class="w-full px-gutter md:px-margin lg:px-margin-lg">
      <div
        class="grid grid-cols-1 md:grid-cols-12 gap-gutter lg:gap-gutter-lg pb-space-xl border-b border-line"
      >
        <!-- Brand + mini newsletter -->
        <div
          class="md:col-span-4 flex flex-col justify-between pr-0 lg:pr-space-lg"
        >
          <div class="space-y-space-md">
            <span
              class="font-display text-headline-sm text-primary tracking-tight uppercase block"
            >
              {{ brand.name }}
            </span>
            <p class="text-body-md text-on-surface-variant max-w-sm">
              VANTA creates everyday pieces designed around movement,
              simplicity, and personal architectural style.
            </p>
          </div>
          <div class="pt-space-lg">
            <p class="text-label-caps uppercase text-on-surface mb-space-xs">
              Editorial Gazette
            </p>
            <p class="text-body-sm text-on-surface-variant mb-space-sm">
              Archive drops, releases, and spatial studies directly to your
              terminal.
            </p>
            <div class="flex max-w-sm">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                aria-label="Email address"
                class="w-full bg-surface-container-lowest border border-line px-3 py-2 text-label-mono text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-primary"
              />
              <button
                type="button"
                class="bg-primary text-on-primary px-space-md text-label-caps uppercase border border-primary hover:bg-surface-container-lowest hover:text-primary transition-colors"
              >
                Join
              </button>
            </div>
          </div>
        </div>

        <!-- Link columns -->
        <div class="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-gutter">
          <FooterColumn
            v-for="col in footerColumns"
            :key="col.title"
            :title="col.title"
            :links="col.links"
          />
        </div>
      </div>

      <div
        class="pt-space-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md text-label-mono text-on-surface-variant"
      >
        <p>© 2025 VANTA STUDIO ARCHIVE INC. ALL RIGHTS RESERVED.</p>
        <div
          class="flex flex-wrap items-center gap-space-lg text-label-caps uppercase"
        >
          <span>{{ brand.tagline }}</span>
          <NuxtLink
            v-for="link in legalLinks"
            :key="link.label"
            :to="link.to"
            class="hover:text-on-surface transition-colors"
          >
            {{ link.label }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
