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
              Since 1992 we have studied with fascination, the below stairs joinery of the great houses of England. 
              Plain English are observers, in the broadest sense of the word. We stay true to craft and apply it 
              steadily; our focus on the Georgian sensibility of form and proportion runs through all of our designs 
              in any number of architectural settings. Classic to contemporary, in the city or the countryside, all 
              across North America. Custom, bespoke design; kitchens, <Link href="/other-rooms/larders-and-pantries">pantries</Link>, 
              <Link href="/other-rooms/mudrooms"> mudrooms</Link>, <Link href="/other-rooms/butlers-pantry-or-scullery">butler's pantries</Link>, 
              <Link href="/other-rooms/butlers-pantry-or-scullery"> sculleries</Link>, <Link href="/other-rooms/laundry-rooms">laundry rooms</Link>, 
              <Link href="/other-rooms/larders-and-pantries"> larders</Link> and <Link href="/other-rooms/bars">bars</Link>, crafted from 
              the best materials and infused with our unique sense of style. Always hand-painted. We are a Design Studio 
              working with clients, architects, interior designers and contractors. Project costs are dependent on scope, 
              scale and desired detail — a simple project can often begin at around $100,000. We work outside of the kitchen 
              too; a visual language that travels to bedrooms, <Link href="/other-rooms/bathrooms">bathrooms</Link>, 
              <Link href="/other-rooms/dressing-rooms-and-wardrobes">dressing rooms</Link>, 
              <Link href="/other-rooms/home-offices-and-libraries">libraries, home offices</Link> and 
              <Link href="/other-rooms/pool-houses">pool houses</Link>.
            </p>

            <h3>A Custom Kitchen Design Studio Rooted in English Craftsmanship</h3>
            <p>
              Every Plain English kitchen is designed from the ground up, not selected from a pre-set collection. Our 
              <Link href="/how-we-work"> design process</Link> begins with your home's architecture, your daily routines, 
              and your sense of style. We draw from centuries of English joinery traditions, combining timeless form with 
              thoughtful, modern function. Each cabinet is built to order, proportioned precisely for your space, and 
              crafted to feel as though it's always belonged. From initial concept to final installation, we collaborate 
              closely with homeowners, architects, and interior designers to bring your vision to life with care, clarity, 
              and craftsmanship.
            </p>

            <h3>Bespoke Cabinetry, Tailored to Your Needs</h3>
            <p>
              True bespoke cabinetry means there are no shortcuts — only precision, craftsmanship, and attention to detail. 
              Our <Link href="/custom-kitchen-cabinets">custom kitchen cabinets</Link> are handcrafted in the UK using 
              sustainably sourced materials and time-honored techniques. Solid wood frames, dovetail joints, and meticulously 
              finished interiors are just some of the elements that define our work. Each kitchen is designed around how you 
              live, cook, gather, and move through your day. Whether you're planning a pantry, scullery, larder, or integrated 
              built-in, we create solutions that are as functional as they are beautiful. Every surface is painted by hand 
              in your chosen palette, creating a sense of harmony throughout the home and a finish that wears with character 
              over time.
            </p>

            <h3>Explore the Elegance of a Plain English Kitchen</h3>
            <p>
              A Plain English kitchen is built on principles of quiet elegance — restraint, proportion, and purpose. Rooted in 
              Georgian design, our work avoids distraction and ornament in favor of balance and clarity. Each kitchen becomes 
              a calm, character-rich space that complements its surroundings, whether set in a city brownstone or a coastal 
              new build. This is a space designed to be lived in where form supports function, and every detail reflects your 
              taste. Experience the understated luxury of a kitchen that feels deeply considered and made just for you. If 
              you're ready to begin planning your own bespoke kitchen, we invite you to <Link href="/kitchens">get in touch</Link>.
            </p>
          </div>

          <div className="sidebar-quote">
            "Our projects are defined with the spirit and dignity of utility, suitability and simplicity. The Plain English 
            paint colours reference historic shades, found in Georgian, Regency and Victorian houses, reimagined for today."
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