
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { Calendar, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";
import Navigation from "../components/home/Navigation";
import Footer from "../components/home/Footer"; // Added import for Footer
import MobileContactButton from "../components/home/MobileContactButton";

export default function BlogPost() {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get("id");

  const { data: posts } = useQuery({
    queryKey: ["blogPosts"],
    queryFn: () => base44.entities.BlogPost.list(),
    initialData: [],
  });

  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return (
      // Changed outer div to flex-col to stack Navigation, content, and Footer vertically
      <div className="min-h-screen bg-white flex flex-col"> 
        <Navigation />
        {/* This div centers the "Post not found" message and takes up remaining space */}
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-light text-[#0D3D4D] mb-4">Post not found</h1>
            <Link
              to={createPageUrl("Blog")}
              className="text-[#1B7A9C] hover:text-[#0D3D4D] font-light"
            >
              ← Back to Resources
            </Link>
          </div>
        </div>
        <Footer /> {/* Added Footer */}
        <MobileContactButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {post.featured_image && (
        <div className="h-96 overflow-hidden relative">
          <img
            src={post.featured_image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D3D4D]/60 to-transparent"></div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link
          to={createPageUrl("Blog")}
          className="inline-flex items-center gap-2 text-[#1B7A9C] hover:text-[#0D3D4D] font-light mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Resources
        </Link>

        <article>
          <h1 className="text-5xl font-light text-[#0D3D4D] mb-6">{post.title}</h1>

          {post.published_date && (
            <div className="flex items-center gap-2 text-gray-600 font-light mb-8">
              <Calendar className="w-4 h-4" />
              {format(new Date(post.published_date), "MMMM d, yyyy")}
            </div>
          )}

          <div className="prose prose-lg max-w-none">
            <ReactMarkdown className="text-gray-700 font-light leading-relaxed">
              {post.content}
            </ReactMarkdown>
          </div>
        </article>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link
            to={createPageUrl("Blog")}
            className="inline-flex items-center gap-2 text-[#1B7A9C] hover:text-[#0D3D4D] font-light transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all posts
          </Link>
        </div>
      </div>
      <Footer /> {/* Added Footer */}
      <MobileContactButton />
    </div>
  );
}
