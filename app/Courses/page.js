import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  GraduationCap, 
  Award, 
  Microscope, 
  FileText, 
  BookmarkCheck,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Globe,
  TrendingUp
} from "lucide-react";

export default function Courses() {
  const courseCategories = [
    {
      id: 1,
      title: "School Education",
      description: "Comprehensive K-12 courses covering all subjects for primary and secondary education",
      icon: BookOpen,
      color: "from-sky-400 to-blue-500",
      bgColor: "bg-sky-100",
      borderColor: "border-sky-200",
      iconColor: "text-sky-600",
      skills: ["Mathematics", "Science", "Languages", "Social Studies"],
      duration: "Academic Year",
      level: "Grade 1-12"
    },
    {
      id: 2,
      title: "Undergraduate Courses",
      description: "Bachelor's degree programs across various disciplines and specializations",
      icon: GraduationCap,
      color: "from-emerald-400 to-green-500",
      bgColor: "bg-emerald-100",
      borderColor: "border-emerald-200",
      iconColor: "text-emerald-600",
      skills: ["Arts & Humanities", "Science & Tech", "Business", "Engineering"],
      duration: "3-4 years",
      level: "Bachelor's Degree"
    },
    {
      id: 3,
      title: "Postgraduate Courses",
      description: "Master's level programs for advanced academic and professional development",
      icon: Award,
      color: "from-violet-400 to-purple-500",
      bgColor: "bg-violet-100",
      borderColor: "border-violet-200",
      iconColor: "text-violet-600",
      skills: ["Specialized Study", "Research Methods", "Advanced Theory", "Industry Practice"],
      duration: "1-2 years",
      level: "Master's Degree"
    },
    {
      id: 4,
      title: "Doctoral & Research",
      description: "PhD programs and advanced research opportunities across disciplines",
      icon: Microscope,
      color: "from-amber-400 to-orange-500",
      bgColor: "bg-amber-100",
      borderColor: "border-amber-200",
      iconColor: "text-amber-600",
      skills: ["Original Research", "Thesis Development", "Academic Publishing", "Teaching"],
      duration: "3-5 years",
      level: "Doctorate"
    },
    {
      id: 5,
      title: "Diploma & Certificate",
      description: "Short-term professional certifications and specialized diplomas",
      icon: FileText,
      color: "from-teal-400 to-cyan-500",
      bgColor: "bg-teal-100",
      borderColor: "border-teal-200",
      iconColor: "text-teal-600",
      skills: ["Technical Skills", "Industry Knowledge", "Practical Training", "Professional Development"],
      duration: "3-12 months",
      level: "Certificate/Diploma"
    },
    {
      id: 6,
      title: "Professional Development",
      description: "Continuing education and skill enhancement for working professionals",
      icon: BookmarkCheck,
      color: "from-rose-400 to-pink-500",
      bgColor: "bg-rose-100",
      borderColor: "border-rose-200",
      iconColor: "text-rose-600",
      skills: ["Leadership", "Industry Updates", "Specialized Training", "Career Advancement"],
      duration: "Variable",
      level: "All Levels"
    }
  ];

  const features = [
    {
      icon: Star,
      title: "Industry-Leading Content",
      description: "Curriculum developed by experts and regularly updated",
      color: "bg-gradient-to-br from-sky-100 to-blue-100",
      iconColor: "text-blue-500"
    },
    {
      icon: Users,
      title: "Live Coaching",
      description: "Weekly live sessions with instructors for personalized guidance",
      color: "bg-gradient-to-br from-emerald-100 to-green-100",
      iconColor: "text-green-500"
    },
    {
      icon: CheckCircle,
      title: "Project-Based Learning",
      description: "Build a portfolio of real-world projects as you learn",
      color: "bg-gradient-to-br from-violet-100 to-purple-100",
      iconColor: "text-purple-500"
    },
    {
      icon: TrendingUp,
      title: "Career Support",
      description: "Resume reviews, interview prep, and job placement assistance",
      color: "bg-gradient-to-br from-amber-100 to-orange-100",
      iconColor: "text-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-100 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white shadow-sm text-blue-700 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              Academic Excellence
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Academic
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {" "}Education Programs
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive academic programs from school education to doctoral research,
              designed to build a strong educational foundation at every stage of learning.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Programs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600">100K+</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-violet-600">95%</div>
                <div className="text-sm text-gray-600">Graduation Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">200+</div>
                <div className="text-sm text-gray-600">Partner Institutions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Educational Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our wide range of academic programs across all educational levels
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseCategories.map((category) => (
              <Card key={category.id} className={`group overflow-hidden border-2 ${category.borderColor} rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2`}>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-14 h-14 ${category.bgColor} rounded-full flex items-center justify-center mr-4 mt-2`}>
                      <category.icon className={`w-7 h-7 ${category.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {category.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 text-sm">
                    {category.description}
                  </p>
                  
                  <div className="flex justify-between mb-6 text-sm text-gray-500 border-t border-b py-3 border-gray-100">
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
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Areas:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {category.skills.map((skill, index) => (
                        <div key={index} className={`text-xs px-2 py-1 rounded-full ${category.bgColor} ${category.iconColor} flex items-center justify-center`}>
                          <CheckCircle className="w-3 h-3 mr-1" />
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button className={`w-full bg-gradient-to-r ${category.color} hover:opacity-90 text-white shadow-md`}>
                    Explore Programs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our educational approach focuses on quality, accessibility, and real-world application
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className={`h-24 ${feature.color} flex items-center justify-center`}>
                  <feature.icon className={`w-12 h-12 ${feature.iconColor}`} />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Begin Your Educational Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our academic community and take the next step in your educational development
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 rounded-full shadow-lg">
              Browse All Programs
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 rounded-full">
              Request Information
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  );
}