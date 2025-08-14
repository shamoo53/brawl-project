import { FeatureCard } from "./feature-card"
import { SwordsIcon, GemIcon, TrophyIcon, GlobeIcon, ZapIcon, Gamepad2Icon } from 'lucide-react'
import { motion } from "framer-motion" // Import motion

export function FeaturesSection() {
  const features = [
    {
      icon: SwordsIcon,
      title: "Real-time 3v3 PvP",
      description: "Engage in fast-paced, competitive multiplayer battles with unique NFT characters.",
    },
    {
      icon: GemIcon,
      title: "Decentralized Assets",
      description: "Own your in-game assets via Starknet integration, ensuring true digital ownership.",
    },
    {
      icon: TrophyIcon,
      title: "On-chain Tournaments",
      description: "Compete in decentralized tournaments and participate in DAO governance.",
    },
    {
      icon: GlobeIcon,
      title: "Browser-based Experience",
      description: "Play directly in your browser with no downloads required, powered by React and WebGL.",
    },
    {
      icon: ZapIcon,
      title: "Low-latency Transactions",
      description: "Enjoy smooth gameplay and cost-efficient transactions with Dojo Engine.",
    },
    {
      icon: Gamepad2Icon,
      title: "Offline Gameplay Mode",
      description: "Practice and earn rewards in wave-based enemy challenges.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-16 px-4 md:px-6 bg-gray-900 text-white">
      <motion.div
        className="max-w-6xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Key Features</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Discover what makes Reactarckade-Brawl a groundbreaking Web3 shooter.
        </p>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {features.map((feature, index) => (
          <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
        ))}
      </motion.div>
    </section>
  )
}
