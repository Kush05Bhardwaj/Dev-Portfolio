import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import FloatingActions from "@/components/floating-actions"
import FloatingElements from "@/components/floating-elements"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <FloatingElements />
      <Navbar />
      <section id="home" className="scroll-mt-20 grid-pattern">
        <Hero />
      </section>
      <section id="skills" className="scroll-mt-20 dot-pattern">
        <Skills />
      </section>
      <section id="projects" className="scroll-mt-20 grid-pattern">
        <Projects />
      </section>
      <section id="testimonials" className="scroll-mt-20 dot-pattern">
        <Testimonials />
      </section>
      <section id="contact" className="scroll-mt-20 grid-pattern">
        <Contact />
      </section>
      <Footer />
      <FloatingActions />
    </main>
  )
}

