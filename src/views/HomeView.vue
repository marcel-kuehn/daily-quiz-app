<template>
  <div class="w-full flex flex-col gap-6">
    <div class="flex gap-2 items-center">
      <div class="flex-1">
        <h1 class="text-lg font-semibold">{{ content.homeView.title }}</h1>
        <p class="text-surface-500">{{ content.homeView.description }}</p>
      </div>

      <div class="w-16 h-16 overflow-hidden rounded-full border-surface-100 border">
        <img src="/logo.jpg" alt="Logo" />
      </div>
    </div>

    <div class="rounded py-6 px-4 flex flex-col gap-4 items-center" style="background: #3b5b58">
      <template v-if="challengesFinished">
        <i class="pi pi-lock-open text-4xl text-white"></i>
        <h2 class="text-white font-semibold">{{ content.homeView.successTitle }}</h2>
        <Button @click="$router.push('/success')" class="w-full">
          <div class="flex gap-1 items-center">
            {{ content.homeView.successButton }}
            <i class="pi pi-arrow-right"></i>
          </div>
        </Button>
      </template>
      <template v-else>
        <i class="pi pi-lock text-4xl text-white"></i>
        <h2 class="text-white font-semibold">
          {{ content.homeView.lockedTitle }}
        </h2>
      </template>
    </div>

    <div class="flex flex-col gap-4">
      <h3 class="font-semibold">{{ content.homeView.challengesTitle }}</h3>

      <div class="grid gap-2 grid-cols-2" v-if="challengeStore.challenges.value">
        <component
          :is="challenge.status === 'active' ? 'router-link' : 'span'"
          :to="`/challenges/${challenge.id}`"
          v-for="(challenge, index) in challengeStore.challenges.value"
          class="rounded py-8 flex items-center justify-center cursor-pointer"
          :style="`background: ${getColor(index)}`"
        >
          <div class="flex flex-col items-center gap-4">
            <i v-if="challenge.status === 'upcoming'" class="pi pi-lock text-2xl"></i>
            <i v-else-if="challenge.status === 'active'" class="pi pi-play text-2xl"></i>
            <i v-else-if="challenge.status === 'completed'" class="pi pi-check text-2xl"></i>

            <div class="flex flex-col items-center">
              <h4 class="font-semibold">{{ challenge.title }}</h4>
              <p class="text-sm text-surface-500">{{ challenge.description }}</p>
            </div>
          </div>
        </component>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useChallengeStore } from '@/stores/challenge'
import content from '@/config/content.json'

const challengeStore = useChallengeStore()

const getColor = (index: number) => {
  const colors = ['#ecd4a6', '#d1c5d8', '#f4c1ae', '#a4d0d3', '#a5c7eb', '#a0cfa5']

  return colors[index % colors.length]
}

const challengesFinished = computed(() =>
  challengeStore.challenges.value?.every((challenge) => challenge.status === 'completed')
)

onMounted(async () => {
  await challengeStore.getChallenges()
})
</script>
