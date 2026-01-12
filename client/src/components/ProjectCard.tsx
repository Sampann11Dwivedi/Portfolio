import { ProjectResponse } from "@shared/routes";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ExternalLink, Github, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  project: ProjectResponse;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <Card className={`h-full flex flex-col overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm ${project.isFeatured ? 'ring-2 ring-primary shadow-lg shadow-primary/20' : 'hover:border-primary/50 hover:shadow-lg transition-all'}`}>
        {project.imageUrl && (
          <div className="aspect-video w-full overflow-hidden relative group">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            {project.isFeatured && (
              <div className="absolute top-3 right-3 z-20">
                <Badge variant="default" className="bg-primary hover:bg-primary text-white shadow-lg flex gap-1 items-center">
                  <Star className="w-3 h-3 fill-current" /> Featured
                </Badge>
              </div>
            )}
          </div>
        )}
        
        <CardHeader className="p-6 pb-2">
          <div className="flex justify-between items-start gap-4">
            <div>
              <Badge variant="outline" className="mb-2 text-primary border-primary/20 bg-primary/5">
                {project.category}
              </Badge>
              <h3 className="text-xl font-display font-bold text-foreground">{project.title}</h3>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-6 pt-2 flex-grow">
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.techStack?.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs font-mono font-normal">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="p-6 pt-0 mt-auto border-t border-border/20">
          <div className="flex gap-3 w-full pt-4">
            <Button asChild className="flex-1 bg-gradient-primary hover:opacity-90 transition-opacity">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Visit Project <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
            {/* Assuming github link might be added later or is part of project link logic */}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
