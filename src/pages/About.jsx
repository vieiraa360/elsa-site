import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import AboutSection from "../components/home/AboutSection"; // Import AboutSection
import ApproachSection from "../components/home/ApproachSection"; // Import ApproachSection
import Footer from "../components/home/Footer";
import Navigation from "../components/home/Navigation";
import MobileContactButton from "../components/home/MobileContactButton";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <AboutSection />    {/* Render AboutSection */}
      <ApproachSection /> {/* Render ApproachSection */}

      <Footer />
      <MobileContactButton />
    </div>
  );
}