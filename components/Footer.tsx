"use client";

import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left side - Copyright */}
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>© {currentYear} Siddharth Kohli. All rights reserved.</span>
          </div>

          {/* Center - Made with love */}
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>using</span>
            <a 
              href="https://nextjs.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Next.js
            </a>
            <span>&</span>
            <a 
              href="https://tailwindcss.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Tailwind CSS
            </a>
            <span>&</span>
            <a 
              href="https://tailwindcss.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Siddharth Kohli
            </a>
          </div>

          {/* Right side - Additional links */}
          {/* <div className="flex items-center space-x-4 text-sm">
            <a 
              href="/privacy" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
               
            </a>
            <a 
              href="/terms" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
               
            </a>
            <a 
              href="#contact" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
               
            </a>
          </div> */}
        </div>
        
        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            Icons by{" "}
            <a 
              href="https://lucide.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Lucide
            </a>
            {" • "}
            Website by{" "}
            <a 
              href="https://linkedin.com/in/siddharth-kohli" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Siddharth Kohli
            </a>
            {" • "}
            UI components by{" "}
            <a 
              href="https://ui.shadcn.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              shadcn/ui
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
