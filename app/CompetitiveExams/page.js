import React from "react";
import { Card, CardContent, CardHeader} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Trophy, Target, BookOpen, Clock, Users, ArrowRight, GraduationCap, Gavel, Briefcase, Landmark, Train, Shield, BookCheck, Award } from "lucide-react";

const exams = [
  {
    id: 1,
    name: "School Level Exams",
    description: "Olympiads, scholarships and other competitive exams for K-12 students",
    category: "School",
    difficulty: "Varied",
    duration: "Variable",
    attempts: "Varies",
    subjects: ["Mathematics", "Science", "English", "General Knowledge"],
    color: "from-blue-500 to-indigo-600",
    icon: BookOpen
  },
  // {
  //   id: 2,
  //   name: "Engineering & Medical Entrance",
  //   description: "JEE Main/Advanced, NEET and other engineering/medical entrance exams",
  //   category: "Technical",
  //   difficulty: "High",
  //   duration: "3-4 hours",
  //   attempts: "1-2 per year",
  //   subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
  //   color: "from-green-500 to-emerald-600",
  //   icon: GraduationCap
  // },
  {
    id: 3,
    name: "Law Entrance",
    description: "CLAT, AILET and other entrance exams for law programs",
    category: "Law",
    difficulty: "High",
    duration: "2-3 hours",
    attempts: "1 per year",
    subjects: ["Legal Reasoning", "Logical Reasoning", "English", "Current Affairs"],
    color: "from-purple-500 to-violet-600",
    icon: Gavel
  },
  {
    id: 4,
    name: "Management Entrance",
    description: "CAT, XAT, MAT and other MBA entrance examinations",
    category: "Management",
    difficulty: "High",
    duration: "2-3 hours",
    attempts: "1-2 per year",
    subjects: ["Quantitative Ability", "Verbal Ability", "Data Interpretation", "Logical Reasoning"],
    color: "from-orange-500 to-red-600",
    icon: Briefcase
  },
  // {
  //   id: 5,
  //   name: "Banking and Insurance",
  //   description: "SBI PO, IBPS, RBI Grade B and other banking sector exams",
  //   category: "Banking",
  //   difficulty: "Medium",
  //   duration: "2-3 hours",
  //   attempts: "1 per year",
  //   subjects: ["Quantitative Aptitude", "Reasoning", "English", "General Awareness"],
  //   color: "from-teal-500 to-cyan-600",
  //   icon: Landmark
  // },
  // {
  //   id: 6,
  //   name: "Railways Exams",
  //   description: "RRB NTPC, Group D and other railway recruitment exams",
  //   category: "Railways",
  //   difficulty: "Medium",
  //   duration: "2-3 hours",
  //   attempts: "As announced",
  //   subjects: ["General Intelligence", "Mathematics", "General Knowledge", "General Science"],
  //   color: "from-yellow-500 to-amber-600",
  //   icon: Train
  // },
  // {
  //   id: 7,
  //   name: "Defence Exams",
  //   description: "NDA, CDS, AFCAT and other armed forces entrance exams",
  //   category: "Defence",
  //   difficulty: "Medium",
  //   duration: "2-4 hours",
  //   attempts: "2 per year",
  //   subjects: ["Mathematics", "General Ability Test", "English", "General Knowledge"],
  //   color: "from-stone-500 to-gray-600",
  //   icon: Shield
  // },
  {
    id: 8,
    name: "Teaching and Education",
    description: "CTET, UGC NET, TET and other teaching eligibility exams",
    category: "Teaching",
    difficulty: "Medium",
    duration: "2-3 hours",
    attempts: "1-2 per year",
    subjects: ["Teaching Aptitude", "Subject Knowledge", "Pedagogy", "General Awareness"],
    color: "from-rose-500 to-pink-600",
    icon: BookCheck
  },
  {
    id: 9,
    name: "Other Professional Exams",
    description: "GATE, NIFT, NID and other specialized professional exams",
    category: "Professional",
    difficulty: "High",
    duration: "3 hours",
    attempts: "1 per year",
    subjects: ["Technical Knowledge", "General Aptitude", "Design Skills", "Domain Knowledge"],
    color: "from-indigo-500 to-blue-600",
    icon: Award
  }
];

export default function CompetitiveExams() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-6">
              <Trophy className="w-4 h-4 mr-2" />
              Competitive Excellence
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Competitive
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">
                {" "}Exam Prep
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Master India's most competitive exams with our comprehensive preparation materials, 
              expert guidance, and proven strategies for success.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">150+</div>
                <div className="text-sm text-gray-600">Exams Covered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">50K+</div>
                <div className="text-sm text-gray-600">Practice Questions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exams Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Exam Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive preparation resources for various competitive exams across different fields
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exams.map((exam) => (
              <Card key={exam.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                {/* Header with Gradient */}
                <div className={`h-24 bg-gradient-to-r ${exam.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <CardHeader className="relative h-full flex items-center justify-center">
                    <exam.icon className="w-8 h-8 text-white" />
                  </CardHeader>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4 mt-4">
                    <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                      {exam.category}
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className={exam.difficulty === "High" ? "border-red-500 text-red-700" : "border-yellow-500 text-yellow-700"}
                    >
                      {exam.difficulty}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {exam.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {exam.description}
                  </p>
                  
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Duration: {exam.duration}
                    </div>
                    <div className="flex items-center">
                      <Target className="w-4 h-4 mr-2" />
                      Attempts: {exam.attempts}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Subjects:</h4>
                    <div className="flex flex-wrap gap-1">
                      {exam.subjects.slice(0, 2).map((subject, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {subject}
                        </Badge>
                      ))}
                      {exam.subjects.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{exam.subjects.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <Button className={`w-full bg-gradient-to-r ${exam.color} hover:opacity-90 text-white`}>
                    Explore preparation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      {/* <section className="py-16 bg-gradient-to-r from-yellow-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Preparation?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of successful candidates who have achieved their goals with our exam preparation resources
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-yellow-600 hover:bg-yellow-50 px-8">
              Find Your Exam
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-yellow-600 px-8">
              Free Practice Tests
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  );
}