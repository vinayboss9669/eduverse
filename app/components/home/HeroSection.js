import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, Play, Users, BookOpen, Award } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              #1 Educational Resources Platform
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Master Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                {" "}Future
              </span>
              <br />
              With Excellence
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Comprehensive educational resources, expert guidance, and proven strategies 
              to help you excel in competitive exams and build a successful career.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              {/* <Button variant="outline" size="lg" className="border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 px-8 py-4 text-lg transition-all duration-300">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button> */}
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-blue-600 mb-1">5K+</div>
                <div className="text-gray-600">Active Students</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-teal-600 mb-1">1000+</div>
                <div className="text-gray-600">Document Resources</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-purple-600 mb-1">98%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
          
          {/* Right Visual */}
          <div className="relative">
            <div className="relative">
              {/* Main Image Card */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl mb-6 flex items-center justify-center">
                  <BookOpen className="w-24 h-24 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Interactive Resources</h3>
                <p className="text-gray-600">Engaging content designed for maximum retention</p>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 animate-bounce">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-semibold text-gray-900">Comprehensive Resources</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 animate-pulse">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-yellow-600" />
                  <span className="text-sm font-semibold text-gray-900">Certified Documents</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}