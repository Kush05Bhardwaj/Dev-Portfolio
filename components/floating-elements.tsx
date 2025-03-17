"use client"

import { motion } from "framer-motion"
import { Code, Braces, Hash, Database, Server, Brackets } from "lucide-react"

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Top left area */}
      <motion.div
        className="absolute top-[15%] left-[10%] glass p-2 rounded-lg opacity-60 z-0"
        animate={{
          y: [0, 15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Code className="h-6 w-6 text-primary" />
      </motion.div>

      {/* Top right area */}
      <motion.div
        className="absolute top-[25%] right-[15%] glass p-2 rounded-lg opacity-60 z-0"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Braces className="h-6 w-6 text-accent" />
      </motion.div>

      {/* Middle left area */}
      <motion.div
        className="absolute top-[45%] left-[8%] glass p-2 rounded-lg opacity-60 z-0"
        animate={{
          x: [0, 15, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 9,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Hash className="h-6 w-6 text-green-400" />
      </motion.div>

      {/* Middle right area */}
      <motion.div
        className="absolute top-[55%] right-[8%] glass p-2 rounded-lg opacity-60 z-0"
        animate={{
          y: [0, 20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Database className="h-6 w-6 text-yellow-400" />
      </motion.div>

      {/* Bottom left area */}
      <motion.div
        className="absolute bottom-[20%] left-[12%] glass p-2 rounded-lg opacity-60 z-0"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 11,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Server className="h-6 w-6 text-pink-400" />
      </motion.div>

      {/* Bottom right area */}
      <motion.div
        className="absolute bottom-[15%] right-[10%] glass p-2 rounded-lg opacity-60 z-0"
        animate={{
          y: [0, 10, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 9,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Brackets className="h-6 w-6 text-blue-400" />
      </motion.div>

      {/* Colored orbs */}
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-30 animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-2/3 left-1/2 w-72 h-72 bg-green-400/10 rounded-full blur-3xl opacity-30 animate-pulse"
        style={{ animationDelay: "2s" }}
      />
    </div>
  )
}

