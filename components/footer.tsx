import Link from "next/link"
import { Facebook, Instagram, Mail } from "lucide-react"

const footerLinks = [
  { label: "Sign Up to Our Newsletter", href: "#newsletter" },
  { label: "How We Work", href: "#how-we-work" },
  { label: "Work With Us", href: "#careers" },
  { label: "Sustainability Statement", href: "#sustainability" },
  { label: "Privacy & Cookies Policy", href: "#privacy" },
  { label: "Contact Us", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="px-4 md:px-8 lg:px-12 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Left column - Links */}
          <nav>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Center column - Social and CTA */}
          <div className="text-center">
            <Link
              href="#enquiry"
              className="inline-block text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              Make an Enquiry
            </Link>

            {/* Social icons */}
            <div className="flex items-center justify-center gap-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Pinterest"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                </svg>
              </Link>
              <Link
                href="mailto:info@plainenglish.co.uk"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right column - Disclaimer */}
          <div className="text-right">
            <p className="text-[10px] leading-relaxed text-muted-foreground mb-4">
              Colours inevitably vary in<br />
              photography. Please visit one of our<br />
              showrooms to experience our full<br />
              range of colours.
            </p>
            <p className="text-[10px] text-muted-foreground">
              © Plain English Design Ltd {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
