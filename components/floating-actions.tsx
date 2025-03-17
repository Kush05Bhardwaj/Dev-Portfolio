"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp, Command } from "lucide-react"
import { useCommandPalette } from "@/hooks/use-command-palette"

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { setIsOpen } = useCommandPalette()

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      <motion.button
        className="floating-action-button bg-gradient-to-r from-primary to-accent"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        aria-label="Open command palette"
      >
        <Command className="h-5 w-5 text-white" />
      </motion.button>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="floating-action-button bg-gradient-to-r from-blue-400 to-cyan-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5 text-white" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

