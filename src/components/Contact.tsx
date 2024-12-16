import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Phone',
    content: '+92 302 7346245',
    href: 'tel:+923027346245'
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Email',
    content: 'ali4205359@gmail.com',
    href: 'mailto:ali4205359@gmail.com'
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Location',
    content: 'Lahore, Pakistan',
    href: '#'
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground">
            Have a project in mind? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.href}
              className="group"
            >
              <Card className="h-full group-hover:border-primary transition-colors">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 p-3 rounded-2xl bg-primary/10 text-primary">
                    {info.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{info.title}</h3>
                  <p className="text-muted-foreground">{info.content}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        <Card className="max-w-2xl mx-auto mt-16">
          <CardContent className="p-6">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Syed zain ali" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="zain@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Project Inquiry" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  className="min-h-[150px]"
                />
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}