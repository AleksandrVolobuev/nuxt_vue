<script setup lang="ts">
import {
  categories,
  footerColumns,
  heroStats,
  navigation,
  products,
  socialGallery,
  socialLinks,
  storyCards,
  testimonials,
} from '~/data/home'
import HomeCategoryGrid from '~/components/home/HomeCategoryGrid.vue'
import HomeFooter from '~/components/home/HomeFooter.vue'
import HomeHeader from '~/components/home/HomeHeader.vue'
import HomeHero from '~/components/home/HomeHero.vue'
import HomeProductGrid from '~/components/home/HomeProductGrid.vue'
import HomeSection from '~/components/home/HomeSection.vue'
import HomeSocialProof from '~/components/home/HomeSocialProof.vue'
import HomeSpotlight from '~/components/home/HomeSpotlight.vue'
import HomeStoryGrid from '~/components/home/HomeStoryGrid.vue'
import HomeTestimonials from '~/components/home/HomeTestimonials.vue'

useSeoMeta({
  title: 'Wooden Furniture Studio',
  description:
    'Responsive Nuxt storefront example with reusable Vue components, typed data, and modern page structure.',
  ogTitle: 'Wooden Furniture Studio',
  ogDescription:
    'Learning-friendly Nuxt landing page built with reusable components and responsive layouts.',
})
</script>

<template>
  <div class="page-shell">
    <HomeHeader :navigation="navigation" />

    <main>
      <HomeHero :stats="heroStats" />

      <HomeSection
        id="catalog"
        eyebrow="Rooms"
        title="Choose a collection that matches how you actually live."
        description="Instead of one oversized template section, this page is split into composable Nuxt blocks with data passed through props. That's the pattern worth learning and reusing."
      >
        <HomeCategoryGrid :items="categories" />
      </HomeSection>

      <HomeSpotlight
        id="collections"
        eyebrow="Featured Collection"
        title="Batea brings storage, softness, and function into one sculptural table."
        body="This section is built as a dedicated component, which keeps the page readable and makes later redesigns much easier than editing one massive file."
        price="$272"
        image="/image10.png"
      />

      <HomeSection
        id="materials"
        eyebrow="Why It Works"
        title="A Nuxt page should read like a system, not like an exported screenshot."
        description="These cards show a more realistic approach: content lives in a typed data file, while the visual blocks stay reusable."
      >
        <HomeStoryGrid :items="storyCards" />
      </HomeSection>

      <HomeSection
        eyebrow="Shop"
        title="Product cards become much easier to maintain once they are driven by arrays."
        description="Add a new item in data and the UI updates automatically. That's a much better learning path than duplicating markup over and over."
      >
        <HomeProductGrid :items="products" />
      </HomeSection>

      <HomeSection
        eyebrow="In Real Homes"
        title="Real spaces help explain the mood much faster than specs alone."
        description="The gallery below is responsive and uses the same asset folder you already had in the project."
      >
        <HomeSocialProof :items="socialGallery" />
      </HomeSection>

      <HomeSection
        id="reviews"
        eyebrow="Reviews"
        title="Good product pages make trust visible."
        description="Testimonials are another good place to practice reusable components, because the layout repeats while the content changes."
      >
        <HomeTestimonials :items="testimonials" />
      </HomeSection>
    </main>

    <HomeFooter
      id="footer"
      :columns="footerColumns"
      :social-links="socialLinks"
    />
  </div>
</template>
