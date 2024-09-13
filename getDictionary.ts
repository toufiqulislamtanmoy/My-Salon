const dictionaries = {
    en: () => import("./dictionaries/en.json").then(r => r.default),
    bn: () => import("./dictionaries/bn.json").then(r => r.default)
  }
  
  export const getDictionary = (lang: keyof typeof dictionaries) => {
    return dictionaries[lang]();
  }