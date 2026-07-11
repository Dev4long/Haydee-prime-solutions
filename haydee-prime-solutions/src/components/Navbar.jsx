import { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'
import { useTheme } from '../context/ThemeContext.jsx'

const NAV_LINKS = [
  { id: 'home', key: 'home' },
  { id: 'about', key: 'about' },
  { id: 'immigration', key: 'immigration' },
  { id: 'real-estate', key: 'realEstate' },
  { id: 'insurance', key: 'insurance' },
  { id: 'contact', key: 'contact' },
]

export default function Navbar() {
  const { t, language, toggleLanguage } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(Boolean)
    if (!sections.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = (id) => (event) => {
    event.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#home" className="navbar-brand" onClick={handleNavClick('home')}>
          <span className="navbar-brand-mark">HP</span>
          <span className="navbar-brand-text">Haydee Prime Solutions</span>
        </a>

        <nav className="navbar-links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`navbar-link ${activeSection === link.id ? 'navbar-link-active' : ''}`}
              onClick={handleNavClick(link.id)}
            >
              {t.nav[link.key]}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <button type="button" className="icon-toggle" onClick={toggleLanguage} aria-label="Toggle language">
            <span className="icon-toggle-lang">{t.nav.langLabel}</span>
          </button>

          <button
            type="button"
            className="icon-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'light' ? t.nav.themeDark : t.nav.themeLight}
          >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>

          <a href="#contact" className="btn btn-accent navbar-cta" onClick={handleNavClick('contact')}>
            {t.nav.cta}
          </a>

          <button
            type="button"
            className={`hamburger ${menuOpen ? 'hamburger-open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'mobile-menu-open' : ''}`}>
        <nav className="mobile-menu-links" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`mobile-menu-link ${activeSection === link.id ? 'mobile-menu-link-active' : ''}`}
              onClick={handleNavClick(link.id)}
            >
              {t.nav[link.key]}
            </a>
          ))}
          <a href="#contact" className="btn btn-accent mobile-menu-cta" onClick={handleNavClick('contact')}>
            {t.nav.cta}
          </a>
        </nav>
      </div>
    </header>
  )
}

function SunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2.5v2.5M12 19v2.5M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M2.5 12H5M19 12h2.5M4.6 19.4l1.8-1.8M17.6 6.4l1.8-1.8" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.7 14.9A8.5 8.5 0 1 1 9.1 3.3a7 7 0 0 0 11.6 11.6Z" />
    </svg>
  )
}
