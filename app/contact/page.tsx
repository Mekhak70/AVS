import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="container content-top">
        {/* Page Title */}
        <div className="section-title">
          <h1>Contact us</h1>
        </div>

        {/* Main Contact Cards Row */}
        <div className="contact-main-row">
          {/* USA Card */}
          <div className="contact-card contact-card-usa">
            <div className="contact-card-content">
              <h3>USA</h3>
              <p>From our New York City and Los Angeles showrooms, our designers work on projects all across North America.</p>
              <p><a href="mailto:hello@plainenglishdesign.com">hello@plainenglishdesign.com</a></p>
              <div className="address-block">
                <p><strong>NEW YORK</strong><br />
                51 East Tenth Street New York NY 10003<br />
                Monday to Friday 10am-5pm<br />
                Saturday 11am-4pm<br />
                (excluding public holidays)<br />
                <a href="tel:2122030726">212 203 0726</a></p>
              </div>
              <div className="address-block">
                <p><strong>LOS ANGELES</strong><br />
                930 N La Cienega Blvd, Los Angeles, CA 90069<br />
                Monday to Friday 9am-5pm<br />
                (excluding public holidays)<br />
                <a href="tel:3234101557">323 410 1557</a></p>
              </div>
            </div>
          </div>

          {/* UK Card */}
          <div className="contact-card contact-card-uk">
            <div className="contact-card-content">
              <h3>UK</h3>
              <p>Our showroom is on London's Pimlico Road and our headquarters and workshop are found in the heart of the Suffolk countryside.</p>
              <p><a href="mailto:design@plainenglishdesign.co.uk">design@plainenglishdesign.co.uk</a></p>
              <div className="address-block">
                <p><strong>LONDON – FLAGSHIP SHOWROOM</strong><br />
                61 Pimlico Road, SW1W 8NE<br />
                Monday to Friday 10am-5:30pm<br />
                Saturday 11am-5pm</p>
                <p><a href="tel:+442074862674">+44 (0) 20 7486 2674</a></p>
              </div>
              <div className="address-block">
                <p><strong>SUFFOLK – HEAD OFFICE</strong><br />
                Stowupland Hall, Stowupland, Stowmarket Suffolk IP14 4BE<br />
                By appointment only.<br />
                (excluding bank holidays)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Cards Row */}
        <div className="contact-bottom-row">
          {/* Follow Card */}
          <div className="bottom-card bottom-card-follow">
            <div className="bottom-card-content">
              <h3>FOLLOW</h3>
              <p><a href="https://instagram.com/plainenglishdesign/" target="_blank" rel="noopener noreferrer">@plainenglishdesign</a></p>
            </div>
          </div>

          {/* Join Newsletter Card */}
          <div className="bottom-card bottom-card-join">
            <div className="bottom-card-content">
              <h3>JOIN</h3>
              <p>The Plain English Newsletter<br />An occasional note from Plain English to you</p>
              <p><Link href="/join-our-newsletter" className="btn">Sign up here</Link></p>
            </div>
          </div>

          {/* UK Site Card */}
          <div className="bottom-card bottom-card-uksite">
            <div className="bottom-card-content">
              <h3>UK site</h3>
              <p>Visit our UK Site</p>
              <p><a href="https://plainenglishdesign.co.uk" target="_blank" rel="noopener noreferrer" className="btn">EXPLORE</a></p>
            </div>
          </div>

          {/* Press Card */}
          <div className="bottom-card bottom-card-press">
            <div className="bottom-card-content">
              <h3>PRESS</h3>
              <p>For all press enquiries please contact<br />
              <a href="mailto:anna@plainenglishdesign.com">anna@plainenglishdesign.com</a></p>
            </div>
          </div>

          {/* How We Work Card */}
          <div className="bottom-card bottom-card-howwework">
            <div className="bottom-card-content">
              <h3>HOW WE WORK</h3>
              <p>Plain English Design welcomes your project</p>
              <p><Link href="/how-we-work" className="btn">READ MORE</Link></p>
            </div>
          </div>

          {/* Join Team Card */}
          <div className="bottom-card bottom-card-team">
            <div className="bottom-card-content">
              <h3>JOIN THE TEAM</h3>
              <p>We welcome all enquiries</p>
              <p><Link href="/join-the-team" className="btn">FIND OUT MORE</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}