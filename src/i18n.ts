import i18n from 'i18next'
import detector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import translationEN from './locales/en.json'
import translationPT from './locales/pt.json'

const resources = {
  en: {
    translation: translationEN
  },
  pt: {
    translation: translationPT
  }
}

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'pt',
    resources
  })

export default i18n
