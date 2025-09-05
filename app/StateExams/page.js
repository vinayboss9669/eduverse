import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { MapPin, Users, Building2, GraduationCap, Shield, ArrowRight, BookOpen, Landmark } from "lucide-react";

export default function StateExams() {
  const examCategories = [
    {
      id: 1,
      title: "State PSC",
      description: "Public Service Commission examinations for administrative services",
      icon: Building2,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      exams: ["KAS", "BPSC", "UPPSC", "MPSC", "RPSC"]
    },
    {
      id: 2,
      title: "Police Services",
      description: "State police recruitment and constable examinations",
      icon: Shield,
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50",
      exams: ["Delhi Police", "UP Police", "Bihar Police", "MP Police"]
    },
    {
      id: 3,
      title: "Teaching Jobs",
      description: "State education department teacher recruitment",
      icon: GraduationCap,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      exams: ["CTET", "State TET", "PGT", "TGT", "PRT"]
    },
    {
      id: 4,
      title: "State Services",
      description: "Various state government department recruitments",
      icon: Users,
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-50",
      exams: ["Health Dept", "Agriculture", "Forest", "Revenue"]
    }
  ];

  const stateCards = [
    {
      id: 1,
      title: "Andhra Pradesh",
      description: "State-level examinations and government recruitments",
      icon: MapPin,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      exams: ["APPSC", "AP TET", "AP Police", "Village Secretary"]
    },
    {
      id: 2,
      title: "Arunachal Pradesh",
      description: "Government jobs and public service examinations",
      icon: MapPin,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      exams: ["APPSC", "State Teaching", "Police Constable", "Forest Services"]
    },
    {
      id: 3,
      title: "Assam",
      description: "State civil services and other government recruitments",
      icon: MapPin,
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      exams: ["APSC", "Assam TET", "Assam Police", "Forest Guard"]
    },
    {
      id: 4,
      title: "Bihar",
      description: "State-level competitive examinations for various posts",
      icon: MapPin,
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
      exams: ["BPSC", "Bihar SSC", "Bihar Police", "Revenue Officer"]
    },
    {
      id: 5,
      title: "Chhattisgarh",
      description: "Civil services and government job examinations",
      icon: MapPin,
      color: "from-orange-500 to-amber-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      exams: ["CGPSC", "CG TET", "Police Constable", "Forest Services"]
    },
    {
      id: 6,
      title: "Goa",
      description: "Government job opportunities and competitive exams",
      icon: MapPin,
      color: "from-teal-500 to-cyan-600",
      bgColor: "bg-teal-50",
      textColor: "text-teal-600",
      exams: ["GPSC", "Goa Police", "Goa Civil Service", "Teaching"]
    },
    {
      id: 7,
      title: "Gujarat",
      description: "State civil services and other recruitment exams",
      icon: MapPin,
      color: "from-yellow-500 to-amber-600",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600",
      exams: ["GPSC", "Gujarat TET", "Police", "Secretariat"]
    },
    {
      id: 8,
      title: "Haryana",
      description: "Various state government position examinations",
      icon: MapPin,
      color: "from-indigo-500 to-blue-600",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600",
      exams: ["HPSC", "Haryana SSC", "Police", "Teacher"]
    },
    {
      id: 9,
      title: "Himachal Pradesh",
      description: "Mountain state's administrative services exams",
      icon: MapPin,
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50",
      textColor: "text-pink-600",
      exams: ["HPPSC", "HP TET", "Police", "Forest"]
    },
   {
    id: 10,
    title: "Jharkhand",
    description: "State-level administrative and public service exams",
    icon: MapPin,
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50",
    textColor: "text-amber-600",
    exams: ["JPSC", "Jharkhand SSC", "Police Constable", "Forest Guard"]
  },
  {
    id: 11,
    title: "Karnataka",
    description: "Competitive examinations for state government positions",
    icon: MapPin,
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-50",
    textColor: "text-cyan-600",
    exams: ["KPSC", "Karnataka TET", "KAS", "FDA/SDA"]
  },
  {
    id: 12,
    title: "Kerala",
    description: "Public service and administrative examinations",
    icon: MapPin,
    color: "from-lime-500 to-green-600",
    bgColor: "bg-lime-50",
    textColor: "text-lime-600",
    exams: ["Kerala PSC", "Kerala TET", "Police", "Secretariat"]
  },
  {
    id: 13,
    title: "Madhya Pradesh",
    description: "State government recruitment and civil service exams",
    icon: MapPin,
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-50",
    textColor: "text-violet-600",
    exams: ["MPPSC", "Vyapam", "MP Police", "Forest Services"]
  },
  {
    id: 14,
    title: "Maharashtra",
    description: "Administrative and public service commission exams",
    icon: MapPin,
    color: "from-rose-500 to-pink-600",
    bgColor: "bg-rose-50",
    textColor: "text-rose-600",
    exams: ["MPSC", "Police", "Teacher Eligibility", "Clerical"]
  },
  {
    id: 15,
    title: "Manipur",
    description: "State services and departmental examinations",
    icon: MapPin,
    color: "from-emerald-500 to-green-600",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-600",
    exams: ["MPSC", "Police Constable", "Secretariat", "Education"]
  },
  {
    id: 16,
    title: "Meghalaya",
    description: "Civil services and other state government recruitments",
    icon: MapPin,
    color: "from-sky-500 to-blue-600",
    bgColor: "bg-sky-50",
    textColor: "text-sky-600",
    exams: ["MPSC", "Police", "Forest Service", "Clerical Staff"]
  },
  {
    id: 17,
    title: "Mizoram",
    description: "State public service commission examinations",
    icon: MapPin,
    color: "from-fuchsia-500 to-purple-600",
    bgColor: "bg-fuchsia-50",
    textColor: "text-fuchsia-600",
    exams: ["MPSC", "Police", "Education", "Technical Services"]
  },
  {
    id: 18,
    title: "Nagaland",
    description: "Administrative and public service recruitments",
    icon: MapPin,
    color: "from-yellow-500 to-amber-600",
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-600",
    exams: ["NPSC", "Police", "Education", "Secretariat"]
  },
  {
    id: 19,
    title: "Odisha",
    description: "State civil services and departmental examinations",
    icon: MapPin,
    color: "from-indigo-500 to-blue-600",
    bgColor: "bg-indigo-50",
    textColor: "text-indigo-600",
    exams: ["OPSC", "Odisha SSC", "Police", "Teacher"]
  },
  {
    id: 20,
    title: "Punjab",
    description: "Civil and administrative service examinations",
    icon: MapPin,
    color: "from-amber-500 to-yellow-600",
    bgColor: "bg-amber-50",
    textColor: "text-amber-600",
    exams: ["PPSC", "Punjab Police", "Excise Inspector", "Patwari"]
  },
  {
    id: 21,
    title: "Rajasthan",
    description: "Public service and administrative recruitments",
    icon: MapPin,
    color: "from-red-500 to-orange-600",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
    exams: ["RPSC", "Rajasthan Police", "RAS", "Patwari"]
  },
  {
    id: 22,
    title: "Sikkim",
    description: "State government and public service positions",
    icon: MapPin,
    color: "from-teal-500 to-emerald-600",
    bgColor: "bg-teal-50",
    textColor: "text-teal-600",
    exams: ["SPSC", "Police", "Teacher", "Technical Staff"]
  },
  {
    id: 23,
    title: "Tamil Nadu",
    description: "State civil services and technical examinations",
    icon: MapPin,
    color: "from-purple-500 to-indigo-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    exams: ["TNPSC", "TN TRB", "TN Police", "VAO"]
  },
  {
    id: 24,
    title: "Telangana",
    description: "Government jobs and administrative positions",
    icon: MapPin,
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50",
    textColor: "text-pink-600",
    exams: ["TSPSC", "Police", "Teacher", "Group Services"]
  },
  {
    id: 25,
    title: "Tripura",
    description: "Administrative and civil service recruitments",
    icon: MapPin,
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
    exams: ["TPSC", "Police", "TET", "Clerical Services"]
  },
  {
    id: 26,
    title: "Uttar Pradesh",
    description: "Large-scale state government recruitments",
    icon: MapPin,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    exams: ["UPPSC", "UP Police", "UPSSSC", "Lekhpal"]
  },
  {
    id: 27,
    title: "Uttarakhand",
    description: "Himalayan state's government job examinations",
    icon: MapPin,
    color: "from-green-500 to-teal-600",
    bgColor: "bg-green-50",
    textColor: "text-green-600",
    exams: ["UKPSC", "Police", "Forest Guard", "Secretariat"]
  },
  {
    id: 28,
    title: "West Bengal",
    description: "State administrative and service examinations",
    icon: MapPin,
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-50",
    textColor: "text-cyan-600",
    exams: ["WBPSC", "WB Police", "WBCS", "WBSSC"]
  }
];

  const utCards = [
    {
      id: 1,
      title: "Andaman and Nicobar Islands",
      description: "UT administration recruitment examinations",
      icon: MapPin,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      exams: ["A&N Admin", "Police", "Teaching", "Clerical"]
    },
    {
      id: 2,
      title: "Chandigarh",
      description: "Administrative and departmental recruitments",
      icon: MapPin,
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      exams: ["Chandigarh Admin", "Police", "CTU", "Teaching"]
    },
    {
      id: 3,
      title: "Dadra and Nagar Haveli and Daman and Diu",
      description: "Government jobs in the union territory",
      icon: MapPin,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      exams: ["Administration", "Police", "Education", "Health Services"]
    },
    {
      id: 4,
      title: "Delhi",
      description: "National Capital Territory government jobs",
      icon: MapPin,
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
      exams: ["DSSSB", "Delhi Police", "Delhi Admin", "Delhi Subordinate Services"]
    },
    {
      id: 5,
      title: "Jammu and Kashmir",
      description: "Administrative and civil service exams",
      icon: MapPin,
      color: "from-teal-500 to-cyan-600",
      bgColor: "bg-teal-50",
      textColor: "text-teal-600",
      exams: ["JKPSC", "Police", "KAS", "Education"]
    },
    {
      id: 6,
      title: "Ladakh",
      description: "Newly formed UT's government recruitment",
      icon: MapPin,
      color: "from-indigo-500 to-blue-600",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600",
      exams: ["Administration", "Police", "Education", "Tourism"]
    },
    {
      id: 7,
      title: "Lakshadweep",
      description: "Island territory's administrative posts",
      icon: MapPin,
      color: "from-orange-500 to-amber-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      exams: ["Administration", "Police", "Education", "Health"]
    },
    {
      id: 8,
      title: "Puducherry",
      description: "Union territory's government service exams",
      icon: MapPin,
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50",
      textColor: "text-pink-600",
      exams: ["PPSC", "Police", "Teaching", "Administration"]
    }
  ];

  // const states = [
  //   // States (28)
  //   "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", 
  //   "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", 
  //   "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", 
  //   "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  //   "Uttar Pradesh", "Uttarakhand", "West Bengal"
  // ];

  // const unionTerritories = [
  //   // Union Territories (8)
  //   "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", 
  //   "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
  // ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-violet-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              State Level Excellence
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              State Level
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600">
                {" "}Examinations
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Complete preparation resources for state government exams across all states in India. 
              From PSC to Police, Teaching to Administrative services.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">28</div>
                <div className="text-sm text-gray-600">States Covered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-violet-600">8</div>
                <div className="text-sm text-gray-600">Union Territories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600">50K+</div>
                <div className="text-sm text-gray-600">Questions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-600">92%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Categories */}
      {/* <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Exam Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive coverage of all major state-level examination categories
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {examCategories.map((category) => (
              <Card key={category.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${category.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                    <category.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {category.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {category.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Popular Exams:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.exams.map((exam, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                          {exam}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button className={`w-full bg-gradient-to-r ${category.color} hover:opacity-90 text-white`}>
                    Explore {category.title}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* States Coverage */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🟢 States of India </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive exam preparation for all major states across India
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stateCards.map((state) => (
              <Card key={state.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${state.bgColor} rounded-xl flex items-center justify-center mb-4 mt-2`}>
                    <state.icon className={`w-8 h-8 ${state.textColor}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {state.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {state.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Exams:</h4>
                    <div className="flex flex-wrap gap-2">
                      {state.exams.map((exam, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                          {exam}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button className={`w-full bg-gradient-to-r ${state.color} hover:opacity-90 text-white`}>
                    Explore {state.title}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {states.slice(9).map((state, index) => {
              // Assign different colors for the remaining states
              const colors = [
                { bg: "bg-yellow-50", text: "text-yellow-600" },
                { bg: "bg-blue-50", text: "text-blue-600" },
                { bg: "bg-red-50", text: "text-red-600" },
                { bg: "bg-green-50", text: "text-green-600" },
                { bg: "bg-purple-50", text: "text-purple-600" },
                { bg: "bg-indigo-50", text: "text-indigo-600" },
                { bg: "bg-pink-50", text: "text-pink-600" },
                { bg: "bg-teal-50", text: "text-teal-600" },
                { bg: "bg-orange-50", text: "text-orange-600" },
              ];
              const colorIndex = index % colors.length;
              
              return (
                <div 
                  key={index} 
                  className={`p-4 ${colors[colorIndex].bg} rounded-lg hover:shadow-md transition-all duration-200 text-center cursor-pointer`}
                >
                  <MapPin className={`w-5 h-5 mx-auto mb-2 ${colors[colorIndex].text}`} />
                  <span className={`text-sm font-medium ${colors[colorIndex].text}`}>{state}</span>
                </div>
              );
            })}
          </div> */}
        </div>
      </section>

      {/* Union Territories Coverage */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🟠 Union Territories of India </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete coverage of exams in all Union Territories
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {utCards.map((ut) => (
              <Card key={ut.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${ut.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                    <ut.icon className={`w-8 h-8 ${ut.textColor}`} />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {ut.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4">
                    {ut.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-gray-900 mb-2">Key Exams:</h4>
                    <div className="flex flex-wrap gap-1">
                      {ut.exams.map((exam, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                          {exam}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button className={`w-full bg-gradient-to-r ${ut.color} hover:opacity-90 text-white`}>
                    Explore
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}