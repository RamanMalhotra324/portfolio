import { lazy, Suspense, useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './sections/Hero'

const Projects = lazy(() => import('./sections/Projects'))
const Experience = lazy(() => import('./sections/Experience'))
const About = lazy(() => import('./sections/About'))
const Skills = lazy(() => import('./sections/Skills'))
const Contact = lazy(() => import('./sections/Contact'))

function getInitialTheme() {
  const saved = localStorage.getItem('portfolio-theme')
  if (saved) return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#f1eee7' : '#161613')
  }, [theme])

  return (
    <>
      <Header theme={theme} onToggleTheme={() => setTheme((value) => value === 'light' ? 'dark' : 'light')} />
      <Hero />
      <Suspense fallback={<div className="section-loader" role="status">Loading selected work…</div>}>
        <Projects />
        <Experience />
        <About />
        <Skills />
        <Contact />
      </Suspense>
    </>
  )
}
