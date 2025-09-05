import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Heart, Star, Quote, Play, BookOpen, Users, ArrowRight, Zap, Video } from "lucide-react";

export default function Motivation() {
  const motivationalContent = [
  {
    id: 1,
    type: "Success Stories",
    title: "Success Stories",
    author: "Priya Sharma",
    description: "How I overcame three failed attempts to crack UPSC CSE",
    category: "UPSC",
    readTime: "5 min read",
    likes: 2400,
    color: "from-green-500 to-emerald-600"
  },
  {
    id: 3,
    type: "Energy Boost Videos",
    title: "Energy Boast Short and long videos",
    author: "Amit Verma",
    description: "From a small village to IIT: A journey of determination",
    category: "Short Video",
    readTime: "4 min watch",
    likes: 3200,
    color: "from-purple-500 to-violet-600"
  },
  {
    id: 4,
    type: "Daily Quotes",
    title: "Daily Quotes",
    author: "Winston Churchill",
    description: "It is the courage to continue that counts",
    category: "Quote",
    readTime: "1 min read",
    likes: 890,
    color: "from-orange-500 to-red-600"
  },
  {
    id: 5,
    type: "Goal Achievers Stories",
    title: "Goal Achievers Stories",
    author: "Dr. Priya Singh",
    description: "How I maintained mental health while achieving my goal of IIT",
    category: "Wellness",
    readTime: "6 min read",
    likes: 1500,
    color: "from-pink-500 to-rose-600"
  }
];

  const quotes = [
    {
      text: "Success is not the key to happiness. Happiness is the key to success.",
      author: "Albert Schweitzer"
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      text: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-rose-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Inspiration Daily
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Motivation &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">
                {" "}Inspiration
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Fuel your journey with inspiring success stories, motivational content, and mental wellness resources. 
              Stay motivated and focused on your path to success.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-600">500+</div>
                <div className="text-sm text-gray-600">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-rose-600">Daily</div>
                <div className="text-sm text-gray-600">Updates</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">100K+</div>
                <div className="text-sm text-gray-600">Inspired Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Inspiration */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quote of the Day</h2>
            <div className="max-w-3xl mx-auto">
              <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                <CardContent className="p-8">
                  <Quote className="w-12 h-12 mx-auto mb-4 opacity-70" />
                  <blockquote className="text-xl md:text-2xl font-medium mb-4 italic">
                    "{quotes[0].text}"
                  </blockquote>
                  <p className="text-lg opacity-90">— {quotes[0].author}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Inspiration</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fresh content to keep you motivated and focused on your goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {motivationalContent.map((content) => (
              <Card key={content.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className={`h-20 bg-gradient-to-r ${content.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative h-full flex items-center justify-center">
                    {content.type === "Energy Boost Videos" ? (
                      <Video className="w-8 h-8 text-white" />
                    ) : content.type === "Daily Quotes" ? (
                      <Quote className="w-8 h-8 text-white" />
                    ) : content.type === "Goal Achievers Stories" ? (
                      <Star className="w-8 h-8 text-white" />
                    ) : (
                      <Users className="w-8 h-8 text-white" />
                    )}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4 mt-2">
                    <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                      {content.type}
                    </Badge>
                    <Badge variant="outline" className="border-gray-300 text-gray-600">
                      {content.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {content.title}
                  </h3>
                  
                  <p className="text-sm text-gray-500 mb-2">
                    by {content.author}
                  </p>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {content.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{content.readTime}</span>
                    <div className="flex items-center">
                      <Heart className="w-4 h-4 mr-1 text-red-500" />
                      {content.likes}
                    </div>
                  </div>
                  
                  <Button className={`w-full bg-gradient-to-r ${content.color} hover:opacity-90 text-white`}>
                    {content.type === "Energy Boost Videos" ? (
                      <>
                        <Play className="mr-2 h-4 w-4" />
                        Watch Now
                      </>
                    ) : content.type === "Daily Quotes" ? (
                      <>
                        <Quote className="mr-2 h-4 w-4" />
                        Read Quote
                      </>
                    ) : (
                      <>
                        <BookOpen className="mr-2 h-4 w-4" />
                        Read Now
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Community</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connect with fellow aspirants, share your journey, and inspire others
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Quote className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Daily Quotes</h3>
              <p className="text-gray-600 mb-4">
                Start your day with wisdom and inspiration
              </p>
              <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50">
                Read Today's Quote
              </Button>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Success Stories</h3>
              <p className="text-gray-600 mb-4">
                Learn from those who achieved their goals
              </p>
              <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
                Read Stories
              </Button>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Goal Achievers</h3>
              <p className="text-gray-600 mb-4">
                Strategies from successful candidates
              </p>
              <Button variant="outline" className="border-purple-500 text-purple-600 hover:bg-purple-50">
                Find Achievers
              </Button>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Energy Boost</h3>
              <p className="text-gray-600 mb-4">
                Motivational videos to keep you going
              </p>
              <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50">
                Watch Videos
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}