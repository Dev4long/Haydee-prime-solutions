import { useLanguage } from '../context/LanguageContext.jsx'
import RealEstateSection from './RealEstateSection.jsx'
import ecuadorRealEstatePhoto from '../assets/images/ecuador.jpg'

export default function EcuadorRealEstate() {
  const { t } = useLanguage()

  return (
    <RealEstateSection
      id="ecuador-real-estate"
      content={t.ecuadorRealEstate}
      image={ecuadorRealEstatePhoto}
      reverse
      icon={EcuadorIcon}
    />
  )
}

function EcuadorIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M2.5 17.5 8 9l3 4 2.5-3.5L20.5 17.5Z" />
      <circle cx="17" cy="6.5" r="2" />
      <path d="M2.5 20.5h19" />
    </svg>
  )
}
