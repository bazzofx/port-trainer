"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Check, X, ArrowRight, ShieldAlert, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { Scenario } from "@/lib/types"

interface ScenarioCardProps {
  scenario: Scenario
  onAnswer: (isCorrect: boolean) => void
  isChallenge?: boolean
}

export default function ScenarioCard({ scenario, onAnswer, isChallenge = false }: ScenarioCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // For debugging - log the scenario data when it changes
  useEffect(() => {
    console.log("Security Scenario:", {
      scenario: scenario.scenario,
      question: scenario.question,
      choices: scenario.choices,
      answer: scenario.answer,
    })
  }, [scenario])

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

    // Log the selected answer for debugging
    console.log("Selected answer:", answer)
    console.log("Correct answer:", scenario.answer)
    console.log("Is correct?", answer === scenario.answer)

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
    const isCorrect = isCorrectAnswer()

    // Log the result for debugging
    console.log("Final result:", {
      selectedAnswer,
      correctAnswer: scenario.answer,
      isCorrect,
    })

    // Move to next question
    onAnswer(isCorrect)
    setSelectedAnswer(null)
    setShowAnswer(false)
  }

  // Helper function to determine if the answer is correct
  const isCorrectAnswer = () => {
    if (!selectedAnswer) return false

    // Direct comparison of the exact strings
    return selectedAnswer === scenario.answer
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
              <ShieldAlert className="h-5 w-5 text-blue-600 dark:text-purple-400" />
              <h3 className="text-lg font-semibold text-blue-700 dark:text-purple-300">Security Scenario</h3>
            </div>
            <p className="text-blue-800 dark:text-purple-200 mb-4 bg-blue-50 dark:bg-purple-900/20 p-3 rounded-lg">
              {scenario.scenario}
            </p>
            <p className="text-blue-600 dark:text-purple-300 font-medium">{scenario.question}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {scenario.choices.map((choice, index) => (
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
              <p className="font-medium text-blue-700 dark:text-purple-300">The correct answer is: {scenario.answer}</p>
              {selectedAnswer && !isCorrectAnswer() && (
                <p className="text-sm text-red-600 dark:text-red-400 mt-1">
                  <AlertCircle className="inline-block w-4 h-4 mr-1" />
                  You selected: {selectedAnswer}
                </p>
              )}
            </div>

            {scenario.explanation && (
              <div className="text-sm text-blue-800 dark:text-purple-200 bg-blue-50 dark:bg-purple-900/20 p-3 rounded-lg mb-4 w-full">
                <p className="font-medium mb-2">Explanation:</p>
                <p>{scenario.explanation}</p>
              </div>
            )}

            <div className="text-sm text-blue-800 dark:text-purple-200 bg-blue-50 dark:bg-purple-900/20 p-3 rounded-lg mb-4 w-full">
              <p className="font-medium mb-2">Scenario:</p>
              <p>{scenario.scenario}</p>
            </div>

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
