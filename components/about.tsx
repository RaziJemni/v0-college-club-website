"use client"

import type { TranslationKey } from "@/lib/translations"

interface AboutProps {
  t: TranslationKey
}

export function About({ t }: AboutProps) {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">{t.about.title}</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">{t.about.description}</p>
        </div>
      </div>
    </section>
  )
}
