"use client"

import { useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { GameCanvasPlaceholder } from "@/components/game-canvas-placeholder"

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
  }

  const handleExitGame = () => {
    setIsPlaying(false)
  }

  return (
    <main className="min-h-screen bg-gray-950">
      {isPlaying ? (
        <GameCanvasPlaceholder onExit={handleExitGame} />
      ) : (
        <>
          <HeroSection onPlay={handlePlay} />
          <FeaturesSection />
          {/* Add more sections like marketplace, tournaments, etc. here */}
          <footer className="py-8 text-center text-gray-500 text-sm bg-gray-900">
            <p>&copy; {new Date().getFullYear()} Reactarckade-Brawl. All rights reserved.</p>
          </footer>
        </>
      )}
    </main>
  )
}
