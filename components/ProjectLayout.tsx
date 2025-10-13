"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ImageCarousel } from "@/components/ImageCarousel";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

interface ProjectLayoutProps {
  title: string;
  category: string;
  year: string;
  images: string[];
  content: string;
}

export function ProjectLayout({ title, category, year, images, content }: ProjectLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          {/* Back Button & Title */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button variant="outline" size="sm" asChild className="mb-6">
              <a href="/projects" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Projects</span>
              </a>
            </Button>

            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-4">
                <span className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Tag className="h-4 w-4" />
                  <span>{category}</span>
                </span>
                <span className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{year}</span>
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
            </div>
          </motion.div>

          {/* Image Carousel */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ImageCarousel images={images} />
          </motion.div>

          {/* Project Content */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="prose prose-lg max-w-none dark:prose-invert">
              {content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Back to Projects Button */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
              <a href="/projects">Back to All Projects</a>
            </Button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
