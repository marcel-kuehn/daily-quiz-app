<template>
  <TheCenterLayout v-if="currentLayout === 'center'">
    <RouterView />
    <Toast position="bottom-right" />
  </TheCenterLayout>
  <TheDefaultLayout v-else>
    <RouterView />
    <Toast position="bottom-right" />
  </TheDefaultLayout>
</template>

<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { computed, watch } from 'vue'
import type { Layout } from './components/layouts/types'
import TheCenterLayout from './components/layouts/TheCenterLayout.vue'
import TheDefaultLayout from './components/layouts/TheDefaultLayout.vue'

const route = useRoute()

const currentLayout = computed<Layout>(() => (route.meta?.layout as Layout) || 'default')
</script>
