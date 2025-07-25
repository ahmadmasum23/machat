import { create } from "zustand";

export const useLanguageStore = create((set) => ({
  language: localStorage.getItem("chat-language") || "en",
  setLanguage: (lang) => {
    localStorage.setItem("chat-language", lang);
    set({ language: lang });
  },
}));
