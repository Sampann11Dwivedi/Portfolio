import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { db } from "./db";
import { projects } from "@shared/schema";
import nodemailer from "nodemailer";

async function seedDatabase() {
  const existingProjects = await storage.getProjects();
  if (existingProjects.length === 0) {
    await db.insert(projects).values([
  {
    title: "Shopify Bundles App",
    description: "A Shopify app that lets merchants create product bundles that apply at checkout. Using Shopify Functions and Cart Transform, this app automatically adds add-on products when a target product is purchased.",
    link: "https://github.com/Sampann11Dwivedi/shopify-bundles-app",
    category: "Shopify App",
    techStack: [
      "React",
      "Shopify API",
      "Node.js",
      "GraphQL",
      "Shopify Liquid",
      "Polaris",
      "Shopify plus",
      "Shopify Customization",
      "SQLITE"
    ],
    isFeatured: true
  },
  {
    title: "Easy Variant Swatches",
    description: "A customizable swatch solution to enhance how product variants are displayed on storefronts. Owned entire backend: routes, middleware, controllers, DB design.",
    link: "https://apps.shopify.com/easy-variant-swatches",
    category: "Shopify App",
    techStack: [
      "Laravel",
      "Theme App Extension",
      "MySQL",
      "Metafields",
      "Blade",
      "GraphQL",
      "RabbitMQ",
      "OAuth"
    ],
    isFeatured: false
  },
  {
    title: "SpiceGems Store Locator",
    description: "Allows merchants to show physical store locations on their site with search and filters. Built robust import/export and JWT-based session auth.",
    link: "https://apps.shopify.com/easy-store-locator-2",
    category: "Shopify App",
    techStack: [
      "React",
      "Laravel",
      "Google Maps API",
      "Polaris",
      "Metafields",
      "JWT",
      "Shopify",
      "Theme App Extension",
      "GraphQL",
      "MYSQL"
    ],
    isFeatured: false
  },
  {
    title: "EPA – Easy Product Addons",
    description: "Lets merchants add custom add-ons to product pages (checkboxes, text inputs, uploads). Architected scalable backend using Laravel.",
    link: "https://apps.shopify.com/spice-product-add-ons",
    category: "Shopify App",
    techStack: [
      "Laravel",
      "Metafields",
      "File Uploads",
      "Theme App Extension",
      "MySQL",
      "Blade",
      "GraphQL",
      "REST",
      "MYSQL"
    ],
    isFeatured: false
  },
  {
    title: "Shopify Cart Progress Bar",
    description: "A sticky cart progress bar for Shopify, encouraging customers to reach a goal (e.g., free shipping) and optionally showing a discount code.",
    link: "https://github.com/Sampann11Dwivedi/shopify-cart-progress-bar",
    category: "Shopify Theme Snippets",
    techStack: [
      "Liquid",
      "Javascript",
      "Css"
    ],
    isFeatured: true
  },
  {
    title: "AI-Powered Recipe Intelligence System",
    description: "Integrated Mistral AI API to experiment with recipe and ingredient-based responses. Focused on consuming, parsing, and evaluating AI-generated outputs to explore smart dish suggestion workflows and practical AI integration.",
    link: "https://github.com/Sampann11Dwivedi/AI-Powered-Recipe-Recommendation",
    category: "React App",
    techStack: [
      "React",
      "Javascript",
      "Mistral AI"
    ],
    isFeatured: true
  },
  {
    title: "Task Management System",
    description: "A simple task management system built with Laravel and jQuery, featuring JWT authentication and CRUD operations with pagination and filtering",
    link: "https://github.com/Sampann11Dwivedi/mini-task-management",
    category: "Laravel App",
    techStack: [
      "Laravel",
      "JWT",
      "Blade",
      "Javascript",
      "MYSQL"
    ],
    isFeatured: true
  },
  {
    title: "Meme Generator",
    description: "A React-based app that lets users generate custom memes by dynamically updating text and rendering images from a meme API.",
    link: "https://github.com/Sampann11Dwivedi/Meme-Generator",
    category: "React App",
    techStack: [
      "React",
      "Javascript",
      "imgflip API"
    ],
    isFeatured: true
  },
  {
    title: "Tour App",
    description: "Full-stack travel app allowing users to log travel history, plan trips, and track journeys with real-time data synchronization.",
    link: "https://github.com/Sampann11Dwivedi/Tour-App",
    category: "Full Stack",
    techStack: [
      "React",
      "Javascript",
      "MongoDB",
      "Express.js"
    ],
    isFeatured: true
  },
  {
    title: "Inventory Management Project",
    description: "A complete Java GUI + MySQL-based application using AWT, with login, role-based access, data insertion, and viewing capabilities. That's pretty cool and shows solid understanding of GUI programming, JDBC, and database handling.",
    link: "https://github.com/Sampann11Dwivedi/Inventory-Management-Project",
    category: "Java App",
    techStack: [
      "Java",
      "MySQL",
      "GUI",
      "AWT"
    ],
    isFeatured: true
  }
]);
    console.log("Database seeded with projects");
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express,
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

      // Send email notification
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        try {
          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS,
            },
          });

          await transporter.sendMail({
            from: input.email,
            to: process.env.EMAIL_USER, // Send to self
            subject: `New Collabrator Message from ${input.name}`,
            text: `
Name: ${input.name}
Email: ${input.email}

Message:
${input.message}
            `,
          });
          console.log("Email notification sent");
        } catch (emailErr) {
          console.error("Failed to send email notification:", emailErr);
          // Continue execution, do not fail the request
        }
      }

      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join("."),
        });
      }
      throw err;
    }
  });

  return httpServer;
}
