<script setup>
const email = ref('');
const subscribed = ref(false);

function subscribe() {
  // Connect to your newsletter provider here
  subscribed.value = true;
}
</script>

<template>
  <section
    class="w-full bg-ink text-on-primary py-space-xl px-gutter md:px-margin lg:px-margin-lg"
  >
    <div
      class="max-w-4xl mx-auto flex flex-col items-center text-center space-y-space-md"
    >
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 bg-on-primary" />
        <span class="text-label-mono tracking-widest text-[#a8a6a1] uppercase"
          >DISPATCH TERMINAL // MEMBERSHIP</span
        >
        <span class="w-2 h-2 bg-on-primary" />
      </div>

      <h2
        class="font-display text-headline-lg-mobile md:text-headline-lg uppercase text-on-primary tracking-tight"
      >
        STAY IN THE LOOP.
      </h2>

      <p class="text-body-lg text-tertiary-fixed-dim max-w-xl">
        Receive early access to limited edition drops, secret lookbooks, and
        private studio events in Tokyo, London, and New York. Never spam — only
        architectural design.
      </p>

      <form
        v-if="!subscribed"
        class="w-full max-w-md flex flex-col sm:flex-row gap-2 pt-2"
        @submit.prevent="subscribe"
      >
        <input
          v-model="email"
          type="email"
          required
          placeholder="ENTER YOUR EMAIL ADDRESS..."
          aria-label="Email address"
          class="flex-1 bg-ink-soft text-on-primary placeholder:text-outline border border-ink-line px-4 py-3.5 text-label-mono focus:outline-none focus:border-on-primary"
        />
        <button
          type="submit"
          class="bg-on-primary text-primary px-space-lg py-3.5 text-label-caps uppercase hover:bg-surface-container-highest transition-colors font-bold tracking-wider"
        >
          Subscribe
        </button>
      </form>
      <div
        v-else
        class="w-full max-w-md py-3 px-4 bg-[#232323] text-on-primary text-label-caps uppercase tracking-wider text-center"
      >
        TRANSMISSION CONFIRMED — ARCHIVE PASS ISSUED.
      </div>

      <p class="text-label-mono text-on-tertiary-container tracking-wider pt-2">
        BY SUBSCRIBING YOU AGREE TO OUR TERMS AND RECEIVE DROP NOTICES PRIOR TO
        GLOBAL PUBLIC ACCESS.
      </p>
    </div>
  </section>
</template>
