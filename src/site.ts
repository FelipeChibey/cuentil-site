export const site = {
  appName: "Cuentil",
  developerName: "Felipe Chibey",
  contactEmail: "cuentil.app@gmail.com",
} as const;

const tokens: Record<string, string> = {
  app: site.appName,
  developer: site.developerName,
  email: site.contactEmail,
};

export function fillSiteTokens(text: string): string {
  return text.replace(/\{(\w+)\}/g, (match, name: string) => tokens[name] ?? match);
}
