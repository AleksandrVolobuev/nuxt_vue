<script setup lang="ts">
import type { ProductItem } from '~/data/home'

defineProps<{
  items: ProductItem[]
}>()
</script>

<template>
  <div class="product-grid">
    <article v-for="item in items" :key="item.title" class="product-card">
      <div class="product-card__media">
        <img :src="item.image" :alt="item.title" />
      </div>

      <div class="product-card__body">
        <div class="product-card__header">
          <h3 class="product-card__title">{{ item.title }}</h3>
          <span class="product-card__price">{{ item.price }}</span>
        </div>

        <p class="product-card__description">{{ item.description }}</p>

        <div class="product-card__footer">
          <span class="product-card__tag">{{ item.tag }}</span>
          <a href="#footer" class="button button--secondary">Add to shortlist</a>
        </div>
      </div>
    </article>
  </div>
</template>
