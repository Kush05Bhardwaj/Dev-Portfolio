import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono, Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import CommandPalette from "@/components/command-palette"
import { CommandPaletteProvider } from "@/hooks/use-command-palette"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Kush05Bhardwaj | Modern Developer Portfolio",
  description: "A modern developer portfolio showcasing skills and projects",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${jetbrainsMono.variable} ${inter.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <CommandPaletteProvider>
            <CommandPalette />
            {children}
          </CommandPaletteProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

