import Image from "next/image";
import Link from "next/link";

// Other rooms categories data
const otherRoomsCategories = [
  {
    slug: "glazed-screens-and-room-dividers",
    title: "Glazed Screens and Room Dividers",
    image: "/images/other-rooms/glazed-screens.jpg",
    description: "Bespoke glazed doors and room divider design"
  },
  {
    slug: "bathrooms",
    title: "Bathrooms",
    image: "/images/other-rooms/bathroom.jpg",
    description: "Bathroom millwork designer"
  },
  {
    slug: "dressing-rooms-and-wardrobes",
    title: "Dressing Rooms and Wardrobes",
    image: "/images/other-rooms/dressing-room.jpg",
    description: "Bespoke dressing room design"
  },
  {
    slug: "pool-houses",
    title: "Pool Houses",
    image: "/images/other-rooms/pool-house.jpg",
    description: "Luxury pool house design"
  },
  {
    slug: "bars",
    title: "Bars & Wine Rooms",
    image: "/images/other-rooms/wine-room.jpg",
    description: "Luxury wine room design"
  },
  {
    slug: "home-offices-and-libraries",
    title: "Home Offices and Libraries",
    image: "/images/other-rooms/home-office.jpg",
    description: "Bespoke home office and library design"
  },
  {
    slug: "laundry-rooms",
    title: "Laundry Rooms",
    image: "/images/other-rooms/laundry-room.jpg",
    description: "Laundry room design"
  },
  {
    slug: "mudrooms",
    title: "Mudrooms",
    image: "/images/other-rooms/mudroom.jpg",
    description: "Mud room boot room design"
  },
  {
    slug: "butlers-pantry-or-scullery",
    title: "Butler's Pantry or Scullery",
    image: "/images/other-rooms/scullery.jpg",
    description: "Bespoke millwork for butlers pantry or scullery"
  },
  {
    slug: "larders-and-pantries",
    title: "Larders and Pantries",
    image: "/images/other-rooms/pantry.jpg",
    description: "Luxury bespoke pantry and larder design"
  }
];

export default function OtherRoomsPage() {
  return (
    <div className="other-rooms-page">
      {/* Hero Slider Section */}
      <div className="hero-slider">
        <div className="rsOverflow">
          <div className="rsContainer">
            <div className="rsSlide">
              <div className="rsContent">
                <div className="home-image">
                  <Image
                    src="/images/other-rooms/hero-north-london-townhouse.jpg"
                    alt="Bespoke North London Plain English Interiors - Townhouse Cabinets"
                    width={1400}
                    height={932}
                    priority
                    className="hero-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container">
        <div className="content-row">
          <div className="main-content">
            <h1>OTHER ROOMS</h1>
            <p>
              Our joinery designs often travel outside the kitchen too. The visual language of Plain English 
              extends to any room – we design cabinetry for pantries, mudrooms, larders, butler's pantries, 
              bedrooms, dressing rooms, bathrooms, home offices, bars, libraries and pool houses, often 
              separated by our handmade glazed screens.
            </p>
            <p>
              Explore a selection of our projects for Other Rooms below.
            </p>
            <p>
              See our work in the <Link href="/kitchens">Kitchen</Link> too.
            </p>
          </div>

          <div className="sidebar-quote">
            "Once our designs are completed and approved, our in-house artisans begin the process of making 
            each bespoke element, using centuries-old hand skills combined with 21st-century precision gadgetry."
          </div>
        </div>

        {/* Categories Grid */}
        <div className="categories-grid">
          {otherRoomsCategories.map((category) => (
            <div key={category.slug} className="category-card">
              <Link href={`/other-rooms/${category.slug}`} className="category-link">
                <div className="category-image">
                  <Image
                    src={category.image}
                    alt={category.description || category.title}
                    width={680}
                    height={680}
                    className="category-thumbnail"
                  />
                </div>
                <h2>{category.title}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}