<script setup lang="ts">
import type { FooterColumn, NavLink } from '~/data/home'

defineProps<{
  id?: string
  columns: FooterColumn[]
  socialLinks: NavLink[]
}>()

const year = new Date().getFullYear()
</script>

<template>
  <footer :id="id" class="newsletter">
    <div class="container newsletter__grid">
      <section class="newsletter-card">
        <span class="eyebrow">Stay in the loop</span>
        <h2 class="newsletter-card__title">
          A modern Nuxt project also means cleaner forms and reusable footer blocks.
        </h2>
        <p class="newsletter-card__copy">
          Keep this as a simple learning example or later connect it to a real API
          route, validation library, and CMS.
        </p>

        <form class="newsletter-card__form" @submit.prevent>
          <input
            class="newsletter-card__input"
            type="email"
            placeholder="Email address"
            aria-label="Email address"
          />
          <button type="submit" class="button button--primary">Subscribe</button>
        </form>

        <div class="newsletter-card__highlights">
          <span>Exclusive offers</span>
          <span>New collections</span>
          <span>Design notes</span>
        </div>
      </section>

      <section class="footer__card">
        <div class="footer__links">
          <div v-for="column in columns" :key="column.title">
            <h3 class="footer__title">{{ column.title }}</h3>
            <nav class="footer__list">
              <a
                v-for="link in column.links"
                :key="link.label"
                :href="link.href"
              >
                {{ link.label }}
              </a>
            </nav>
          </div>
        </div>
      </section>
    </div>

    <div class="container footer__meta">
      <span>© {{ year }} Wooden Furniture Studio. Built with Nuxt for learning.</span>

      <div class="footer__social">
        <a
          v-for="link in socialLinks"
          :key="link.label"
          :href="link.href"
          target="_blank"
          rel="noreferrer"
        >
          {{ link.label }}
        </a>
      </div>
    </div>
  </footer>
</template>
