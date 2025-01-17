import { createI18n } from 'vue-i18n'
import de from './de.json'

const messages = {
  de
}

const config = {
  legacy: false,
  locale: 'de',
  fallbackLocale: 'de',
  messages // set locale messages
}

let i18n = createI18n(config)

export const setupI18N = () => {
  if (!i18n) i18n = createI18n(config)
}

export default i18n
