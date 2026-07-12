import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const products = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    description: z.string(),
    order: z.number().default(99),
    status: z.enum(["released", "beta", "development"]).default("released"),
    links: z
      .object({
        site: z.string().url().optional(),
        github: z.string().url().optional(),
        download: z.string().url().optional(),
      })
      .default({}),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(["press", "update"]),
    description: z.string().optional(),
  }),
});

export const collections = { products, news };
