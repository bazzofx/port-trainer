export interface PortData {
  port: string
  protocol: string
  service: string
  description: string
}

export interface PortQuestion {
  service: string
  port: string
  options: string[]
  correctAnswer: string
  protocol: string
  description: string
  questionType: "port" | "service" // Added questionType field
}

export interface Scenario {
  scenario: string
  question: string
  choices: string[]
  answer: string
  explanation?: string
}
