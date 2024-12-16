import {
  Code,
  Database,
  Globe2,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const services = [
  {
    icon: <Code className="w-10 h-10" />,
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks and best practices.'
  },
  {
    icon: <Database className="w-10 h-10" />,
    title: 'Backend Development',
    description: 'Robust and scalable server-side solutions for your applications.'
  },
  {
    icon: <Globe2 className="w-10 h-10" />,
    title: 'API Development',
    description: 'RESTful and GraphQL APIs designed for performance and scalability.'
  },
];

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Services I Offer</h2>
          <p className="text-muted-foreground">
            Comprehensive web development solutions tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {service.icon}
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Custom Solutions</li>
                  <li>Modern Technologies</li>
                  <li>Ongoing Support</li>
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}