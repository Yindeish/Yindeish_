"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "adeshinaadam03@gmail.com",
      href: "mailto:adeshinaadam03@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+234 8169562814",
      href: "tel:+2348169562814",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Lagos, Nigeria",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Let's discuss your next project or just say hello</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                I'm always interested in hearing about new opportunities and exciting projects. Whether you have a
                question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="flex items-center p-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">{info.title}</h4>
                      <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors">
                        {info.value}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-center">Let's connect and thrive together</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex items-center justify-center">
              <Link href="https://www.linkedin.com/in/adam-adeshina-47b4a4246/" target="_blank">
              <img className="w-[13em] h-[13em] rounded-full" src="https://media.licdn.com/dms/image/v2/D4D35AQGLLfIrpuN-FQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1693264205219?e=1750629600&v=beta&t=G11gFow0IHmmKEPpM5clASAXBw2rBWfZUM5HplIJo8A" alt="" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
