import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Calendar, MapPin, Building2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Machine Learning Intern',
      company: 'BrainyBeam Technologies Pvt Ltd',
      location: 'Ahmedabad, Gujarat',
      duration: 'March 2024 - June 2024',
      type: 'Internship',
      achievements: [
        'Engineered & deployed end-to-end Heart Disease Prediction model application, optimizing user access to predictive tools',
        'Conducted extensive EDA & feature selection using Pandas and scikit-learn to refine predictive model accuracy',
        'Collaborated to integrate innovative ML models, streamlining key data processing pipelines and workflows'
      ],
      technologies: ['Python', 'scikit-learn', 'Pandas', 'Machine Learning', 'EDA']
    },
    {
      title: 'Machine Learning Intern',
      company: 'Technook',
      location: 'Remote',
      duration: 'November 2023 - January 2024',
      type: 'Internship',
      achievements: [
        'Engineered specialized Sentiment Analysis model, improving classification accuracy by 5% via iterative optimization',
        'Prototyped & deployed a UI for the Sentiment Analysis model, enabling end users to interact with real time predictions',
        'Created internal data visualization tools to simplify the analysis of complex numerical data and model performance metrics'
      ],
      technologies: ['Python', 'NLP', 'Sentiment Analysis', 'UI Development', 'Data Visualization']
    },
    {
      title: 'Artificial Intelligence Intern',
      company: 'Technook',
      location: 'Remote',
      duration: 'July 2023 - September 2023',
      type: 'Internship',
      achievements: [
        'Designed & developed AI models, including an Image Recognition prototype, supporting advanced predictive analytics',
        'Applied iterative data analysis and statistical algorithms, successfully improving predictive accuracy by an estimated 10%',
        'Engineered internal data visualization scripts (Matplotlib/Seaborn) for real time model output interpretation',
        'Streamlined survey data collection and pre-processing methods, significantly improving subsequent AI model reliability'
      ],
      technologies: ['AI', 'Image Recognition', 'Statistical Algorithms', 'Matplotlib', 'Seaborn']
    },
    {
      title: 'Mobile App Developer Intern',
      company: 'BrainyBeam Technologies Pvt Ltd',
      location: 'Ahmedabad, Gujarat',
      duration: 'May 2023 - June 2023',
      type: 'Internship',
      achievements: [
        'Developed a feature-rich mobile shopping application, prioritizing a superior user-friendly experience and modern UI design',
        'Engineered a foundational recommendation system (trending/personalized suggestions) based on user interaction data',
        'Implemented data persistence using SQLite on the backend for efficient local storage and retrieval of user data'
      ],
      technologies: ['Mobile Development', 'UI/UX Design', 'SQLite', 'Recommendation Systems']
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey through innovative AI/ML projects and full-stack development across leading technology companies
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-background z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 ml-12 md:ml-0' : 'md:pl-8 ml-12 md:ml-0'}`}>
                  <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-background/80 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between flex-wrap gap-2">
                        <div>
                          <CardTitle className="text-xl mb-2 group-hover:text-blue-600 transition-colors">
                            {exp.title}
                          </CardTitle>
                          <div className="flex items-center gap-2 text-muted-foreground mb-2">
                            <Building2 className="h-4 w-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                        </div>
                        <Badge variant="secondary" className="shrink-0">
                          {exp.type}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;