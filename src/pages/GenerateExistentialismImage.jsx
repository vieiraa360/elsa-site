import React, { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";

export default function GenerateExistentialismImage() {
  const [imageUrl, setImageUrl] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    generateImage();
  }, []);

  const generateImage = async () => {
    setIsGenerating(true);
    try {
      const result = await base44.integrations.Core.GenerateImage({
        prompt: "An artistic, contemplative image representing existentialism and philosophical reflection. A solitary figure standing at a crossroads or looking at multiple paths diverging, symbolizing freedom of choice and personal responsibility. Muted, thoughtful color palette with deep blues, grays, and warm earth tones. Abstract elements suggesting the search for meaning, authenticity, and self-discovery. Minimalist, professional aesthetic with a sense of openness and possibility. Atmosphere of introspection, freedom, and existential contemplation."
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
          Existentialism Blog Image Generator
        </h1>
        {isGenerating && (
          <p className="text-gray-600 font-light">Generating image...</p>
        )}
        {imageUrl && (
          <div>
            <img src={imageUrl} alt="Existentialism" className="w-full rounded-2xl shadow-lg mb-4" />
            <p className="text-sm text-gray-600 font-light mb-2">Copy this URL for the blog post:</p>
            <input
              type="text"
              value={imageUrl}
              readOnly
              className="w-full p-3 border border-gray-300 rounded-lg font-mono text-sm"
              onClick={(e) => e.target.select()}
            />
            <button
              onClick={generateImage}
              className="mt-4 bg-[#1B7A9C] text-white px-6 py-2 rounded-lg hover:bg-[#0D3D4D] transition-colors"
            >
              Generate New Image
            </button>
          </div>
        )}
      </div>
    </div>
  );
}