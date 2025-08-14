import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { TypeIcon as type, LucideIcon } from 'lucide-react'
import { motion } from "framer-motion" // Import motion

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="flex flex-col items-center text-center p-6 bg-gray-800 border-gray-700 hover:border-purple-500 transition-colors duration-300 shadow-lg rounded-lg">
        <div className="mb-4 p-3 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white">
          <Icon className="h-8 w-8" />
        </div>
        <CardHeader className="p-0 mb-2">
          <CardTitle className="text-xl font-bold text-white">{title}</CardTitle>
        </CardHeader>
        <CardDescription className="text-gray-300 text-base">{description}</CardDescription>
      </Card>
    </motion.div>
  )
}
