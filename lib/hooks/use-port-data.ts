"use client"

import { useState, useEffect } from "react"
import type { PortQuestion } from "@/lib/types"
import { portData } from "@/lib/port-data"

interface UsePortDataProps {
  selectedPorts?: string[]
  questionType?: "port" | "service"
}

export function usePortData({ selectedPorts = [], questionType = "port" }: UsePortDataProps = {}) {
  const [currentQuestion, setCurrentQuestion] = useState<PortQuestion | null>(null)
  const [usedItems, setUsedItems] = useState<Set<string>>(new Set())

  // Filter port data based on selected ports if in personalized mode
  const availablePortData =
    selectedPorts.length > 0 ? portData.filter((item) => selectedPorts.includes(item.port)) : portData

  const generateNewQuestion = () => {
    // If we've used most of the available items, reset
    if (usedItems.size >= availablePortData.length - 5 || availablePortData.length <= 5) {
      setUsedItems(new Set())
    }

    // Filter out items we've already used
    const availableData = availablePortData.filter((item) => {
      // For port questions, track by service; for service questions, track by port
      const trackKey = questionType === "port" ? item.service : item.port
      return !usedItems.has(trackKey)
    })

    // If no available data (unlikely but possible), use all data
    const dataToUse = availableData.length > 0 ? availableData : availablePortData

    // Select a random item
    const randomIndex = Math.floor(Math.random() * dataToUse.length)
    const selectedData = dataToUse[randomIndex]

    // Add to used items
    const trackKey = questionType === "port" ? selectedData.service : selectedData.port
    setUsedItems(new Set([...usedItems, trackKey]))

    if (questionType === "port") {
      // Generate "What port does [service] use?" question
      const wrongAnswers = getWrongPortAnswers(selectedData.port, 3)
      const options = [selectedData.port, ...wrongAnswers]
      shuffleArray(options)

      setCurrentQuestion({
        service: selectedData.service,
        port: selectedData.port,
        options,
        correctAnswer: selectedData.port,
        protocol: selectedData.protocol,
        description: selectedData.description,
        questionType: "port",
      })
    } else {
      // Generate "What service uses port [number]?" question
      const wrongAnswers = getWrongServiceAnswers(selectedData.service, 3)
      const options = [selectedData.service, ...wrongAnswers]
      shuffleArray(options)

      setCurrentQuestion({
        service: selectedData.service,
        port: selectedData.port,
        options,
        correctAnswer: selectedData.service,
        protocol: selectedData.protocol,
        description: selectedData.description,
        questionType: "service",
      })
    }
  }

  const getWrongPortAnswers = (correctPort: string, count: number): string[] => {
    const wrongAnswers: string[] = []
    const allPorts = portData.map((item) => item.port)

    while (wrongAnswers.length < count) {
      const randomIndex = Math.floor(Math.random() * allPorts.length)
      const port = allPorts[randomIndex]

      if (port !== correctPort && !wrongAnswers.includes(port)) {
        wrongAnswers.push(port)
      }
    }

    return wrongAnswers
  }

  const getWrongServiceAnswers = (correctService: string, count: number): string[] => {
    const wrongAnswers: string[] = []
    const allServices = portData.map((item) => item.service)

    while (wrongAnswers.length < count) {
      const randomIndex = Math.floor(Math.random() * allServices.length)
      const service = allServices[randomIndex]

      if (service !== correctService && !wrongAnswers.includes(service)) {
        wrongAnswers.push(service)
      }
    }

    return wrongAnswers
  }

  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
  }

  // Generate initial question on mount or when questionType changes
  useEffect(() => {
    setUsedItems(new Set()) // Reset used items when question type changes
    generateNewQuestion()
  }, [selectedPorts.join(","), questionType])

  return {
    currentQuestion,
    generateNewQuestion,
  }
}
