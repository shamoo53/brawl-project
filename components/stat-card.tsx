import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion" // Import motion

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

export function StatCard({ title, value, description }: StatCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-400">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-purple-400">{value}</div>
          {description && <p className="text-xs text-gray-500 mt-1">{description}</p>}
        </CardContent>
      </Card>
    </motion.div>
  )
}
