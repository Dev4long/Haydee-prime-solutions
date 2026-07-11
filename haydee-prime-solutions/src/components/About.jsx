import { useLanguage } from '../context/LanguageContext.jsx'
import Reveal from './Reveal.jsx'
import consultationPhoto from '../assets/images/immigration-consultation.jpg'

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="section about">
      <div className="section-inner about-grid">
        <Reveal direction="left" className="about-media">
          <div className="about-image-frame">
            <img style={{ width: '100%', height: '100%', borderRadius: '5%' }} src={consultationPhoto} alt={t.about.imageAlt} className="about-image" />
          </div>
        </Reveal>

        <div className="about-copy">
          <Reveal>
            <p className="eyebrow">{t.about.eyebrow}</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="section-title">{t.about.title}</h2>
          </Reveal>
          {t.about.paragraphs.map((paragraph, index) => (
            <Reveal delay={140 + index * 60} key={index}>
              <p className="about-paragraph">{paragraph}</p>
            </Reveal>
          ))}

          <div className="about-values">
            {t.about.values.map((value, index) => (
              <Reveal delay={260 + index * 70} key={value.title} className="about-value">
                <h3 className="about-value-title">{value.title}</h3>
                <p className="about-value-desc">{value.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
