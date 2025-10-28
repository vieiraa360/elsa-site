import React, { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";

export default function GenerateHypnotherapyImage() {
  const [imageUrl, setImageUrl] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    generateImage();
  }, []);

  const generateImage = async () => {
    setIsGenerating(true);
    try {
      const result = await base44.integrations.Core.GenerateImage({
        prompt: "A serene, calming image representing hypnotherapy and mind transformation. Soft purple and blue gradient background with abstract spiral patterns suggesting the subconscious mind, peaceful meditation, and inner healing. Minimalist, professional, therapeutic aesthetic with gentle light rays symbolizing clarity and positive change. Soft focus, dreamy atmosphere, representing the integration of conscious and subconscious mind in therapy."
      });
      setImageUrl(result.url);
      console.log("Generated image URL:", result.url);
    } catch (error) {
      console.error("Error generating image:", error);
    }
    setIsGenerating(false);
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-light text-[#0D3D4D] mb-6">
          Hypnotherapy Blog Image Generator
        </h1>
        {isGenerating && (
          <p className="text-gray-600 font-light">Generating image...</p>
        )}
        {imageUrl && (
          <div>
            <img src={imageUrl} alt="Hypnotherapy" className="w-full rounded-2xl shadow-lg mb-4" />
            <p className="text-sm text-gray-600 font-light mb-2">Copy this URL for the blog post:</p>
            <input
              type="text"
              value={imageUrl}
              readOnly
              className="w-full p-3 border border-gray-300 rounded-lg font-mono text-sm"
              onClick={(e) => e.target.select()}
            />
          </div>
        )}
      </div>
    </div>
  );
}