"use client"

import { useState } from "react"
import { translations, type Language } from "@/lib/translations"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Goals } from "@/components/goals"
import { Team } from "@/components/team"
import { Events } from "@/components/events"
import { JoinForm } from "@/components/join-form"
import { Footer } from "@/components/footer"

export default function Home() {
  const [language, setLanguage] = useState<Language>("en")

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "fr" : "en"))
  }

  const t = translations[language]

  return (
    <main className="min-h-screen">
      <Navigation t={t} currentLanguage={language} onLanguageToggle={toggleLanguage} />
      <Hero t={t} />
      <About t={t} />
      <Goals t={t} />
      <Team t={t} />
      <Events t={t} />
      <JoinForm t={t} />
      <Footer t={t} />
    </main>
  )
}
