"use client"

import { useRef, useEffect } from "react"
import styles from "./banner_section.module.css"
import Image from "next/image"

const logos = [
    { src: "/company/blue_tokai.jpg", alt: "Blue Tokai" },
    { src: "/company/jockey-logo.png", alt: "Jockey" },
    { src: "/company/tricel.jpg", alt: "Tricel" },
    { src: "/company/yocohama_tyres.png", alt: "Yocohama" },
    { src: "/company/locowiz.webp", alt: "locowiz" },
]

const BannerSection = () => {
    const videoRef = useRef(null)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.5
        }
    }, [])

    // Pause the video while scrolling and resume once scroll settles.
    // Video decode/composite competes with Lenis's per-frame scroll work,
    // so pausing during the scroll gesture removes that overhead exactly
    // when it matters most.
    useEffect(() => {
        let resumeTimeout = null

        const handleScroll = () => {
            const video = videoRef.current
            if (!video) return

            if (!video.paused) {
                video.pause()
            }

            clearTimeout(resumeTimeout)
            resumeTimeout = setTimeout(() => {
                video.play().catch(() => {})
            }, 200) // resumes 200ms after the last scroll event
        }

        // Prefer Lenis's own scroll event if available, since it fires
        // in sync with the smooth-scroll loop rather than native scroll
        if (window.lenis) {
            window.lenis.on("scroll", handleScroll)
        } else {
            window.addEventListener("scroll", handleScroll, { passive: true })
        }

        return () => {
            clearTimeout(resumeTimeout)
            if (window.lenis) {
                window.lenis.off("scroll", handleScroll)
            } else {
                window.removeEventListener("scroll", handleScroll)
            }
        }
    }, [])

    // Video finishing load changes total page height - resize Lenis right
    // when we know it's ready, instead of waiting for window 'load' (which
    // can fire mid-scroll and cause a visible jump/flicker on the Banner).
    const handleVideoLoaded = () => {
        window.lenis?.resize()
    }

    // Scrolls to the quote/contact form section (id="quote-section",
    // set on QuoteSection's root). Goes through window.lenis.scrollTo
    // when Lenis smooth-scroll is active, since calling the native
    // scrollIntoView while Lenis is running fights it and produces a
    // janky/incorrect scroll - Lenis needs to be the one driving it.
    // Falls back to plain scrollIntoView if Lenis isn't present.
    const handleScheduleCall = () => {
        const target = document.getElementById("quote-section")
        if (!target) return

        if (window.lenis) {
            window.lenis.scrollTo(target)
        } else {
            target.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <div className={styles.main}>
            <div className={styles.videosection}>
                <video
                    ref={videoRef}
                    className={styles.video}
                    src="/hero-video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    onLoadedData={handleVideoLoaded}
                />

                <div className={styles.overlay}></div>

                <div className={styles.logo}>
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={200}
                        height={70}
                        className={styles.logoImg}
                    />
                </div>

                <button className={styles.ctaButton} onClick={handleScheduleCall}>
                    Schedule a call
                </button>

                <div className={styles.content}>
                    <h1 className={styles.title}>
                        We Build the Technology Behind Your Business
                    </h1>
                    <p className={styles.subtitle}>
                        We design and develop complete web ecosystems — from
                        seamless user experiences and powerful backend systems
                        to data-driven dashboards and analytics.
                    </p>
                </div>

                <div className={styles.trustedFooter}>
                    <span className={styles.trustedText}>
                        Trusted by 100+ teams
                        <br />
                        across the world
                    </span>

                    <div className={styles.marquee}>
                        <div className={styles.marqueeTrack}>
                            {[...logos, ...logos].map((logo, i) => (
                                <Image
                                    key={i}
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={100}
                                    height={32}
                                    className={styles.marqueeLogo}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerSection;