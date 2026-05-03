import { Header } from "@/components/header"
import { HeroCarousel } from "@/components/hero-carousel"
import { IntroSection } from "@/components/intro-section"
import { FeaturedGrid } from "@/components/featured-grid"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroCarousel />
      <IntroSection />
      <FeaturedGrid />
      <Footer />
    </main>
  )
}
