<script setup>
import { Star, Rotate3d, ShoppingBag } from 'lucide-vue-next';
import { featuredProduct as product } from '~/data/home';

const { add } = useCart();

const selectedColor = ref(product.colorways[0]);
const selectedSize = ref(product.defaultSize);
const addedCount = ref(0);

function addToBag() {
  add(product);
  addedCount.value++;
}
</script>

<template>
  <section
    id="flagship-campaign"
    class="scroll-mt-20 w-full px-gutter md:px-margin lg:px-margin-lg py-space-xl bg-surface border-b border-line"
  >
    <div
      class="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-gutter-lg items-center"
    >
      <!-- Visual (7 cols) -->
      <div class="lg:col-span-7 flex flex-col space-y-space-sm">
        <div
          class="relative aspect-[4/3] w-full bg-surface-container-high overflow-hidden border border-line group"
        >
          <img
            :src="product.image"
            :alt="product.alt"
            class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div class="absolute top-space-md left-space-md flex flex-col gap-2">
            <span
              class="px-2.5 py-1 bg-primary text-on-primary text-label-mono uppercase tracking-wider w-max"
            >
              {{ product.tags[0] }}
            </span>
            <span
              class="px-2 py-0.5 bg-surface/90 backdrop-blur-sm text-on-surface text-label-mono w-max"
            >
              {{ product.tags[1] }}
            </span>
          </div>
          <div
            class="absolute bottom-space-md right-space-md flex items-center gap-2 bg-surface/90 backdrop-blur-sm px-3 py-1.5 border border-line"
          >
            <Rotate3d :size="16" :stroke-width="1.5" class="text-primary" />
            <span class="text-label-caps uppercase text-on-surface"
              >360° SPATIAL VIEW</span
            >
          </div>
        </div>

        <div class="grid grid-cols-3 gap-2">
          <div
            v-for="fact in product.facts"
            :key="fact.label"
            class="p-2 bg-surface-container-lowest border border-line text-center"
          >
            <span
              class="text-label-mono text-on-surface-variant block uppercase"
              >{{ fact.label }}</span
            >
            <span class="text-label-caps text-primary uppercase font-bold">{{
              fact.value
            }}</span>
          </div>
        </div>
      </div>

      <!-- Details (5 cols) -->
      <div class="lg:col-span-5 flex flex-col justify-center space-y-space-md">
        <div>
          <div
            class="flex flex-wrap items-center gap-2 text-on-surface-variant text-label-mono mb-1"
          >
            <span>{{ product.spec }}</span>
            <span>•</span>
            <span class="flex items-center text-primary">
              <Star v-for="n in 5" :key="n" :size="14" :stroke-width="1.5" />
              <span class="ml-1 text-label-mono text-on-surface-variant">{{
                product.rating
              }}</span>
            </span>
          </div>
          <h2
            class="font-display text-headline-lg text-primary uppercase tracking-tight leading-tight"
          >
            {{ product.name }}
          </h2>
          <div class="font-display text-headline-sm text-primary mt-1">
            ${{ product.price }}
            <span
              class="text-label-mono text-on-surface-variant uppercase font-normal"
              >USD // TAXES INCL.</span
            >
          </div>
        </div>

        <p class="text-body-md text-on-surface-variant">
          {{ product.description }}
        </p>

        <ul
          class="space-y-2 py-2 border-y border-line text-body-sm text-on-surface"
        >
          <li
            v-for="bullet in product.bullets"
            :key="bullet"
            class="flex items-center gap-2"
          >
            <span class="w-1.5 h-1.5 bg-primary shrink-0" />
            <span>{{ bullet }}</span>
          </li>
        </ul>

        <!-- Colorway -->
        <div>
          <div
            class="flex items-center justify-between text-on-surface mb-2 text-label-caps uppercase"
          >
            <span>Colorway</span>
            <span class="text-label-mono text-on-surface-variant"
              >{{ selectedColor.label }} (Active)</span
            >
          </div>
          <div class="flex items-center gap-2">
            <button
              v-for="color in product.colorways"
              :key="color.name"
              type="button"
              :aria-label="`Select ${color.name}`"
              class="w-9 h-9 border border-outline transition-all flex items-center justify-center"
              :class="{
                'ring-2 ring-primary': selectedColor.name === color.name,
              }"
              :style="{ backgroundColor: color.hex }"
              @click="selectedColor = color"
            >
              <span
                v-if="selectedColor.name === color.name"
                class="w-1.5 h-1.5"
                :class="color.dark ? 'bg-on-primary' : 'bg-primary'"
              />
            </button>
          </div>
        </div>

        <!-- Size -->
        <div>
          <div
            class="flex items-center justify-between text-on-surface mb-2 text-label-caps uppercase"
          >
            <span>Select Size (US Mens)</span>
            <NuxtLink
              to="#"
              class="text-on-surface-variant hover:text-primary underline text-label-mono"
            >
              Size Matrix Guide
            </NuxtLink>
          </div>
          <div class="grid grid-cols-7 gap-1.5">
            <button
              v-for="size in product.sizes"
              :key="size.label"
              type="button"
              :disabled="size.soldOut"
              class="relative py-2.5 text-center text-label-mono border transition-colors"
              :class="[
                selectedSize === size.label
                  ? 'bg-primary text-on-primary border-primary font-bold'
                  : 'border-line hover:border-primary',
                size.soldOut && 'opacity-40 cursor-not-allowed line-through',
              ]"
              @click="selectedSize = size.label"
            >
              {{ size.label }}
              <span
                v-if="size.lowStock"
                class="absolute -top-1 -right-1 w-2 h-2 bg-error rounded-full"
                title="Low stock"
              />
            </button>
          </div>
          <span class="block mt-1 text-label-mono text-error">{{
            product.lowStockNote
          }}</span>
        </div>

        <!-- CTA -->
        <div class="space-y-2 pt-2">
          <button
            type="button"
            class="w-full bg-primary text-on-primary border border-primary py-4 text-label-caps uppercase hover:bg-surface-container-lowest hover:text-primary transition-colors flex items-center justify-center gap-2"
            @click="addToBag"
          >
            <template v-if="addedCount">
              <span>Added to bag — proceed ({{ addedCount }})</span>
            </template>
            <template v-else>
              <span>Add to Bag — ${{ product.price }}</span>
              <ShoppingBag :size="18" :stroke-width="1.5" />
            </template>
          </button>
          <NuxtLink
            to="#"
            class="w-full block text-center py-3 text-label-caps uppercase text-on-surface hover:text-primary transition-colors border border-dashed border-line"
          >
            Book Studio Fitting // London &amp; New York Showrooms
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
