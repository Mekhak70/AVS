import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero Image */}
      <div className="hero-section">
        <div className="hero-image">
          <Image
            src="https://plainenglishdesign.com/wp-content/uploads/2019/05/Plain-English-Stowupland.jpg"
            alt="Plain English Farm"
            width={1600}
            height={600}
            priority
            className="responsive-img"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="container">
        <div className="content-row">
          <div className="main-content">
            <h1>About US</h1>
            <p>
              For over 10 years, AVS Kitchens has been creating beautifully designed, custom-made kitchens and cabinetry for homeowners across the Greater Toronto Area.

              We believe every kitchen should be as unique as the people who live in it. Our approach combines thoughtful design, quality craftsmanship, premium materials, and careful attention to every detail to create spaces that are both beautiful and functional.

              From the initial consultation and design to manufacturing and installation, the AVS Kitchens team is dedicated to providing a professional, personalized, and seamless experience.

              With more than a decade of experience in the GTA, we take pride in creating kitchens that enhance our clients’ homes and are built to be enjoyed for years to come
            </p>

          </div>

          {/* Optional Quote Sidebar - can be empty or add content */}
          <div className="sidebar-quote">
            {/* Quote content can be added here if needed */}
          </div>
        </div>
      </div>
    </div>
  );
}