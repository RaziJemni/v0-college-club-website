"use client"

import { Card, CardContent } from "@/components/ui/card"
import type { TranslationKey } from "@/lib/translations"

interface TeamProps {
  t: TranslationKey
}

export function Team({ t }: TeamProps) {
  return (
    <section id="team" className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-16 text-balance text-primary">
          {t.team.title}
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {t.team.members.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-primary"
            >
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <img
                  src={`/placeholder.svg?height=400&width=400&query=professional+headshot`}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold mb-1 text-primary">{member.name}</h3>
                  <p className="text-muted-foreground font-medium">{member.role}</p>
                </div>

                <div className="space-y-3 border-t pt-4">
                  {/* Email section - only shows if email exists */}
                  {member.email && (
                    <div className="flex items-center justify-center gap-2 text-sm">
                      <i className="fas fa-envelope text-secondary flex-shrink-0"></i>
                      <a
                        href={`mailto:${member.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors truncate"
                        title={member.email}
                      >
                        {member.email}
                      </a>
                    </div>
                  )}

                  {/* Social links section - only shows if at least one social exists */}
                  {(member.instagram || member.linkedin) && (
                    <div className="flex justify-center gap-3 pt-2">
                      {/* CUSTOMIZE: Add or remove social links by updating member data in translations.ts */}
                      {member.instagram && (
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 bg-secondary text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity flex-shrink-0"
                          title="Instagram"
                        >
                          <i className="fab fa-instagram text-sm"></i>
                        </a>
                      )}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 bg-secondary text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity flex-shrink-0"
                          title="LinkedIn"
                        >
                          <i className="fab fa-linkedin-in text-sm"></i>
                        </a>
                      )}
                      {/* CUSTOMIZE: To add more social links (Twitter, GitHub, etc.):
                          1. Add the property to member object in translations.ts (e.g., twitter: "https://...")
                          2. Add a new conditional block below following the same pattern
                          Example:
                          {member.twitter && (
                            <a href={member.twitter} ... >
                              <i className="fab fa-twitter text-sm"></i>
                            </a>
                          )}
                      */}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* CUSTOMIZE: To add or remove team members:
            1. Go to lib/translations.ts
            2. Find the team.members array
            3. Add new members with: { name: "...", role: "...", email: "...", instagram: "...", linkedin: "..." }
            4. Remove members by deleting their object from the array
            The layout will automatically adjust to fit any number of members
        */}
      </div>
    </section>
  )
}
