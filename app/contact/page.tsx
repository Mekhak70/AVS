import Link from "next/link";
import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <span className={styles.eyebrow}>Get in Touch</span>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.subtitle}>
            We'd love to hear from you. Reach out by phone, email, or visit our
            showroom in Concord.
          </p>
        </header>

        {/* Two-column grid */}
        <div className={styles.grid}>
          {/* Left — Details list */}
          <ul className={styles.details}>
            {/* Phone */}
            <li className={styles.detailItem}>
              <svg
                className={styles.detailIcon}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <div className={styles.detailBody}>
                <span className={styles.detailLabel}>Phone</span>
                <a
                  className={styles.detailValue}
                  href="tel:+16477777772"
                >
                  +1 647 777 7772
                </a>
              </div>
            </li>

            {/* Email */}
            <li className={styles.detailItem}>
              <svg
                className={styles.detailIcon}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <div className={styles.detailBody}>
                <span className={styles.detailLabel}>Email</span>
                <a
                  className={styles.detailValue}
                  href="mailto:info.avskitchens@gmail.com"
                >
                  info.avskitchens@gmail.com
                </a>
              </div>
            </li>

            {/* Address */}
            <li className={styles.detailItem}>
              <svg
                className={styles.detailIcon}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <div className={styles.detailBody}>
                <span className={styles.detailLabel}>Showroom</span>
                <address className={styles.address}>
                  Babkeni Street, Unit 43
                  <br />
                  Concord, ON
                </address>
                <Link
                  className={styles.mapLink}
                  href="https://www.google.com/maps/search/?api=1&query=Babkeni%20Street%20Unit%2043%2C%20Concord%20ON"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Maps
                </Link>
              </div>
            </li>
          </ul>

          {/* Right — Panel */}
          <aside className={styles.panel}>
            <h2 className={styles.panelTitle}>
              Visit our showroom
            </h2>
            <div className={styles.panelDivider} />
            <p className={styles.panelText}>
              Step into our Concord showroom to explore premium kitchen and
              interior solutions firsthand. Our team is happy to walk you
              through every detail.
            </p>

            <ul className={styles.panelHours}>
              <li>
                <span>Monday – Friday</span>
                <span>9:00 — 18:00</span>
              </li>
              <li>
                <span>Saturday</span>
                <span>10:00 — 16:00</span>
              </li>
              <li>
                <span>Sunday</span>
                <span>By appointment</span>
              </li>
            </ul>

            {/* <a
              className={styles.cta}
              href="mailto:info.avskitchens@gmail.com"
            >
              Book a Visit
            </a> */}
          </aside>
        </div>

        {/* Footer note */}
        <p className={styles.footNote}>AVS Kitchens — Concord, ON</p>
      </div>
    </div>
  );
}