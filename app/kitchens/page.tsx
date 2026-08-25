import Image from "next/image";
import Link from "next/link";

// Kitchen projects data
const kitchenProjects = [
  { slug: "gardentownhouse", title: "Garden Townhouse", image: "/images/kitchens/garden-townhouse.jpg" },
  { slug: "winson-barn", title: "Winson Barn", image: "/images/kitchens/winson-barn.png" },
  { slug: "chrystie-street-loft", title: "Chrystie Street Loft", image: "/images/kitchens/chrystie-street-loft.png" },
  { slug: "hampshire", title: "Hampshire Manor House", image: "/images/kitchens/hampshire-manor-house.jpg" },
  { slug: "norfolk-flint-house", title: "Norfolk Flint House", image: "/images/kitchens/norfolk-flint-house.jpg" },
  { slug: "parkhouse", title: "Park House", image: "/images/kitchens/park-house.png" },
  { slug: "greenwich-house-ct", title: "Greenwich House, CT", image: "/images/kitchens/greenwich-house-ct.png" },
  { slug: "kensington-townhouse", title: "Kensington Townhouse", image: "/images/kitchens/kensington-townhouse.png" },
  { slug: "ivy-house", title: "Ivy House", image: "/images/kitchens/ivy-house.png" },
  { slug: "santa-monica-home", title: "Santa Monica Home", image: "/images/kitchens/santa-monica-home.png" },
  { slug: "manhattan", title: "Manhattan's Upper East Side", image: "/images/kitchens/manhattan-ues.png" },
  { slug: "walled-garden-house", title: "Walled Garden House", image: "/images/kitchens/walled-garden-house.jpg" },
  { slug: "cotswold-bank-house", title: "Cotswolds Bank House", image: "/images/kitchens/cotswold-bank-house.jpg" },
  { slug: "nashville-brick-house", title: "Nashville Brick House", image: "/images/kitchens/nashville-brick-house.jpg" },
  { slug: "provincetown-main-street", title: "Provincetown Main Street", image: "/images/kitchens/provincetown.jpg" },
  { slug: "northumberland-manor-house", title: "Northumberland Manor House", image: "/images/kitchens/northumberland-manor-house.jpg" },
  { slug: "barcelona-attico", title: "Barcelona Attico", image: "/images/kitchens/barcelona-attico.jpg" },
  { slug: "lakeside-cottage", title: "Lakeside Cottage", image: "/images/kitchens/lakeside-cottage.jpg" },
  { slug: "park-slope-brownstone", title: "Park Slope Brownstone", image: "/images/kitchens/park-slope-brownstone.jpg" },
  { slug: "seaside-salt-house", title: "Seaside Salt House", image: "/images/kitchens/seaside-salt-house.jpg" },
  { slug: "hampstead-townhouse", title: "Hampstead Townhouse", image: "/images/kitchens/hampstead-townhouse.jpeg" },
  { slug: "holland-park-studio", title: "Holland Park Studio", image: "/images/kitchens/holland-park-studio.jpg" },
  { slug: "stone-house", title: "Stone House", image: "/images/kitchens/stone-house.jpg" },
  { slug: "new-york-apartment", title: "New York Apartment", image: "/images/kitchens/new-york-apartment.jpg" },
];

export default function KitchensPage() {
  return (
    <div className="kitchens-page">
      {/* Hero Slider Section */}
      <div className="hero-slider">
        <div className="rsOverflow">
          <div className="rsContainer">
            <div className="rsSlide">
              <div className="rsContent">
                <div className="home-image">
                  <Image
                    src="https://plainenglishdesign.com/wp-content/uploads/2019/04/PlainEnglish-Sreatham-2.jpg"
                    alt="Bright and airy kitchen design with custom bespoke cabinets"
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
            <h1>Kitchens</h1>
            <p>
              Custom Kitchens, Designed Around You

              At AVS Kitchens, every kitchen begins with you — your home, your style, and the way you live. With over 10 years of experience serving homeowners across the GTA, we create custom kitchens that balance thoughtful design, quality craftsmanship, and everyday functionality.

              Every detail is considered, from cabinetry, islands, and integrated storage to materials, finishes, hardware, and proportions. Whether your style is contemporary, transitional, or timeless, each kitchen is designed specifically for your space and made to last.

              From initial design through manufacturing and installation, we work closely with homeowners, designers, architects, and contractors to bring each vision to life.
            </p>


          </div>


        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {kitchenProjects.map((project) => (
            <div key={project.slug} className="project-card">
              <Link href={`/kitchen/${project.slug}`} className="project-link">
                <div className="project-image">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={680}
                    height={680}
                    className="project-thumbnail"
                  />
                </div>
                <h2>{project.title}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}