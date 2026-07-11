import { useLanguage } from '../context/LanguageContext.jsx'
import Reveal from './Reveal.jsx'
import immigrationPhoto from '../assets/images/immigration-consultation.jpg'
import insurancePhoto from '../assets/images/insurance-promo.jpg'

const IMAGES = {
  immigration: immigrationPhoto,
  insurance: insurancePhoto,
}

const ICONS = {
  immigration: PassportIcon,
  insurance: ShieldIcon,
}

export default function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" className="section services">
      <div className="section-inner">
        <div className="section-heading">
          <Reveal>
            <p className="eyebrow">{t.services.eyebrow}</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="section-title">{t.services.title}</h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="section-subtitle">{t.services.subtitle}</p>
          </Reveal>
        </div>

        <div className="services-grid">
          {t.services.items.map((service, index) => {
            const Icon = ICONS[service.id]
            return (
              <Reveal delay={index * 120} key={service.id} className="service-card-wrapper">
                <article id={service.id} className={`service-card service-card-${service.id}`}>
                  <div className="service-card-media">
                    <img src={IMAGES[service.id]} alt={service.imageAlt} className="service-card-image" />
                    <div className="service-card-overlay"/>
                    <div className="service-card-icon">
                      <Icon />
                    </div>
                  </div>
                  <div className="service-card-body">
                    <h3 className="service-card-title">{service.title}</h3>
                    <p className="service-card-tagline">{service.tagline}</p>
                    <p className="service-card-desc">{service.description}</p>
                    <ul className="service-card-list">
                      {service.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                    <a href="#contact" className="service-card-cta" onClick={(e) => {
                      e.preventDefault()
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }}>
                      {service.cta}
                      <span aria-hidden="true"> →</span>
                    </a>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function PassportIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="4" y="2.5" width="16" height="19" rx="2" />
      <circle cx="12" cy="10" r="3" />
      <path d="M8.5 16.5c0-1.7 1.6-3 3.5-3s3.5 1.3 3.5 3" />
      <path d="M7.5 6.5h9" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3 4.5 5.5v5.7c0 4.6 3.2 7.4 7.5 9.3 4.3-1.9 7.5-4.7 7.5-9.3V5.5Z" />
      <path d="M8.7 12.2l2.3 2.3 4.3-4.6" />
    </svg>
  )
}
