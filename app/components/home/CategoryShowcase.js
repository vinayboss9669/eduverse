import React from "react";
// import { Link } from "react-router-dom";
// import { createPageUrl } from "@/utils";
import { 
  BookOpen, 
  Trophy, 
  Building2, 
  MapPin, 
  TrendingUp, 
  Heart, 
  Briefcase, 
  HelpCircle,
  ArrowRight
} from "lucide-react";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";

const categories = [
  {
    id: 1,
    title: "Courses",
    description: "Comprehensive list of courses across multiple subjects and disciplines",
    icon: BookOpen,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
    page: "Courses",
    stats: "200+ Courses"
  },
  {
    id: 2,
    title: "Competitive Exams",
    description: "Specialized preparation for Law entrance, Management entrance, Teaching and Education, and other competitive exams.",
    icon: Trophy,
    color: "from-yellow-500 to-orange-600",
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-700",
    page: "CompetitiveExams",
    stats: "15+ Exams"
  },
  {
    id: 3,
    title: "Central & National Level Exams",
    description: "UPSC, SSC, Banking, Railway and other central government exam resources",
    icon: Building2,
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
    textColor: "text-green-700",
    page: "CentralExams",
    stats: "25+ Exams"
  },
  {
    id: 4,
    title: "State Level Exams",
    description: "State PSC, Police, Teacher and other state government exam preparation",
    icon: MapPin,
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-700",
    page: "StateExams",
    stats: "All States"
  },
  {
    id: 5,
    title: "Roadmaps & Strategy",
    description: "Strategic learning paths and proven methodologies for exam success",
    icon: TrendingUp,
    color: "from-teal-500 to-cyan-600",
    bgColor: "bg-teal-50",
    textColor: "text-teal-700",
    page: "Roadmaps",
    stats: "50+ Paths"
  },
  {
    id: 6,
    title: "Motivation & Inspiration",
    description: "Success stories, motivational content and mental wellness resources",
    icon: Heart,
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50",
    textColor: "text-pink-700",
    page: "Motivation",
    stats: "Daily Updates"
  },
  {
    id: 7,
    title: "Professional Skills",
    description: "Soft skills, communication, leadership and career development courses",
    icon: Briefcase,
    color: "from-indigo-500 to-blue-600",
    bgColor: "bg-indigo-50",
    textColor: "text-indigo-700",
    page: "ProfessionalSkills",
    stats: "30+ Skills"
  },
  {
    id: 8,
    title: "What's Next?",
    description: "Career guidance, higher education options and future planning resources",
    icon: HelpCircle,
    color: "from-gray-500 to-slate-600",
    bgColor: "bg-gray-50",
    textColor: "text-gray-700",
    page: "WhatsNext",
    stats: "Expert Advice"
  }
];

export default function CategoryShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Explore Learning
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              {" "}Categories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover comprehensive resources tailored to your educational journey. 
            From competitive exams to professional skills - we've got everything you need.
          </p>
        </div>
        
        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link key={category.id} href={`${category.page}`} passHref>
              <Card className="group relative overflow-hidden bg-white border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 `}></div>
                
                <CardContent className="relative p-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${category.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-all duration-500 mt-2`}>
                    <category.icon className={`w-8 h-8 ${category.textColor} group-hover:text-white transition-colors duration-500`} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-500">
                    {category.title}
                  </h3>
                  
                  <p className="text-gray-600 group-hover:text-white/90 mb-4 text-sm line-clamp-3 transition-colors duration-500">
                    {category.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-semibold ${category.textColor} group-hover:text-white/90 transition-colors duration-500`}>
                      {category.stats}
                    </span>
                    
                    <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-all duration-500">
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transform group-hover:translate-x-1 transition-all duration-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Not sure where to start? Let us guide you to the perfect learning path.
          </p>
          <Link href="/roadmaps" passHref>
            <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Get Personalized Roadmap
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}