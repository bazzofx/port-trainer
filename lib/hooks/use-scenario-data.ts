"use client"

import { useState, useEffect } from "react"
import { type Scenario, scenarioData } from "@/lib/scenario-data"

export function useScenarioData() {
  const [currentScenario, setCurrentScenario] = useState<Scenario | null>(null)
  const [usedScenarios, setUsedScenarios] = useState<Set<string>>(new Set())

  const generateNewScenario = () => {
    // Reset used scenarios if we've gone through most of them
    if (usedScenarios.size >= scenarioData.length - 5) {
      setUsedScenarios(new Set())
    }

    // Filter out scenarios we've already used
    const availableScenarios = scenarioData.filter((scenario) => !usedScenarios.has(scenario.scenario))

    // Select a random scenario
    const randomIndex = Math.floor(Math.random() * availableScenarios.length)
    const selectedScenario = availableScenarios[randomIndex]

    // Add to used scenarios
    setUsedScenarios(new Set([...usedScenarios, selectedScenario.scenario]))
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
