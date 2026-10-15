import { getRelativeLocaleUrl } from "astro:i18n";
import { isLocale, locales, type Locale } from "./config";
import { en, type TranslationKey } from "./locales/en";
import { es } from "./locales/es";
import { site } from "../site";

export * from "./config";
export type { TranslationKey };

const dictionaries: Record<Locale, Record<TranslationKey, string>> = { en, es };

export type Translate = (key: TranslationKey, params?: Record<string, string>) => string;

export function useTranslations(locale: Locale): Translate {
  const dictionary = dictionaries[locale];
  return (key, params) =>
    dictionary[key].replace(/\{(\w+)\}/g, (match, name: string) => ({ app: site.appName, ...params })[name] ?? match);
}

export function localePath(locale: Locale, path = ""): string {
  return getRelativeLocaleUrl(locale, path);
}

export function localeStaticPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}

export function requireLocale(value: string | undefined): Locale {
  if (!isLocale(value)) throw new Error(`Unsupported locale: ${value}`);
  return value;
}
