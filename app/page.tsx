"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles } from "lucide-react"
import { useTheme } from "next-themes"
import GameModes from "@/components/GameModes"
import FlashCard from "@/components/FlashCard"
import ScenarioCard from "@/components/ScenarioCard"
import ThreatHuntingCard from "@/components/ThreatHuntingCard"
import ScoreBoard from "@/components/ScoreBoard"
import Timer from "@/components/Timer"
import PortSelector from "@/components/PortSelector"
import QuestionTypeSwitch from "@/components/QuestionTypeSwitch"
import ThemeToggle from "@/components/ThemeToggle"
import { Button } from "@/components/ui/button"
import { usePortData } from "@/lib/hooks/use-port-data"
import { useScenarioData } from "@/lib/hooks/use-scenario-data"
import { useThreatHuntingData } from "@/lib/hooks/use-threat-hunting-data"

// Define a type for the combined scenario types
type ScenarioType = "security" | "threat"

export default function Home() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [gameMode, setGameMode] = useState<
    "time" | "endless" | "personalized" | "scenarios" | "scenario-challenge" | "threat-hunting" | null
  >(null)
  const [gameStarted, setGameStarted] = useState(false)
  const [showPortSelector, setShowPortSelector] = useState(false)
  const [selectedPorts, setSelectedPorts] = useState<string[]>([])
  const [questionType, setQuestionType] = useState<"port" | "service">("port")
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [questionsAnswered, setQuestionsAnswered] = useState(0)
  const [timeRemaining, setTimeRemaining] = useState(120) // 2 minutes for timed mode
  const [currentScenarioType, setCurrentScenarioType] = useState<ScenarioType>("security")

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  const { currentQuestion, generateNewQuestion } = usePortData({
    selectedPorts,
    questionType,
  })

  const { currentScenario, generateNewScenario } = useScenarioData()
  const { currentScenario: currentThreatScenario, generateNewScenario: generateNewThreatScenario } =
    useThreatHuntingData()

  // Function to generate a new mixed scenario for challenge mode
  const generateNewMixedScenario = () => {
    // Randomly choose between security and threat scenarios
    const scenarioType: ScenarioType = Math.random() > 0.5 ? "security" : "threat"
    setCurrentScenarioType(scenarioType)

    console.log("Challenge mode generating new scenario of type:", scenarioType)

    // Generate the appropriate scenario type
    if (scenarioType === "security") {
      generateNewScenario()
    } else {
      generateNewThreatScenario()
    }
  }

  const handleAnswer = (isCorrect: boolean) => {
    console.log("Answer received:", isCorrect ? "Correct" : "Incorrect")

    if (isCorrect) {
      setScore(score + 10 + streak * 2)
      setStreak(streak + 1)
    } else {
      setStreak(0)
    }
    setQuestionsAnswered(questionsAnswered + 1)

    if (gameMode === "scenarios") {
      generateNewScenario()
    } else if (gameMode === "scenario-challenge") {
      generateNewMixedScenario()
    } else if (gameMode === "threat-hunting") {
      generateNewThreatScenario()
    } else {
      generateNewQuestion()
    }
  }

  const startGame = (
    mode: "time" | "endless" | "personalized" | "scenarios" | "scenario-challenge" | "threat-hunting",
  ) => {
    console.log("Starting game mode:", mode)
    setGameMode(mode)

    if (mode === "personalized") {
      setShowPortSelector(true)
    } else {
      setGameStarted(true)
      setScore(0)
      setStreak(0)
      setQuestionsAnswered(0)

      if (mode === "time") {
        setTimeRemaining(120) // 2 minutes for regular time mode
      } else if (mode === "scenario-challenge") {
        setTimeRemaining(60) // 1 minute for scenario challenge
      }

      if (mode === "scenarios") {
        generateNewScenario()
      } else if (mode === "scenario-challenge") {
        generateNewMixedScenario()
      } else if (mode === "threat-hunting") {
        generateNewThreatScenario()
      } else {
        generateNewQuestion()
      }
    }
  }

  const handlePortSelection = (ports: string[]) => {
    setSelectedPorts(ports)
    setShowPortSelector(false)
    setGameStarted(true)
    setScore(0)
    setStreak(0)
    setQuestionsAnswered(0)
    if (gameMode === "time") {
      setTimeRemaining(120)
    }
  }

  const cancelPortSelection = () => {
    setShowPortSelector(false)
    setGameMode(null)
  }

  const resetGame = () => {
    setGameStarted(false)
    setGameMode(null)
    setSelectedPorts([])
  }

  const handleQuestionTypeChange = (type: "port" | "service") => {
    setQuestionType(type)
  }

  const gameOver = (gameMode === "time" || gameMode === "scenario-challenge") && timeRemaining <= 0

  if (!mounted) {
    return null // Avoid rendering until client-side to prevent hydration mismatch
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-[#121212] dark:to-[#1a1a1a] text-blue-900 dark:text-purple-100">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div id="particles-container" className="w-full h-full" />
      </div>

      <div className="container max-w-4xl mx-auto px-4 py-8">
        <header className="text-center mb-8 relative">
          <div className="absolute right-0 top-0 z-10">
            <ThemeToggle />
          </div>

          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-2"
          >
            <Sparkles className="h-8 w-8 text-blue-600 dark:text-purple-400" />
            <h1 className="text-4xl font-bold text-blue-700 dark:text-purple-300">PortTrainer</h1>
            <Sparkles className="h-8 w-8 text-blue-600 dark:text-purple-400" />
          </motion.div>
          <p className="text-blue-600 dark:text-purple-200">Master network ports, protocols, and services</p>

          {gameStarted && !gameOver && (
            <div className="absolute right-0 top-12 md:top-0 md:right-12">
              <Button
                variant="outline"
                onClick={resetGame}
                className="text-blue-600 dark:text-purple-300 border-blue-300 dark:border-purple-800 hover:bg-blue-50 dark:hover:bg-purple-900/20"
                size="sm"
              >
                End Game
              </Button>
            </div>
          )}
        </header>

        <main>
          {!gameStarted && !showPortSelector && <GameModes onSelectMode={startGame} />}

          {showPortSelector && <PortSelector onConfirm={handlePortSelection} onCancel={cancelPortSelection} />}

          {gameStarted && !gameOver && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <ScoreBoard score={score} streak={streak} questionsAnswered={questionsAnswered} />

                <div className="flex items-center gap-4">
                  {gameMode !== "scenarios" && gameMode !== "scenario-challenge" && gameMode !== "threat-hunting" && (
                    <QuestionTypeSwitch questionType={questionType} onChange={handleQuestionTypeChange} />
                  )}

                  {(gameMode === "time" || gameMode === "scenario-challenge") && (
                    <Timer
                      initialTime={gameMode === "time" ? 120 : 60}
                      timeRemaining={timeRemaining}
                      setTimeRemaining={setTimeRemaining}
                      isScenarioChallenge={gameMode === "scenario-challenge"}
                      isChallengeMode={gameMode === "scenario-challenge"}
                    />
                  )}
                </div>
              </div>

              <AnimatePresence mode="wait">
                {gameMode === "scenarios" ? (
                  <motion.div
                    key={`scenario-${questionsAnswered}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {currentScenario && (
                      <ScenarioCard scenario={currentScenario} onAnswer={handleAnswer} isChallenge={false} />
                    )}
                  </motion.div>
                ) : gameMode === "scenario-challenge" ? (
                  <motion.div
                    key={`challenge-${questionsAnswered}-${currentScenarioType}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {currentScenarioType === "security" && currentScenario ? (
                      <ScenarioCard scenario={currentScenario} onAnswer={handleAnswer} isChallenge={true} />
                    ) : currentScenarioType === "threat" && currentThreatScenario ? (
                      <ThreatHuntingCard scenario={currentThreatScenario} onAnswer={handleAnswer} isChallenge={true} />
                    ) : null}
                  </motion.div>
                ) : gameMode === "threat-hunting" ? (
                  <motion.div
                    key={`threat-${questionsAnswered}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {currentThreatScenario && (
                      <ThreatHuntingCard scenario={currentThreatScenario} onAnswer={handleAnswer} isChallenge={false} />
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key={`question-${questionsAnswered}-${questionType}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {currentQuestion && <FlashCard question={currentQuestion} onAnswer={handleAnswer} />}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {gameOver && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white dark:bg-[#1e1e1e] p-8 rounded-xl shadow-lg text-center"
            >
              <h2 className="text-2xl font-bold text-blue-700 dark:text-purple-300 mb-4">Game Over!</h2>
              <div className="space-y-2 mb-6">
                <p className="text-lg">
                  Final Score: <span className="font-bold">{score}</span>
                </p>
                <p>Questions Answered: {questionsAnswered}</p>
                <p>Longest Streak: {streak}</p>
                {gameMode === "personalized" && <p>Ports Practiced: {selectedPorts.length}</p>}
              </div>
              <Button
                onClick={() => {
                  if (gameMode === "personalized") {
                    setShowPortSelector(true)
                    setGameStarted(false)
                  } else {
                    startGame(gameMode as "time" | "endless" | "scenarios" | "scenario-challenge" | "threat-hunting")
                  }
                }}
                className={`${
                  gameMode === "scenario-challenge"
                    ? "bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 dark:from-yellow-600 dark:to-amber-500 dark:hover:from-yellow-700 dark:hover:to-amber-600"
                    : "bg-blue-600 hover:bg-blue-700 dark:bg-purple-600 dark:hover:bg-purple-700"
                } text-white mr-4`}
              >
                Play Again
              </Button>
              <Button
                variant="outline"
                onClick={resetGame}
                className={`${
                  gameMode === "scenario-challenge"
                    ? "text-red-600 dark:text-yellow-300 border-red-300 dark:border-yellow-800 hover:bg-red-50 dark:hover:bg-yellow-900/20"
                    : "text-blue-600 dark:text-purple-300 border-blue-300 dark:border-purple-800 hover:bg-blue-50 dark:hover:bg-purple-900/20"
                }`}
              >
                Change Mode
              </Button>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  )
}
