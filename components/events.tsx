"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import type { TranslationKey } from "@/lib/translations"

interface EventsProps {
  t: TranslationKey
}

export function Events({ t }: EventsProps) {
  return (
    <section id="events" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-16 text-balance">
          {t.events.title}
        </h2>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Recent Events */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center">{t.events.recent}</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {t.events.recentEvents.map((event, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center">{t.events.upcoming}</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {t.events.upcomingEvents.map((event, index) => (
                <Card key={index} className="border-2 border-primary/50 hover:shadow-lg transition-shadow bg-primary/5">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">{event.date}</span>
                    </div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
