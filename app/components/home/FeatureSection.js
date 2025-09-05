import React from "react";
import { Card, CardContent } from "../ui/card";
import { 
  Clock, 
  Users, 
  Award, 
  BookOpen, 
  Video, 
  Download,
  MessageCircle,
  Target
} from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Flexible Learning",
    description: "Learn at your own pace with 24/7 access to all resources and materials."
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Learn from experienced educators and industry professionals."
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "98% success rate with thousands of satisfied students."
  },
  {
    icon: Video,
    title: "HD Video Content",
    description: "Crystal clear video lectures with detailed explanations."
  },
  {
    icon: Download,
    title: "Offline Access",
    description: "Download content for studying anywhere, anytime."
  },
  {
    icon: MessageCircle,
    title: "Live Support",
    description: "Get your doubts cleared with live chat and Q&A sessions."
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Structured learning paths designed for specific exam goals."
  },
  {
    icon: BookOpen,
    title: "Rich Resources",
    description: "Comprehensive study materials, notes, and practice tests."
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              {" "}EduHub?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide everything you need to succeed in your educational journey with cutting-edge 
            technology and expert guidance.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group bg-white border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:from-blue-100 group-hover:to-teal-100 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full text-lg font-semibold shadow-lg">
            <Award className="w-6 h-6 mr-2" />
            Trusted by 50,000+ Students Worldwide
          </div>
        </div>
      </div>
    </section>
  );
}