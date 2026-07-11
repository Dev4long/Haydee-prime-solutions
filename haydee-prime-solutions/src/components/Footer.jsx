import { useLanguage } from '../context/LanguageContext.jsx'
import { siteConfig } from '../data/content.js'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  const scrollTo = (id) => (event) => {
    event.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="footer">
      <div className="section-inner footer-grid" style={{ paddingInline: '3rem' }}>
        <div className="footer-brand">
          <div className="navbar-brand">
            <span className="navbar-brand-mark">HP</span>
            <span className="navbar-brand-text">Haydee Prime Solutions</span>
          </div>
          <p className="footer-tagline">{t.footer.tagline}</p>
          <div className="footer-social">
            {/* <a href={siteConfig.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <FacebookIcon />
            </a> */}
            <a href={siteConfig.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <WhatsAppIcon />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4>{t.footer.quickLinks}</h4>
          <a href="#home" onClick={scrollTo('home')}>{t.nav.home}</a>
          <a href="#about" onClick={scrollTo('about')}>{t.nav.about}</a>
          <a href="#services" onClick={scrollTo('services')}>{t.nav.services}</a>
          <a href="#contact" onClick={scrollTo('contact')}>{t.nav.contact}</a>
        </div>

        <div className="footer-links">
          <h4>{t.footer.ourServices}</h4>
          <a href="#immigration" onClick={scrollTo('immigration')}>{t.nav.immigration}</a>
          <a href="#real-estate" onClick={scrollTo('real-estate')}>{t.nav.realEstate}</a>
          <a href="#insurance" onClick={scrollTo('insurance')}>{t.nav.insurance}</a>
        </div>

        <div className="footer-links">
          <h4>{t.footer.contactUs}</h4>
          <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Haydee Prime Solutions. {t.footer.rights}</p>
      </div>
    </footer>
  )
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.7V3.6C16.5 3.5 15.5 3.4 14.3 3.4c-2.4 0-4 1.5-4 4.1v2.4H7.6V13h2.7v8Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Zm5.1 12.7c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.6-.6-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8 0-1.3.7-2 1-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4.2.5.7 1.8.8 1.9.1.2.1.3 0 .5-.1.2-.1.3-.3.5-.1.2-.3.4-.5.5-.2.2-.3.4-.1.7.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.5 1.5.3.1.5.1.7-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1.2.1 1.5.7 1.8.8.3.1.5.2.5.3.1.2.1.6-.1 1.2Z" />
    </svg>
  )
}
