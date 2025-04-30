"use client"

import { motion } from "framer-motion"
import { Clock, Infinity, ArrowRight, Settings, ShieldAlert, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import FlameEffect from "@/components/FlameEffect"
import { useTheme } from "next-themes"

interface GameModesProps {
  onSelectMode: (
    mode: "time" | "endless" | "personalized" | "scenarios" | "scenario-challenge" | "threat-hunting",
  ) => void
}

export default function GameModes({ onSelectMode }: GameModesProps) {
  const { resolvedTheme } = useTheme()

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="grid md:grid-cols-3 gap-6">
      <motion.div variants={item}>
        <Card className="h-full border-blue-200 dark:border-purple-800 hover:border-blue-400 dark:hover:border-purple-600 transition-colors duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-purple-300">
              <Clock className="h-5 w-5" />
              Port Speed Test
            </CardTitle>
            <CardDescription className="dark:text-purple-400">
              Answer as many questions as possible in 2 minutes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm text-blue-800 dark:text-purple-200">
              <li>Race against the clock</li>
              <li>Build streaks for bonus points</li>
              <li>Perfect for quick practice sessions</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              onClick={() => onSelectMode("time")}
              className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-purple-600 dark:hover:bg-purple-700 text-white"
            >
              Start Challenge <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <Card className="h-full border-blue-200 dark:border-purple-800 hover:border-blue-400 dark:hover:border-purple-600 transition-colors duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-purple-300">
              <Infinity className="h-5 w-5" />
              Endless Mode
            </CardTitle>
            <CardDescription className="dark:text-purple-400">
              Practice at your own pace with port and service scenarios
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm text-blue-800 dark:text-purple-200">
              <li>No time limit</li>
              <li>Focus on learning at your own pace</li>
              <li>When you want to grind it!</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              onClick={() => onSelectMode("endless")}
              className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-purple-600 dark:hover:bg-purple-700 text-white"
            >
              Start Practice <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <Card className="h-full border-blue-200 dark:border-purple-800 hover:border-blue-400 dark:hover:border-purple-600 transition-colors duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-purple-300">
              <Settings className="h-5 w-5" />
              Build Your Own
            </CardTitle>
            <CardDescription className="dark:text-purple-400">
              Select specific ports or services to practice
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm text-blue-800 dark:text-purple-200">
              <li>Focus on specific ports</li>
              <li>Customize your learning experience</li>
              <li>Perfect for targeted study</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              onClick={() => onSelectMode("personalized")}
              className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-purple-600 dark:hover:bg-purple-700 text-white"
            >
              Customize <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <Card className="h-full border-blue-200 dark:border-purple-800 hover:border-blue-400 dark:hover:border-purple-600 transition-colors duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-purple-300">
              <ShieldAlert className="h-5 w-5" />
              Real-World Scenarios
            </CardTitle>
            <CardDescription className="dark:text-purple-400">
              Apply port knowledge to security situations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm text-blue-800 dark:text-purple-200">
              <li>Incident response simulations</li>
              <li>Practical real security scenarios</li>
              <li>Test knowledge in context</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              onClick={() => onSelectMode("scenarios")}
              className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-purple-600 dark:hover:bg-purple-700 text-white"
            >
              Start Scenario <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <Card className="h-full border-red-200 dark:border-yellow-800 hover:border-red-400 dark:hover:border-yellow-600 transition-colors duration-300 relative overflow-hidden">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 to-orange-500/5 dark:from-yellow-500/10 dark:to-amber-500/5 z-0"></div>

          <CardHeader className="pb-2 relative z-10">
            <CardTitle className="flex items-center gap-2 text-red-700 dark:text-yellow-300">
              <Clock className="h-5 w-5" />
              Challenge Mode
            </CardTitle>
            <CardDescription className="text-red-500 dark:text-yellow-400">
              Mixed security scenarios against the clock
            </CardDescription>
          </CardHeader>
          <CardContent className="relative z-10">
            <ul className="list-disc list-inside space-y-1 text-sm text-red-800 dark:text-yellow-200">
              <li>60-second time limit</li>
              <li>Mix of security and threat hunting scenarios</li>
              <li>Test your incident response speed</li>
            </ul>
          </CardContent>
          <CardFooter className="relative z-10">
            <div className="w-full relative">
              <Button
                onClick={() => onSelectMode("scenario-challenge")}
                className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 dark:from-yellow-600 dark:to-amber-500 dark:hover:from-yellow-700 dark:hover:to-amber-600 text-white relative z-10 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Start Challenge <ArrowRight className="ml-2 h-4 w-4" />
                </span>
                <FlameEffect />
              </Button>
            </div>
          </CardFooter>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <Card className="h-full border-blue-200 dark:border-purple-800 hover:border-blue-400 dark:hover:border-purple-600 transition-colors duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-purple-300">
              <Shield className="h-5 w-5" />
              Threat Hunter
            </CardTitle>
            <CardDescription className="dark:text-purple-400">Identify attacker tactics and techniques</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm text-blue-800 dark:text-purple-200">
              <li>Real-world threat scenarios</li>
              <li>MITRE ATT&CK framework concepts</li>
              <li>Develop threat hunting skills</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              onClick={() => onSelectMode("threat-hunting")}
              className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-purple-600 dark:hover:bg-purple-700 text-white"
            >
              Start Hunting <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  )
}
