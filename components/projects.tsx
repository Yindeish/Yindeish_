import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import {Link} from 'next/link'

export function Projects() {
  const projects = [
    {
      title: "Coinstick website",
      description:
        "The official landing of Coinstick. Coinstick is platform that offers exchange, blogging and learning on cryptocurrencies.",
      image: "https://coinstick.co",
      technologies: ["Next.js", "TypeScript", "Redux Toolkit"],
      liveUrl: "https://coinstick.co",
      githubUrl: "#",
    },
    {
      title: "Land.ai",
      description: "Land.ai is an application that gives recommendation of business infracture of a place. It was built with Next Js TailwindCSS, ShaCdn, Supabase and it uses Open AI model.",
      image: "https://land-ai-orpin.vercel.app/",
      technologies: ["NextJs", "TypeScript", "Supabase", "TailwindCSS"],
      liveUrl: "https://land-ai-orpin.vercel.app/",
      githubUrl: "#",
    },
    {
      title: "Shaped",
      description:
        "A fashion as a service platform.",
      image: "https://www.shapedservices.com/",
      technologies: ["NextJs", "TypeScript", "Formspree", "TailwindCSS", "Vercel", "Ionos"],
      liveUrl: "https://www.shapedservices.com/",
      githubUrl: "#",
    },
    {
      title: "Sandi Hq",
      description: "A logistics service product owned by Coinstick.",
      image: "https://danfohq.co/",
      technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
      liveUrl: "https://danfohq.co/",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">A showcase of my recent work and personal projects</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="aspect-video overflow-hidden">
                {/* <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                /> */}
                <iframe
                  src={project.image}
                  style={{ border: 'none' }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Link href={project.image} target="_blank">
                <Button size="sm" className="flex-1">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
                  </Link>
                <Button variant="outline" size="sm" className="flex-1">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
