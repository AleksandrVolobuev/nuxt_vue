<script setup lang="ts">
import type { TestimonialItem } from '~/data/home'

defineProps<{
  items: TestimonialItem[]
}>()
</script>

<template>
  <div class="testimonial-grid">
    <article
      v-for="item in items"
      :key="item.author"
      class="testimonial-card"
    >
      <div class="testimonial-card__rating" aria-hidden="true">★★★★★</div>
      <p class="testimonial-card__quote">“{{ item.quote }}”</p>
      <strong class="testimonial-card__author">{{ item.author }}</strong>
    </article>
  </div>
</template>
