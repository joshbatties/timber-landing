
"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)' }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight">
            Premium Timber Solutions for Discerning Clients
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl">
            Crafting excellence in timber flooring and structural components since 1985.
            Bringing natural warmth and timeless elegance to every space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link 
              href="/products" 
              className="bg-white hover:bg-timber-light text-timber-dark px-6 py-3 rounded-md font-medium inline-flex items-center gap-2 transition-colors shadow-lg"
            >
              Explore Products <ArrowRight size={18} />
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent hover:bg-white/10 text-white border border-white/50 px-6 py-3 rounded-md font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
