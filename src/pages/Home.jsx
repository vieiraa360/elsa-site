import React from "react";
import Navigation from "../components/home/Navigation";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import Footer from "../components/home/Footer";
import MobileContactButton from "../components/home/MobileContactButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <Footer />
      <MobileContactButton />
    </div>
  );
}