<template>
  <div class="w-full flex flex-col gap-6" v-if="challenge" style="height: calc(100vh - 32px)">
    <div class="flex flex-col gap-2">
      <div class="flex gap-2 items-center justify-between">
        <i class="pi pi-arrow-left text-xl" @click="$router.push('/')"></i>
        <h1 class="text-lg font-semibold">
          {{ $t('challengeView.title', { title: challenge.title }) }}
        </h1>
      </div>

      <div class="flex gap-2">
        <div
          class="flex-1 h-1 rounded"
          :class="{
            'bg-primary-800': questionIndex === index,
            'bg-white': questionIndex !== index
          }"
          v-for="(_, index) in challenge.questions"
        ></div>
      </div>
    </div>

    <Card v-if="question" class="flex-1">
      <template #content>
        <div class="flex flex-col gap-8 h-full">
          <h2 class="font-semibold text-xl">{{ question.title }}</h2>

          <div class="flex flex-col gap-4">
            <Button
              v-for="(option, index) in question.options"
              :outlined="selectedAnswerIndex !== index"
              severity="secondary"
              @click="selectedAnswerIndex = index"
            >
              <div class="w-full text-left">
                <span class="font-bold">{{ index + 1 }}.</span> {{ option }}
              </div>
            </Button>
          </div>
        </div>
      </template>

      <template #footer>
        <p class="text-red-500" v-if="displayError">{{ $t('challengeView.wrongAnswer') }}</p>
      </template>
    </Card>

    <Button @click="verifyQuestion()" :disabled="selectedAnswerIndex === null">
      <div class="flex gap-1 items-center">
        {{ $t('challengeView.button') }}

        <i class="pi pi-arrow-right"></i>
      </div>
    </Button>
  </div>
  <div v-else></div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useChallengeStore } from '@/stores/challenge'
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'

const challengeStore = useChallengeStore()

const route = useRoute()
const router = useRouter()

const questionIndex = ref(0)
const selectedAnswerIndex = ref<number | null>(null)
const displayError = ref(false)

const challengeId = computed(() => {
  return Number(route.params.id)
})

const challenge = computed(() => {
  return challengeStore.challenges?.value?.find((challenge) => challenge.id === challengeId.value)
})

const question = computed(() => {
  return challenge.value?.questions[questionIndex.value]
})

const goToNextScreen = () => {
  if (!challenge.value) return

  if (questionIndex.value === challenge.value?.questions.length - 1) {
    challengeStore.finishChallenge(challengeId.value)
    router.push(`/challenges/${challengeId.value}/success`)
    return
  }

  questionIndex.value += 1
}

const verifyQuestion = () => {
  if (selectedAnswerIndex.value === question.value?.correctAnswerIndex) {
    goToNextScreen()
    return
  }

  displayError.value = true
}

onMounted(() => {
  challengeStore.getChallenges()
})

watch([questionIndex], () => {
  selectedAnswerIndex.value = null
  displayError.value = false
})
</script>
