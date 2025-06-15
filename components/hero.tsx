"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1617730283525-aade342e5e83?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGV2ZWxvcGVyJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D')] bg-cover bg-no-repeat bg-fixed">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute inset-0">
        {mounted && (
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        )}
        {mounted && (
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        )}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-4xl font-bold">
                <img className="w-full h-full rounded-full" src="https://media.licdn.com/dms/image/v2/D4D35AQGLLfIrpuN-FQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1693264205219?e=1750629600&v=beta&t=G11gFow0IHmmKEPpM5clASAXBw2rBWfZUM5HplIJo8A" alt="" />
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Adam Adeshina
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-2">Full Stack Developer</p>

          {/* <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Passionate about creating innovative solutions and building exceptional digital experiences
          </p> */}

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="group">
              <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Download CV
            </Button>
          </div> */}

          <div className="flex justify-center space-x-6">
            <Link href={'https://github.com/yindeish'} className="hover:scale-110 transition-transform">
              <Github className="h-6 w-6" />
            </Link>
            <Link href={'<img className="w-[13em] h-[13em] rounded-full" src="https://media.licdn.com/dms/image/v2/D4D35AQGLLfIrpuN-FQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1693264205219?e=1750629600&v=beta&t=G11gFow0IHmmKEPpM5clASAXBw2rBWfZUM5HplIJo8A" alt="" />'} className="hover:scale-110 transition-transform">
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
