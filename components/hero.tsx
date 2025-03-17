"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Twitter, Terminal, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "I build exceptional digital experiences."

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  const handleButtonClick = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      {/* Floating elements specific to hero */}
      <motion.div
        className="absolute top-1/4 left-1/5 glass p-3 rounded-lg border border-white/10 z-10"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div className="text-xs font-mono">
          <span className="text-primary">function</span> <span className="text-accent">createUI</span>() &#123; ...
          &#125;
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-1/5 glass p-3 rounded-lg border border-white/10 z-10"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 9,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div className="text-xs font-mono">
          <span className="text-yellow-400">const</span> <span className="text-green-400">creativity</span> ={" "}
          <span className="text-pink-400">true</span>;
        </div>
      </motion.div>

      <div className="container px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          className="flex flex-col space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-mono">
            <Terminal className="mr-2 h-3.5 w-3.5" />
            <span>Full Stack Developer | Mern Stack Developer | AI/ML Engineer </span>
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-mono">
              Hi, I'm <span className="gradient-text">Kushagra Bhardwaj</span>
            </h1>

            <div className="h-12 mb-4">
              <p className="text-xl md:text-2xl font-mono border-r-4 border-primary">
                {text}
                <span className="animate-pulse">_</span>
              </p>
            </div>

            <p className="text-muted-foreground max-w-md">
              I'm a passionate developer focused on creating clean, efficient, and user-friendly applications. Let's
              build something amazing together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={() => handleButtonClick("#contact")} className="group">
              Get in touch
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" onClick={() => handleButtonClick("#projects")} className="group">
              View my work
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="flex gap-4 pt-4">
            <Link
              href="https://github.com/Kush05Bhardwaj"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-2 rounded-lg hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/kush2012bhardwaj/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-2 rounded-lg hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://x.com/Kush05Bhardwaj"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-2 rounded-lg hover:text-primary transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>

          <div className="code-block mt-6 hidden md:block">
            <pre className="text-xs text-muted-foreground">
              <code>{`const developer = {
  name: "Kushagra Bhardwaj",
  skills: ["JavaScript", "React", "Node.js", "TypeScript" , "Python", "Html", "Css", "C++"],
  experience: "1+ years",
  passion: "Building amazing web experiences"
};`}</code>
            </pre>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative h-[400px] w-[400px] mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-20 blur-3xl animate-pulse" />
            <div className="relative h-full w-full rounded-full border-2 border-white/10 glass overflow-hidden animate-float">
              <Image
                src="/img/KB.png"
                height={1080}
                width={1920}
                alt="Developer portrait"
                className="object-cover"
                priority
              />
            </div>

            <div
              className="absolute -top-4 -right-4 glass p-3 rounded-lg border border-white/10 animate-float"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="text-xs font-mono">
                <span className="text-primary">const</span> <span className="text-accent">passion</span> ={" "}
                <span className="text-green-400">"coding"</span>;
              </div>
            </div>

            <div
              className="absolute -bottom-4 -left-4 glass p-3 rounded-lg border border-white/10 animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="text-xs font-mono">
                <span className="text-primary">function</span> <span className="text-accent">solveProblems</span>()
                &#123; ... &#125;
              </div>
            </div>

            <div
              className="absolute top-1/2 -right-12 glass p-3 rounded-lg border border-white/10 animate-float"
              style={{ animationDelay: "1.5s" }}
            >
              <div className="text-xs font-mono">
                <span className="text-yellow-400">import</span>{" "}
                <span className="text-pink-400">&#123; creativity &#125;</span>
              </div>
            </div>

            <div
              className="absolute top-1/4 -left-12 glass p-3 rounded-lg border border-white/10 animate-float"
              style={{ animationDelay: "2s" }}
            >
              <div className="text-xs font-mono">
                <span className="text-blue-400">export</span> <span className="text-green-400">default</span>{" "}
                <span className="text-accent">Developer</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <p className="text-sm text-muted-foreground mb-2 font-mono">Explore more</p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
          onClick={() => handleButtonClick("#skills")}
          className="cursor-pointer glass p-2 rounded-full hover:text-primary transition-colors"
        >
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </div>
  )
}

