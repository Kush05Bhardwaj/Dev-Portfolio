"use client"

import { useState, useEffect } from "react"
import { Command } from "cmdk"
import { motion, AnimatePresence } from "framer-motion"
import {
  Search,
  Home,
  Code2,
  Briefcase,
  MessageSquare,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Moon,
  Sun,
  X,
} from "lucide-react"
import { useTheme } from "next-themes"
import { useCommandPalette } from "@/hooks/use-command-palette"

export default function CommandPalette() {
  const { isOpen, setIsOpen } = useCommandPalette()
  const [search, setSearch] = useState("")
  const { setTheme, theme } = useTheme()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsOpen((open) => !open)
      }

      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [setIsOpen])

  const navigateTo = (sectionId: string) => {
    setIsOpen(false)

    // Smooth scroll to the section
    const element = document.getElementById(sectionId.replace("#", ""))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24">
          <motion.div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />

          <motion.div
            className="relative w-full max-w-lg overflow-hidden glass rounded-lg shadow-lg border border-white/10"
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ duration: 0.15 }}
          >
            <Command
              className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5"
              shouldFilter={false}
            >
              <div className="flex items-center border-b border-border px-3">
                <Search className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />
                <Command.Input
                  value={search}
                  onValueChange={setSearch}
                  className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Type a command or search..."
                />
                <button onClick={() => setIsOpen(false)} className="ml-2 p-1 rounded-md hover:bg-secondary">
                  <X className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>

              <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2">
                <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
                  No results found.
                </Command.Empty>

                <Command.Group heading="Navigation">
                  <Command.Item
                    onSelect={() => navigateTo("#home")}
                    className="flex items-center gap-2 rounded-md hover:bg-secondary aria-selected:bg-secondary"
                  >
                    <Home className="h-4 w-4" />
                    <span>Go to Home</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => navigateTo("#skills")}
                    className="flex items-center gap-2 rounded-md hover:bg-secondary aria-selected:bg-secondary"
                  >
                    <Code2 className="h-4 w-4" />
                    <span>Go to Skills</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => navigateTo("#projects")}
                    className="flex items-center gap-2 rounded-md hover:bg-secondary aria-selected:bg-secondary"
                  >
                    <Briefcase className="h-4 w-4" />
                    <span>Go to Projects</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => navigateTo("#testimonials")}
                    className="flex items-center gap-2 rounded-md hover:bg-secondary aria-selected:bg-secondary"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Go to Testimonials</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => navigateTo("#contact")}
                    className="flex items-center gap-2 rounded-md hover:bg-secondary aria-selected:bg-secondary"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Go to Contact</span>
                  </Command.Item>
                </Command.Group>

                <Command.Group heading="Theme">
                  <Command.Item
                    onSelect={() => setTheme("dark")}
                    className="flex items-center gap-2 rounded-md hover:bg-secondary aria-selected:bg-secondary"
                  >
                    <Moon className="h-4 w-4" />
                    <span>Dark Mode</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => setTheme("light")}
                    className="flex items-center gap-2 rounded-md hover:bg-secondary aria-selected:bg-secondary"
                  >
                    <Sun className="h-4 w-4" />
                    <span>Light Mode</span>
                  </Command.Item>
                </Command.Group>

                <Command.Group heading="Social">
                  <Command.Item
                    onSelect={() => window.open("https://github.com", "_blank")}
                    className="flex items-center gap-2 rounded-md hover:bg-secondary aria-selected:bg-secondary"
                  >
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => window.open("https://linkedin.com", "_blank")}
                    className="flex items-center gap-2 rounded-md hover:bg-secondary aria-selected:bg-secondary"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span>LinkedIn</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => window.open("https://twitter.com", "_blank")}
                    className="flex items-center gap-2 rounded-md hover:bg-secondary aria-selected:bg-secondary"
                  >
                    <Twitter className="h-4 w-4" />
                    <span>Twitter</span>
                  </Command.Item>
                </Command.Group>
              </Command.List>

              <div className="border-t border-border p-2 text-xs text-muted-foreground">
                <div className="flex items-center justify-between">
                  <span>
                    Press{" "}
                    <kbd className="rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium">
                      Esc
                    </kbd>{" "}
                    to close
                  </span>
                  <span>
                    Press{" "}
                    <kbd className="rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium">
                      ↑
                    </kbd>{" "}
                    <kbd className="rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium">
                      ↓
                    </kbd>{" "}
                    to navigate
                  </span>
                </div>
              </div>
            </Command>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

