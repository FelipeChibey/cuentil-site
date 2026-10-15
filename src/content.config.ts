import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { fillSiteTokens } from "./site";

const legal = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/legal" }),
  schema: z.object({
    title: z.string(),
    description: z.string().transform(fillSiteTokens),
    updated: z.coerce.date(),
  }),
});

export const collections = { legal };
