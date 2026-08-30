export default function ProjectVisual({ project }) {
  if (project.theme === 'commbitz') {
    return (
      <div className="project-visual project-visual--commbitz" aria-label="Abstract interface preview for Commbitz" role="img">
        <div className="visual-top"><span>COMMBITZ / eSIM</span><span>•••</span></div>
        <div className="esim-orbit"><span>GLOBAL</span><strong>190+</strong><small>destinations</small></div>
        <div className="signal-bars"><i /><i /><i /><i /></div>
        <p>LAND. CONNECT.<br />KEEP MOVING.</p>
      </div>
    )
  }

  if (project.theme === 'foni') {
    return (
      <div className="project-visual project-visual--foni" aria-label="Abstract interface preview for Foni" role="img">
        <div className="map-grid" />
        <div className="route"><i /><span /><b /></div>
        <div className="ride-card"><small>DRIVER ARRIVES IN</small><strong>04 min</strong><span>Live route · Chat connected</span></div>
      </div>
    )
  }

  return (
    <div className="project-visual project-visual--splashark" aria-label="Abstract interface preview for Splashark" role="img">
      <div className="social-card social-card--one"><span>LIVE</span><strong>01:48</strong></div>
      <div className="social-card social-card--two"><i>▶</i><span>SHOP THE EDIT</span></div>
      <div className="social-card social-card--three"><span>12.4K</span><small>people watching</small></div>
    </div>
  )
}
