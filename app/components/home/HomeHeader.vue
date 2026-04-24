<script setup lang="ts">
import type { NavLink } from '~/data/home'

defineProps<{
  navigation: NavLink[]
}>()
</script>

<template>
  <header class="home-header">
    <div class="home-header__notice">
      Free shipping worldwide. Returns extended to January 15.
    </div>

    <div class="home-header__bar">
      <div class="container home-header__content">
        <NuxtLink to="/" class="home-header__brand">
          <span class="home-header__brand-title">Wooden Furniture</span>
          <span class="home-header__brand-copy">Nuxt learning storefront</span>
        </NuxtLink>

        <nav class="home-header__nav" aria-label="Main navigation">
          <a
            v-for="link in navigation"
            :key="link.label"
            :href="link.href"
          >
            {{ link.label }}
          </a>
        </nav>

        <div class="home-header__actions">
          <a href="#footer" class="button button--secondary">Talk to us</a>
          <a href="#catalog" class="button button--primary">Shop now</a>
        </div>
      </div>
    </div>
  </header>
</template>
