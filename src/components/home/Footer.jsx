import React from "react";
import { useLanguage } from "../LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  const navigateToPage = (pageName) => {
    window.location.href = `/${pageName}`;
  };

  return (
    <footer className="bg-[#0D3D4D] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-light mb-4">Elsa Artur</h3>
            <p className="text-white/80 font-light leading-relaxed mb-2">
              {t.footer.credentials}
            </p>
            <p className="text-white/80 font-light leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h4 className="font-normal mb-4">{t.footer.quickLinks}</h4>
            <div className="space-y-2 text-white/80 font-light">
              <p 
                onClick={() => navigateToPage("About")} 
                className="hover:text-white transition-colors cursor-pointer"
              >
                {t.footer.about}
              </p>
              <p 
                onClick={() => navigateToPage("Services")} 
                className="hover:text-white transition-colors cursor-pointer"
              >
                {t.footer.services}
              </p>
              <p 
                onClick={() => navigateToPage("Testimonials")} 
                className="hover:text-white transition-colors cursor-pointer"
              >
                {t.footer.testimonials}
              </p>
              <p 
                onClick={() => navigateToPage("Blog")} 
                className="hover:text-white transition-colors cursor-pointer"
              >
                {t.footer.resources}
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-normal mb-4">{t.footer.contact}</h4>
            <div className="space-y-2 text-white/80 font-light">
              <p>{t.footer.email}: mail@elsaartur.com</p>
              <p>{t.footer.phone}: +44 7766 671971</p>
              <p className="pt-2 border-t border-white/20 mt-4">{t.footer.online}</p>
              <p>{t.footer.languages}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/80 font-light">
            {t.footer.tagline}
          </p>
          <p className="text-white/60 text-sm font-light mt-2">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}