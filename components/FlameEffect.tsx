"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export default function FlameEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size to match button size
    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.offsetWidth
        canvas.height = parent.offsetHeight
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Particle class for flames
    class Particle {
      x: number
      y: number
      size: number
      speedY: number
      speedX: number
      color: string
      life: number
      maxLife: number

      constructor(x: number, y: number, size: number, speedY: number, color: string) {
        this.x = x
        this.y = y
        this.size = size
        this.speedY = speedY
        this.speedX = (Math.random() - 0.5) * 1.5
        this.color = color
        this.maxLife = 20 + Math.random() * 30
        this.life = this.maxLife
      }

      update() {
        this.y -= this.speedY
        this.x += this.speedX
        this.life--

        if (this.life > 0) {
          this.size = this.size * 0.99
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        const alpha = this.life / this.maxLife
        ctx.globalAlpha = alpha
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.globalAlpha = 1
      }
    }

    // Array to store particles
    const particles: Particle[] = []

    // Animation loop
    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Add new particles
      const baseX = canvas.width / 2
      const baseY = canvas.height

      // Determine colors based on theme
      const colors =
        resolvedTheme === "dark"
          ? ["rgba(255, 255, 0, 0.7)", "rgba(255, 200, 0, 0.7)", "rgba(255, 150, 0, 0.7)"]
          : ["rgba(255, 100, 0, 0.7)", "rgba(255, 50, 0, 0.7)", "rgba(255, 200, 0, 0.7)"]

      // Add new particles
      if (Math.random() < 0.3) {
        const x = baseX + (Math.random() - 0.5) * canvas.width * 0.8
        const y = baseY - Math.random() * 5
        const size = 2 + Math.random() * 4
        const speed = 0.5 + Math.random() * 1
        const colorIndex = Math.floor(Math.random() * colors.length)
        particles.push(new Particle(x, y, size, speed, colors[colorIndex]))
      }

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw(ctx)

        // Remove dead particles
        if (particles[i].life <= 0) {
          particles.splice(i, 1)
          i--
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [resolvedTheme])

  return (
    <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" style={{ mixBlendMode: "screen" }} />
  )
}
