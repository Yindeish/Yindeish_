import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Mobile and Web Developer",
      company: "CoinStick",
      location: "On-site",
      period: "June, 2025 - Present",
      description:
        "Mobile and Web Developer",
      technologies: ["Next.js", "TypeScript", "Redux toolkit", "React Native"],
    },
    {
      title: "Frontend Developer",
      company: "Meerath",
      location: "Lagos, Nigeria",
      period: "May, 2025 - Present",
      description:
        "Built responsive user interfaces, implemented design systems, and worked closely with UX/UI designers to create exceptional user experiences.",
      technologies: ["NextJS", "TypeScript", "Tailwind CSS", "Figma"],
    },
    {
      title: "Fullstack Developer",
      company: "Tfare",
      location: "Remote",
      period: "MAug, 2024 - June, 2025",
      description:
        "Built responsive user interfaces, implemented design systems, and worked closely with UX/UI designers to create exceptional user experiences.",
      technologies: ["React Native" , 'MongoDB' , 'Redux toolkit' , 'Supabase' , 'TypeScript' , 'Cloudinary' , 'Amazon Web Services (AWS)'],
    },
    {
      title: "Frontend Developer",
      company: "InBrandPr",
      location: "Remote",
      period: "Nov, 2024 - June, 2025",
      description:
        "Started my professional journey, learned industry best practices, and contributed to various web development projects.",
      technologies: ["GCP", "React Native", "TypeScript", "Supabase", "Firebase"],
    },
    {
      title: "Frontend Developer",
      company: "Peerhub",
      location: "Remote",
      period: "Sep, 2023 - Jul, 2024",
      description:
        `Participated in meetings , with provider companies (e.g silas), and reviews in the course of the product developement .
        Engaged in product development architecture (experience flow and state management)

. Built and maintained the company's web apps and third-parties products

. Engaged in budget planning on resources (technical) management with the management team.
        `,
      technologies: ["NextJs", "TypeScript"],
    },
    {
      title: "Fullstack Developer",
      company: "Yabatech Webometrics",
      location: "Remote",
      period: "Sep, 2023 - Jul, 2024",
      description:
        `Commited a rebuild and redesign of the school website and API

. Code Reviews and meetings engagements
        `,
      technologies: ['Next js' , 'Prisma ORM' , 'MySQL' , 'Express.js' , 'Redux toolkit'],
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
