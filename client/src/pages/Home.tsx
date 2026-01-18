import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { TechStack } from "@/components/TechStack";
import { ContactForm } from "@/components/ContactForm";
import { useProjects } from "@/hooks/use-projects";
import { Button } from "@/components/ui/button";
import { ArrowDown, Code, Github, Linkedin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Spline from '@/components/spline';
import { Canvas } from "@react-three/fiber";
import { CelestialSphere } from "@/components/canvas/CelestialSphere";
import heroBg from "@/components/images/deep_space_nebula_background_with_gold_and_purple_hues.png";
import { Suspense } from "react";


export default function Home() {
  const { data: projects, isLoading } = useProjects();

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
            {/* Background Image Layer */}


      {/* Hero Section */}
      <section
        id="home"
        className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden"
      >
              <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-60"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background z-10" />

      {/* 3D Scene Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <CelestialSphere />
          </Suspense>
        </Canvas>
      </div>

        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border/50 text-xs md:text-sm font-medium text-muted-foreground mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for freelance & collaborations
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 max-w-5xl mx-auto">
              Building <span className="text-gradient">Bold Backends</span> &{" "}
              <br className="hidden md:block" />
              Seamless <span className="text-gradient">Shopify Apps</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Hey, I’m{" "}
              <span className="text-foreground font-semibold">Sampann</span> – a
                       Senior Software Engineer building scalable websites, web applications, and backend systems with a strong focus on performance and clean architecture. I work across the full stack — from designing reliable APIs and business logic to crafting fast, user-friendly interfaces.I’ve built and worked on production-ready products including marketing websites, custom dashboards, web platforms, and Shopify applications used by real businesses. My approach is practical: understand the problem, design systems that scale, and deliver clean, maintainable code.Whether it’s a high-traffic website or a complex application, I build software that’s meant to last.🚀
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="h-14 px-8 rounded-full bg-gradient-primary text-lg font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-0.5"
                asChild
              >
                <a href="#projects">
                  View My Work <Code className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 rounded-full text-lg border-2 hover:bg-secondary/50"
                asChild
              >
                <a href="#contact">
                  Let's Talk{" "}
                  <Sparkles className="ml-2 w-5 h-5 text-yellow-500" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block text-muted-foreground">
          <ArrowDown className="w-6 h-6" />
        </div>
      </section>

      {/* Tech Stack */}
      <TechStack />

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Featured <span className="text-gradient">Projects</span>
              </h2>
              <p className="text-muted-foreground max-w-xl">
                A selection of applications and tools I’ve worked on, with a
                focus on performance, scalability, and user experience.
              </p>
            </div>

            {/* <Button variant="outline" asChild className="hidden md:flex">
              <a href="https://github.com/Sampann11Dwivedi" target="_blank" rel="noopener noreferrer">
                View GitHub <Github className="ml-2 w-4 h-4" />
              </a>
            </Button> */}
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-96 rounded-2xl bg-card/30 animate-pulse border border-border/50"
                />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects?.map(
                (project) =>
                  !project.isFeatured && (
                    <ProjectCard key={project.id} project={project} />
                  ),
              )}
            </div>
          )}

          <div className="mt-12 text-center md:hidden">
            <Button variant="outline" asChild className="w-full">
              <a
                href="https://github.com/Sampann11Dwivedi"
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub <Github className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Github <span className="text-gradient">Projects</span>
              </h2>
              <p className="text-muted-foreground max-w-xl">
                A collection of thoughtfully built experimental projects
                showcasing problem solving, architecture decisions, and modern
                development workflows.
              </p>
            </div>

            <Button variant="outline" asChild className="hidden md:flex">
              <a
                href="https://github.com/Sampann11Dwivedi"
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub <Github className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-96 rounded-2xl bg-card/30 animate-pulse border border-border/50"
                />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                ?.filter((project) => project.isFeatured)
                .sort((a, b) => a.id - b.id)
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          )}

          <div className="mt-12 text-center md:hidden">
            <Button variant="outline" asChild className="w-full">
              <a
                href="https://github.com/Sampann11Dwivedi"
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub <Github className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>


      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
           <span className="text-gradient">Web & Shopify Developer in Kota</span>
          </motion.h1>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I’m <span className="text-foreground font-semibold">Sampann Dwivedi</span>
            , a professional <span className="text-foreground font-semibold"> Web Developer in Kota</span> and <span className="text-foreground font-semibold">Shopify Certified Developer</span>, officially certified by Shopify, helping businesses build fast, scalable, and SEO-friendly digital products across India.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-14">

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              <span className="text-gradient">Web Developer in Kota</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              As a dedicated <strong>Web Developer in Kota</strong>, I build modern
              websites and web applications focused on performance, clean architecture,
              and long-term scalability. I work with React, modern frontend tools,
              and robust backend systems to deliver production-ready solutions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              <span className="text-gradient">Shopify Developer in Kota</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              I work as a <strong>Shopify Developer in Kota</strong>, helping brands
              launch, customize, and scale their e-commerce stores. My experience
              includes Shopify theme development, advanced customization, and
              Shopify app development used by real businesses.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              <span className="text-gradient">Shopify Developer in India</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Beyond local projects, I collaborate with startups and companies as a
              <strong> Shopify Developer in India</strong>, delivering scalable
              e-commerce solutions that meet national and international standards.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              <span className="text-gradient">My Approach</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              I believe in solving real problems through clean code, thoughtful
              system design, and clear communication. Whether it’s a high-traffic
              website or a complex Shopify app, my focus is always on performance,
              maintainability, and business value.
            </p>
          </div>

        </div>
      </section>
      {/* Contact Section */}
      <ContactForm />

      {/* Footer */}
      <footer className="py-8 border-t border-border/50 bg-card/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Sampann Dwivedi. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/Sampann11Dwivedi"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sampann-dwivedi-61218134a/"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            {/* Add more social links here */}
          </div>
        </div>
      </footer>
    </div>
  );
}
