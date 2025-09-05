import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { TrendingUp, Target, Clock, CheckCircle, ArrowRight, Zap, BookOpen, Briefcase, Users } from "lucide-react";

export default function Roadmaps() {
  const roadmaps = [
    {
      id: 1,
      title: "Step by Step Guide",
      description: "Comprehensive preparation strategies with detailed phase planning",
      duration: "Variable",
      difficulty: "All Levels",
      students: "35K+",
      color: "from-blue-500 to-indigo-600",
      steps: ["Clear Instructions", "Visual Diagrams", "Practice Exercises", "Self-Assessment", "Progress Tracking"]
    },
    {
      id: 2,
      title: "Career Pathways",
      description: "Long-term career planning and development roadmaps for various fields",
      duration: "1-5 years",
      difficulty: "Structured",
      students: "22K+",
      color: "from-green-500 to-emerald-600",
      steps: ["Industry Analysis", "Skill Mapping", "Qualification Planning", "Experience Building", "Advancement Strategy"]
    },
    {
      id: 3,
      title: "Goal Achievers Stories",
      description: "Success stories and methodologies from top performers in various fields",
      duration: "Self-paced",
      difficulty: "Inspirational",
      students: "18K+",
      color: "from-purple-500 to-violet-600",
      steps: ["Personal Journeys", "Challenge Overcoming", "Study Methods", "Time Management", "Success Habits"]
    },
    // {
    //   id: 4,
    //   title: "Step by Step Guide: NEET",
    //   description: "Detailed strategy for medical entrance exam preparation",
    //   duration: "18 months",
    //   difficulty: "Advanced",
    //   students: "12K+",
    //   color: "from-orange-500 to-red-600",
    //   steps: ["Biology Mastery", "Chemistry Concepts", "Physics Problem Solving", "Daily Practice", "Test Series"]
    // },
    // {
    //   id: 5,
    //   title: "Career Pathways: Tech",
    //   description: "Technology career development tracks from beginner to expert",
    //   duration: "3-5 years",
    //   difficulty: "Progressive",
    //   students: "20K+",
    //   color: "from-teal-500 to-cyan-600",
    //   steps: ["Foundational Skills", "Specialization", "Project Building", "Industry Experience", "Leadership Development"]
    // },
    // {
    //   id: 6,
    //   title: "Goal Achievers Stories: IIM",
    //   description: "Success methodologies from top MBA entrance achievers",
    //   duration: "Variable",
    //   difficulty: "Motivational",
    //   students: "8K+",
    //   color: "from-pink-500 to-rose-600",
    //   steps: ["Study Strategies", "Mental Preparation", "Mock Analysis", "Interview Excellence", "Personal Growth"]
    // }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-cyan-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              Strategic Learning
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Success
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                {" "}Roadmaps
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Explore detailed guides, career pathways, and success stories designed to help you 
              navigate your educational and professional journey with confidence.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">3</div>
                <div className="text-sm text-gray-600">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-600">100+</div>
                <div className="text-sm text-gray-600">Pathways</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">24/7</div>
                <div className="text-sm text-gray-600">Access</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmaps Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roadmaps.map((roadmap) => (
              <Card key={roadmap.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                {/* Header with Gradient */}
                <div className={`h-24 bg-gradient-to-r ${roadmap.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative h-full flex items-center justify-center">
                    {roadmap.title.includes("Step by Step") ? (
                      <BookOpen className="w-8 h-8 text-white" />
                    ) : roadmap.title.includes("Career Pathways") ? (
                      <Briefcase className="w-8 h-8 text-white" />
                    ) : (
                      <Users className="w-8 h-8 text-white" />
                    )}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4 mt-4">
                    <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                      {roadmap.difficulty}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {roadmap.duration}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {roadmap.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {roadmap.description}
                  </p>
                  
                  <div className="mb-4 text-sm text-gray-600">
                    <span className="font-medium">{roadmap.students} students</span> following this path
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Components:</h4>
                    <div className="space-y-2">
                      {roadmap.steps.slice(0, 3).map((step, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                          <span className="text-gray-700">{step}</span>
                        </div>
                      ))}
                      {roadmap.steps.length > 3 && (
                        <div className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-gray-300 rounded-full mr-2"></div>
                          <span>+{roadmap.steps.length - 3} more elements</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <Button className={`w-full bg-gradient-to-r ${roadmap.color} hover:opacity-90 text-white`}>
                    <Zap className="mr-2 h-4 w-4" />
                    Explore Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Roadmap Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Different approaches to help you achieve your educational and career goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Step by Step Guides</h3>
              <p className="text-gray-600">
                Detailed instructional guides with clear milestones and actionable tasks for specific goals
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Career Pathways</h3>
              <p className="text-gray-600">
                Long-term development plans for various professional fields with advancement strategies
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Goal Achievers Stories</h3>
              <p className="text-gray-600">
                Inspirational success stories and methodologies from top performers to motivate and guide
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}