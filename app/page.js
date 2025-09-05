import React from "react";
import HeroSection from "./components/home/HeroSection";
import CategoryShowcase from "./components/home/CategoryShowcase";
import FeaturesSection from "./components/home/FeatureSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CategoryShowcase />
      <FeaturesSection />
    </div>
  );
}