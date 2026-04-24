<script setup lang="ts">
import type { CategoryItem } from '~/data/home'

defineProps<{
  items: CategoryItem[]
}>()
</script>

<template>
  <div class="categories__grid">
    <article v-for="item in items" :key="item.title" class="category-card">
      <div class="category-card__media">
        <img :src="item.image" :alt="item.title" />
      </div>

      <div class="category-card__content">
        <h3>{{ item.title }}</h3>
        <span class="category-card__arrow" aria-hidden="true">↗</span>
      </div>
    </article>
  </div>
</template>
