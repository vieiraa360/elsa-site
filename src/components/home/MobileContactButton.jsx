import React from "react";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function MobileContactButton() {
  return (
    <Link
      to={createPageUrl("Contact")}
      className="md:hidden fixed bottom-6 right-6 z-40 w-16 h-16 bg-[#1B7A9C] hover:bg-[#0D3D4D] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
    >
      <MessageCircle className="w-7 h-7" />
    </Link>
  );
}