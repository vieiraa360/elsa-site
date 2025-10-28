import React from "react";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const navigateToContact = () => {
    window.location.href = "/Contact";
  };

  const navigateToServices = () => {
    window.location.href = "/Services";
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#C5DDE0] via-white to-[#F4CCC8]/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#1B7A9C] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F4CCC8] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-[#1B7A9C] text-sm tracking-widest uppercase font-light">
              {t.hero.credentials}
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-[#0D3D4D] leading-tight">
              {t.hero.headline}
              <br />
              <span className="font-normal">{t.hero.headlineStrong}</span>
            </h1>
          </div>
          <p className="text-gray-600 text-lg font-light leading-relaxed max-w-xl">
            {t.hero.description}
          </p>
          <div className="flex gap-4 pt-4">
            <button
              onClick={navigateToContact}
              className="bg-[#0D3D4D] hover:bg-[#1B7A9C] text-white px-8 py-4 rounded-full font-light tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {t.hero.cta}
            </button>
            <button
              onClick={navigateToServices}
              className="border-2 border-[#1B7A9C] text-[#0D3D4D] hover:bg-[#1B7A9C] hover:text-white px-8 py-4 rounded-full font-light tracking-wide transition-all duration-300"
            >
              {t.hero.learnMore}
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f3732483149a1c1efff2e0/85c8c1e9e_eucalipto-jar-flipped.png"
              alt="Therapy space"
              className="w-full h-64 md:h-[600px] object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D3D4D]/20 to-transparent"></div>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-2xl shadow-xl">
            <p className="text-4xl font-light text-[#0D3D4D]">20+</p>
            <p className="text-gray-600 font-light">{t.hero.yearsExperience}</p>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#1B7A9C] animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}