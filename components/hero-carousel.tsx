"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const heroImages = [
  { src: "/images/hero-1.jpg", alt: "Luxury kitchen with green cabinetry" },
  { src: "/images/hero-2.jpg", alt: "Elegant navy blue kitchen" },
  { src: "/images/hero-3.jpg", alt: "Classic cream kitchen design" },
]

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section className="relative w-full">
      {/* Location selector overlay */}
      {/* <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-background/95 border border-border px-6 py-4 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
          Choose Your Location Below
        </p>
        <div className="flex items-center justify-center gap-2 text-sm">
          <span>🇺🇸</span>
          <span className="text-foreground">USA &amp; North America</span>
          <span className="text-muted-foreground">|</span>
          <span>🇬🇧</span>
          <span className="text-foreground">UK, Europe &amp; ROW</span>
        </div>
      </div> */}

      {/* Carousel */}
      <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 hover:bg-background transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 text-foreground" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 hover:bg-background transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 text-foreground" />
        </button>

        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-foreground" : "bg-foreground/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
