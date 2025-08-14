import { StatCard } from "./stat-card"
import { NftCard } from "./nft-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { motion } from "framer-motion" // Import motion

export function DashboardContent() {
  const playerStats = [
    { title: "Total Kills", value: "1,245", description: "+20% from last month" },
    { title: "Matches Played", value: "321", description: "+15% from last month" },
    { title: "Win Rate", value: "68%", description: "+5% from last month" },
    { title: "Current Rank", value: "Diamond III", description: "Top 5% of players" },
  ]

  const ownedNfts = [
    {
      name: "Cybernetic Commando",
      description: "A highly agile character with enhanced combat abilities.",
      imageUrl: "/placeholder.svg?height=300&width=400",
      rarity: "Legendary",
    },
    {
      name: "Shadow Assassin",
      description: "Specializes in stealth and critical strikes from the shadows.",
      imageUrl: "/placeholder.svg?height=300&width=400",
      rarity: "Epic",
    },
    {
      name: "Heavy Demolisher",
      description: "Slow but powerful, capable of devastating area damage.",
      imageUrl: "/placeholder.svg?height=300&width=400",
      rarity: "Rare",
    },
  ]

  const recentMatches = [
    { id: "M001", outcome: "Win", kills: 15, deaths: 3, assists: 7, map: "Neo-Tokyo Arena", date: "2025-07-30" },
    { id: "M002", outcome: "Loss", kills: 8, deaths: 6, assists: 2, map: "Wasteland Outpost", date: "2025-07-29" },
    { id: "M003", outcome: "Win", kills: 22, deaths: 5, assists: 10, map: "Cybernetic City", date: "2025-07-28" },
    { id: "M004", outcome: "Win", kills: 10, deaths: 2, assists: 4, map: "Neo-Tokyo Arena", date: "2025-07-27" },
  ]

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const tableRowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="flex flex-1 flex-col gap-6 p-6 bg-gray-950 text-white">
      {/* Player Stats Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-4">Player Stats</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {playerStats.map((stat, index) => (
            <StatCard key={index} title={stat.title} value={stat.value} description={stat.description} />
          ))}
        </div>
      </motion.section>

      {/* My NFTs Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-4">My NFT Characters</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ownedNfts.map((nft, index) => (
            <NftCard key={index} {...nft} />
          ))}
        </div>
      </motion.section>

      {/* Recent Matches Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-4">Recent Matches</h2>
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-700 hover:bg-gray-700">
                  <TableHead className="text-gray-300">Match ID</TableHead>
                  <TableHead className="text-gray-300">Outcome</TableHead>
                  <TableHead className="text-gray-300">Kills</TableHead>
                  <TableHead className="text-gray-300">Deaths</TableHead>
                  <TableHead className="text-gray-300">Assists</TableHead>
                  <TableHead className="text-gray-300">Map</TableHead>
                  <TableHead className="text-gray-300">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentMatches.map((match, index) => (
                  <motion.tr
                    key={match.id}
                    variants={tableRowVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="border-gray-700 hover:bg-gray-700/50"
                  >
                    <TableCell className="font-medium text-purple-400">{match.id}</TableCell>
                    <TableCell className={match.outcome === "Win" ? "text-green-400" : "text-red-400"}>
                      {match.outcome}
                    </TableCell>
                    <TableCell>{match.kills}</TableCell>
                    <TableCell>{match.deaths}</TableCell>
                    <TableCell>{match.assists}</TableCell>
                    <TableCell>{match.map}</TableCell>
                    <TableCell className="text-gray-400">{match.date}</TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.section>

      {/* News/Updates Section (Placeholder) */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-4">News & Updates</h2>
        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardContent className="p-6 text-gray-400">
            <p>Stay tuned for the latest game updates, patch notes, and event announcements!</p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>New character "Vanguard" coming next month!</li>
              <li>Season 2 Battle Pass details revealed.</li>
              <li>Bug fixes and performance improvements in Patch 1.2.</li>
            </ul>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  )
}
