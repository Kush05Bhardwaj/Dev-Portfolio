"use server"

import { z } from "zod"

// Define validation schema
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

export type ContactFormState = {
  errors?: {
    name?: string[]
    email?: string[]
    subject?: string[]
    message?: string[]
    _form?: string[]
  }
  success?: boolean
  message?: string
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  // Validate form data
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  })

  // If validation fails, return errors
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
      message: "Please fix the errors in the form.",
    }
  }

  // Simulate server delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  try {
    // In a real application, you would send an email or save to a database here
    // For now, we'll just simulate a successful submission

    // Example of sending an email with a service like SendGrid or AWS SES would go here
    // const response = await sendEmail(validatedFields.data)

    return {
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    }
  } catch (error) {
    return {
      errors: {
        _form: ["An error occurred while sending your message. Please try again."],
      },
      success: false,
      message: "Failed to send message.",
    }
  }
}

