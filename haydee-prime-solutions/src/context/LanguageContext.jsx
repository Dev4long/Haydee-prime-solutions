import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from '../data/content.js'

const LanguageContext = createContext(null)

function getInitialLanguage() {
  const stored = localStorage.getItem('hps-language')
  if (stored === 'es' || stored === 'en') return stored
  return 'es'
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage)

  useEffect(() => {
    localStorage.setItem('hps-language', language)
    document.documentElement.lang = language
  }, [language])

  const toggleLanguage = () => setLanguage((prev) => (prev === 'en' ? 'es' : 'en'))

  const value = useMemo(
    () => ({
      language,
      toggleLanguage,
      t: translations[language],
    }),
    [language]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
