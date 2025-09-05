import React from "react";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  Building2,
  Users,
  Calendar,
  BookOpen,
  ArrowRight,
  GraduationCap,
  Landmark,
  TrendingUp,
  Briefcase,
  FileText,
  HeartPulse,
  BookCheck,
  Gavel,
  Shield,
  Star,
  ChevronRight,
} from "lucide-react";

export default function CentralExams() {
  const exams = [
  {
    id: 1,
    name: "1. UPSC Exams",
    fullName: "IAS / IPS / IFS",
    description:
      "Premier examination for administrative, police and foreign services",
    posts: "700+ Posts",
    frequency: "Yearly (May-June)",
    stages: ["Preliminary", "Main", "Interview"],
    color: "bg-indigo-600",
    bgColor: "bg-indigo-50",
    textColor: "text-indigo-600",
    borderColor: "border-indigo-200",
    icon: Building2,
  },
  {
    id: 2,
    name: "2. SSC Exams",
    fullName: "CGL, CHSL, MTS, Stenographer, GD",
    description:
      "Various central government jobs for different educational qualifications",
    posts: "10000+ Posts",
    frequency: "Multiple times",
    stages: ["Tier I", "Tier II", "Tier III", "Skill Test"],
    color: "bg-green-600",
    bgColor: "bg-green-50",
    textColor: "text-green-600",
    borderColor: "border-green-200",
    icon: Briefcase,
  },
  {
    id: 3,
    name: "3. Banking & Insurance Exams",
    fullName: "RBI, IBPS, SBI, Insurance",
    description: "Prestigious banking positions in India's central bank",
    posts: "600+ Posts",
    frequency: "Yearly",
    stages: ["Preliminary", "Main", "Interview"],
    color: "bg-blue-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    borderColor: "border-blue-200",
    icon: Landmark,
  },
 
  {
    id: 4,
    name: "4.Engineering Exams",
    fullName: "IES",
    description:
      "Engineering recruitment for prestigious government departments",
    posts: "500+ Posts",
    frequency: "Yearly",
    stages: ["Preliminary", "Main", "Interview"],
    color: "bg-red-600",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
    borderColor: "border-red-200",
    icon: GraduationCap,
  },
  
  {
    id: 5,
    name: "5. Defence Entrance Exams",
    fullName: "NDA / CDS",
    description: "Entry into defence services and military academies",
    posts: "400+ Vacancies",
    frequency: "Twice a year",
    stages: ["Written", "SSB Interview", "Medical"],
    color: "bg-stone-600",
    bgColor: "bg-stone-50",
    textColor: "text-stone-600",
    borderColor: "border-stone-200",
    icon: Shield,
  },
  
  {
    id: 6,
    name: "6. Medical Exams",
    fullName: "National Eligibility Entrance Test",
    description: "Medical entrance for MBBS and BDS programs nationwide",
    posts: "80000+ Seats",
    frequency: "Yearly (May)",
    stages: ["Single Exam", "Counseling"],
    color: "bg-teal-600",
    bgColor: "bg-teal-50",
    textColor: "text-teal-600",
    borderColor: "border-teal-200",
    icon: HeartPulse,
  },
 
  
  
  {
    id: 7,
    name: "7. Railways Entrance Exams",
    fullName: "Central Armed Police Forces",
    description:
      "Recruitment for Assistant Commandants in paramilitary forces",
    posts: "400+ Posts",
    frequency: "Yearly",
    stages: ["Written", "Physical", "Interview", "Medical"],
    color: "bg-emerald-700",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-700",
    borderColor: "border-emerald-200",
    icon: Shield,
  },
];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
              <Building2 className="w-4 h-4 mr-2" />
              Central Government
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Central &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                {" "}
                National Level Exams
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive preparation for central government examinations
              including UPSC, SSC, Banking, Railways, and other prestigious
              national-level competitive exams.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">14+</div>
                <div className="text-sm text-gray-600">Major Exams</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">20K+</div>
                <div className="text-sm text-gray-600">Annual Vacancies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-600">150+</div>
                <div className="text-sm text-gray-600">Study Materials</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exams Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              National Level Examinations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Prepare for India's most prestigious and competitive central
              government examinations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exams.map((exam) => (
              <div
                key={exam.id}
                className={`relative rounded-xl border ${exam.borderColor} overflow-hidden hover:shadow-md transition-all duration-300 group`}
              >
                {/* Top accent bar */}
                <div className={`h-2 ${exam.color} w-full`}></div>

                <div className="p-6">
                  {/* Icon and title header */}
                  <div className="flex items-start mb-4">
                    <div
                      className={`w-12 h-12 rounded-full ${exam.bgColor} flex items-center justify-center mr-4 flex-shrink-0`}
                    >
                      <exam.icon className={`w-6 h-6 ${exam.textColor}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {exam.name}
                      </h3>
                      <p className="text-sm text-gray-500">{exam.fullName}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-5 pl-16">
                    {exam.description}
                  </p>

                  {/* Stats cards */}
                  <div className="flex space-x-4 mb-5">
                    <div
                      className={`flex-1 border border-gray-100 rounded p-3 ${exam.bgColor} bg-opacity-30`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-500 font-medium">
                          Vacancies
                        </div>
                        <Users className={`w-3 h-3 ${exam.textColor}`} />
                      </div>
                      <div className="text-sm font-semibold mt-1">
                        {exam.posts}
                      </div>
                    </div>
                    <div
                      className={`flex-1 border border-gray-100 rounded p-3 ${exam.bgColor} bg-opacity-30`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-500 font-medium">
                          Frequency
                        </div>
                        <Calendar className={`w-3 h-3 ${exam.textColor}`} />
                      </div>
                      <div className="text-sm font-semibold mt-1">
                        {exam.frequency}
                      </div>
                    </div>
                  </div>

                  {/* Stages */}
                  <div className="mb-5">
                    <div className="flex items-center mb-2">
                      <Star className={`w-4 h-4 ${exam.textColor} mr-2`} />
                      <h4 className="text-xs font-semibold text-gray-700">
                        Exam Process
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2 pl-6">
                      {exam.stages.map((stage, index) => (
                        <Badge
                          key={index}
                          className={`${exam.bgColor} ${exam.textColor} border-0 font-medium`}
                        >
                          {stage}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action button */}
                  <div className="mt-auto">
                    <Button
                      variant="outline"
                      className={`w-full border ${exam.borderColor} ${exam.textColor} hover:bg-opacity-5 hover:bg-gray-100`}
                    >
                      <span>Explore Preparation</span>
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
