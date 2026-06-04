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
              Thirty years ago, we were looking for a simple painted kitchen for the Suffolk longhouse we were building. 
              We couldn't find what we were looking for, so we designed our own, had it built and installed it. A magazine 
              came and took pictures of the house and it was the kitchen that brought a deluge of enquiries and Plain English 
              was born. At first, we set up shop in a charming old tannery and then later in a rather grand Georgian farmhouse 
              deep in the East Anglian countryside where we slowly put the stables, barns and outbuildings to use as workshops 
              and studios for design. It is the reimagination of life in this building, in its heyday, that inspires us today. 
              The plain, early Georgian architecture and views out over the fields allow us to indulge in our English fascination 
              with the weather as the seasons pass by.
            </p>
            <p>
              We opened showrooms and Design Studios in London's Marylebone neighbourhood in 2009. In 2018, we opened in New York 
              City in a 19th C brownstone in Greenwich Village and at La Cienega Blvd in Los Angeles in 2024. In 2023 we expanded 
              our showroom in New York City to add a Garden Floor, as well as relocating our London showroom from Marylebone to 
              London's design district – Pimlico Road. While our aesthetic continues to reference the timeless proportions and 
              harmony of Georgian 'below stairs' joinery, our language speaks to all kinds of architectural settings, embracing 
              all the modern ways we live now.
            </p>
            <p className="founders-signature">
              KATIE FONTANA &amp; TONY NIBLOCK, FOUNDERS
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