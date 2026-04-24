<script setup lang="ts">
defineProps<{
  id?: string
  eyebrow: string
  title: string
  description: string
}>()
</script>

<template>
  <section :id="id" class="section">
    <div class="container">
      <header class="section-heading">
        <span class="eyebrow">{{ eyebrow }}</span>
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
      </header>

      <slot />
    </div>
  </section>
</template>
