import Link from "next/link"

const roomLinks = [
  "Kitchens",
  "Pantries",
  "Bedrooms",
  "Bathrooms",
  "Dressing Rooms",
  "Laundry Rooms",
  "Libraries",
  "Home Offices",
]

export function IntroSection() {
  return (
    <section className="py-12 md:py-16 px-4 text-center">
      {/* Main heading */}
      <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[0.15em] text-foreground mb-6">
        CUSTOM KITCHEN CABINETRY
      </h2>

      {/* Tagline */}
      <div className="max-w-3xl mx-auto mb-8">
        <p className="text-sm md:text-base uppercase tracking-[0.2em] text-muted-foreground">
          From Design to Installation
        </p>
        <p className="text-sm md:text-base uppercase tracking-[0.2em] text-muted-foreground">
          Thoughtfully designed. Precisely built. Made to last for
        </p>
        <p className="text-sm md:text-base uppercase tracking-[0.2em] text-muted-foreground">
          years to come.
        </p>
      </div>

      {/* Locations */}
      <div className="flex items-center justify-center gap-6 md:gap-10 mb-10">
        <span className="text-sm md:text-base font-medium uppercase tracking-[0.2em] text-foreground">
          Every detail considered, every element crafted to fit your space and lifestyle.
        </span>

      </div>

      {/* Room links */}
      <nav className="max-w-4xl mx-auto">
        <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          {roomLinks.map((room, index) => (
            <li key={room} className="flex items-center">
              <Link
                href={`#${room.toLowerCase().replace(/['\s]/g, "-")}`}
                className="text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
              >
                {room}
              </Link>
              {index < roomLinks.length - 1 && (
                <span className="ml-4 text-muted-foreground/50 hidden sm:inline">·</span>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </section>
  )
}
