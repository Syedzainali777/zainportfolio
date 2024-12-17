import { ExternalLink } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const projects = [
  {
    title: "URL SHORTNER",
    description: "A full-stack URL shortner.",
    image: "/url.png",
    tags: ["React", "Node.js", "Supabase"],
    demoUrl: "https://urlshrotner.netlify.app/",
    githubUrl: "https://github.com/Syedzainali777/Urlshortner",
  },
  {
    title: "MEMES Generator app",
    description: "A real app you can create custom memes and even download it.",
    image: "/memes.png",
    tags: ["React", "Tailwind"],
    demoUrl: "https://mymemesgenerator.netlify.app/",
    githubUrl: "https://github.com/Syedzainali777/Memesgenerator",
  },
  {
    title: "Drapper university california",
    description:
      "A real website for the Drapper university California currently active and working",
    image: "/drapper.png",
    tags: ["Svelte", "Node.js", "Express"],
    demoUrl: "https://draperuniversity.com/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground">
            Here are some of my recent projects that showcase my skills and
            expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-primary/10 text-primary text-sm rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-4">
                <a href={project.githubUrl}>
                  <Button variant="outline" size="sm" className="w-full">
                    Code
                  </Button>
                </a>
                <a href={project.demoUrl}>
                  <Button size="sm" className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
