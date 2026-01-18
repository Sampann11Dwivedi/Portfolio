import { motion } from "framer-motion";
import {
  Database,
  Layout,
  Server,
  Boxes,
  Code2,
  Cpu,
  Globe,
  ShoppingBag,
} from "lucide-react";
import Spline from "@/components/spline";


export function TechStack() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive suite of tools and technologies I use to build
            robust, scalable solutions.
          </p>
        </div>
        <Spline />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Backend Card */}
          <motion.div
            variants={item}
            className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors shadow-lg"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-blue-500/10 text-blue-500">
                <Server className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-display">
                Backend Engineering
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Core
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["PHP", "Laravel", "Java", "Node.js", "Express.js"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-md bg-secondary/50 text-secondary-foreground text-sm font-mono border border-border/50 hover:bg-primary/20 hover:text-primary hover:border-primary/30 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Database & Cloud
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "MySQL",
                    "PostgreSQL",
                    "MongoDB",
                    "Redis",
                    "Docker",
                    "AWS",
                    "Azure",
                    "GCP",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-md bg-secondary/50 text-secondary-foreground text-sm font-mono border border-border/50 hover:bg-blue-500/20 hover:text-blue-500 hover:border-blue-500/30 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Frontend & Shopify Card */}
          <motion.div
            variants={item}
            className="p-8 rounded-2xl bg-card border border-border/50 hover:border-pink-500/30 transition-colors shadow-lg"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-pink-500/10 text-pink-500">
                <Layout className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-display">
                Frontend & Shopify
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Frontend
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "TypeScript",
                    "TailwindCSS",
                    "Next.js",
                    "JavaScript",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-md bg-secondary/50 text-secondary-foreground text-sm font-mono border border-border/50 hover:bg-pink-500/20 hover:text-pink-500 hover:border-pink-500/30 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Shopify Ecosystem
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Liquid",
                    "App Bridge",
                    "Theme App Extensions",
                    "Polaris",
                    "Shopify API",
                    "Shopify Functions",
                    "Custom Apps",
                    "Public Apps",
                    "Checkout Extensions",
                    "GraphQL",
                    "Theme Customization",
                    "Shopify CLI",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-md bg-green-500/10 text-green-500 text-sm font-mono border border-green-500/20 hover:bg-green-500/20 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
