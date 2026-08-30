import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { resumeUrl } from '../data/portfolio'

export default function Hero() {
  const heroRef = useRef(null)
  const reduceMotion = useReducedMotion()

  const trackPointer = (event) => {
    if (reduceMotion || !heroRef.current) return
    const rect = heroRef.current.getBoundingClientRect()
    heroRef.current.style.setProperty('--pointer-x', `${event.clientX - rect.left}px`)
    heroRef.current.style.setProperty('--pointer-y', `${event.clientY - rect.top}px`)
  }

  return (
    <main id="main-content">
      <section className="hero" ref={heroRef} onPointerMove={trackPointer} aria-labelledby="hero-title">
        <div className="hero__meta">
          <p className="eyebrow">Portfolio / 2026</p>
          <p className="availability"><span /> Available for the right opportunity</p>
        </div>
        <motion.div
          className="hero__headline"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="hero__intro">Raman Malhotra is an AI-assisted MERN developer who</p>
          <h1 id="hero-title">Optimises product<br /><em>workflows and ships fast.</em></h1>
        </motion.div>
        <div className="hero__foot">
          <p className="hero__proof">Most recently: building production apps for thousands of daily users. Before that: building an eSIM platform trusted by <strong>Air India.</strong></p>
          <div className="hero__actions">
            <a className="button button--primary" href={resumeUrl} target="_blank" rel="noreferrer">Résumé <ArrowDownRight size={18} /></a>
            <a className="text-link" href="mailto:ramanmalhotra508@gmail.com">Start a conversation <ArrowUpRight size={16} /></a>
          </div>
          <div className="hero__index" aria-hidden="true"><span>03+</span><small>years<br />professional</small></div>
        </div>
        <div className="pointer-accent" aria-hidden="true" />
      </section>
    </main>
  )
}
