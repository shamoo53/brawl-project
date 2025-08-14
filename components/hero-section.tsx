"use client"

import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from 'lucide-react'
import { useEffect } from "react"
import { motion } from "framer-motion" // Import motion

interface HeroSectionProps {
  onPlay: () => void;
}

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function HeroSection({ onPlay }: HeroSectionProps) {
  useEffect(() => {
    const lastVisited = localStorage.getItem("lastVisitedArcadeBrawl");
    if (lastVisited) {
      console.log(`Welcome back! Last visited: ${new Date(lastVisited).toLocaleString()}`);
    }
    localStorage.setItem("lastVisitedArcadeBrawl", new Date().toISOString());
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/placeholder.svg?height=1080&width=1920"
          alt="Abstract futuristic gaming background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <motion.div
        className="relative z-10 text-center px-4 md:px-6 max-w-4xl space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Reactarckade-Brawl
          <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Web3 Shooter
          </span>
        </motion.h1>
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Experience the future of gaming with real-time 3v3 PvP battles, NFT-based characters, and on-chain tournaments, all powered by Starknet and WebGL.
        </motion.p>
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            onClick={onPlay}
            className="px-8 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg"
          >
            Play Now <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            className="px-8 py-3 text-lg font-semibold rounded-full border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 transition-colors duration-300"
          >
            Connect Wallet
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
