"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Check, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { PortQuestion } from "@/lib/types"

interface FlashCardProps {
  question: PortQuestion
  onAnswer: (isCorrect: boolean) => void
}

export default function FlashCard({ question, onAnswer }: FlashCardProps) {
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
    // Clear the timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }

    // Move to next question
    if (selectedAnswer) {
      onAnswer(selectedAnswer === question.correctAnswer)
    }
    setSelectedAnswer(null)
    setShowAnswer(false)
  }

  const getButtonVariant = (answer: string) => {
    if (!showAnswer) return "outline"

    if (answer === question.correctAnswer) {
      return "success"
    }

    if (answer === selectedAnswer && answer !== question.correctAnswer) {
      return "destructive"
    }

    return "outline"
  }

  // Determine question text based on question type
  const questionText =
    question.questionType === "port"
      ? `What port is used by ${question.service}?`
      : `What service uses port ${question.port}?`

  // Determine answer text based on question type
  const answerText =
    question.questionType === "port"
      ? `${question.service} uses port ${question.correctAnswer}`
      : `Port ${question.port} is used by ${question.correctAnswer}`

  return (
    <div className="perspective-1000">
      <motion.div
        animate={{ rotateY: showAnswer ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 300, damping: 20 }}
        className="relative w-full preserve-3d"
      >
        {/* Front of card (Question) */}
        <Card className={cn("p-6 backface-hidden w-full", showAnswer ? "invisible" : "visible")}>
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold text-blue-800 dark:text-purple-200 mb-1">{questionText}</h2>
            <p className="text-blue-600 dark:text-purple-300 text-sm">
              {question.questionType === "port" ? "Select the correct port number" : "Select the correct service"}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {question.options.map((option, index) => (
              <Button
                key={index}
                variant={selectedAnswer === option ? "default" : "outline"}
                className="py-6 text-lg font-medium border-blue-200 dark:border-purple-800 hover:border-blue-400 dark:hover:border-purple-600"
                onClick={() => handleSelectAnswer(option)}
              >
                {String.fromCharCode(65 + index)}) {option}
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
              {selectedAnswer === question.correctAnswer ? (
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
              {selectedAnswer === question.correctAnswer ? "Correct!" : "Incorrect"}
            </h3>

            <div className="text-center mb-4">
              <p className="font-medium text-blue-700 dark:text-purple-300">{answerText}</p>
              <p className="text-sm text-blue-600 dark:text-purple-400 mt-1">Protocol: {question.protocol}</p>
            </div>

            <p className="text-sm text-blue-800 dark:text-purple-200 bg-blue-50 dark:bg-purple-900/20 p-3 rounded-lg">
              {question.description}
            </p>

            <Button
              onClick={handleNextQuestion}
              className="mt-6 bg-blue-600 hover:bg-blue-700 dark:bg-purple-600 dark:hover:bg-purple-700 text-white"
            >
              Next Question <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}
