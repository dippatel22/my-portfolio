import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Github, Heart, MessageSquare, FileText, ShoppingCart, Search, Database, Bot, BarChart3, Smartphone } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Predict Cardiovascular Risk in Diabetes Patient',
      description: 'Comprehensive end-to-end predictive application to assess short-term vs. long-term cardiovascular risk in diabetic patients, addressing key research gaps.',
      icon: <Heart className="h-6 w-6" />,
      features: [
        'Model Explainability (LIME) for feature contributions',
        'Multi-model architecture with 7 different ML models',
        'Full analysis reporting with personalized risk-mitigation suggestions',
        'Transparent insights for high-risk predictions'
      ],
      technologies: ['Python', 'scikit-learn', 'LIME', 'Machine Learning', 'Healthcare AI'],
      category: 'AI/ML',
      gradient: 'from-red-500 to-pink-500',
      hasGithub: false
    },
    {
      title: 'CRUD Application with Image Management',
      description: 'Full-featured CRUD application using React.js where users can perform complete CRUD operations including image uploads, descriptions, and comprehensive data management.',
      icon: <Database className="h-6 w-6" />,
      features: [
        'Complete CRUD operations for all data types',
        'Image upload and management system',
        'Description and metadata handling',
        'User-friendly interface with real-time updates'
      ],
      technologies: ['React.js', 'CRUD Operations', 'Image Management', 'Local Storage'],
      category: 'Web Development',
      gradient: 'from-green-500 to-emerald-500',
      hasGithub: true,
      githubLink: 'https://github.com/dippatel22/crud-app-reactjs'
    },
    {
      title: 'Sentiment Prediction using AI',
      description: 'Advanced sentiment analysis model that can predict emotions of statements, classifying them as positive, negative, or neutral with high accuracy.',
      icon: <BarChart3 className="h-6 w-6" />,
      features: [
        'Real-time sentiment prediction',
        'Multi-class emotion classification (positive/negative/neutral)',
        'High accuracy prediction model',
        'Interactive user interface for testing'
      ],
      technologies: ['Python', 'NLP', 'Sentiment Analysis', 'Machine Learning', 'Text Processing'],
      category: 'AI/ML',
      gradient: 'from-blue-500 to-cyan-500',
      hasGithub: false
    },
    {
      title: 'Online Shopping Application',
      description: 'Feature-rich e-commerce application with local storage, trending sections, personalized suggestions based on user interactions, and complete authentication system.',
      icon: <ShoppingCart className="h-6 w-6" />,
      features: [
        'Local storage for persistent data',
        'Trending section with popular products',
        'Personalized suggestions based on user interactions',
        'Complete user authentication system'
      ],
      technologies: ['React.js', 'Local Storage', 'Authentication', 'E-commerce', 'User Analytics'],
      category: 'Web Development',
      gradient: 'from-purple-500 to-indigo-500',
      hasGithub: false,
    },
    {
      title: 'Web Scraping Automation Bot',
      description: 'Automated web scraping project using Selenium that can perform intelligent web scraping tasks with bot automation capabilities.',
      icon: <Bot className="h-6 w-6" />,
      features: [
        'Selenium-based automation framework',
        'Intelligent web scraping algorithms',
        'Automated bot for data extraction',
        'Configurable scraping parameters'
      ],
      technologies: ['Python', 'Selenium', 'Web Scraping', 'Automation', 'Data Extraction'],
      category: 'Automation',
      gradient: 'from-orange-500 to-red-500',
      hasGithub: false
    },
    {
      title: 'Responsive Mobile App',
      description: 'Cross-platform mobile application with responsive design, optimized user experience, and modern mobile development practices.',
      icon: <Smartphone className="h-6 w-6" />,
      features: [
        'Responsive design for all screen sizes',
        'Cross-platform compatibility',
        'Modern UI/UX principles',
        'Optimized performance and user experience'
      ],
      technologies: ['React Native', 'Mobile Development', 'Responsive Design', 'Cross-platform'],
      category: 'Mobile Development',
      gradient: 'from-teal-500 to-blue-500',
      hasGithub: false
    },
    {
      title: 'Prompt Management Application',
      description: 'Full end-to-end web application for user-generated prompt management, supporting sharing, saving, and CRUD functionality with real-time trending.',
      icon: <MessageSquare className="h-6 w-6" />,
      features: [
        'Real-time trending section using database analytics',
        'Secure user authentication and personalized profiles',
        'CRUD functionality for prompt management',
        'Content discoverability and user engagement features'
      ],
      technologies: ['Next.js', 'React', 'Database Analytics', 'Authentication'],
      category: 'Web Development',
      gradient: 'from-indigo-500 to-purple-500',
      hasGithub: true,
      githubLink: 'https://github.com/dippatel22/prompt-management-app'
    },
    {
      title: 'Invoice Management System',
      description: 'Complete application for invoice creation, management, and tracking, streamlining administrative workflows with data-driven insights.',
      icon: <FileText className="h-6 w-6" />,
      features: [
        'Dashboard with auto-generated graphical monthly analysis',
        'Invoice creation, management, and tracking',
        'User authentication and secure data persistence',
        'Data-driven insights into billing trends'
      ],
      technologies: ['React.js', 'Dashboard', 'Data Visualization', 'Authentication'],
      category: 'Web Development',
      gradient: 'from-pink-500 to-rose-500',
      hasGithub: true,
      githubLink: 'https://github.com/dippatel22/invoice-management-system'
    },
    {
      title: 'Real-time Chat Application',
      description: 'End-to-end real-time chat application featuring secure one-on-one and group chat functionality with instant message delivery.',
      icon: <MessageSquare className="h-6 w-6" />,
      features: [
        'WebSockets (Firebase) for instant message delivery',
        'Secure one-on-one and group chat functionality',
        'Robust user authentication and state management',
        'Efficient handling of concurrent users'
      ],
      technologies: ['Next.js', 'WebSockets', 'Firebase', 'Real-time', 'Authentication'],
      category: 'Web Development',
      gradient: 'from-cyan-500 to-blue-500',
      hasGithub: true,
      githubLink: 'https://github.com/dippatel22/chat-web-app'
    },
    {
      title: 'Heart Disease Prediction using ML',
      description: 'End-to-end predictive application leveraging Python and scikit-learn for comprehensive heart disease prediction with advanced ML techniques.',
      icon: <Heart className="h-6 w-6" />,
      features: [
        'Full Exploratory Data Analysis (EDA) and preprocessing',
        'Ensemble Learning and Hyperparameter Tuning',
        'High model accuracy for predictions',
        'Complete user experience with Python backend'
      ],
      technologies: ['Python', 'scikit-learn', 'EDA', 'Ensemble Learning', 'Healthcare AI'],
      category: 'AI/ML',
      gradient: 'from-red-500 to-orange-500',
      hasGithub: true,
      githubLink: 'https://github.com/dippatel22/heart-disease-ml'
    },
    {
      title: 'Product Price Comparison Tool',
      description: 'Comprehensive price comparison tool allowing users to upload product images for analysis via Google Lens API with real-time pricing data.',
      icon: <Search className="h-6 w-6" />,
      features: [
        'Google Lens API integration for image analysis',
        'Multiple retail APIs (Amazon, Flipkart) integration',
        'Real-time product listings and pricing data',
        'Image-based product recognition and comparison'
      ],
      technologies: ['React', 'Google Lens API', 'REST APIs', 'E-commerce'],
      category: 'Web Development',
      gradient: 'from-yellow-500 to-orange-500',
      hasGithub: true,
      githubLink: 'https://github.com/dippatel22/find-my-product'
    }
  ];

  const categories = ['All', 'AI/ML', 'Web Development', 'Mobile Development', 'Automation'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions spanning AI/ML applications, web development, mobile development, automation, and end-to-end system implementations
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-2 p-1 bg-background rounded-lg border">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-background/80 backdrop-blur-sm overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} text-white`}>
                    {project.icon}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors line-clamp-2">
                  {project.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {project.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <div className="w-1 h-1 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                        <span className="line-clamp-2">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs px-2 py-0.5">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="secondary" className="text-xs px-2 py-0.5">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2 pt-2">
                  {project.hasGithub ? (
                    <Button size="sm" variant="outline" className="w-full text-xs" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3 mr-1" />
                        View Code
                      </a>
                    </Button>
                  ) : (
                    <Button size="sm" variant="outline" className="w-full text-xs opacity-60 cursor-not-allowed" disabled>
                      <Github className="h-3 w-3 mr-1" />
                      Private Project
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/dippatel22" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View All Public Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
