import { useLanguage } from '../context/LanguageContext.jsx'
import RealEstateSection from './RealEstateSection.jsx'
import usRealEstatePhoto from '../assets/images/NewYork.png'

export default function USRealEstate() {
  const { t } = useLanguage()

  return (
    <RealEstateSection
      id="us-real-estate"
      content={t.usRealEstate}
      image={usRealEstatePhoto}
      icon={USIcon}
    />
  )
}

function USIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3.5 20.5h17" />
      <path d="M5.5 20.5V9l4-2 4 2v11.5" />
      <path d="M13.5 20.5V6l3-1.5 3 1.5v14.5" />
      <path d="M8 12h1M8 15h1M17 9.5h1M17 12.5h1" />
    </svg>
  )
}
