"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./footer.module.css";

const columns = [
  {
    heading: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "Projects", href: "/projects" },
      { label: "About us", href: "/about" },
      { label: "Careers", href: "/careers", badge: "Hiring" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Web design", href: "/services/web-design" },
      { label: "Web development", href: "/services/web-development" },
      { label: "Mobile apps", href: "/services/mobile-apps" },
      { label: "UI/UX design", href: "/services/ui-ux" },
      { label: "Data & analytics", href: "/services/data-analytics" },
      { label: "Cloud & DevOps", href: "/services/cloud-devops" },
    ],
  },
  {
    heading: "Industries",
    links: [
      { label: "Fintech", href: "/industries/fintech" },
      { label: "Healthtech", href: "/industries/healthtech" },
      { label: "E-commerce", href: "/industries/ecommerce" },
      { label: "SaaS", href: "/industries/saas" },
      { label: "Logistics", href: "/industries/logistics" },
    ],
  },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  // The video loading can change page height after Lenis already
  // measured it — force a resize once we know the video is ready.
  const handleVideoLoaded = () => {
    window.lenis?.resize();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    // TODO: wire this up to your actual newsletter provider
    setSubmitted(true);
  };

  return (
    <div className={styles.footerWrapper}>
      <video
        ref={videoRef}
        className={styles.bgVideo}
        src="/hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onLoadedData={handleVideoLoaded}
      />
      <div className={styles.overlay} />

      <footer className={styles.footer}>
        <div className={styles.inner}>
          <div className={styles.top}>
            <div className={styles.brandBlock}>
              <div className={styles.logoRow}>
                <Image
                  src="/logo.png"
                  alt="Buildslabs"
                  width={36}
                  height={36}
                  className={styles.logoMark}
                />
                <span className={styles.wordmark}>buildslabs</span>
              </div>
              <p className={styles.tagline}>
                Locations:
                <br />
                Cork, Ireland
                <br />
                New Delhi, India
              </p>
            </div>

            <div className={styles.columns}>
              {columns.map((col) => (
                <div key={col.heading} className={styles.column}>
                  <span className={styles.columnHeading}>{col.heading}</span>
                  <ul className={styles.linkList}>
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <span className={styles.link}>
                          {link.label}
                          {link.badge && (
                            <span className={styles.badge}>{link.badge}</span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.newsletterRow}>
            <div className={styles.newsletterCopy}>
              <span className={styles.newsletterLabel}>Newsletter</span>
              <p className={styles.newsletterHeading}>
                Product and engineering notes, straight to your inbox.
              </p>
            </div>

            {submitted ? (
              <p className={styles.confirmedText}>
                You&apos;re subscribed. Talk soon.
              </p>
            ) : (
              <form className={styles.newsletterForm} onSubmit={handleSubmit}>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className={styles.emailInput}
                  aria-label="Email address"
                />
                <button type="submit" className={styles.subscribeButton}>
                  Subscribe
                </button>
              </form>
            )}
          </div>

          <p className={styles.disclaimer}>We don&apos;t spam you or sell your data.</p>

          <div className={styles.bottomRow}>
            <span className={styles.copyright}>
              © {new Date().getFullYear()} Buildslabs. All rights reserved.
            </span>
            <div className={styles.legalLinks}>
              <span className={styles.legalLink}>Privacy</span>
              <span className={styles.legalLink}>Terms</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;