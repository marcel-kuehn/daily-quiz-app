import CHALLENGES from '@/config/challenges.json'
import type { Challenge } from '@/types/types'
import { getData, setData } from '@/utils/localStorage'
import { defineStore } from 'pinia'

export interface ChallengeState {
  challenges: {
    isLoading: boolean
    error: Error | undefined
    value: Challenge[] | undefined
  }
}

const getDefaultState = (): ChallengeState => ({
  challenges: {
    isLoading: false,
    error: undefined,
    value: undefined
  }
})

export const useChallengeStore = defineStore('challenge', {
  state: getDefaultState,
  actions: {
    finishChallenge(challengeId: number) {
      const challengeIndex = this.challenges.value?.findIndex(
        (challenge) => challenge.id === challengeId
      )

      if (challengeIndex === undefined || challengeIndex === -1) {
        return
      }

      const challenges = this.challenges?.value ?? []
      const challenge = challenges[challengeIndex]
      const nextChallenge = challenges[challengeIndex + 1]

      if (challenge) {
        challenge.status = 'completed'
      }

      if (nextChallenge) {
        nextChallenge.status = 'active'
      }

      setData('challenges', challenges)
    },
    getChallenges() {
      const challengeData = getData('challenges') as Challenge[] | undefined
      if (challengeData) {
        this.challenges.value = challengeData

        return
      }

      this.challenges.value = CHALLENGES as Challenge[]
    }
  }
})
