<template>
  <div class="w-full flex flex-col gap-6" style="height: calc(100vh - 32px)">
    <div class="flex justify-center">
      <div class="w-24 h-24 overflow-hidden rounded-full border-surface-100 border">
        <img src="/logo.jpg" alt="Logo" />
      </div>
    </div>

    <h1 class="text-center font-semibold text-xl" style="color: #d2604b">
      {{ content.successView.title }}
    </h1>

    <div class="flex-1 text-center flex flex-col">
      <div class="flex-1"></div>
      <div>
        <p>{{ content.successView.description }}</p>
      </div>
      <div class="flex-1"></div>
    </div>

    <Button @click="goTo()">
      <div class="flex gap-1 items-center">
        {{ content.successView.button }}

        <i class="pi pi-arrow-right"></i>
      </div>
    </Button>
  </div>
</template>

<script setup lang="ts">
import content from '@/config/content.json'
const goTo = () => {
  window.open(content.successView.buttonLink, '_blank')
}
</script>
