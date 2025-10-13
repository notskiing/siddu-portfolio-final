"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";
import { ImageCarousel } from "@/components/ImageCarousel";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// --- Portfolio Data ---
const DATA = {
  name: "Siddharth Kohli",
  
  role: "High School Student",
  
  tagline: "Hi! I'm Sid. I'm a student from Santa Rosa, California, and I am interested in the humanities, fire prevention, and data-driven engineering.",
  
  email: "kooohhli@gmail.com",

  profileImage: "/images/headshot.png",

  socials: [
    // { name: "GitHub", icon: Github, url: "https://github.com/notskiing" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/siddharth-kohli" },
    { name: "Email", icon: Mail, url: "mailto:kooohhli@gmail.com" },
  ],
  
  carouselImages: [
    "/images/landscaped.jpg",
    "/images/calling.png" // Replace with your actual image paths
  ],

  skills: ["Spanish", "Hindi", "Policy Debate", "Public Speaking", "Tailwind.css", "Vue.js", "Next.js", "OpenCV", "Tensorflow", "Fusion 360", "Word", "LaTeX", "Python", "JavaScript", "PRUSA"],
  
  nonprofitFeature: {
    title: "Firebreaker",
    subtitle: "FEATURED",
    description: "Firebreaker is a not-for-profit engineering consultancy dedicated to creating preventive solutions for fire management using the latest in visual-language modeling to clean and decipher images for governments in Northern California.",
    image: "/images/nonprofit-hero.png",
    learnMoreUrl: "https://firebreaker.org",
  },
  
  projects: [
    { 
      id: "firebreaker",
      title: "Firebreaker", 
      description: "Precise threat detection system for fire threats using visual-language modeling of day-to-day imagery in local communities.", 
      link: "firebreaker.org",
      image: "/images/tubbsimpact.jpg"
    },
    { 
      id: "chessrobot",
      title: "Chessbot: A Low-cost Automated Chess Robot", 
      description: "Chess robot research project at Sonoma State University demonstrating the latest in low-cost engineering and computer vision.", 
      link: "/projects/chessrobot",
      image: "/images/chessboard.jpg"
    },
    { 
      id: "swapz",
      title: "Swapz: Dress Reusal Platform for High Schoolers", 
      description: "Online platform for students to share their dresses/clothes from dances in order to reduce waste.", 
      link: "swapz.up.railway.app",
      image: "/images/swapz-img.png"
    },
  ],
};

// --- Components ---
function Hero() {
  return (
    <motion.section
      className="text-center py-16 md:py-24"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col items-center space-y-6">
        {/* Profile Picture */}
        <motion.div
          className="relative"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <img
            src={DATA.profileImage}
            alt={DATA.name}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/20 shadow-lg"
          />
          {/* Optional: Add a decorative ring */}
          <div className="absolute inset-0 rounded-full border-2 border-primary/40 animate-pulse"></div>
        </motion.div>

        {/* Name and Role */}
        <div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {DATA.name}
          </motion.h1>
          
          <motion.h2
            className="text-xl md:text-2xl text-muted-foreground mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {DATA.role}
          </motion.h2>
          
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {DATA.tagline}
          </motion.p>
        </div>

        {/* Social Links */}
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {DATA.socials.map((social, i) => (
            <Button key={i} variant="outline" size="icon" asChild>
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                <social.icon className="h-5 w-5" />
              </a>
            </Button>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}


function Skills() {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Strengths</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {DATA.skills.map((skill, i) => (
          <Badge key={i} className="px-4 py-2 text-base">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
}

function NonprofitFeature() {
  return (
    <motion.section
      className="py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={DATA.nonprofitFeature.image}
              alt={DATA.nonprofitFeature.title}
              className="w-full h-96 object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </motion.div>

        {/* Right side - Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-sm font-medium text-primary mb-2 tracking-wide uppercase">
              {DATA.nonprofitFeature.subtitle}
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {DATA.nonprofitFeature.title}
            </h2>
          </div>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            {DATA.nonprofitFeature.description}
          </p>

          <div className="pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <a 
                href={DATA.nonprofitFeature.learnMoreUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about our work
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}


function Projects() {
  return (
    <motion.section
      className="py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
        <p className="text-lg text-muted-foreground">
          Explore some of my solutions to problems!
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {DATA.projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow group cursor-pointer">
              <CardContent className="p-0">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "https://picsum.photos/400/250?random=" + i}
                    alt={project.title}
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <Button 
                    variant="outline" 
                    asChild
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    <a href={project.link}>View more</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* View All Projects Button */}
      <div className="text-center">
        <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
          <a href="/projects">View All Projects</a>
        </Button>
      </div>
    </motion.section>
  );
}

function Contact() {
  return (
    <section className="py-20 px-6 text-center max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Let&apos;s get in touch!</h2>
      <h3 className="text-xl mb-6">kooohhli[at]gmail.com</h3>
      <h3 className="text-xl mb-6"><a href="https://linkedin.com/in/siddharth-kohli">Linkedin</a></h3>
    </section>
  );
}

// --- Main Page ---
export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16 md:pt-20">
        <div className="container mx-auto px-4 py-8 space-y-12">
          <section id="home">
            <Hero />
          </section>
          
          <ImageCarousel images={DATA.carouselImages} />
          
          <section id="skills">
            <Skills />
          </section>
          
          <section id="nonprofit">
            <NonprofitFeature />
          </section>
          
          <section id="projects">
            <Projects />
          </section>
          
          <section id="contact">
            <Contact />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}


