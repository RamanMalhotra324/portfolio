export default function SectionTitle({ number, kicker, children }) {
  return (
    <header className="section-title">
      <span className="section-title__number">{number}</span>
      <p className="eyebrow">{kicker}</p>
      <h2>{children}</h2>
    </header>
  )
}
