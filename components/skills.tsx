"use client"

import { motion } from "framer-motion"
import {
  Code2,
  Database,
  Globe,
  Layout,
  Palette,
  Server,
  Brain,
  Users,
  Lightbulb,
  Clock,
  MessageSquare,
  Target,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const technicalSkills = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces with modern frameworks",
    icon: <Layout className="h-10 w-10 text-primary" />,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend Development",
    description: "Creating robust server-side applications and APIs",
    icon: <Server className="h-10 w-10 text-primary" />,
    technologies: ["Node.js", "Python", "C++"],
  },
  {
    title: "Database Management",
    description: "Designing and optimizing database structures",
    icon: <Database className="h-10 w-10 text-primary" />,
    technologies: ["MongoDB", "Firebase"],
  },
  {
    title: "UI/UX Design",
    description: "Crafting beautiful and intuitive user experiences",
    icon: <Palette className="h-10 w-10 text-primary" />,
    technologies: ["Figma", "Photoshop"],
  }
]

const softSkills = [
  {
    title: "Problem Solving",
    description: "Analytical thinking and creative solutions to complex challenges",
    icon: <Brain className="h-10 w-10 text-accent" />,
    strengths: ["Critical Thinking", "Analytical Skills", "Debugging", "Research"],
  },
  {
    title: "Communication",
    description: "Clear and effective communication with teams and clients",
    icon: <MessageSquare className="h-10 w-10 text-accent" />,
    strengths: ["Presentations", "Documentation"],
  },
  {
    title: "Teamwork",
    description: "Collaborating effectively in diverse team environments",
    icon: <Users className="h-10 w-10 text-accent" />,
    strengths: ["Pair Programming", "Code Reviews", "Knowledge Sharing"],
  },
  {
    title: "Creativity",
    description: "Innovative approaches to design and development challenges",
    icon: <Lightbulb className="h-10 w-10 text-accent" />,
    strengths: ["Design Thinking", "Innovation", "Prototyping"],
  },
  {
    title: "Time Management",
    description: "Efficient organization and prioritization of tasks",
    icon: <Clock className="h-10 w-10 text-accent" />,
    strengths: ["Project Planning", "Deadline Management"],
  },
  {
    title: "Adaptability",
    description: "Quick learning and adaptation to new technologies and environments",
    icon: <Target className="h-10 w-10 text-accent" />,
    strengths: ["Continuous Learning", "Technology Trends", "Growth Mindset"],
  },
]

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
              <Code2 className="mr-2 h-3.5 w-3.5" />
              <span>My Expertise</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">Skills & Abilities</h2>
            <p className="max-w-[800px] text-muted-foreground">
              A combination of technical proficiency and interpersonal skills that help me deliver exceptional results.
            </p>
          </motion.div>
        </div>

        <Tabs defaultValue="technical" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="glass">
              <TabsTrigger value="technical" className="data-[state=active]:bg-primary/20">
                Technical Skills
              </TabsTrigger>
              <TabsTrigger value="soft" className="data-[state=active]:bg-primary/20">
                Soft Skills
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="technical">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-6 hover:shadow-lg transition-all duration-300 hover:shadow-primary/5 group"
                  variants={item}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col space-y-4">
                    <div className="rounded-full bg-primary/10 p-3 w-fit group-hover:animate-glow">{skill.icon}</div>
                    <h3 className="text-xl font-bold font-mono">{skill.title}</h3>
                    <p className="text-muted-foreground">{skill.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {skill.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-xs font-mono transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="soft">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-6 hover:shadow-lg transition-all duration-300 hover:shadow-accent/5 group"
                  variants={item}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col space-y-4">
                    <div className="rounded-full bg-accent/10 p-3 w-fit group-hover:animate-glow">{skill.icon}</div>
                    <h3 className="text-xl font-bold font-mono">{skill.title}</h3>
                    <p className="text-muted-foreground">{skill.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {skill.strengths.map((strength, strengthIndex) => (
                        <span
                          key={strengthIndex}
                          className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-2.5 py-0.5 text-xs font-mono transition-colors"
                        >
                          {strength}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

