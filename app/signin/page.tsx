// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"

// export default function SignInPage() {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     console.log("Sign In Data:", { email, password })
//     // Here you would typically send this data to your backend for authentication
//     alert("Sign in successful! (Check console for data)")
//     // Redirect to dashboard or game
//   }

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-950 p-4">
//       <Card className="w-full max-w-md bg-gray-900 text-white border-gray-700">
//         <CardHeader className="text-center">
//           <CardTitle className="text-3xl font-bold">Sign In</CardTitle>
//           <CardDescription className="text-gray-400">
//             Welcome back, enter your credentials to continue.
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="space-y-2">
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="m@example.com"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-500"
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="password">Password</Label>
//               <Input
//                 id="password"
//                 type="password"
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-500"
//               />
//             </div>
//             <Button
//               type="submit"
//               className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
//             >
//               Sign In
//             </Button>
//           </form>
//           <div className="mt-6 text-center text-sm text-gray-400">
//             Don&apos;t have an account?{" "}
//             <Link href="/signup" className="underline text-purple-400 hover:text-purple-500">
//               Sign Up
//             </Link>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }
