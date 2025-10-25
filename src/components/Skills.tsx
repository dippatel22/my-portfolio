import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Brain, Code, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'AI / Machine Learning',
      icon: <Brain className="h-6 w-6" />,
      skills: [
        { name: 'Python', level: 95 },
        { name: 'scikit-learn', level: 90 },
        { name: 'Pandas', level: 88 },
        { name: 'Predictive Modeling', level: 85 },
        { name: 'Data Visualization', level: 82 },
        { name: 'AI/ML', level: 88 }
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Web / Full-Stack',
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: 'React JS', level: 92 },
        { name: 'Next JS', level: 88 },
        { name: '.Net Core', level: 75 },
        { name: 'JavaScript', level: 90 },
        { name: 'Mobile Development', level: 80 }
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Programming Languages',
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: 'Python', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'JAVA', level: 80 },
        { name: 'C/C++', level: 75 },
        { name: 'C#', level: 70 }
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Database / Tools',
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: 'SQL', level: 85 },
        { name: 'Git', level: 90 },
        { name: 'MongoDB', level: 80 },
        { name: 'Firebase', level: 82 },
        { name: 'Cloudinary', level: 75 }
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning AI/ML, full-stack development, and modern technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-background/60 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                      style={{
                        background: `linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) ${skill.level}%, hsl(var(--muted)) ${skill.level}%, hsl(var(--muted)) 100%)`
                      }}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills as Badges */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-6">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'TensorFlow', 'PyTorch', 'Matplotlib', 'Seaborn', 'LIME', 'Ensemble Learning',
              'Hyperparameter Tuning', 'EDA', 'WebSockets', 'SQLite', 'Google Lens API',
              'REST APIs', 'Automation', 'Statistical Algorithms', 'Model Explainability'
            ].map((tech) => (
              <Badge key={tech} variant="secondary" className="px-3 py-1 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;