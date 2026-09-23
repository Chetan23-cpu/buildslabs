"use client"

import { useEffect } from "react"
import Lenis from "lenis"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const SmoothScroll = ({ children }) => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.8,
            easing: (t) => 1 - Math.pow(1 - t, 4),
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 1.5,
        })

        // Expose globally so any component can trigger a resize after
        // async content (video, images, fonts) changes page height.
        window.lenis = lenis

        // Tell ScrollTrigger to recalc positions on every Lenis scroll tick
        lenis.on("scroll", ScrollTrigger.update)

        // Drive Lenis from GSAP's own ticker instead of a separate raf loop,
        // so Lenis and ScrollTrigger stay on the exact same clock.
        // Store this exact function reference so cleanup can remove the
        // correct callback (removing `lenis.raf` directly won't match it).
        const update = (time) => {
            lenis.raf(time * 1000)
        }
        gsap.ticker.add(update)

        // Disable GSAP's lag smoothing - it can fight with Lenis's own easing
        gsap.ticker.lagSmoothing(0)

        // Recalculate scroll height once everything (video, images, fonts)
        // has actually finished loading - fixes "can't scroll to the end"
        // caused by Lenis measuring page height too early.
        const handleLoad = () => lenis.resize()
        window.addEventListener("load", handleLoad)

        return () => {
            gsap.ticker.remove(update)
            window.removeEventListener("load", handleLoad)
            window.lenis = null
            lenis.destroy()
        }
    }, [])

    return children
}

export default SmoothScroll
