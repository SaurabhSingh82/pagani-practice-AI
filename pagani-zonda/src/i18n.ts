import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "nav": {
        "models": "Models",
        "heritage": "Heritage",
        "configurator": "Configurator",
        "admin": "Admin",
        "inquire": "Inquire Now"
      },
      "hero": {
        "subtitle": "THE ULTIMATE EXPRESSION",
        "price": "€1.5M"
      },
      "sections": {
        "design": "DESIGN",
        "engine": "ENGINE"
      },
      "labels": {
        "chassis": "Chassis",
        "body": "Body",
        "aero": "Aerodynamics",
        "powerplant": "Powerplant",
        "output": "Output",
        "topSpeed": "Top Speed",
        "acceleration": "Acceleration"
      }
    }
  },
  it: {
    translation: {
      "nav": {
        "models": "Modelli",
        "heritage": "Eredità",
        "configurator": "Configuratore",
        "admin": "Amministrazione",
        "inquire": "Richiedi Ora"
      },
      "hero": {
        "subtitle": "L'ESPRESSIONE SUPREMA",
        "price": "€1.5M"
      },
      "sections": {
        "design": "DESIGN",
        "engine": "MOTORE"
      },
      "labels": {
        "chassis": "Telaio",
        "body": "Carrozzeria",
        "aero": "Aerodinamica",
        "powerplant": "Propulsore",
        "output": "Potenza",
        "topSpeed": "Velocità Massima",
        "acceleration": "Accelerazione"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;
