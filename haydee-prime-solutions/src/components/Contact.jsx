import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'
import Reveal from './Reveal.jsx'
import { siteConfig } from '../data/content.js'

const initialForm = { name: '', email: '', phone: '', service: '', message: '' }

export default function Contact() {
  const { t } = useLanguage()
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [captchaSolved, setCaptchaSolved] = useState(false)
  const formRef = useRef(null)

  useEffect(() => {
    // hCaptcha renders its response token into a hidden field once solved.
    // Poll for it since the widget script loads async and has no React hook.
    const interval = setInterval(() => {
      const field = formRef.current?.querySelector('[name="h-captcha-response"]')
      setCaptchaSolved(Boolean(field?.value))
    }, 400)
    return () => clearInterval(interval)
  }, [])

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const data = new FormData(event.target)
    // A filled-in honeypot means a bot submitted the form — silently drop it.
    if (data.get('botcheck')) return

    data.set('subject', `${t.services.eyebrow} — ${data.get('service') || t.contact.form.name}`)

    setStatus('sending')
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      const result = await response.json()
      if (result.success) {
        setStatus('success')
        setForm(initialForm)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="section-inner contact-grid">
        <div className="contact-info">
          <Reveal direction="left">
            <p className="eyebrow">{t.contact.eyebrow}</p>
          </Reveal>
          <Reveal direction="left" delay={80}>
            <h2 className="section-title">{t.contact.title}</h2>
          </Reveal>
          <Reveal direction="left" delay={140}>
            <p className="section-subtitle">{t.contact.subtitle}</p>
          </Reveal>

          <Reveal direction="left" delay={200}>
            <ul className="contact-details">
              <li>
                <span className="contact-details-label">{t.contact.phone}</span>
                <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
              </li>
              <li>
                <span className="contact-details-label">{t.contact.whatsapp}</span>
                <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">{siteConfig.whatsapp}</a>
              </li>
              <li>
                <span className="contact-details-label">{t.contact.email}</span>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
              <li>
                <span className="contact-details-label">{t.contact.address}</span>
                <span>{t.contact.addressValue}</span>
              </li>
              <li>
                <span className="contact-details-label">{t.contact.hours}</span>
                <span>{t.contact.hoursValue}</span>
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal direction="right" delay={100} className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
            <input type="hidden" name="access_key" value={siteConfig.web3formsAccessKey} />
            {/* Honeypot: hidden from real visitors, bots tend to fill every field. */}
            <input type="checkbox" name="botcheck" className="hidden-field" tabIndex={-1} autoComplete="off" />

            <div className="form-row">
              <label>
                {t.contact.form.name}
                <input type="text" name="name" required value={form.name} onChange={handleChange('name')} />
              </label>
              <label>
                {t.contact.form.email}
                <input type="email" name="email" required value={form.email} onChange={handleChange('email')} />
              </label>
            </div>
            <div className="form-row">
              <label>
                {t.contact.form.phone}
                <input type="tel" name="phone" value={form.phone} onChange={handleChange('phone')} />
              </label>
              <label>
                {t.contact.form.service}
                <select name="service" value={form.service} onChange={handleChange('service')} required>
                  <option value="" disabled>
                    {t.contact.form.service}
                  </option>
                  {t.contact.form.serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <label>
              {t.contact.form.message}
              <textarea rows={5} name="message" required value={form.message} onChange={handleChange('message')} />
            </label>

            <div className="h-captcha" data-captcha="true" />

            <button
              type="submit"
              className="btn btn-accent contact-form-submit"
              disabled={status === 'sending' || !captchaSolved}
            >
              {status === 'sending' ? t.contact.form.sending : t.contact.form.submit}
            </button>
            {!captchaSolved && status === 'idle' && (
              <p className="contact-form-hint">{t.contact.form.captchaHint}</p>
            )}
            {status === 'success' && <p className="contact-form-success">{t.contact.form.success}</p>}
            {status === 'error' && <p className="contact-form-error">{t.contact.form.error}</p>}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
