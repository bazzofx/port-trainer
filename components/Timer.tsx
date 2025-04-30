"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Clock } from "lucide-react"
import { Progress } from "@/components/ui/progress"

interface TimerProps {
  initialTime: number
  timeRemaining: number
  setTimeRemaining: (time: number) => void
  isScenarioChallenge?: boolean
  isChallengeMode?: boolean
}

export default function Timer({
  initialTime,
  timeRemaining,
  setTimeRemaining,
  isScenarioChallenge = false,
  isChallengeMode = false,
}: TimerProps) {
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 0) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [setTimeRemaining])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  const progressPercentage = (timeRemaining / initialTime) * 100
  const isLowTime = isScenarioChallenge ? timeRemaining < 15 : timeRemaining < 30

  // Determine colors based on challenge mode
  const textColor = isChallengeMode
    ? isLowTime
      ? "text-red-600 dark:text-red-400"
      : "text-red-800 dark:text-yellow-200"
    : isLowTime
      ? "text-red-600 dark:text-red-400"
      : "text-blue-800 dark:text-purple-200"

  const iconColor = isChallengeMode
    ? "text-red-700 dark:text-yellow-400"
    : isScenarioChallenge
      ? "text-blue-700 dark:text-purple-400"
      : "text-blue-600 dark:text-purple-300"

  const labelColor = isChallengeMode
    ? "text-red-700 dark:text-yellow-400"
    : isScenarioChallenge
      ? "text-blue-700 dark:text-purple-400"
      : "text-blue-600 dark:text-purple-300"

  const progressColor = isLowTime
    ? "bg-red-500 dark:bg-red-600"
    : isChallengeMode
      ? "bg-red-600 dark:bg-yellow-600"
      : isScenarioChallenge
        ? "bg-blue-600 dark:bg-purple-600"
        : "bg-blue-500 dark:bg-purple-500"

  return (
    <div
      className={`${
        isChallengeMode
          ? "bg-white dark:bg-[#1e1e1e] border-2 border-red-300 dark:border-yellow-800"
          : "bg-white dark:bg-[#1e1e1e]"
      } px-3 py-2 rounded-lg shadow-sm w-40`}
    >
      <div className="flex items-center gap-2 mb-1">
        <Clock className={`h-4 w-4 ${iconColor}`} />
        <div className={`text-xs font-medium ${labelColor}`}>Time Remaining</div>
      </div>

      <div className="flex items-center justify-between mb-1">
        <motion.div
          key={timeRemaining}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className={`font-bold ${textColor}`}
        >
          {formatTime(timeRemaining)}
        </motion.div>
      </div>

      <Progress
        value={progressPercentage}
        className="h-1.5 bg-gray-100 dark:bg-gray-800"
        indicatorClassName={progressColor}
      />
    </div>
  )
}
