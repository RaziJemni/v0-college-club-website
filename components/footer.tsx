"use client"

import type { TranslationKey } from "@/lib/translations"

interface FooterProps {
  t: TranslationKey
}

export function Footer({ t }: FooterProps) {
  const currentYear = new Date().getFullYear()

  // To customize social links, update the URLs below with your actual social media profiles
  const socialLinks = [
    {
      name: "Facebook",
      icon: "fab fa-facebook-f",
      url: "https://www.facebook.com/profile.php?id=100088148657214", // CUSTOMIZE: Replace with your Facebook URL
    },
    {
      name: "Instagram",
      icon: "fab fa-instagram",
      url: "https://www.instagram.com/club_ambassadeurs_sos_isims/", // CUSTOMIZE: Replace with your Instagram URL
    },
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin-in",
      url: "https://linkedin.com/company/club-ambassadeurs-sos", // CUSTOMIZE: Replace with your LinkedIn URL
    },
    // CUSTOMIZE: Add more social links by adding objects with name, icon, and url properties
    // Example: { name: "Twitter", icon: "fab fa-twitter", url: "https://twitter.com/yourhandle" }
  ]

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-lg font-bold pb-2 border-b-2 border-primary w-fit text-gray-900">{t.footer.about}</h3>
            {/* CUSTOMIZE: Update location below */}
            <p className="text-gray-700">{t.footer.location}</p>
            {/* CUSTOMIZE: Update email below */}
            <p className="text-gray-700">
              <a href={`mailto:${t.footer.email}`} className="hover:text-primary transition-colors">
                {t.footer.email}
              </a>
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold pb-2 border-b-2 border-primary w-fit text-gray-900">
              {t.footer.quickLinks}
            </h3>
            {/* CUSTOMIZE: Update quick links below */}
            <ul className="space-y-2 text-gray-700">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-primary transition-colors">
                  {t.nav.team}
                </a>
              </li>
              <li>
                <a href="#join" className="hover:text-primary transition-colors">
                  {t.nav.join}
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold pb-2 border-b-2 border-primary w-fit text-gray-900">
              {t.footer.followUs}
            </h3>
            <div className="flex gap-4 flex-wrap">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  title={social.name}
                >
                  <i className={`${social.icon} text-white`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
          <p>
            © {currentYear} Club Ambassadeurs SOS Village - ISIMS. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
