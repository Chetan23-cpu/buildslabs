"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import styles from "./quote_section.module.css";

const stats = [
  { value: "+30%", label: "average traffic growth" },
  { value: "100%", label: "avg conversion improvement" },
  { value: "92%", label: "client retention" },
];

const budgetOptions = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
];

const referralOptions = [
  "Google search",
  "LinkedIn",
  "Referral",
  "Instagram / X",
  "Other",
];

// 3 rows x 4 cards. "direction" controls which way that row scrolls.
const cardRows = [
  {
    direction: "left",
    cards: [
      { value: "<1s", title: "Load times", desc: "Every build tuned for sub-second load and Core Web Vitals." },
      { value: "30%", title: "Conversion lift", desc: "Typical gain in qualified inbound in the first quarter." },
      { value: "7", title: "Years of expertise", desc: "Helping brands launch, scale, and grow online." },
      { value: "120+", title: "Projects delivered", desc: "Shipped across startups and enterprise teams alike." },
    ],
  },
  {
    direction: "right",
    cards: [
      { value: "98%", title: "Client retention", desc: "Most clients come back for their next project." },
      { value: "24hr", title: "Avg response time", desc: "Fast turnaround from first message to first call." },
      { value: "15", title: "Industries served", desc: "From fintech to healthtech to e-commerce." },
      { value: "50+", title: "Team experts", desc: "Designers, engineers, and strategists on every build." },
    ],
  },
  {
    direction: "left",
    cards: [
      { value: "99.9%", title: "Uptime", desc: "Reliable infrastructure built to stay online." },
      { value: "4.9/5", title: "Client rating", desc: "Average satisfaction score across all projects." },
      { value: "3x", title: "Avg ROI lift", desc: "Typical return on investment within six months." },
      { value: "200+", title: "APIs integrated", desc: "Connecting the tools your business already runs on." },
    ],
  },
];

const QuoteSection = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    website: "",
    budget: "",
    referral: "",
    details: "",
    agree: true,
  });
  const [submitted, setSubmitted] = useState(false);
  const rowRefs = useRef([]);

  useEffect(() => {
    const tweens = [];

    rowRefs.current.forEach((track, i) => {
      if (!track) return;
      const row = cardRows[i];

      // Cards are duplicated in the JSX (2x), so animating exactly 50%
      // makes the loop seamless regardless of scroll direction.
      if (row.direction === "left") {
        const tween = gsap.fromTo(
          track,
          { xPercent: 0 },
          { xPercent: -50, duration: 22, ease: "none", repeat: -1 }
        );
        tweens.push(tween);
      } else {
        const tween = gsap.fromTo(
          track,
          { xPercent: -50 },
          { xPercent: 0, duration: 22, ease: "none", repeat: -1 }
        );
        tweens.push(tween);
      }
    });

    return () => tweens.forEach((t) => t.kill());
  }, []);

  const update = (field) => (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire this up to your backend / form provider
    setSubmitted(true);
  };

  return (
    <div className={styles.main} id="quote-section">
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.left}>
            <blockquote className={styles.quote}>
              "The entire process felt ridiculously smooth.
            </blockquote>

            <div className={styles.cardGrid}>
              {cardRows.map((row, i) => (
                <div className={styles.cardRow} key={i}>
                  <div
                    className={styles.cardTrack}
                    ref={(el) => (rowRefs.current[i] = el)}
                  >
                    {[...row.cards, ...row.cards].map((card, ci) => (
                      <div className={styles.statCard} key={ci}>
                        <span className={styles.cardValue}>{card.value}</span>
                        <div className={styles.cardDivider} />
                        <span className={styles.cardTitle}>{card.title}</span>
                        <p className={styles.cardDesc}>{card.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.statsRow}>
              {stats.map((stat) => (
                <div key={stat.label} className={styles.statBlock}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.tab}>
              <span className={styles.tabIcon}>💬</span>
              Request quote
            </div>

            <h2 className={styles.heading}>Get a written quote</h2>
            <p className={styles.subheading}>
              Fill the form. Our team will reach out within 24 hours.
            </p>

            <div className={styles.card}>
              {submitted ? (
                <div className={styles.confirmedState}>
                  <span className={styles.confirmedTitle}>Request received</span>
                  <p className={styles.confirmedText}>
                    Thanks, {form.fullName || "there"} — we&apos;ll be in touch
                    within 24 hours.
                  </p>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label className={styles.label}>
                        Full name <span className={styles.required}>*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={form.fullName}
                        onChange={update("fullName")}
                        placeholder="Enter your full name"
                        className={styles.input}
                      />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label}>
                        Business email address{" "}
                        <span className={styles.required}>*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={update("email")}
                        placeholder="Enter your email address"
                        className={styles.input}
                      />
                    </div>
                  </div>

                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label className={styles.label}>Phone number</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={update("phone")}
                        placeholder="Enter your phone number"
                        className={styles.input}
                      />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label}>
                        Website link <span className={styles.required}>*</span>
                      </label>
                      <input
                        type="url"
                        required
                        value={form.website}
                        onChange={update("website")}
                        placeholder="Enter your website link"
                        className={styles.input}
                      />
                    </div>
                  </div>

                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label className={styles.label}>
                        Your budget <span className={styles.required}>*</span>
                      </label>
                      <select
                        required
                        value={form.budget}
                        onChange={update("budget")}
                        className={styles.select}
                      >
                        <option value="" disabled>
                          Select your budget
                        </option>
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label}>
                        Where did you find us{" "}
                        <span className={styles.required}>*</span>
                      </label>
                      <select
                        required
                        value={form.referral}
                        onChange={update("referral")}
                        className={styles.select}
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        {referralOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label}>
                      Tell us about your project{" "}
                      <span className={styles.required}>*</span>
                    </label>
                    <textarea
                      required
                      value={form.details}
                      onChange={update("details")}
                      placeholder="Briefly describe your project, goals, and what you're looking to build"
                      className={styles.textarea}
                      rows={5}
                    />
                  </div>

                  <label className={styles.agreeRow}>
                    <input
                      type="checkbox"
                      checked={form.agree}
                      onChange={update("agree")}
                      className={styles.checkbox}
                    />
                    <span className={styles.agreeText}>
                      By submitting, you agree to our{" "}
                      <a href="/terms" className={styles.legalLink}>
                        Terms
                      </a>{" "}
                      &amp;{" "}
                      <a href="/privacy" className={styles.legalLink}>
                        Privacy Policy
                      </a>
                      .
                    </span>
                  </label>

                  <button type="submit" className={styles.submitButton}>
                    Submit request
                    <span className={styles.submitArrow}>→</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuoteSection;