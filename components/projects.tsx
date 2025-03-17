"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Briefcase, Code } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Logistics Website",
    description: "A logistics website with real-time tracking and delivery management. Built for ECL Parcel.",
    image: "/img/ecl.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://eclparcel.in/",
    githubUrl: "https://github.com/Kush05Bhardwaj/ECL",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills with a modern design.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    liveUrl: "",
    githubUrl: "",
    featured: false,
  }
]

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-mono">
              <Briefcase className="mr-2 h-3.5 w-3.5" />
              <span>My Work</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">Featured Projects</h2>
            <p className="max-w-[800px] text-muted-foreground">
              Here are some of my recent projects. Each one was built to solve a specific problem and demonstrates
              different aspects of my skills and expertise.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -5 }}
                className="glass-card overflow-hidden group"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <Badge variant="secondary" className="glass font-mono">
                      Featured
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-mono">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="bg-secondary/50 font-mono text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild className="group/button">
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4 transition-transform group-hover/button:scale-110" />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" asChild className="group/button">
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover/button:scale-110" />
                        Live Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>

        <div className="mt-16">
          <h3 className="text-xl font-bold mb-8 text-center font-mono">Other Projects</h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <motion.div key={index} variants={item} whileHover={{ y: -5 }} className="glass-card p-6 group">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Code className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex gap-2">
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full hover:bg-secondary/50 transition-colors"
                        >
                          <Github className="h-4 w-4" />
                          <span className="sr-only">GitHub</span>
                        </Link>
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full hover:bg-secondary/50 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span className="sr-only">Live Demo</span>
                        </Link>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold mb-2 font-mono">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="bg-secondary/30 text-xs font-mono">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

