"use client"

import { Button } from "@/components/ui/button"
import { XIcon } from 'lucide-react'

interface GameCanvasPlaceholderProps {
  onExit: () => void;
}

export function GameCanvasPlaceholder({ onExit }: GameCanvasPlaceholderProps) {
  return (
    <div className="relative w-full h-screen bg-black flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* This is where your WebGL canvas would be mounted */}
        <div className="w-full h-full bg-gradient-to-br from-gray-950 to-gray-800 flex items-center justify-center text-gray-600 text-2xl font-mono">
          <p>WebGL Game Canvas Placeholder</p>
        </div>
      </div>
      <div className="absolute top-4 right-4 z-10">
        <Button
          variant="ghost"
          size="icon"
          onClick={onExit}
          className="text-white hover:bg-gray-700 rounded-full"
          aria-label="Exit Game"
        >
          <XIcon className="h-6 w-6" />
        </Button>
      </div>
      <div className="absolute bottom-4 left-4 right-4 z-10 text-center text-gray-400 text-sm">
        <p>
          {'{'} Your WebGL game content would render here. Consider using{" "}
          <a
            href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-purple-400"
          >
            React Three Fiber
          </a>{" "}
          for 3D graphics. {'}'}
        </p>
      </div>
    </div>
  )
}
