import Image from "next/image";
import Link from "next/link";

export default function HowWeWorkPage() {
  const projects = [
    {
      title: "York House Pantry",
      slug: "york-house-pantry",
      image: "/images/york-house-pantry-main-image.jpg",
    },
    {
      title: "Gloucestershire Stone House",
      slug: "gloucestershire-stone-house",
      image: "/images/gloucestershire-stone-house-main-image.jpg",
    },
    {
      title: "Home Farm Barn",
      slug: "home-farm-barn",
      image: "/images/home-farm-barn-main.jpg",
    },
  ];

  return (
    <div className="how-we-work-page">
      {/* Hero Slider */}
      <div className="hero-slider">
        <div className="slider-image">
          <Image
            src="/images/lundies-house-scotland.jpg"
            alt="Working with us Lundies House, Scotland"
            width={1400}
            height={637}
            priority
          />
        </div>
      </div>

      <div className="container">
        <div className="content-row">
          <div className="main-content">
            <h1>How We Work</h1>
            <p>
              Our process begins with an initial complimentary design consultation. Together, we explore
              the practical requirements for the space and the many possibilities that exist. Following
              this meeting, you will receive a preliminary sketch, an indication of cost, and a selection
              of inspirational images from our archive, to bring the designs to life. This provides you
              with materials to review before we proceed in developing a full set of plans and elevations
              where the design then really begins to come to life.
            </p>
            <p>
              Upon your review and further discussion, your designer will produce architectural drawings
              with scale elevations. Working with you (and your interior designer or architect, if involved)
              they will refine the design, to balance your needs with function and aesthetics in a way that
              is tailored to the requirements of your space, incorporating our exclusive range of paint
              colours, freestanding furniture, tiles, and ironmongery. After all measurements and final
              sign-off are confirmed, your design goes into production.
            </p>
            <p>
              All of our joinery is made in our workshops in Suffolk, England where individual craftspeople
              take pride in building our cupboards from start to finish, before hand-painting and carefully
              wrapping each one, ready for delivery and installation.
            </p>
            <p>
              With Plain English, our specialist fitters and painters will then carefully begin the process
              of installing and hand finishing your joinery on site.
            </p>
            <p>
              If you'd like to start a conversation with our design team, get in touch with us today. You can{" "}
              <Link href="/enquiry">make an enquiry</Link> online by filling in your details,{" "}
              <Link href="/contact">contact us</Link> by phone or email, or alternatively, we welcome you
              to visit us in one of our <Link href="/showrooms">showrooms</Link> to see our latest
              installations – no appointment is needed.
            </p>
            <p>
              Plain English Design welcomes projects from clients, architects, interior designers, and
              contractors. We are a Design Studio, sharing our sensibility and craft to deliver the
              refinement, attention to detail, and expertise for which we are known.
            </p>
            <p>
              Our designs embrace traditional joinery methods for the modern ways we live now. Crafted from
              the best possible materials and infused with a unique sense of detail and proportion, our
              joinery can be used in any <Link href="/other-rooms">room</Link> and live in any manner of
              architectural setting. From the country to the city, traditional or contemporary – we transform
              ideas and concepts into beautifully conceived designs that are both intelligently and
              meticulously realised. Handcrafted and hand-painted, the sum of the parts, all elements considered.
            </p>
            <p>
              Our UK design team look after projects in Europe and the rest of the world, browse our{" "}
              <Link href="/bespoke-kitchens">latest projects here</Link>. Some of our recently completed
              projects include kitchens in Southern Ireland, Turkey, Dubai, Russia, Switzerland, Tasmania,
              Norway, France, Monaco, Spain and more.
            </p>
            <p>
              Find out more about Plain English or view our{" "}
              <Link href="/digital-brochure">brochure</Link>.
            </p>
            <p>
              <a href="tel:02074862674">020 7486 2674</a>
              <br />
              <a href="mailto:design@plainenglishdesign.co.uk">design@plainenglishdesign.co.uk</a>
            </p>
            <p>
              For enquiries in North America, please visit our{" "}
              <a href="https://www.plainenglishuk.local/">US website.</a>
            </p>
          </div>

          <div className="sidebar-quote">
            Bespoke kitchens; larders and laundries, sculleries and pantries, rooms defined by the dignity
            of utility, crafted from the best materials and infused with our unique sensibility of form and
            proportion.
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.slug} className="project-card">
              <Link href={`/kitchen/${project.slug}`} className="project-link">
                <div className="project-image">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={500}
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