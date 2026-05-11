<script setup lang="ts">
defineProps<{
  id?: string
  eyebrow: string
  title: string
  body: string
  price: string
  image: string
}>()

const assetPath = useAssetPath()
</script>

<template>
  <section :id="id" class="section">
    <div class="container spotlight">
      <div class="spotlight__copy">
        <span class="eyebrow">{{ eyebrow }}</span>
        <h2 class="spotlight__title">{{ title }}</h2>
        <p class="spotlight__body">{{ body }}</p>

        <div class="spotlight__meta">
          <div class="price-chip">
            <span class="price-chip__label">From</span>
            <span class="price-chip__value">{{ price }}</span>
          </div>
          <span>3 sizes, 6 finishes, concealed storage</span>
        </div>

        <div class="spotlight__actions">
          <a href="#footer" class="button button--primary">Request design help</a>
          <a href="#catalog" class="button button--secondary">View catalog</a>
        </div>
      </div>

      <div class="spotlight__media">
        <img :src="assetPath(image)" :alt="title" />
      </div>
    </div>
  </section>
</template>
