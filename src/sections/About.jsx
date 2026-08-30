import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'

export default function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <SectionTitle number="03" kicker="About"><span id="about-title">Code is the medium.<br />Clarity is the job.</span></SectionTitle>
      <div className="about__grid">
        <Reveal className="about__statement">
          <p>I’m a frontend-focused MERN developer who likes the point where product thinking meets precise implementation. I care about the details users feel: the quick first load, the obvious next step, the interface that stays calm when the system underneath gets complicated.</p>
          <p>Over four years including internships, I’ve moved from building individual screens to owning complete products, improving performance, and guiding junior developers through the work.</p>
        </Reveal>
        <Reveal className="about__education" delay={0.08}>
          <p className="eyebrow">Education</p>
          <h3>B.Tech, Computer Science</h3>
          <p>Chitkara University, Punjab</p>
          <div><strong>9.89</strong><span>CGPA / 10</span></div>
          <small>July 2019 — July 2023</small>
        </Reveal>
        <Reveal className="about__facts" delay={0.12}>
          <div><span>01</span><p>Based in Chandigarh, India</p></div>
          <div><span>02</span><p>4+ years building for the web, including internships</p></div>
          <div><span>03</span><p>Comfortable from interface architecture to API integration</p></div>
        </Reveal>
      </div>
    </section>
  )
}
