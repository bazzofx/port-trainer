"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Check, X, ArrowRight, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { ThreatHuntingScenario } from "@/lib/threat-hunting-data"

interface ThreatHuntingCardProps {
  scenario: ThreatHuntingScenario
  onAnswer: (isCorrect: boolean) => void
  isChallenge?: boolean
}

export default function ThreatHuntingCard({ scenario, onAnswer, isChallenge = false }: ThreatHuntingCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleSelectAnswer = (answer: string) => {
    if (showAnswer) return

    setSelectedAnswer(answer)
    setShowAnswer(true)
  }

  const handleNextQuestion = () => {
    // Clear the timeout if it exists (for safety)
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }

    // Check if the selected answer is correct
    // We need to ensure we're comparing the actual answer text, not any additional information
    const isCorrect = selectedAnswer === scenario.correctAnswer

    // Move to next question
    onAnswer(isCorrect)
    setSelectedAnswer(null)
    setShowAnswer(false)
  }

  // Debug function to help identify comparison issues
  const isCorrectAnswer = () => {
    if (!selectedAnswer) return false
    return selectedAnswer === scenario.correctAnswer
  }

  return (
    <div className="perspective-1000">
      <motion.div
        animate={{ rotateY: showAnswer ? 180 : 0 }}
        transition={{
          duration: isChallenge ? 0.4 : 0.6,
          type: "spring",
          stiffness: isChallenge ? 400 : 300,
          damping: isChallenge ? 25 : 20,
        }}
        className="relative w-full preserve-3d"
      >
        {/* Front of card (Scenario) */}
        <Card className={cn("p-6 backface-hidden w-full", showAnswer ? "invisible" : "visible")}>
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="h-5 w-5 text-blue-600 dark:text-purple-400" />
              <h3 className="text-lg font-semibold text-blue-700 dark:text-purple-300">Threat Hunting Scenario</h3>
            </div>
            <p className="text-blue-800 dark:text-purple-200 mb-4 bg-blue-50 dark:bg-purple-900/20 p-3 rounded-lg">
              {scenario.description}
            </p>
            <p className="text-blue-600 dark:text-purple-300 font-medium">{scenario.question}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {scenario.options.map((choice, index) => (
              <Button
                key={index}
                variant={selectedAnswer === choice ? "default" : "outline"}
                className="py-6 text-lg font-medium border-blue-200 dark:border-purple-800 hover:border-blue-400 dark:hover:border-purple-600"
                onClick={() => handleSelectAnswer(choice)}
              >
                {String.fromCharCode(65 + index)}) {choice}
              </Button>
            ))}
          </div>
        </Card>

        {/* Back of card (Answer) */}
        <Card
          className={cn(
            "p-6 absolute inset-0 backface-hidden w-full rotateY-180",
            showAnswer ? "visible" : "invisible",
          )}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <div className="mb-4">
              {isCorrectAnswer() ? (
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-2">
                  <Check className="w-8 h-8" />
                </div>
              ) : (
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 mb-2">
                  <X className="w-8 h-8" />
                </div>
              )}
            </div>

            <h3 className="text-xl font-bold text-blue-800 dark:text-purple-200 mb-2">
              {isCorrectAnswer() ? "Correct!" : "Incorrect"}
            </h3>

            <div className="text-center mb-4">
              <p className="font-medium text-blue-700 dark:text-purple-300">
                The correct answer is: {scenario.correctAnswer}
              </p>
            </div>

            <div className="text-sm text-blue-800 dark:text-purple-200 bg-blue-50 dark:bg-purple-900/20 p-3 rounded-lg mb-4 w-full">
              <p className="font-medium mb-2">Scenario:</p>
              <p>{scenario.description}</p>
            </div>

            {scenario.explanation && (
              <div className="text-sm text-blue-800 dark:text-purple-200 bg-blue-50 dark:bg-purple-900/20 p-3 rounded-lg mb-4 w-full">
                <p className="font-medium mb-2">Explanation:</p>
                <p>{scenario.explanation}</p>
              </div>
            )}

            <Button
              onClick={handleNextQuestion}
              className="mt-4 bg-blue-600 hover:bg-blue-700 dark:bg-purple-600 dark:hover:bg-purple-700 text-white"
            >
              Next Scenario <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}
