import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Profile Image (enlarged, border removed) */}
          <div className="relative mx-auto w-40 h-40">
            <img
              src="../public/emoji.webp"
              alt="Profile"
              className="w-full h-full rounded-full object-cover shadow-lg"
            />
          </div>

          {/* Name and Title */}
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Dip Patel
            </h1>
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                AI/ML Developer & Full Stack Engineer
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Focused on building and deploying end-to-end predictive models using Python. 
                Delivering innovative solutions through React/Next.js web and mobile applications.
              </p>
            </div>
          </div>

          {/* Skills Badges */}
          <div className="flex flex-wrap justify-center gap-2 animate-in fade-in delay-300 duration-700">
            {['Python', 'React.js', 'Machine Learning', 'Next.js', 'AI/ML', 'Full Stack'].map((skill) => (
              <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">
                {skill}
              </Badge>
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground animate-in fade-in delay-500 duration-700">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>pateldip8422@gmail.com</span>
            </div>
            
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in delay-700 duration-700">
            <Button 
              onClick={() => scrollToSection('projects')} 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              View My Work
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="!bg-transparent !hover:bg-transparent border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950"
            >
              Get In Touch
              <Mail className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 animate-in fade-in delay-1000 duration-700">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com/dippatel22" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://linkedin.com/in/dippatel22" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
