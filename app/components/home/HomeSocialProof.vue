<script setup lang="ts">
import type { SocialItem } from '~/data/home'

defineProps<{
  items: SocialItem[]
}>()

const assetPath = useAssetPath()
</script>

<template>
  <div class="social-proof">
    <div>
      <h3 class="social-proof__title">Our pieces inside real homes</h3>
      <p class="section-copy">
        This block is another useful Nuxt pattern: one reusable component, one
        typed prop, and a clean loop in the template. Small pieces like this are
        much easier to test and restyle later.
      </p>
    </div>

    <div class="social-proof__gallery">
      <figure v-for="item in items" :key="item.handle">
        <img :src="assetPath(item.image)" :alt="item.handle" />
        <figcaption>{{ item.handle }}</figcaption>
      </figure>
    </div>
  </div>
</template>
