import { ArrowUpRight } from 'lucide-react'
import { Fragment } from 'react'
import { certifications, skills } from '../data/portfolio'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'

export default function Skills() {
  return (
    <section className="section skills" id="skills" aria-labelledby="skills-title">
      <SectionTitle number="04" kicker="Capabilities"><span id="skills-title">The working<br />toolkit.</span></SectionTitle>
      <div className="skill-groups">
        {skills.map((group, index) => (
          <Reveal className="skill-group" key={group.category} delay={index * 0.025}>
            <h3><span>{String(index + 1).padStart(2, '0')}</span>{group.category}</h3>
            <p>{group.items.join(' / ')}</p>
          </Reveal>
        ))}
      </div>
      <Reveal className="certifications">
        <p className="eyebrow">Certifications / Namaste Dev</p>
        <div>
          {certifications.map((certificate, index) => (
            <Fragment key={certificate.name}>
              <a href={certificate.href} target="_blank" rel="noreferrer">
                {certificate.name}
                <ArrowUpRight size={22} />
              </a>
              {index < certifications.length - 1 && <i aria-hidden="true" />}
            </Fragment>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
