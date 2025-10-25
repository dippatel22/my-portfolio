import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Brain, Code2, Rocket, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: 'AI/ML Expertise',
      description: 'Specialized in building end-to-end predictive models using Python, scikit-learn, and advanced machine learning techniques.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      title: 'Full-Stack Development',
      description: 'Proficient in React/Next.js web and mobile application development, delivering complete user experiences.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Problem Solver',
      description: 'Focused on creating innovative solutions that bridge the gap between complex AI models and user-friendly applications.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: 'Innovation Driven',
      description: 'Passionate about leveraging cutting-edge technologies to solve real-world problems and improve user experiences.',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate AI/ML Developer with a strong foundation in full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                I'm an <strong className="text-foreground">AI/ML Developer</strong> focused on building and deploying 
                end-to-end predictive models using Python. With a passion for innovation, I deliver solutions to users 
                by driving <strong className="text-foreground">React/Next.js</strong> web and mobile application development.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing my <strong className="text-foreground">Master's Degree in Information Technology </strong> 
                at Parul University, I bring hands-on experience from multiple internships where I've worked on 
                cutting-edge projects ranging from healthcare AI to e-commerce applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My expertise spans across <strong className="text-foreground">machine learning model development</strong>, 
                <strong className="text-foreground"> full-stack web development</strong>, and 
                <strong className="text-foreground"> mobile application creation</strong>. I'm particularly passionate 
                about creating solutions that make complex AI accessible to everyday users.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold">What I'm Currently Working On:</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Advanced ML Models',
                  'React Applications',
                  'Healthcare AI',
                  'Data Visualization',
                  'Model Explainability'
                ].map((item) => (
                  <Badge key={item} variant="secondary" className="px-3 py-1">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 p-8 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 p-1 mx-auto">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                   <img src="/profile_pic.webp" alt="Profile" className="w-full h-full object-cover rounded-full" />


                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Dip Patel</h3>
                  <p className="text-muted-foreground">AI/ML Developer</p>
                  <div className="flex justify-center gap-2">
                    <Badge variant="outline">Python Expert</Badge>
                    <Badge variant="outline">React Developer</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-background/60 backdrop-blur-sm">
              <CardContent className="p-6 text-center space-y-4">
                <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${highlight.gradient} text-white`}>
                  {highlight.icon}
                </div>
                <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border">
            <span className="text-sm font-medium">💡 Fun Fact:</span>
            <span className="text-sm text-muted-foreground">
              I've improved model accuracy by up to 10% through iterative optimization and love turning complex data into actionable insights!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;