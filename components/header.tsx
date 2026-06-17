"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Images, Menu, X } from "lucide-react"
import Image from "next/image"
import logo from "@/public/logo.png"
const menuItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  // { label: "How We Work", href: "/how-we-work" },
  { label: "Kitchens", href: "/kitchens" },
  { label: "Other Rooms", href: "/other-rooms" },
  // { label: "Colour Collections", href: "/colours" },
  // { label: "Details", href: "/details" },
  // { label: "Showrooms", href: "/showrooms" },
  { label: "Contact Us", href: "/contact" },
  // { label: "Enquiry", href: "/enquiry" },
  // { label: "Press", href: "/press" },
  // { label: "Journal", href: "/journal" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  return (
    <>
      <header className="w-full  relative z-40">
        {/* Top navigation bar */}
        <div className="flex items-center justify-between px-4 py-3 md:px-8 lg:px-12">
          {/* Left side - flags and contact */}
          <div className="flex items-center gap-4">
            {/* <div className="flex items-center gap-2">
              <span className="text-sm">🇬🇧</span>
              <span className="text-sm">🇺🇸</span>
            </div> */}
            <Link 
              href="/contact" 
              className="hidden text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors sm:block"
            >
              Contact Us
            </Link>
          </div>

          {/* Right side - links and menu */}
          <div className="flex items-center gap-6">
            {/* <Link 
              href="/brochure" 
              className="hidden text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors md:block"
            >
              View Brochure
            </Link>
            <Link 
              href="/enquiry" 
              className="hidden text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors md:block"
            >
              Make an Enquiry
            </Link> */}
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Logo */}
        <div className="flex flex-col items-center py-4 md:py-6">
          <Link href="/" className="text-center">
            <Image src={logo} alt="KiTCHEBS Logo" width={120} height={20} className="mx-auto" />
            <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            KiTCHENS
            </p>
          </Link>
        </div>
      </header>

      {/* Full-screen menu overlay */}
      <div 
        className={`fixed inset-0 z-50 transition-all duration-500 ${
          isMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "#6b6b5a" }}
      >
        {/* Close button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 md:top-8 md:right-12 p-2 text-white/80 hover:text-white transition-colors"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Navigation links */}
        <nav className="h-full flex flex-col items-center justify-center">
          <ul className="flex flex-col items-center gap-3 md:gap-4">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm md:text-base uppercase tracking-[0.25em] text-white/90 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social icons */}
          <div className="mt-8 flex items-center gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="17.5" cy="6.5" r="1.5"/>
              </svg>
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Pinterest"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0a12 12 0 0 0-4.37 23.17c-.1-.94-.2-2.38.04-3.4l1.44-6.13s-.36-.73-.36-1.8c0-1.69.98-2.95 2.2-2.95 1.04 0 1.54.78 1.54 1.71 0 1.04-.66 2.6-1 4.04-.29 1.2.6 2.18 1.78 2.18 2.13 0 3.77-2.25 3.77-5.5 0-2.87-2.06-4.88-5.01-4.88-3.42 0-5.42 2.56-5.42 5.21 0 1.03.4 2.14.89 2.74.1.12.11.22.08.34l-.33 1.36c-.05.22-.18.27-.4.16-1.5-.7-2.43-2.88-2.43-4.64 0-3.78 2.74-7.25 7.91-7.25 4.15 0 7.38 2.96 7.38 6.92 0 4.12-2.6 7.44-6.21 7.44-1.21 0-2.35-.63-2.74-1.37l-.75 2.84c-.27 1.04-1 2.35-1.49 3.15A12 12 0 1 0 12 0z"/>
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}
