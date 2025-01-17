export interface Question {
  id: number
  title: string
  options: string[]
  correctAnswerIndex: number
}

export interface Challenge {
  id: number
  title: string
  description: string
  questions: Question[]
  status: 'active' | 'completed' | 'upcoming'
  successTitle: string
  successMessage: string
}
