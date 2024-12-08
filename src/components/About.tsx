import { Code2, Database, Layout } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';

const skills = [
  'React', 'Node.js', 'TypeScript', 'MongoDB', 'Express', 'Tailwind CSS',
  'Next.js', 'GraphQL', 'Git', 'Redux'
];

const experiences = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: 'Frontend Development',
    description: 'Building responsive and performant user interfaces with modern frameworks and tools.'
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'Backend Development',
    description: 'Designing scalable APIs and managing databases for robust applications.'
  },
  {
    icon: <Layout className="w-8 h-8" />,
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user experiences that delight users.'
  }
];

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground">
            With over 3 years of experience in full-stack development, I specialize in building
            scalable web applications using modern technologies. My passion lies in creating
            efficient solutions that solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {experiences.map((exp, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-primary/10 text-primary">
                  {exp.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                <p className="text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-sm">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}