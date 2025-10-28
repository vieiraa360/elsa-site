
import React, { useState } from "react";
import { Check, Clock, Shield, Sparkles, Award, ChevronLeft, ChevronRight, Star, BookOpen } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";

export default function ApproachSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentAccreditation, setCurrentAccreditation] = useState(0);
  const [currentAreaOfSupport, setCurrentAreaOfSupport] = useState(0); // New state for areas of support carousel

  const { data: testimonials = [] } = useQuery({
    queryKey: ["testimonials"],
    queryFn: () => base44.entities.Testimonial.filter({ published: true }, "-created_date"),
    initialData: [],
  });

  const principles = [
    "Client-centered and collaborative approach",
    "Trauma-informed and addiction specialist practices",
    "Somatic awareness to reconnect with your body",
    "Psychodynamic insight to explore past experiences",
    "Internal Family Systems (IFS) techniques",
    "Culturally sensitive care in English & Portuguese",
  ];

  const expectations = [
    "Feeling more empowered and in control of your life",
    "Increased self-esteem and inner calm",
    "Greater self-awareness and emotional clarity",
    "More joy and excitement in daily life",
  ];

  const accreditations = [
    {
      icon: Award,
      title: "BACP Accredited",
      description: "As a BACP-accredited Counsellor, I meet the high standards set by the British Association for Counselling and Psychotherapy. This accreditation reflects my commitment to ongoing professional development and ensures that I provide ethical, effective support to my clients.",
      bgColor: "from-[#C5DDE0]/40 to-[#F4CCC8]/20",
      iconBgColor: "bg-[#1B7A9C]",
      iconColor: "text-white"
    },
    {
      icon: Sparkles,
      title: "20+ Years Experience",
      description: "With over two decades of experience in counselling and psychotherapy, I bring deep expertise in trauma-informed care and addiction recovery. My extensive training and practice have equipped me to support clients through complex emotional challenges and life transitions with compassion and skill.",
      bgColor: "from-[#F4CCC8]/30 to-[#C5DDE0]/30",
      iconBgColor: "bg-[#0D3D4D]",
      iconColor: "text-white"
    },
    {
      icon: Award,
      title: "B.A. (Hons) Degree",
      description: "Bachelor of Arts with Honours in Counselling and Psychotherapy. My academic foundation provides a comprehensive understanding of therapeutic theory and practice, combined with decades of real-world experience helping clients navigate their healing journeys.",
      bgColor: "from-[#B8C4BC]/30 to-white",
      iconBgColor: "bg-[#F4CCC8]",
      iconColor: "text-[#0D3D4D]"
    },
  ];

  // New data for Areas of Support
  const areasOfSupport = [
    {
      icon: Shield,
      title: "Trauma Recovery",
      description: "Healing from past experiences and building resilience through somatic and psychodynamic approaches."
    },
    {
      icon: Sparkles,
      title: "Addiction & Substance Use",
      description: "Comprehensive support for overcoming addiction, developing healthy coping strategies, and preventing relapse."
    },
    {
      icon: Clock,
      title: "Anxiety & Depression",
      description: "Managing symptoms, identifying root causes, and finding personalized strategies for long-term mental well-being."
    },
    {
      icon: Award, 
      title: "Relationship Challenges",
      description: "Improving communication, navigating conflict, and fostering healthier, more fulfilling connections in your life."
    },
    {
      icon: Star, 
      title: "Personal Growth & Self-Esteem",
      description: "Unlocking your full potential, boosting self-confidence, and achieving your personal and professional goals."
    },
    {
      icon: BookOpen, 
      title: "Stress & Burnout",
      description: "Developing effective stress management techniques and building resilience to prevent burnout and promote balance."
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextAccreditation = () => {
    setCurrentAccreditation((prev) => (prev + 1) % accreditations.length);
  };

  const prevAccreditation = () => {
    setCurrentAccreditation((prev) => (prev - 1 + accreditations.length) % accreditations.length);
  };

  // New navigation functions for Areas of Support
  const nextAreaOfSupport = () => {
    setCurrentAreaOfSupport((prev) => (prev + 1) % areasOfSupport.length);
  };

  const prevAreaOfSupport = () => {
    setCurrentAreaOfSupport((prev) => (prev - 1 + areasOfSupport.length) % areasOfSupport.length);
  };

  const CurrentAccredIcon = accreditations[currentAccreditation].icon;
  const CurrentAreaOfSupportIcon = areasOfSupport[currentAreaOfSupport].icon; // New icon component for areas of support

  return (
    <section id="approach" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* First grid section: Counselling Approach + Image */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
          <div className="space-y-8">
            <div>
              <p className="text-[#1B7A9C] text-sm tracking-widest uppercase font-light mb-4">
                My Counselling Approach
              </p>
              <h2 className="text-4xl md:text-5xl font-light text-[#0D3D4D] mb-6">
                Your path to healing & growth
              </h2>
              <p className="text-gray-700 text-lg font-light leading-relaxed">
                At the heart of my approach is the therapeutic relationship we build together. This connection creates a safe and confidential space where you can step away from the demands of daily life, reflect on your thoughts and emotions, and begin your journey of healing and growth.
              </p>
            </div>

            <div className="space-y-4">
              {principles.map((principle, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 bg-[#1B7A9C] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 font-light text-lg">{principle}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=700&h=900&fit=crop"
                alt="Peaceful therapy space"
                className="w-full h-80 md:h-[700px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D3D4D]/30 to-transparent"></div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#F4CCC8]/20 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* NEW: Areas of Support - Mobile Carousel */}
        <div className="md:hidden mb-16">
          <p className="text-[#1B7A9C] text-sm tracking-widest uppercase font-light mb-4 text-center">
            Areas of Support
          </p>
          <h2 className="text-4xl font-light text-[#0D3D4D] mb-6 text-center">
            How I can help
          </h2>
          <div className="relative p-8 bg-gradient-to-br from-[#C5DDE0]/40 to-[#F4CCC8]/20 rounded-2xl border border-[#1B7A9C]/20">
            <div className="w-16 h-16 bg-[#1B7A9C] rounded-full flex items-center justify-center mb-4 mx-auto">
              <CurrentAreaOfSupportIcon className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl font-light text-[#0D3D4D] mb-4 text-center">
              {areasOfSupport[currentAreaOfSupport].title}
            </h4>
            <p className="text-gray-700 font-light leading-relaxed text-center">
              {areasOfSupport[currentAreaOfSupport].description}
            </p>

            <div className="flex items-center justify-center gap-4 mt-6">
              <Button
                onClick={prevAreaOfSupport}
                variant="outline"
                size="icon"
                className="rounded-full w-10 h-10 border-[#1B7A9C] text-[#1B7A9C]"
                disabled={areasOfSupport.length <= 1}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex gap-2">
                {areasOfSupport.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentAreaOfSupport(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentAreaOfSupport ? "bg-[#1B7A9C] w-8" : "bg-gray-300"
                    }`}
                    aria-label={`Go to area of support ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                onClick={nextAreaOfSupport}
                variant="outline"
                size="icon"
                className="rounded-full w-10 h-10 border-[#1B7A9C] text-[#1B7A9C]"
                disabled={areasOfSupport.length <= 1}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Practical Information section (now standalone, adjusted layout) */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-8">
            <div>
              <p className="text-[#1B7A9C] text-sm tracking-widest uppercase font-light mb-4">
                Practical Information For You
              </p>
              <h2 className="text-4xl md:text-5xl font-light text-[#0D3D4D] mb-6">
                How we'll work together
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1B7A9C] rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-normal text-[#0D3D4D] mb-2">Safe & Confidential Space</h4>
                  <p className="text-gray-700 font-light leading-relaxed">
                    A central aspect of my work is creating a space where you can express yourself freely and without judgment. This safe, confidential environment encourages open exploration and self-reflection, essential for meaningful change.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0D3D4D] rounded-full flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-normal text-[#0D3D4D] mb-2">Personalized for You</h4>
                  <p className="text-gray-700 font-light leading-relaxed">
                    I take a flexible and integrative approach to therapy, meaning we will work together to find the methods and strategies that best suit your needs and goals. Using the Clarkson Five Relationships Model, I tailor different therapeutic approaches to your unique journey.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F4CCC8] rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#0D3D4D]" />
                </div>
                <div>
                  <h4 className="text-xl font-normal text-[#0D3D4D] mb-2">Session Details</h4>
                  <p className="text-gray-700 font-light leading-relaxed">
                    Sessions typically last 60 minutes and can be scheduled weekly or fortnightly, depending on what works best for you. All sessions are conducted online, offering convenience and flexibility from the comfort of your own home.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-left pt-4">
              <Link to={createPageUrl("Contact")}>
                <Button className="bg-[#1B7A9C] hover:bg-[#0D3D4D] text-white px-10 py-6 rounded-full text-lg font-light tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl">
                  Book a Free 15-Minute Call
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-8">
            <div>
              <p className="text-[#1B7A9C] text-sm tracking-widest uppercase font-light mb-4 text-center">
                Your Journey
              </p>
              <h2 className="text-4xl md:text-5xl font-light text-[#0D3D4D] mb-6 text-center">
                What you can expect
              </h2>
              <p className="text-gray-700 text-lg font-light leading-relaxed mb-6 text-center">
                As our work progresses, you may begin to notice positive changes:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {expectations.map((expectation, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-[#1B7A9C] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 font-light text-lg">{expectation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-light text-[#0D3D4D] text-center mb-8">
            Accreditations
          </h3>
          
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {accreditations.map((accred, index) => {
              const AccredIcon = accred.icon;
              return (
                <div key={index} className={`p-8 bg-gradient-to-br ${accred.bgColor} rounded-2xl border border-[#1B7A9C]/20`}>
                  <div className={`w-16 h-16 ${accred.iconBgColor} rounded-full flex items-center justify-center mb-4`}>
                    <AccredIcon className={`w-8 h-8 ${accred.iconColor}`} />
                  </div>
                  <h4 className="text-2xl font-light text-[#0D3D4D] mb-4">{accred.title}</h4>
                  <p className="text-gray-700 font-light leading-relaxed">
                    {accred.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="md:hidden">
            <div className="relative">
              <div className={`p-8 bg-gradient-to-br ${accreditations[currentAccreditation].bgColor} rounded-2xl border border-[#1B7A9C]/20`}>
                <div className={`w-16 h-16 ${accreditations[currentAccreditation].iconBgColor} rounded-full flex items-center justify-center mb-4`}>
                  <CurrentAccredIcon className={`w-8 h-8 ${accreditations[currentAccreditation].iconColor}`} />
                </div>
                <h4 className="text-2xl font-light text-[#0D3D4D] mb-4">
                  {accreditations[currentAccreditation].title}
                </h4>
                <p className="text-gray-700 font-light leading-relaxed">
                  {accreditations[currentAccreditation].description}
                </p>
              </div>

              <div className="flex items-center justify-center gap-4 mt-6">
                <Button
                  onClick={prevAccreditation}
                  variant="outline"
                  size="icon"
                  className="rounded-full w-10 h-10 border-[#1B7A9C] text-[#1B7A9C]"
                  disabled={accreditations.length <= 1}
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>

                <div className="flex gap-2">
                  {accreditations.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentAccreditation(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentAccreditation ? "bg-[#1B7A9C] w-8" : "bg-gray-300"
                      }`}
                      aria-label={`Go to accreditation ${index + 1}`}
                    />
                  ))}
                </div>

                <Button
                  onClick={nextAccreditation}
                  variant="outline"
                  size="icon"
                  className="rounded-full w-10 h-10 border-[#1B7A9C] text-[#1B7A9C]"
                  disabled={accreditations.length <= 1}
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {testimonials.length > 0 && (
          <div className="mt-16">
            <h3 className="text-3xl font-light text-[#0D3D4D] text-center mb-8">
              Client Experiences
            </h3>
            <div className="relative bg-gradient-to-br from-[#0D3D4D] to-[#1B7A9C] rounded-3xl p-12 text-white">
              <div className="max-w-4xl mx-auto">
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${
                        i < testimonials[currentTestimonial]?.rating
                          ? "fill-[#F4CCC8] text-[#F4CCC8]"
                          : "text-white/30"
                      }`}
                    />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl font-light leading-relaxed text-center mb-8 italic">
                  "{testimonials[currentTestimonial]?.testimonial}"
                </blockquote>
                
                <p className="text-center text-lg font-normal mb-8">
                  — {testimonials[currentTestimonial]?.client_name}
                </p>

                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={prevTestimonial}
                    className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                    disabled={testimonials.length <= 1}
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentTestimonial ? "bg-white" : "bg-white/30"
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextTestimonial}
                    className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                    disabled={testimonials.length <= 1}
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                <div className="text-center mt-8">
                  <Link to={createPageUrl("Testimonials")}>
                    <Button className="bg-white text-[#0D3D4D] hover:bg-[#F4CCC8] px-8 py-4 rounded-full font-light tracking-wide transition-all duration-300">
                      Read More Testimonials
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
