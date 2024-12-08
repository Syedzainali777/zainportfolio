import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section id="home" className="min-h-screen pt-16 flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Syed Zain Ali</span>
              <br />
              MERN Stack Developer
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Creating efficient, scalable, and responsive web solutions that help businesses grow and succeed in the digital world.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <Button size="lg" className="w-full sm:w-auto">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-primary to-blue-600 blur-3xl opacity-20 absolute -z-10" />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
              alt="Profile"
              className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover border-8 border-background shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}