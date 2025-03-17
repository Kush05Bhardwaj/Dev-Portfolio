"use client"

import { useFormState } from "react-dom"
import { useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Loader2, Send } from "lucide-react"
import { submitContactForm, type ContactFormState } from "@/actions/contact"
import { useFormStatus } from "react-dom"
import { Alert, AlertDescription } from "@/components/ui/alert"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" className="w-full group" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          Send Message
          <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </>
      )}
    </Button>
  )
}

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [formState, formAction] = useFormState<ContactFormState, FormData>(submitContactForm, {})

  // Reset form on successful submission
  if (formState.success && formRef.current) {
    formRef.current.reset()
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: "kush2012bhardwaj@gmail.com",
      link: "mailto:kush2012bhardwaj@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      value: "+91 7428690322",
      link: "+91 7428690322",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      value: "Gurgaon, Haryana, India",
      link: "https://maps.app.goo.gl/XAdsdzE974MbLZHW6",
    },
  ]

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
              <Mail className="mr-2 h-3.5 w-3.5" />
              <span>Get in Touch</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">Contact Me</h2>
            <p className="max-w-[800px] text-muted-foreground">
              Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-mono">Let's talk about your project</h3>
              <p className="text-muted-foreground">
                Fill out the form and I'll get back to you as soon as possible. I'm looking forward to learning more
                about your project and how we can work together.
              </p>

              <div className="space-y-6 pt-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="rounded-full bg-primary/10 p-2">{item.icon}</div>
                    <div>
                      <h4 className="font-medium font-mono">{item.title}</h4>
                      <a
                        href={item.link}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="code-block mt-6">
                <pre className="text-xs text-muted-foreground">
                  <code>{`// Let's connect
function sendMessage(yourIdea) {
  return collaborate(yourIdea);
}

// I'm excited to hear from you!`}</code>
                </pre>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6"
          >
            <form ref={formRef} action={formAction} className="space-y-4">
              {formState.errors?._form && (
                <Alert variant="destructive" className="bg-destructive/20 border-destructive/50">
                  <AlertDescription>{formState.errors._form}</AlertDescription>
                </Alert>
              )}

              {formState.success && (
                <Alert className="bg-success/20 border-success/50">
                  <AlertDescription>{formState.message}</AlertDescription>
                </Alert>
              )}

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    aria-describedby="name-error"
                    className="glass border-white/10 focus:border-primary/50"
                  />
                  {formState.errors?.name && (
                    <p id="name-error" className="text-sm text-red-500 font-mono">
                      {formState.errors.name[0]}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    aria-describedby="email-error"
                    className="glass border-white/10 focus:border-primary/50"
                  />
                  {formState.errors?.email && (
                    <p id="email-error" className="text-sm text-red-500 font-mono">
                      {formState.errors.email[0]}
                    </p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  aria-describedby="subject-error"
                  className="glass border-white/10 focus:border-primary/50"
                />
                {formState.errors?.subject && (
                  <p id="subject-error" className="text-sm text-red-500 font-mono">
                    {formState.errors.subject[0]}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  className="min-h-[150px] glass border-white/10 focus:border-primary/50"
                  aria-describedby="message-error"
                />
                {formState.errors?.message && (
                  <p id="message-error" className="text-sm text-red-500 font-mono">
                    {formState.errors.message[0]}
                  </p>
                )}
              </div>
              <SubmitButton />
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

