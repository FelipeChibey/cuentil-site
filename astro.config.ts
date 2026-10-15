import { defineConfig, envField } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { defaultLocale, locales, localeTags } from "./src/i18n/config";

const siteUrl = new URL(process.env.SITE_URL || "https://felipechibey.github.io/traki-site/");

export default defineConfig({
  site: siteUrl.origin,
  base: siteUrl.pathname,
  trailingSlash: "always",
  i18n: {
    locales: [...locales],
    defaultLocale,
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale, locales: localeTags },
      filter: (page) => page !== siteUrl.href,
    }),
  ],
  env: {
    schema: {
      PUBLIC_SUPABASE_URL: envField.string({ context: "client", access: "public", url: true }),
      PUBLIC_SUPABASE_ANON_KEY: envField.string({ context: "client", access: "public" }),
    },
  },
});
