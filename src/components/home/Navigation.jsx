
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { useLanguage } from "../LanguageContext";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language, changeLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navigateToPage = (pageName) => {
    window.location.href = createPageUrl(pageName);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: t.nav.home, page: "Home" },
    { label: t.nav.about, page: "About" },
    { label: t.nav.services, page: "Services" },
    { label: t.nav.testimonials, page: "Testimonials" },
  ];

  const handleNavClick = (item) => {
    if (item.page) {
      navigateToPage(item.page);
    } else {
      scrollToSection(item.id);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link
          to={createPageUrl("Home")}
          className="flex items-center gap-3 transition-opacity hover:opacity-70"
        >
          <img
            src="https://elsaartur.com/Elsa-React-Site/logosmall.png"
            alt="Elsa Artur Logo"
            className="h-12 w-auto object-contain"
          />
          <div className="flex flex-col">
            <span className="text-2xl font-light tracking-wider text-[#0D3D4D]">
              Elsa Artur
            </span>
            <span className="text-[#0D3D4D] font-light tracking-wide">
              Counselling & Supervision
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id || item.page}
              onClick={() => handleNavClick(item)}
              className="text-[#0D3D4D] font-light tracking-wide hover:text-[#1B7A9C] transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}

          <Button
            onClick={() => navigateToPage("Contact")}
            className="bg-[#1B7A9C] hover:bg-[#0D3D4D] text-white px-6 rounded-full transition-all duration-300"
          >
            {t.nav.freeConsultation}
          </Button>

          <div className="flex gap-2 ml-2">
            <button
              onClick={() => changeLanguage('en')}
              className={`w-5 h-4 rounded overflow-hidden border transition-all ${
                language === 'en' ? 'border-[#1B7A9C] scale-110 opacity-80' : 'border-gray-300 opacity-40 hover:opacity-100'
              }`}
              title="English"
            >
              <img
                src="https://flagcdn.com/w40/gb.png"
                alt="English"
                className="w-full h-full object-cover"
              />
            </button>
            <button
              onClick={() => changeLanguage('pt')}
              className={`w-5 h-4 rounded overflow-hidden border transition-all ${
                language === 'pt' ? 'border-[#1B7A9C] scale-110 opacity-80' : 'border-gray-300 opacity-40 hover:opacity-100'
              }`}
              title="Português"
            >
              <img
                src="https://flagcdn.com/w40/pt.png"
                alt="Português"
                className="w-full h-full object-cover"
              />
            </button>
          </div>
        </div>

        <button
          className="md:hidden text-[#0D3D4D]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl py-6 px-6">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id || item.page}
                onClick={() => handleNavClick(item)}
                className="text-[#0D3D4D] font-light text-lg tracking-wide hover:text-[#1B7A9C] transition-colors text-left py-2"
              >
                {item.label}
              </button>
            ))}

            <Button
              onClick={() => navigateToPage("Contact")}
              className="bg-[#1B7A9C] hover:bg-[#0D3D4D] text-white rounded-full mt-2"
            >
              {t.nav.freeConsultation}
            </Button>

            <div className="flex gap-3 justify-center mt-4 pt-4 border-t border-gray-200">
              <button
                onClick={() => changeLanguage('en')}
                className={`w-6 h-4 rounded overflow-hidden border transition-all ${
                  language === 'en' ? 'border-[#1B7A9C] scale-110 opacity-80' : 'border-gray-300 opacity-40'
                }`}
                title="English"
              >
                <img
                  src="https://flagcdn.com/w40/gb.png"
                  alt="English"
                  className="w-full h-full object-cover"
                />
              </button>
              <button
                onClick={() => changeLanguage('pt')}
                className={`w-6 h-4 rounded overflow-hidden border transition-all ${
                  language === 'pt' ? 'border-[#1B7A9C] scale-110 opacity-80' : 'border-gray-300 opacity-40'
                }`}
                title="Português"
              >
                <img
                  src="https://flagcdn.com/w40/pt.png"
                  alt="Português"
                  className="w-full h-full object-cover"
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
