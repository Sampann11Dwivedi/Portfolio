import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { db } from "./db";
import { projects } from "@shared/schema";

async function seedDatabase() {
  const existingProjects = await storage.getProjects();
  if (existingProjects.length === 0) {
    await db.insert(projects).values([
      {
        title: "Shopify Bundles App",
        description: "A new project for creating product bundles on Shopify stores.",
        link: "https://github.com/Sampann11Dwivedi/shopify-bundles-app",
        category: "Shopify App",
        techStack: ["React", "Shopify API", "Node.js"],
        isFeatured: true
      },
      {
        title: "STREET HOUSE",
        description: "Developed and deployed a modern, responsive website for STREET-HOUSE, an architecture and design studio. Built performance-optimized frontend and backend systems, integrated on-page SEO strategies to enhance visibility and user experience.",
        link: "#", // Assuming no public link provided yet or use the portfolio link if intended
        category: "Web Development",
        techStack: ["React", "SEO", "Responsive Design"],
        isFeatured: false
      },
      {
        title: "Easy Variant Swatches",
        description: "A customizable swatch solution to enhance how product variants are displayed on storefronts. Owned entire backend: routes, middleware, controllers, DB design.",
        link: "https://apps.shopify.com/easy-variant-swatches",
        category: "Shopify App",
        techStack: ["Laravel", "Theme App Extension", "MySQL"],
        isFeatured: false
      },
      {
        title: "SpiceGems Store Locator",
        description: "Allows merchants to show physical store locations on their site with search and filters. Built robust import/export and JWT-based session auth.",
        link: "https://apps.shopify.com/easy-store-locator-2",
        category: "Shopify App",
        techStack: ["React", "Laravel", "Google Maps API"],
        isFeatured: false
      },
      {
        title: "EPA – Easy Product Addons",
        description: "Lets merchants add custom add-ons to product pages (checkboxes, text inputs, uploads). Architected scalable backend using Laravel.",
        link: "https://apps.shopify.com/spice-product-add-ons",
        category: "Shopify App",
        techStack: ["Laravel", "Metafields", "File Uploads"],
        isFeatured: false
      },
      {
        title: "Shopify Embedded App Setup",
        description: "Led the setup of the team’s first embedded Shopify app using Laravel. Adapted Shopify's React docs to Laravel backend.",
        link: "#",
        category: "Backend",
        techStack: ["Laravel", "App Bridge", "JWT"],
        isFeatured: false
      }
    ]);
    console.log("Database seeded with projects");
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Seed the database on startup
  await seedDatabase();

  app.get(api.projects.list.path, async (req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.post(api.messages.create.path, async (req, res) => {
    try {
      const input = api.messages.create.input.parse(req.body);
      const message = await storage.createMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  return httpServer;
}
