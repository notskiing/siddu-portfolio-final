"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const ALL_PROJECTS = [
  {
    id: "firebreaker",
    title: "Firebreaker",
    description: "Precise threat detection system for fire threats using visual-language modeling of day-to-day imagery in local communities.",
    image: "images/tubbsimpact.jpg",
    category: "Fire Management",
    year: "2023-",
    link: "https://firebreaker.org/about"
  },
  {
    id: "fireresearch",
    title: "Fire Spread Prediction Research using Machine Learning",
    description: "Testing visual language models for predicting fire spread patterns. Planned publication by the end of 2025.",
    image: "images/goes.jpg",
    category: "Fire Management",
    year: "2025-",
    link: "/projects/fireresearch"
  },
  {
    id: "swapz",
    title: "Swapz: Dress Reusal Platform for High Schoolers",
    description: "Online platform for students to share their dresses/clothes from dances in order to reduce waste.",
    image: "images/swapz-img.png",
    category: "Environmental",
    year: "2023-24",
    link: "https://swapz.up.railway.app/"
  },
  {
    id: "chessrobot",
    title: "Chessbot: A Low-cost Automated Chess Robot",
    description: "Chess robot research project at Sonoma State University demonstrating the latest in low-cost engineering and computer vision.", 
    image: "/images/chessboard.jpg",
    category: "Engineering",
    year: "2025",
    link: "/projects/chessrobot"
  },
  {
    id: "debategpt",
    title: "DebateAIR: Research Tool for Debaters",
    description: "A tuned model of ChatGPT to streamline tedious research processes for policy debaters without involving itself in the evidence organization process.",
    image: "images/debategpt.png",
    category: "Humanities",
    year: "2023-24",
    link: "/projects/debategpt"
  },
  {
    id: "Congressional",
    title: "Cleanworld: Community Waste Management Website",
    description: "Proof of concept for resource reusal website to reduce waste in local communities. Won the Congressional App Challenge 2023.",
    image: "images/cleanworld-2.png",
    category: "Environmental",
    year: "2023",
    link: "https://www.youtube.com/watch?v=MfmJeI8Z-5k"
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          {/* Header Section */}
          <div className="mb-12">
            <div className="flex items-center space-x-4 mb-6">
              <Button variant="outline" size="icon" asChild>
                <a href="/#projects">
                  <ArrowLeft className="h-4 w-4" />
                </a>
              </Button>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">All Projects</h1>
                <p className="text-xl text-muted-foreground mt-2">
                  Engineering solutions that make a difference
                </p>
              </div>
            </div>
          </div>
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ALL_PROJECTS.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden">
                  <CardContent className="p-0">
                    {/* Project Image */}
                    <div className="relative overflow-hidden bg-gray-100">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                          {project.year}
                        </span>
                      </div>
                    </div>
                    
                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      <Button 
                        variant="outline" 
                        asChild
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      >
                        <a href={project.link}>Learn more</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
