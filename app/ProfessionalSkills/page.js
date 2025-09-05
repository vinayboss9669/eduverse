import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  MessageCircle, 
  Users, 
  Target, 
  Brain, 
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Laptop,
  Lightbulb,
  Sparkles,
  GraduationCap,
  Layers
} from "lucide-react";

export default function ProfessionalSkills() {
  const skillCategories = [
    {
      id: 1,
      title: "Digital & Freelancing Skills",
      description: "Master essential digital tools and strategies for successful freelance careers",
      icon: Laptop,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      skills: ["Digital Marketing", "Content Creation", "Client Management", "Portfolio Building"],
      duration: "6-8 weeks",
      level: "Beginner to Advanced"
    },
    {
      id: 2,
      title: "Business, Startups & Entrepreneurship Skills",
      description: "Build foundational knowledge and practical skills to launch and grow businesses",
      icon: Lightbulb,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      skills: ["Business Planning", "Market Research", "Fundraising", "Growth Strategies"],
      duration: "8-10 weeks",
      level: "Intermediate to Advanced"
    },
    {
      id: 3,
      title: "Creative & Entertainment Industry Skills",
      description: "Develop professional capabilities for success in creative and media sectors",
      icon: Sparkles,
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-50",
      skills: ["Visual Design", "Content Production", "Brand Development", "Creative Strategy"],
      duration: "4-6 weeks",
      level: "Beginner to Intermediate"
    },
    {
      id: 4,
      title: "Global & Lifestyle Skills",
      description: "Acquire skills for international careers and balanced professional living",
      icon: Globe,
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      skills: ["Cross-cultural Communication", "Remote Work", "Global Networking", "Work-Life Balance"],
      duration: "3-4 weeks",
      level: "Beginner to Intermediate"
    },
    {
      id: 5,
      title: "Technology & Future Skills",
      description: "Stay ahead with cutting-edge technical skills for tomorrow's workplace",
      icon: Brain,
      color: "from-teal-500 to-cyan-600",
      bgColor: "bg-teal-50",
      skills: ["AI & Machine Learning", "Data Analytics", "Automation", "Emerging Technologies"],
      duration: "4-5 weeks",
      level: "Beginner to Advanced"
    },
    {
      id: 6,
      title: "Education & Professional Coaching Skills",
      description: "Learn effective teaching and mentoring techniques for professional development",
      icon: GraduationCap,
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50",
      skills: ["Instructional Design", "Coaching Methods", "Learning Assessment", "Program Development"],
      duration: "6-8 weeks",
      level: "All Levels"
    },
    {
      id: 7,
      title: "Other Specialized Skills",
      description: "Develop niche capabilities that set you apart in specialized industries",
      icon: Layers,
      color: "from-indigo-500 to-violet-600",
      bgColor: "bg-indigo-50",
      skills: ["Industry-Specific Tools", "Specialized Methods", "Technical Certifications", "Advanced Practices"],
      duration: "Variable",
      level: "All Levels"
    }
  ];

  const features = [
    {
      icon: Star,
      title: "Expert Instructors",
      description: "Learn from industry professionals and certified trainers"
    },
    {
      icon: Users,
      title: "Interactive Learning",
      description: "Group exercises, role-plays, and real-world scenarios"
    },
    {
      icon: CheckCircle,
      title: "Practical Application",
      description: "Hands-on projects and workplace simulations"
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Skills that directly impact your professional advancement"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4 mr-2" />
              Career Excellence
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Professional
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
                {" "}Skills Development
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Master essential skills for the modern workplace across digital, creative, and entrepreneurial domains. 
              Develop capabilities that drive career success in today's evolving professional landscape.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600">30+</div>
                <div className="text-sm text-gray-600">Skill Modules</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">25K+</div>
                <div className="text-sm text-gray-600">Professionals Trained</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">96%</div>
                <div className="text-sm text-gray-600">Career Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">Certified</div>
                <div className="text-sm text-gray-600">Programs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Skill Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive professional development across key competency areas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <Card key={category.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${category.bgColor} rounded-xl flex items-center justify-center mb-4 mt-2`}>
                    <category.icon className="w-8 h-8 text-indigo-600" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {category.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {category.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                    <div>
                      <Clock className="w-4 h-4 inline mr-1" />
                      {category.duration}
                    </div>
                    <div>
                      <TrendingUp className="w-4 h-4 inline mr-1" />
                      {category.level}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Skills:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {category.skills.map((skill, index) => (
                        <div key={index} className="text-xs text-gray-600 flex items-center">
                          <CheckCircle className="w-3 h-3 mr-1 text-green-500" />
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button className={`w-full bg-gradient-to-r ${category.color} hover:opacity-90 text-white`}>
                    Start Learning
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Professional Skills Program</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our programs are designed with real-world application in mind
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-indigo-600" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your Career?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers with our skill development programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 px-8">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600 px-8">
              View Course Catalog
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}