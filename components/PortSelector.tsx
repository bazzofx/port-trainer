"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { portData } from "@/lib/port-data"

interface PortSelectorProps {
  onConfirm: (selectedPorts: string[]) => void
  onCancel: () => void
}

export default function PortSelector({ onConfirm, onCancel }: PortSelectorProps) {
  const [selectedPorts, setSelectedPorts] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [filterType, setFilterType] = useState<"all" | "tcp" | "udp">("all")

  const togglePort = (port: string) => {
    if (selectedPorts.includes(port)) {
      setSelectedPorts(selectedPorts.filter((p) => p !== port))
    } else {
      setSelectedPorts([...selectedPorts, port])
    }
  }

  const selectAll = () => {
    const allPorts = filteredPorts.map((item) => item.port)
    setSelectedPorts(allPorts)
  }

  const clearAll = () => {
    setSelectedPorts([])
  }

  const filteredPorts = portData.filter((item) => {
    const matchesSearch =
      item.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.port.includes(searchQuery) ||
      item.protocol.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesFilter =
      filterType === "all" ||
      (filterType === "tcp" && item.protocol.toLowerCase().includes("tcp")) ||
      (filterType === "udp" && item.protocol.toLowerCase().includes("udp"))

    return matchesSearch && matchesFilter
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-[#1e1e1e] rounded-xl shadow-lg p-6 max-w-2xl mx-auto"
    >
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-blue-700 dark:text-purple-300">Personalize Your Challenge</h2>
        <p className="text-blue-600 dark:text-purple-400">Select the specific ports you want to practice</p>
      </div>

      <div className="flex flex-col gap-4 mb-6">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-blue-500 dark:text-purple-400" />
            <Input
              placeholder="Search ports, services, or protocols..."
              className="pl-9 border-blue-200 dark:border-purple-800 dark:bg-[#252525] dark:text-purple-100"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-1">
            <Button
              variant={filterType === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterType("all")}
              className={
                filterType === "all" ? "bg-blue-600 dark:bg-purple-600" : "border-blue-200 dark:border-purple-800"
              }
            >
              All
            </Button>
            <Button
              variant={filterType === "tcp" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterType("tcp")}
              className={
                filterType === "tcp" ? "bg-blue-600 dark:bg-purple-600" : "border-blue-200 dark:border-purple-800"
              }
            >
              TCP
            </Button>
            <Button
              variant={filterType === "udp" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterType("udp")}
              className={
                filterType === "udp" ? "bg-blue-600 dark:bg-purple-600" : "border-blue-200 dark:border-purple-800"
              }
            >
              UDP
            </Button>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-sm text-blue-700 dark:text-purple-300">
            <Filter className="inline h-4 w-4 mr-1" />
            {filteredPorts.length} ports found
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={clearAll}
              className="text-blue-600 dark:text-purple-300 border-blue-200 dark:border-purple-800"
            >
              Clear All
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={selectAll}
              className="text-blue-600 dark:text-purple-300 border-blue-200 dark:border-purple-800"
            >
              Select All
            </Button>
          </div>
        </div>
      </div>

      <ScrollArea className="h-[300px] border rounded-lg border-blue-100 dark:border-purple-900 p-4 dark:bg-[#252525]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {filteredPorts.map((item) => (
            <div
              key={item.port}
              className={`flex items-center space-x-2 p-2 rounded-md ${
                selectedPorts.includes(item.port) ? "bg-blue-50 dark:bg-purple-900/30" : ""
              }`}
            >
              <Checkbox
                id={`port-${item.port}`}
                checked={selectedPorts.includes(item.port)}
                onCheckedChange={() => togglePort(item.port)}
                className="data-[state=checked]:bg-blue-600 dark:data-[state=checked]:bg-purple-600"
              />
              <Label
                htmlFor={`port-${item.port}`}
                className="flex-1 flex justify-between cursor-pointer text-sm dark:text-purple-100"
              >
                <span className="font-medium">{item.service}</span>
                <span className="text-blue-700 dark:text-purple-300">
                  {item.port} <span className="text-blue-400 dark:text-purple-400">({item.protocol})</span>
                </span>
              </Label>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="flex justify-between mt-6">
        <div className="text-sm text-blue-600 dark:text-purple-300">
          <Check className="inline h-4 w-4 mr-1" />
          {selectedPorts.length} ports selected
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={onCancel}
            className="border-blue-200 dark:border-purple-800 dark:text-purple-300"
          >
            Cancel
          </Button>
          <Button
            onClick={() => onConfirm(selectedPorts)}
            disabled={selectedPorts.length === 0}
            className="bg-blue-600 hover:bg-blue-700 dark:bg-purple-600 dark:hover:bg-purple-700"
          >
            Start Challenge
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
