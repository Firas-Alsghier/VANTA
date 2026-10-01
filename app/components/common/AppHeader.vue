<script setup>
import { Search, ShoppingBag, User, Menu, X } from 'lucide-vue-next';
import { brand, navLinks } from '~/data/home';

const { count } = useCart();
const menuOpen = ref(false);

// Close the mobile menu after navigating
const route = useRoute();
watch(
  () => route.fullPath,
  () => (menuOpen.value = false),
);
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-line"
  >
    <div
      class="h-20 w-full px-gutter md:px-margin lg:px-margin-lg flex items-center justify-between"
    >
      <NuxtLink to="/" class="flex items-center gap-3">
        <!-- <img
          :src="brand.logo"
          alt="VANTA brand wordmark"
          class="h-8 w-auto object-contain"
        /> -->
        <span
          class="font-display text-headline-sm text-primary tracking-tight uppercase hidden sm:inline-block"
        >
          {{ brand.name }}
        </span>
      </NuxtLink>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-space-lg">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="text-label-caps uppercase text-on-surface-variant hover:text-on-surface transition-colors py-1"
          active-class="text-on-surface! border-b-2 border-primary font-semibold"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-space-md">
        <button
          type="button"
          aria-label="Search catalog"
          class="text-on-surface hover:text-primary transition-colors flex items-center justify-center p-1.5"
        >
          <Search :size="20" :stroke-width="1.5" />
        </button>

        <NuxtLink
          to="/cart"
          aria-label="Shopping bag"
          class="relative text-on-surface hover:text-primary transition-colors flex items-center justify-center p-1.5"
        >
          <ShoppingBag :size="20" :stroke-width="1.5" />
          <span
            v-if="count > 0"
            class="absolute -top-1 -right-1 w-4 h-4 bg-primary text-on-primary text-label-mono flex items-center justify-center"
          >
            {{ count }}
          </span>
        </NuxtLink>

        <div
          class="w-8 h-8 rounded-full bg-primary flex items-center justify-center"
        >
          <User :size="18" :stroke-width="1.5" class="text-on-primary" />
        </div>

        <!-- Mobile menu toggle -->
        <button
          type="button"
          class="md:hidden text-on-surface p-1.5"
          :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
          :aria-expanded="menuOpen"
          aria-controls="mobile-nav"
          @click="menuOpen = !menuOpen"
        >
          <X v-if="menuOpen" :size="20" :stroke-width="1.5" />
          <Menu v-else :size="20" :stroke-width="1.5" />
        </button>
      </div>
    </div>

    <!-- Mobile nav -->
    <nav
      v-if="menuOpen"
      id="mobile-nav"
      class="md:hidden border-t border-line bg-surface px-gutter py-space-md flex flex-col gap-space-md"
    >
      <NuxtLink
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        class="text-label-caps uppercase text-on-surface-variant py-1"
        active-class="text-on-surface! font-semibold"
      >
        {{ link.label }}
      </NuxtLink>
    </nav>
  </header>
</template>
