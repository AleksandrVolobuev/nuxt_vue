<script setup lang="ts">
import type { StatItem } from '~/data/home'

defineProps<{
  stats: StatItem[]
}>()
</script>

<template>
  <section class="hero">
    <div class="container hero__grid">
      <div class="hero__content">
        <span class="eyebrow">Modern Nuxt Example</span>
        <h1 class="hero__title">
          Build calmer, smarter spaces with modular wooden furniture.
        </h1>
        <p class="hero__copy">
          This homepage is now structured the way you'd typically build it in Nuxt:
          a page file for composition, small Vue components for sections, and typed
          data that can grow without turning the codebase into a wall of markup.
        </p>

        <div class="hero__actions">
          <a href="#collections" class="button button--primary">
            Explore collection
          </a>
          <a href="#materials" class="button button--secondary">
            See how it is built
          </a>
        </div>

        <div class="hero__facts">
          <article v-for="item in stats" :key="item.label" class="hero__fact">
            <strong>{{ item.value }}</strong>
            <span>{{ item.label }}</span>
          </article>
        </div>
      </div>

      <div class="hero__visual">
        <img src="/image1.png" alt="Warm wooden furniture setup" />
        <div class="hero__floating-card">
          <strong>Awarded product design</strong>
          <span>Crafted in Spain with a focus on warm materials and flexible use.</span>
        </div>
      </div>
    </div>
  </section>
</template>
