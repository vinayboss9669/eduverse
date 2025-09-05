import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { 
  HelpCircle, 
  GraduationCap, 
  Briefcase, 
  TrendingUp, 
  MapPin, 
  Users,
  ArrowRight,
  Lightbulb,
  Target,
  BookOpen
} from "lucide-react";

export default function WhatsNext() {
  const pathways = [
    {
      id: 1,
      title: "Higher Education",
      description: "Explore advanced degree options and university programs",
      icon: GraduationCap,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      options: ["Master's Programs", "PhD Options", "International Universities", "Scholarship Opportunities"],
      audience: "Graduates & Working Professionals"
    },
    {
      id: 2,
      title: "Career Transition",
      description: "Switch careers or industries with strategic guidance",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      options: ["Industry Analysis", "Skill Gap Assessment", "Transition Planning", "Network Building"],
      audience: "Experienced Professionals"
    },
    {
      id: 3,
      title: "Entrepreneurship",
      description: "Start your own business with comprehensive startup guidance",
      icon: Lightbulb,
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-50",
      options: ["Business Planning", "Funding Options", "Legal Framework", "Market Research"],
      audience: "Aspiring Entrepreneurs"
    },
    {
      id: 4,
      title: "Government Sector",
      description: "Navigate opportunities in public service and administration",
      icon: MapPin,
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      options: ["Civil Services", "Public Enterprises", "Teaching Jobs", "Research Positions"],
      audience: "Service-Oriented Individuals"
    },
    {
      id: 5,
      title: "Corporate Ladder",
      description: "Accelerate your growth in the corporate world",
      icon: Briefcase,
      color: "from-teal-500 to-cyan-600",
      bgColor: "bg-teal-50",
      options: ["Leadership Roles", "Specialization Paths", "Industry Expertise", "Executive Programs"],
      audience: "Corporate Professionals"
    },
    {
      id: 6,
      title: "Freelancing & Consulting",
      description: "Build an independent career as a freelancer or consultant",
      icon: Users,
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50",
      options: ["Skill Monetization", "Client Acquisition", "Brand Building", "Service Delivery"],
      audience: "Independent Workers"
    }
  ];

  const resources = [
    {
      title: "Career Assessment",
      description: "Discover your strengths and ideal career path",
      icon: Target,
      action: "Take Assessment"
    },
    {
      title: "1-on-1 Counseling",
      description: "Personal guidance from career experts",
      icon: Users,
      action: "Book Session"
    },
    {
      title: "Industry Reports",
      description: "Latest trends and opportunities in various sectors",
      icon: BookOpen,
      action: "Download Reports"
    },
    {
      title: "Success Stories",
      description: "Learn from others who've made successful transitions",
      icon: TrendingUp,
      action: "Read Stories"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4 mr-2" />
              Future Planning
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What's
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-slate-600">
                {" "}Next?
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Navigate your future with confidence. Get expert guidance on career paths, 
              higher education options, and life decisions that shape your success.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-600">500+</div>
                <div className="text-sm text-gray-600">Career Paths</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-600">Expert</div>
                <div className="text-sm text-gray-600">Counselors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">10K+</div>
                <div className="text-sm text-gray-600">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">24/7</div>
                <div className="text-sm text-gray-600">Guidance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Pathways */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Your Options</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Multiple pathways to success - find the one that aligns with your goals and aspirations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pathways.map((pathway) => (
              <Card key={pathway.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${pathway.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                    <pathway.icon className="w-8 h-8 text-gray-700" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {pathway.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {pathway.description}
                  </p>
                  
                  <div className="mb-4">
                    <Badge variant="outline" className="text-xs text-gray-600 border-gray-300">
                      For: {pathway.audience}
                    </Badge>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Areas:</h4>
                    <div className="space-y-1">
                      {pathway.options.slice(0, 3).map((option, index) => (
                        <div key={index} className="text-sm text-gray-600 flex items-center">
                          <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                          {option}
                        </div>
                      ))}
                      {pathway.options.length > 3 && (
                        <div className="text-sm text-gray-500">
                          +{pathway.options.length - 3} more areas
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <Button className={`w-full bg-gradient-to-r ${pathway.color} hover:opacity-90 text-white`}>
                    Explore Path
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Decision-Making Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tools and resources to help you make informed decisions about your future
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <resource.icon className="w-8 h-8 text-gray-600" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    {resource.description}
                  </p>
                  
                  <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                    {resource.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-600 to-slate-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Confused About Your Next Step?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our career counselors are here to provide personalized guidance based on your unique situation and goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-gray-700 hover:bg-gray-100 px-8">
              <Users className="mr-2 h-5 w-5" />
              Talk to Counselor
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-700 px-8">
              <Target className="mr-2 h-5 w-5" />
              Take Career Quiz
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}