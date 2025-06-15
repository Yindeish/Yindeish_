import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      period: "2023 - Present",
      description:
        "Leading development of scalable web applications, mentoring junior developers, and implementing best practices for code quality and performance.",
      technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS"],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency Co.",
      location: "Lagos, Nigeria",
      period: "2022 - 2023",
      description:
        "Developed and maintained multiple client projects, collaborated with design teams, and optimized application performance.",
      technologies: ["Vue.js", "Express.js", "MongoDB", "Docker"],
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "Lagos, Nigeria",
      period: "2021 - 2022",
      description:
        "Built responsive user interfaces, implemented design systems, and worked closely with UX/UI designers to create exceptional user experiences.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Figma"],
    },
    {
      title: "Junior Developer",
      company: "Local Tech Hub",
      location: "Lagos, Nigeria",
      period: "2020 - 2021",
      description:
        "Started my professional journey, learned industry best practices, and contributed to various web development projects.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">My professional journey and key achievements</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">{exp.company}</CardDescription>
                    </div>
                    <div className="flex flex-col md:items-end gap-1">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <CalendarDays className="mr-1 h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="mr-1 h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
