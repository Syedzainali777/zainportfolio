import { Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

const navigation = {
  main: [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ],
  social: [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/syedzainali777/",
    },
    { name: "Email", icon: Mail, href: "mailto:ali4205359@gmail.com" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Zain
            </a>
            <p className="mt-4 text-muted-foreground max-w-xs">
              Creating beautiful and functional web experiences that help businesses grow.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Navigation</h3>
              <ul className="space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Mobile Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Cloud Solutions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex flex-wrap gap-2">
                {navigation.social.map((item) => (
                  <Button
                    key={item.name}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="rounded-full"
                  >
                    <a href={item.href}>
                      <item.icon className="w-5 h-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="border-t pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Zain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}