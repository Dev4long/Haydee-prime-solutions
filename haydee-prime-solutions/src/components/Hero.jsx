import { useLanguage } from '../context/LanguageContext.jsx'
import Reveal from './Reveal.jsx'
import portrait from '../assets/images/haydee-portrait.jpg'

export default function Hero() {
  const { t } = useLanguage()

  const scrollTo = (id) => (event) => {
    event.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero-bg-shape" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          <Reveal>
            <p className="eyebrow eyebrow-light">{t.hero.eyebrow}</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="hero-title">
              {t.hero.title}
              <br />
              <span className="text-accent">{t.hero.titleHighlight}</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="hero-subtitle">{t.hero.subtitle}</p>
          </Reveal>
          <Reveal delay={300}>
            <div className="hero-actions">
              <a href="#services" className="btn btn-accent" onClick={scrollTo('services')}>
                {t.hero.ctaPrimary}
              </a>
              <a href="#contact" className="btn btn-outline-light" onClick={scrollTo('contact')}>
                {t.hero.ctaSecondary}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150} direction="right" className="hero-media">
          <div className="hero-portrait-frame">
            <img src={portrait} alt="Haydee, fundadora de Haydee Prime Solutions" className="hero-portrait" />
          </div>
        </Reveal>
      </div>

      <a href="#about" className="hero-scroll-hint" onClick={scrollTo('about')}>
        <span>{t.hero.scrollHint}</span>
        <span className="hero-scroll-arrow" aria-hidden="true" />
      </a>
    </section>
  )
}
