import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import Reveal from '../components/Reveal'

export default function Contact() {
  return (
    <footer className="contact" id="contact">
      <Reveal>
        <p className="eyebrow">Have a product to ship?</p>
        <h2>Let’s make it<br /><em>work beautifully.</em></h2>
        <a className="contact__email" href="mailto:ramanmalhotra508@gmail.com">ramanmalhotra508@gmail.com <ArrowUpRight /></a>
      </Reveal>
      <div className="contact__details">
        <a href="tel:+917837513391"><Phone size={16} /> +91 78375 13391</a>
        <a href="https://www.linkedin.com/in/raman-malhotra" target="_blank" rel="noreferrer"><ArrowUpRight size={16} /> LinkedIn</a>
        <span><MapPin size={16} /> Chandigarh, India</span>
      </div>
      <div className="footer-line">
        <p>Designed &amp; built by Raman Malhotra.</p>
        <p>React / Vite / 2026</p>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to top ↑</button>
      </div>
    </footer>
  )
}
