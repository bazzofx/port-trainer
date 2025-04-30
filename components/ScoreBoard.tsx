"use client"

import { motion } from "framer-motion"
import { Trophy, Zap, CheckCircle } from "lucide-react"

interface ScoreBoardProps {
  score: number
  streak: number
  questionsAnswered: number
}

export default function ScoreBoard({ score, streak, questionsAnswered }: ScoreBoardProps) {
  return (
    <div className="flex gap-4">
      <div className="flex items-center gap-2 bg-white dark:bg-[#1e1e1e] px-3 py-2 rounded-lg shadow-sm">
        <Trophy className="h-5 w-5 text-blue-600 dark:text-purple-400" />
        <div>
          <div className="text-xs text-blue-600 dark:text-purple-300 font-medium">Score</div>
          <motion.div
            key={score}
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="font-bold text-blue-800 dark:text-purple-200"
          >
            {score}
          </motion.div>
        </div>
      </div>

      <div className="flex items-center gap-2 bg-white dark:bg-[#1e1e1e] px-3 py-2 rounded-lg shadow-sm">
        <Zap className="h-5 w-5 text-amber-500 dark:text-amber-400" />
        <div>
          <div className="text-xs text-blue-600 dark:text-purple-300 font-medium">Streak</div>
          <motion.div
            key={streak}
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="font-bold text-blue-800 dark:text-purple-200"
          >
            {streak}
          </motion.div>
        </div>
      </div>

      <div className="flex items-center gap-2 bg-white dark:bg-[#1e1e1e] px-3 py-2 rounded-lg shadow-sm">
        <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400" />
        <div>
          <div className="text-xs text-blue-600 dark:text-purple-300 font-medium">Answered</div>
          <motion.div
            key={questionsAnswered}
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="font-bold text-blue-800 dark:text-purple-200"
          >
            {questionsAnswered}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
