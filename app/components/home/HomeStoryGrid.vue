<script setup lang="ts">
import type { StoryItem } from '~/data/home'

defineProps<{
  items: StoryItem[]
}>()

const assetPath = useAssetPath()
</script>

<template>
  <div class="story-grid">
    <article v-for="item in items" :key="item.title" class="story-card">
      <div class="story-card__icon">
        <img :src="assetPath(item.icon)" :alt="item.eyebrow" />
      </div>
      <span class="story-card__eyebrow">{{ item.eyebrow }}</span>
      <h3 class="story-card__title">{{ item.title }}</h3>
      <p class="story-card__description">{{ item.description }}</p>
      <a href="#footer" class="button button--secondary">Learn more</a>
    </article>
  </div>
</template>
