"use client";
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-[#F3F0E8]">

      {/* Heading */}
      <header className="w-full text-gray-800 text-center">
        <h1 className="text-2xl sm:text-3xl py-6 font-semibold">Heading</h1>
      </header>

      {/* Wrapper for spacing below the fixed header */}
      <div className="pt-10 pb-20 px-20 max-w-screen mx-auto">

        {/* GIF background */}
        <div className="relative overflow-hidden">
          <img
            src="/bg.gif"
            alt="Background GIF"
            className="w-full h-[90vh] object-cover"
          />

          {/* Overlay (darken) */}
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-teal-900/20 to-blue-900/30" />

          {/* Text Content over GIF */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center p-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6">
              Psychological Care for
            </h2>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-10">
              Change, Insight, and Well-Being
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl font-light mb-10 max-w-3xl">
              Offering individual psychotherapy for adults via telehealth in Michigan and most U.S. states through PSYPACT participation
            </p>
            <Button
              size="lg"
              className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-4 px-10 rounded-full text-lg shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => console.log("Schedule consultation clicked")}
            >
              SCHEDULE A CONSULTATION
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
