import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import ContactSection from "../components/home/ContactSection";
import Footer from "../components/home/Footer";
import Navigation from "../components/home/Navigation";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <ContactSection />
      <Footer />
    </div>
  );
}