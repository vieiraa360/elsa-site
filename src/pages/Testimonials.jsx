
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { Star, Quote, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { format } from "date-fns";
import Navigation from "../components/home/Navigation";
import Footer from "../components/home/Footer";
import MobileContactButton from "../components/home/MobileContactButton";

export default function Testimonials() {
  const { data: testimonials, isLoading } = useQuery({
    queryKey: ["testimonials"],
    queryFn: () => base44.entities.Testimonial.filter({ published: true }, "-created_date"),
    initialData: [],
  });

  const featuredTestimonials = testimonials.filter(t => t.featured);
  const regularTestimonials = testimonials.filter(t => !t.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#C5DDE0]/20 to-white">
      <Navigation />

      <div className="bg-gradient-to-br from-[#C5DDE0] via-white to-[#F4CCC8]/30 text-[#0D3D4D] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-light mb-6">Stories of Healing</h1>
            <p className="text-xl font-light text-[#0D3D4D]/90 max-w-3xl mx-auto leading-relaxed">
              Real experiences from people who took the courageous step toward healing. Each journey is unique, each story a testament to the power of compassionate therapy.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-gray-600 font-light">Loading testimonials...</p>
          </div>
        ) : testimonials.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 font-light text-lg">No testimonials yet.</p>
          </div>
        ) : (
          <>
            {featuredTestimonials.length > 0 && (
              <div className="mb-16">
                <div className="flex items-center justify-center gap-3 mb-12">
                  <Sparkles className="w-6 h-6 text-[#1B7A9C]" />
                  <h2 className="text-2xl font-light text-[#0D3D4D]">Featured Stories</h2>
                  <Sparkles className="w-6 h-6 text-[#1B7A9C]" />
                </div>
                
                <div className="space-y-8">
                  {featuredTestimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="bg-gradient-to-br from-white to-[#C5DDE0]/20 rounded-3xl shadow-2xl p-10 md:p-12 relative border-2 border-[#1B7A9C]/30"
                    >
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#1B7A9C] rounded-full flex items-center justify-center shadow-lg">
                        <Quote className="w-6 h-6 text-white" />
                      </div>

                      <div className="flex justify-center gap-1 mb-6 mt-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-6 h-6 ${
                              i < testimonial.rating
                                ? "fill-[#F4CCC8] text-[#F4CCC8]"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>

                      <blockquote className="text-gray-800 text-lg md:text-xl font-light leading-relaxed text-center mb-8 italic">
                        "{testimonial.testimonial}"
                      </blockquote>

                      <div className="text-center">
                        <p className="text-[#0D3D4D] text-lg font-normal mb-1">
                          {testimonial.client_name}
                        </p>
                        {testimonial.created_date && (
                          <p className="text-gray-500 text-sm font-light">
                            {format(new Date(testimonial.created_date), "MMMM yyyy")}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {regularTestimonials.length > 0 && (
              <div>
                {featuredTestimonials.length > 0 && (
                  <h2 className="text-3xl font-light text-[#0D3D4D] text-center mb-12">
                    More Voices of Transformation
                  </h2>
                )}
                
                <div className="grid md:grid-cols-2 gap-8">
                  {regularTestimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="bg-white rounded-2xl shadow-xl p-8 relative hover:shadow-2xl transition-shadow duration-300 border border-[#C5DDE0]/50"
                    >
                      <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#F4CCC8] to-[#C5DDE0] rounded-full flex items-center justify-center shadow-lg">
                        <Quote className="w-8 h-8 text-white" />
                      </div>

                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < testimonial.rating
                                ? "fill-[#F4CCC8] text-[#F4CCC8]"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>

                      <blockquote className="text-gray-700 text-lg font-light leading-relaxed mb-6 italic">
                        "{testimonial.testimonial}"
                      </blockquote>

                      <div className="pt-4 border-t border-[#C5DDE0]">
                        <p className="text-[#0D3D4D] text-lg font-normal mb-1">
                          {testimonial.client_name}
                        </p>
                        {testimonial.created_date && (
                          <p className="text-gray-500 text-sm font-light">
                            {format(new Date(testimonial.created_date), "MMMM yyyy")}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-16">
        <div className="bg-gradient-to-br from-[#C5DDE0] via-white to-[#F4CCC8]/30 rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-[#0D3D4D]">
            Your story could be next
          </h2>
          <p className="text-lg font-light text-[#0D3D4D]/90 leading-relaxed mb-8 max-w-2xl mx-auto">
            Every healing journey begins with a single step. Take yours today with a free, no-obligation consultation.
          </p>
          <Link
            to={createPageUrl("Contact")}
            className="inline-block bg-[#1B7A9C] hover:bg-[#0D3D4D] text-white px-10 py-5 rounded-full font-normal text-lg tracking-wide transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Start Your Journey
          </Link>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#C5DDE0]/30 to-[#F4CCC8]/20 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-700 font-light text-lg leading-relaxed mb-4">
            <strong className="font-normal text-[#0D3D4D]">Note:</strong> All testimonials are from real clients who have graciously shared their experiences. Names may be changed or anonymized to protect privacy and confidentiality.
          </p>
          <div className="flex items-center justify-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#1B7A9C] rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-[#0D3D4D] font-light">20+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#0D3D4D] rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-[#0D3D4D] font-light">BACP Accredited</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-16">
        <Link
          to={createPageUrl("Home")}
          className="inline-block text-[#1B7A9C] hover:text-[#0D3D4D] font-light transition-colors text-lg"
        >
          ← Back to Home
        </Link>
      </div>

      <Footer />
      <MobileContactButton />
    </div>
  );
}
