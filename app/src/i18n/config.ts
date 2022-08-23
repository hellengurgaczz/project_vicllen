import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import teste from './pt/t.json';


export const resources = {
  pt: {
    translation: {
        ...teste
    },
  }
} as const;


i18n.use(initReactI18next).init({ 
    lng: 'pt',
    resources,
});

export default i18n;