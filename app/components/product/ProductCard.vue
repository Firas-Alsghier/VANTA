<script setup>
import { Heart } from 'lucide-vue-next';

const props = defineProps({
  product: { type: Object, required: true },
  // 'arrival' = square image + swatches | 'trending' = 4/5 image + full-width button
  variant: {
    type: String,
    default: 'arrival',
    validator: (v) => ['arrival', 'trending'].includes(v),
  },
});

const { has, toggle } = useWishlist();
const { add } = useCart();

const isTrending = computed(() => props.variant === 'trending');
const wished = computed(() => has(props.product.id));

// Local feedback only, like Stitch's "ADDED (1)" text
const addedCount = ref(0);
function quickAdd() {
  add(props.product);
  addedCount.value++;
}

const badgeColor = computed(() =>
  props.product.badgeStyle === 'solid'
    ? 'bg-primary text-on-primary'
    : 'bg-surface-container-highest text-on-surface',
);
</script>

<template>
  <article
    class="group relative flex flex-col bg-surface-container-lowest border border-line hover:border-primary transition-all duration-300"
  >
    <!-- Image -->
    <div
      class="relative w-full overflow-hidden bg-surface-container-high"
      :class="
        isTrending
          ? 'aspect-[4/5]'
          : 'aspect-square p-4 flex items-center justify-center'
      "
    >
      <img
        :src="product.image"
        :alt="product.alt"
        loading="lazy"
        class="w-full h-full group-hover:scale-105 transition-transform duration-500"
        :class="
          product.imageFit === 'contain'
            ? 'object-contain mix-blend-multiply'
            : 'object-cover'
        "
      />

      <button
        type="button"
        aria-label="Save to wishlist"
        :aria-pressed="wished"
        class="absolute p-1.5 bg-surface hover:text-primary transition-colors z-10"
        :class="[
          isTrending ? 'top-2 right-2' : 'top-3 right-3',
          wished ? 'text-error' : 'text-on-surface',
        ]"
        @click="toggle(product.id)"
      >
        <Heart :size="18" :stroke-width="1.5" />
      </button>

      <span
        v-if="product.badge"
        class="absolute text-label-mono px-2 py-0.5 uppercase"
        :class="[
          badgeColor,
          isTrending ? 'top-2 left-2' : 'bottom-3 left-3 tracking-wider',
        ]"
      >
        {{ product.badge }}
      </span>
    </div>

    <!-- Info -->
    <div class="p-space-md flex flex-col flex-1 justify-between gap-space-sm">
      <div>
        <div
          class="flex items-center justify-between text-on-surface-variant text-label-mono mb-1"
        >
          <span>{{ product.category }}</span>
          <span class="text-primary font-semibold">${{ product.price }}</span>
        </div>
        <h3
          class="font-display text-body-lg font-semibold text-primary uppercase"
          :class="{ 'tracking-tight': !isTrending }"
        >
          {{ product.name }}
        </h3>
        <p
          v-if="isTrending"
          class="text-body-sm text-on-surface-variant mt-0.5"
        >
          {{ product.colorway }}
        </p>
      </div>

      <!-- arrival: swatches + text link -->
      <div
        v-if="!isTrending"
        class="flex items-center justify-between pt-2 border-t border-line"
      >
        <div class="flex items-center gap-1.5" aria-label="Available colors">
          <span
            v-for="color in product.colors"
            :key="color.name"
            :title="color.name"
            class="w-3.5 h-3.5 border border-outline"
            :style="{ backgroundColor: color.hex }"
          />
        </div>
        <button
          type="button"
          class="text-label-caps uppercase text-primary hover:underline underline-offset-4"
          @click="quickAdd"
        >
          {{ addedCount ? `ADDED (${addedCount})` : '+ Quick Add' }}
        </button>
      </div>

      <!-- trending: full-width button -->
      <button
        v-else
        type="button"
        class="w-full py-2.5 text-label-caps uppercase border border-outline hover:border-primary hover:bg-primary hover:text-on-primary transition-colors"
        @click="quickAdd"
      >
        {{ addedCount ? 'ADDED TO CART' : '+ Quick Add' }}
      </button>
    </div>
  </article>
</template>
