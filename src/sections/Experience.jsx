import { experience } from '../data/portfolio'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'

export default function Experience() {
  return (
    <section className="section experience" id="experience" aria-labelledby="experience-title">
      <SectionTitle number="02" kicker="Experience"><span id="experience-title">Shipped in the<br />real world.</span></SectionTitle>
      <div className="timeline">
        {experience.map((job, index) => (
          <Reveal className="job" key={`${job.company}-${job.dates}`} delay={index * 0.03}>
            <div className="job__marker"><span>{String(index + 1).padStart(2, '0')}</span></div>
            <p className="job__date">{job.dates}</p>
            <div className="job__heading">
              <h3>{job.role}</h3>
              <p>{job.company} <span>/ {job.location}</span></p>
            </div>
            <ul className="job__points">
              {job.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
