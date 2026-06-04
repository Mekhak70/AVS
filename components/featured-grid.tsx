import Image from "next/image"
import Link from "next/link"

const featuredItems = [
  {
    title: "Kitchens",
    image: "/images/kitchens.jpg",
    href: "#kitchens",
  },
  {
    title: "How We Work",
    image: "/images/how-we-work.jpg",
    href: "#how-we-work",
  },
  // {
  //   title: "Other Rooms",
  //   image: "/images/other-rooms.jpg",
  //   href: "#other-rooms",
  // },
  // {
  //   title: "Pimlico Showroom",
  //   image: "/images/showroom.jpg",
  //   href: "#pimlico-showroom",
  // },
  // {
  //   title: "Stowupland Hall",
  //   image: "/images/hall.jpg",
  //   href: "#stowupland-hall",
  // },
  {
    title: "Colour Collections",
    image: "/images/colours.jpg",
    href: "#colour-collections",
  },
]

export function FeaturedGrid() {
  return (
    <section className="px-2 md:px-4 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3">
        {featuredItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group relative aspect-[4/5] overflow-hidden"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            
            {/* Title */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="font-serif text-lg md:text-xl lg:text-2xl uppercase tracking-[0.2em] text-white drop-shadow-lg text-center px-4">
                {item.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
