import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion" // Import motion

interface NftCardProps {
  name: string;
  description: string;
  imageUrl: string;
  rarity: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

export function NftCard({ name, description, imageUrl, rarity }: NftCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-gray-800 border-gray-700 text-white flex flex-col">
        <CardHeader className="p-0">
          <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={name}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4 flex-grow flex flex-col">
          <CardTitle className="text-xl font-bold mb-1">{name}</CardTitle>
          <CardDescription className="text-gray-400 text-sm mb-3 flex-grow">{description}</CardDescription>
          <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
            <span>Rarity: <span className="font-semibold text-purple-400">{rarity}</span></span>
          </div>
          <Button variant="outline" className="w-full bg-gray-700 border-gray-600 text-white hover:bg-gray-600 hover:border-purple-500">
            View Details
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
