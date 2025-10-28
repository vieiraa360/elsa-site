import React from "react";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-[#C5DDE0]/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#1B7A9C] text-sm tracking-widest uppercase font-light mb-4">
            {t.about.sectionLabel}
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-[#0D3D4D] mb-6">
            {t.about.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f3732483149a1c1efff2e0/71ed23056_YMP08269_web.jpg"
                alt="Elsa Artur"
                className="w-full h-96 md:h-[650px] object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-gray-700 text-lg font-light leading-relaxed">
              {t.about.paragraph1}
            </p>

            <p className="text-gray-700 text-lg font-light leading-relaxed">
              {t.about.paragraph2}
            </p>

            <p className="text-gray-700 text-lg font-light leading-relaxed">
              {t.about.paragraph3}
            </p>

            <div className="pt-8 space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#1B7A9C] flex-shrink-0 mt-1" />
                <p className="text-gray-700 font-light">{t.about.credential1}</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#1B7A9C] flex-shrink-0 mt-1" />
                <p className="text-gray-700 font-light">{t.about.credential2}</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#1B7A9C] flex-shrink-0 mt-1" />
                <p className="text-gray-700 font-light">{t.about.credential3}</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#1B7A9C] flex-shrink-0 mt-1" />
                <p className="text-gray-700 font-light">{t.about.credential4}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}