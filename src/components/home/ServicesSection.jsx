import React, { useState } from "react";
import { Brain, Heart, Shield, Users, Sparkles, Compass, Rainbow, Globe, ChevronLeft, ChevronRight, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentArea, setCurrentArea] = useState(0);

  const services = [
    {
      icon: Brain,
      title: "Addiction & Relapse Prevention",
      description:
        "Specialist support for addiction recovery, understanding triggers, building resilience, and creating sustainable pathways to healing.",
      color: "bg-[#1B7A9C]",
    },
    {
      icon: Heart,
      title: "Trauma & Emotional Overwhelm",
      description:
        "Trauma-informed approaches including somatic awareness and psychodynamic insight to help you process and heal from past experiences.",
      color: "bg-[#0D3D4D]",
    },
    {
      icon: Shield,
      title: "Stress, Anxiety & Nervous System Regulation",
      description:
        "Learn to regulate your nervous system, reduce anxiety, and develop practical tools for managing overwhelming emotions.",
      color: "bg-[#F4CCC8]",
    },
    {
      icon: Compass,
      title: "Feeling Stuck, Lost or Disconnected",
      description:
        "Existential therapy approaches to help you find meaning, direction, and reconnect with your authentic self.",
      color: "bg-[#C5DDE0]",
    },
    {
      icon: Sparkles,
      title: "Low Self-Worth, Shame & Identity",
      description:
        "Compassionate exploration of self-worth, shame, and identity confusion using Internal Family Systems (IFS) techniques.",
      color: "bg-[#B8C4BC]",
    },
    {
      icon: Users,
      title: "Relationship Patterns & Boundaries",
      description:
        "Understanding relationship dynamics, setting healthy emotional boundaries, and improving connection with others.",
      color: "bg-[#1B7A9C]",
    },
    {
      icon: Globe,
      title: "Cultural Displacement",
      description:
        "Support for adjusting to life in a new country, processing cultural identity, and navigating feelings of displacement.",
      color: "bg-[#0D3D4D]",
    },
    {
      icon: Rainbow,
      title: "LGBTQ+ Support",
      description:
        "Affirming therapy for LGBTQ+ clients exploring identity, self-acceptance, and navigating unique life challenges.",
      color: "bg-[#F4CCC8]",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const nextArea = () => {
    setCurrentArea((prev) => (prev + 1) % services.length);
  };

  const prevArea = () => {
    setCurrentArea((prev) => (prev - 1 + services.length) % services.length);
  };

  const CurrentServiceIcon = services[currentArea].icon;

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-[#C5DDE0]/20 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#1B7A9C] text-sm tracking-widest uppercase font-light mb-4">
            How I Can Help
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-[#0D3D4D] mb-6">
            Areas of support
          </h2>
          <p className="text-gray-600 text-lg font-light max-w-2xl mx-auto">
            Each therapeutic journey is unique. I offer personalized care across a range of
            specialties to meet you where you are.
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div
                className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-normal text-[#0D3D4D] mb-3">{service.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className={`w-16 h-16 ${services[currentArea].color} rounded-2xl flex items-center justify-center mb-6`}>
                <CurrentServiceIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-normal text-[#0D3D4D] mb-3">{services[currentArea].title}</h3>
              <p className="text-gray-600 font-light leading-relaxed">{services[currentArea].description}</p>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                onClick={prevArea}
                variant="outline"
                size="icon"
                className="rounded-full w-12 h-12 border-[#1B7A9C] text-[#1B7A9C] hover:bg-[#1B7A9C] hover:text-white"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <div className="flex gap-2">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentArea(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentArea ? "bg-[#1B7A9C] w-8" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <Button
                onClick={nextArea}
                variant="outline"
                size="icon"
                className="rounded-full w-12 h-12 border-[#1B7A9C] text-[#1B7A9C] hover:bg-[#1B7A9C] hover:text-white"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>

            <p className="text-center text-gray-600 font-light mt-4">
              {currentArea + 1} of {services.length}
            </p>
          </div>
        </div>

        <div className="mt-24 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-light text-[#0D3D4D] mb-6">
              Services I Offer
            </h3>
            <p className="text-gray-600 text-lg font-light max-w-2xl mx-auto">
              I provide a range of professional services to support your therapeutic journey and professional development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#1B7A9C] rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-normal text-[#0D3D4D] mb-4">1-1 Online Counselling</h4>
              <p className="text-gray-600 font-light leading-relaxed">
                Individual therapy sessions conducted online via secure video platform, offering personalized support in a confidential and comfortable setting.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#0D3D4D] rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-normal text-[#0D3D4D] mb-4">Clinical Supervision</h4>
              <p className="text-gray-600 font-light leading-relaxed">
                Professional supervision for therapists and counsellors, supporting your development and ensuring ethical, effective practice.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#F4CCC8] rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-[#0D3D4D]" />
              </div>
              <h4 className="text-2xl font-normal text-[#0D3D4D] mb-4">Training & Workshops</h4>
              <p className="text-gray-600 font-light leading-relaxed">
                Educational sessions for individuals and organizations on mental health, addiction recovery, and therapeutic approaches.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}