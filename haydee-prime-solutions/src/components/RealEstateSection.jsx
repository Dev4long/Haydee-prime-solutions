import Reveal from './Reveal.jsx'

export default function RealEstateSection({ id, content, image, icon: Icon, reverse = false }) {
  const scrollToContact = (event) => {
    event.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const mediaDirection = reverse ? 'right' : 'left'
  const copyDirection = reverse ? 'left' : 'right'

  return (
    <section id={id} className="section realestate-section">
      <div className={`section-inner realestate-grid ${reverse ? 'realestate-grid-reverse' : ''}`}>
        <Reveal direction={mediaDirection} className="realestate-media">
          <div className="realestate-media-frame">
            {image ? (
              <>
                <img src={image} alt={content.imageAlt} className="realestate-image" />
                <div className="realestate-media-badge">
                  <Icon />
                </div>
              </>
            ) : (
              <div className="realestate-media-graphic" aria-hidden="true">
                <Icon />
              </div>
            )}
          </div>
        </Reveal>

        <div className="realestate-copy">
          <Reveal direction={copyDirection}>
            <p className="eyebrow">{content.eyebrow}</p>
          </Reveal>
          <Reveal direction={copyDirection} delay={80}>
            <h2 className="section-title">{content.title}</h2>
          </Reveal>
          <Reveal direction={copyDirection} delay={140}>
            <p className="section-subtitle">{content.description}</p>
          </Reveal>
          <Reveal direction={copyDirection} delay={200}>
            <ul className="realestate-list">
              {content.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal direction={copyDirection} delay={260}>
            <a href="#contact" className="btn btn-accent" onClick={scrollToContact}>
              {content.cta}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
