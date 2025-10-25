import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { Mail, Phone, MapPin, Github, Linkedin, Download, Send, GraduationCap, Award, Globe } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  // No backend fetch
  toast({
    title: 'Message Sent!',
    description: 'Thank you for your message. It will be delivered to my email.',
  });
  setFormData({ name: '', email: '', subject: '', message: '' });
};





  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const educationData = [
    {
      level: "Masters in Information Technology",
      institution: "Parul University",
      duration: "2024 - Expected 2026",
      grade: "In Progress"
    },
    {
      level: "Bachelor of Technology in Information Technology",
      institution: "Madhuben and Bhanubhai Patel Institute of Technology",
      duration: "2020 - 2024",
      grade: "CGPA: 7.52"
    },
    {
      level: "12th Grade",
      institution: "Karuna Niketan School",
      duration: "2019 - 2020",
      grade: "62%"
    },
    {
      level: "10th Grade",
      institution: "Saraswati Highschool",
      duration: "2017 - 2018",
      grade: "79%"
    }
  ];

  const certifications = [
    "Cryptography and Hashing",
    "Initiating and Planning Projects",
    "Programming for Everybody",
    "Data Analysis and Visualisation",
    "Software Architect",
    "Introduction to Internet of Things and Embedded System",
    "Introduction to Cloud Computing",
    "Data Science Fundamentals for Data Analysis",
    "Developing Responsive Web Pages using HTML5 and CSS3"
  ];

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Gujarati", level: "Native" },
    { name: "Hindi", level: "Fluent" }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on innovative AI/ML projects or discuss full-stack development opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-0 bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-blue-600" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Mail className="h-4 w-4 text-blue-600" />
                  <div>
                    <p className="font-medium text-sm">Email</p>
                    <p className="text-sm text-muted-foreground">pateldip8422@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Phone className="h-4 w-4 text-green-600" />
                  <div>
                    <p className="font-medium text-sm">Phone</p>
                    <p className="text-sm text-muted-foreground">+91 97XXXXXX92</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <MapPin className="h-4 w-4 text-red-600" />
                  <div>
                    <p className="font-medium text-sm">Location</p>
                    <p className="text-sm text-muted-foreground">Gujarat, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-purple-600" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {educationData.map((edu, index) => (
                  <div key={index} className="p-3 rounded-lg bg-muted/50">
                    <p className="font-medium text-sm">{edu.level}</p>
                    <p className="text-xs text-muted-foreground">{edu.institution}</p>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-xs text-muted-foreground">{edu.duration}</p>
                      <Badge variant="secondary" className="text-xs">{edu.grade}</Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-0 bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-orange-600" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert, index) => (
                    <Badge key={index} variant="outline" className="text-xs px-2 py-1">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-green-600" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center p-2 rounded-lg bg-muted/50">
                    <span className="text-sm font-medium">{lang.name}</span>
                    <Badge variant="secondary" className="text-xs">{lang.level}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="flex flex-col gap-3">
              {/* ✅ Modified Resume Download Button */}
              <Button
  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
  onClick={() => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // ✅ Correct path
    link.download = 'Dip_Patel_Resume.pdf';
    link.click();
  }}
>
  <Download className="mr-2 h-4 w-4" />
  Download Resume
</Button>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a href="https://github.com/dippatel22" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a href="https://linkedin.com/in/dippatel22" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
                <p className="text-sm text-muted-foreground">
                  I'm always interested in discussing new opportunities, innovative projects, or potential collaborations.
                </p>
              </CardHeader>
              <CardContent>
                <form
  action="https://formsubmit.co/professionalreciver@gmail.com" // replace with your email
  method="POST"
  target="_blank" // optional: opens in a new tab
  className="space-y-6"
>
  <input type="hidden" name="_captcha" value="false" /> {/* disables captcha */}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, opportunity, or just say hello!"
                      className="min-h-[120px]"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Projects Completed', value: '10+', icon: '🚀' },
            { label: 'Technologies Mastered', value: '20+', icon: '💻' },
            { label: 'Certifications Earned', value: '9+', icon: '🏆' },
            { label: 'Years of Learning', value: '4+', icon: '📚' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 rounded-lg bg-muted/30">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
