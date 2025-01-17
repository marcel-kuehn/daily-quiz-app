<template>
  <div class="w-full flex flex-col gap-6" v-if="challenge" style="height: calc(100vh - 32px)">
    <div class="flex justify-center">
      <div class="w-24 h-24 overflow-hidden rounded-full border-surface-100 border">
        <img src="/logo.jpg" alt="Logo" />
      </div>
    </div>

    <h1 class="text-center font-semibold text-xl" style="color: #d2604b">
      {{ challenge.successTitle }}
    </h1>

    <div class="flex-1 text-center flex flex-col">
      <div class="flex-1"></div>
      <div v-html="challenge.successMessage"></div>
      <div class="flex-1"></div>
    </div>

    <Button @click="$router.push('/')">
      <div class="flex gap-1 items-center">
        {{ $t('successView.button') }}

        <i class="pi pi-arrow-right"></i>
      </div>
    </Button>
  </div>
  <div v-else></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useChallengeStore } from '@/stores/challenge'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const challengeStore = useChallengeStore()

const route = useRoute()

const challengeId = computed(() => {
  return route.params.id
})

const challenge = computed(() => {
  return challengeStore.challenges?.value?.find(
    (challenge) => challenge.id === Number(challengeId.value)
  )
})

onMounted(async () => {
  await challengeStore.getChallenges()
})
</script>
