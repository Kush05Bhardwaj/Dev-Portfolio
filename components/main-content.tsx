import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"

export default function MainContent() {
  return (
    <main className="flex-1 overflow-x-hidden">
      <section id="home" className="min-h-screen grid-pattern">
        <Hero />
      </section>
      <section id="skills" className="min-h-screen dot-pattern">
        <Skills />
      </section>
      <section id="projects" className="min-h-screen grid-pattern">
        <Projects />
      </section>
      <section id="testimonials" className="min-h-screen dot-pattern">
        <Testimonials />
      </section>
      <section id="contact" className="min-h-screen grid-pattern">
        <Contact />
      </section>
    </main>
  )
}

