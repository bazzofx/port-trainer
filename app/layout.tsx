import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PortTrainer - Master Network Ports",
  description: "Learn network ports, protocols, and services through interactive flashcards",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
        <Script id="particles-js" strategy="afterInteractive">
          {`
            document.addEventListener('DOMContentLoaded', function() {
              const particlesContainer = document.getElementById('particles-container');
              if (!particlesContainer) return;
              
              const particleCount = 30;
              
              for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.style.position = 'absolute';
                particle.style.width = Math.random() * 5 + 2 + 'px';
                particle.style.height = particle.style.width;
                particle.style.backgroundColor = 'rgba(59, 130, 246, ' + (Math.random() * 0.2 + 0.1) + ')';
                particle.style.borderRadius = '50%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.pointerEvents = 'none';
                
                // Animation
                particle.style.animation = 'float ' + (Math.random() * 15 + 15) + 's linear infinite';
                particle.style.animationDelay = Math.random() * 10 + 's';
                
                particlesContainer.appendChild(particle);
              }
              
              // Add keyframes for float animation
              const style = document.createElement('style');
              style.textContent = \`
                @keyframes float {
                  0% {
                    transform: translateY(0) translateX(0);
                    opacity: 0;
                  }
                  10% {
                    opacity: 1;
                  }
                  90% {
                    opacity: 1;
                  }
                  100% {
                    transform: translateY(-100vh) translateX(calc(sin(var(--random-angle, 0deg)) * 100px));
                    opacity: 0;
                  }
                }
              \`;
              document.head.appendChild(style);
            });
          `}
        </Script>
      </body>
    </html>
  )
}
