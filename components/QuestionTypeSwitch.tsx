"use client"

import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Database, Server } from "lucide-react"

interface QuestionTypeSwitchProps {
  questionType: "port" | "service"
  onChange: (type: "port" | "service") => void
}

export default function QuestionTypeSwitch({ questionType, onChange }: QuestionTypeSwitchProps) {
  return (
    <div className="flex items-center justify-center gap-3 bg-white dark:bg-[#1e1e1e] px-4 py-2 rounded-lg shadow-sm">
      <div
        className={`flex items-center gap-1 ${questionType === "port" ? "text-blue-700 dark:text-purple-300" : "text-blue-400 dark:text-purple-500"}`}
      >
        <Server className="h-4 w-4" />
        <Label htmlFor="question-type-switch" className="text-sm cursor-pointer">
          Find Port
        </Label>
      </div>

      <Switch
        id="question-type-switch"
        checked={questionType === "service"}
        onCheckedChange={(checked) => onChange(checked ? "service" : "port")}
        className="data-[state=checked]:bg-blue-600 dark:data-[state=checked]:bg-purple-600"
      />

      <div
        className={`flex items-center gap-1 ${questionType === "service" ? "text-blue-700 dark:text-purple-300" : "text-blue-400 dark:text-purple-500"}`}
      >
        <Database className="h-4 w-4" />
        <Label htmlFor="question-type-switch" className="text-sm cursor-pointer">
          Find Service
        </Label>
      </div>
    </div>
  )
}
