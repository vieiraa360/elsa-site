
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import Navigation from "../components/home/Navigation";
import Footer from "../components/home/Footer";
import { Users, Award, BookOpen, Brain, Heart, Shield, Compass, Sparkles, Rainbow, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileContactButton from "../components/home/MobileContactButton";

export default function Services() {
  const mainServices = [
    {
      icon: Users,
      title: "1-1 Online Counselling",
      description:
        "Individual therapy sessions conducted online via secure video platform, offering personalized support in a confidential and comfortable setting. Sessions are available in English or Portuguese, with flexible scheduling to meet your needs.",
      color: "bg-[#1B7A9C]",
    },
    {
      icon: Award,
      title: "Clinical Supervision",
      description:
        "Professional supervision for therapists and counsellors, supporting your development and ensuring ethical, effective practice. I provide a reflective space to explore your clinical work and enhance your therapeutic skills.",
      color: "bg-[#0D3D4D]",
    },
    {
      icon: BookOpen,
      title: "Training & Workshops",
      description:
        "Educational sessions for individuals and organizations on mental health, addiction recovery, and therapeutic approaches. Tailored programs designed to build understanding and practical skills in therapeutic practice.",
      color: "bg-[#F4CCC8]",
    },
  ];

  const supportAreas = [
    {
      icon: Brain,
      title: "Addiction & Relapse Prevention",
      description:
        "Specialist support for addiction recovery, understanding triggers, building resilience, and creating sustainable pathways to healing.",
    },
    {
      icon: Heart,
      title: "Trauma & Emotional Overwhelm",
      description:
        "Trauma-informed approaches including somatic awareness and psychodynamic insight to help you process and heal from past experiences.",
    },
    {
      icon: Shield,
      title: "Stress, Anxiety & Nervous System Regulation",
      description:
        "Learn to regulate your nervous system, reduce anxiety, and develop practical tools for managing overwhelming emotions.",
    },
    {
      icon: Compass,
      title: "Feeling Stuck, Lost or Disconnected",
      description:
        "Existential therapy approaches to help you find meaning, direction, and reconnect with your authentic self.",
    },
    {
      icon: Sparkles,
      title: "Low Self-Worth, Shame & Identity",
      description:
        "Compassionate exploration of self-worth, shame, and identity confusion using Internal Family Systems (IFS) techniques.",
    },
    {
      icon: Users,
      title: "Relationship Patterns & Boundaries",
      description:
        "Understanding relationship dynamics, setting healthy emotional boundaries, and improving connection with others.",
    },
    {
      icon: Globe,
      title: "Cultural Displacement",
      description:
        "Support for adjusting to life in a new country, processing cultural identity, and navigating feelings of displacement.",
    },
    {
      icon: Rainbow,
      title: "LGBTQ+ Support",
      description:
        "Affirming therapy for LGBTQ+ clients exploring identity, self-acceptance, and navigating unique life challenges.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="bg-gradient-to-br from-[#C5DDE0] via-white to-[#F4CCC8]/30 text-[#0D3D4D] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-light mb-6">Services I Offer</h1>
            <p className="text-xl font-light text-[#0D3D4D]/90 max-w-3xl mx-auto leading-relaxed">
              I provide a range of professional services to support your therapeutic journey and professional development
            </p>
          </div>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#C5DDE0]/50"
              >
                <div
                  className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-normal text-[#0D3D4D] mb-4">{service.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-[#0D3D4D] mb-6">
              Areas of Support
            </h2>
            <p className="text-gray-600 text-lg font-light max-w-2xl mx-auto">
              Each therapeutic journey is unique. I offer personalized care across a range of
              specialties to meet you where you are.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportAreas.map((area, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-[#C5DDE0]/20 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#1B7A9C]/20"
              >
                <div className="w-16 h-16 bg-[#1B7A9C] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-normal text-[#0D3D4D] mb-3">{area.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#C5DDE0] via-white to-[#F4CCC8]/30 rounded-3xl p-12 text-center shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-light mb-4 text-[#0D3D4D]">
                Ready to start your journey?
              </h2>
              <p className="text-lg font-light text-[#0D3D4D]/90 leading-relaxed mb-8 max-w-2xl mx-auto">
                Book a free 15-minute consultation to explore how I can support you. No obligation, just a chance to connect and see if we're a good fit.
              </p>
              <Link to={createPageUrl("Contact")}>
                <Button className="bg-[#1B7A9C] hover:bg-[#0D3D4D] text-white px-10 py-5 rounded-full font-normal text-lg tracking-wide transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                  Book Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileContactButton />
    </div>
  );
}
