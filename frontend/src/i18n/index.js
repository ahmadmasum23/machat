import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import id from "./id.json";
import en from "./en.json";

const resources = {
  id: { translation: id },
  en: { translation: en },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("chat-language") || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
