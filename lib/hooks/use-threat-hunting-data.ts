"use client"

import { useState, useEffect } from "react"
import { type ThreatHuntingScenario, threatHuntingData } from "@/lib/threat-hunting-data"

export function useThreatHuntingData() {
  const [currentScenario, setCurrentScenario] = useState<ThreatHuntingScenario | null>(null)
  const [usedScenarios, setUsedScenarios] = useState<Set<string>>(new Set())

  const generateNewScenario = () => {
    // Reset used scenarios if we've gone through most of them
    if (usedScenarios.size >= threatHuntingData.length - 5) {
      setUsedScenarios(new Set())
    }

    // Filter out scenarios we've already used
    const availableScenarios = threatHuntingData.filter((scenario) => !usedScenarios.has(scenario.description))

    // Select a random scenario
    const randomIndex = Math.floor(Math.random() * availableScenarios.length)
    const selectedScenario = availableScenarios[randomIndex]

    // Log the selected scenario for debugging
    console.log("Generated new threat hunting scenario:", {
      description: selectedScenario.description,
      question: selectedScenario.question,
      options: selectedScenario.options,
      correctAnswer: selectedScenario.correctAnswer,
    })

    // Add to used scenarios
    setUsedScenarios(new Set([...usedScenarios, selectedScenario.description]))
    setCurrentScenario(selectedScenario)
  }

  // Generate initial scenario on mount
  useEffect(() => {
    generateNewScenario()
  }, [])

  return {
    currentScenario,
    generateNewScenario,
  }
}
