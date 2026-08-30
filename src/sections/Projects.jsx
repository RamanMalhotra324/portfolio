import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/portfolio'
import ProjectVisual from '../components/ProjectVisual'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'

export default function Projects() {
  return (
    <section className="section projects" id="projects" aria-labelledby="projects-title">
      <SectionTitle number="01" kicker="Selected work"><span id="projects-title">Three products.<br />Three different problems.</span></SectionTitle>
      <div className="project-list">
        {projects.map((project, index) => (
          <Reveal className={`project ${index % 2 ? 'project--reverse' : ''}`} key={project.name}>
            <div className="project__visual-wrap">
              <span className="project__number">{project.number}</span>
              <ProjectVisual project={project} />
            </div>
            <article className="project__copy">
              <p className="eyebrow">{project.eyebrow}</p>
              <h3>{project.name}</h3>
              <p className="project__summary">{project.summary}</p>
              <p className="project__proof">{project.proof}</p>
              <p className="project__note">{project.note}</p>
              <ul className="tech-list" aria-label={`${project.name} technologies`}>
                {project.stack.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <a className="text-link project__link" href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.name} live project`}>View live project <ArrowUpRight size={16} /></a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
