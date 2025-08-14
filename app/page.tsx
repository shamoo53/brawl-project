"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { GameCanvasPlaceholder } from "@/components/game-canvas";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleExitGame = () => {
    setIsPlaying(false);
  };

  return (
    <main className="min-h-screen bg-gray-950">
      {isPlaying ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 z-10"
        >
          <GameCanvasPlaceholder onExit={handleExitGame} />
        </motion.div>
      ) : (
        <>
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <HeroSection onPlay={handlePlay} />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <FeaturesSection />
          </motion.section>

          {/* Add more sections like marketplace, tournaments, etc. here */}

          <footer className="py-8 text-center text-gray-500 text-sm bg-gray-900">
            <p>
              &copy; {new Date().getFullYear()} ReactarckadeBrawl. All rights
              reserved.
            </p>
          </footer>
        </>
      )}
    </main>
  );
}
