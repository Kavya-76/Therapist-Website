"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="min-h-screen bg-[#F3F0E8]">
      {/* Logo Header */}
      <header className="w-full py-2 px-4 sm:px-8">
        <div className="flex justify-start items-center">
          <div className="relative w-90 aspect-[5/2]">
            <Image
              src="/logo-transparent-png.png"
              alt="Dr. Serena Blake Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </header>

      {/* Wrapper for spacing below the logo */}
      <div className="pt-4 pb-20 px-4 sm:px-20 max-w-screen mx-auto">
        {/* GIF background */}
        <div className="relative overflow-hidden shadow-lg w-full h-[90vh]">
          <Image
            src="/bg.gif"
            alt="Background GIF"
            fill
            className="object-cover"
          />

          {/* Overlays */}
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-teal-900/20 to-blue-900/30" />

          {/* Text Content */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center p-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6">
              Personalized Therapy for
            </h2>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-10">
              Healing, Connection, and Growth
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl font-light mb-10 max-w-3xl">
              Supporting adults navigating anxiety, trauma, and relationship
              challenges—through compassionate care, evidence-based techniques,
              and telehealth across California.
            </p>
            <Button
              size="lg"
              className="bg-teal-500 hover:bg-teal-600 text-white font-medium 
             py-3 px-6 text-sm 
             sm:py-4 sm:px-10 sm:text-lg 
             rounded-full shadow-xl 
             transition-all duration-300 hover:scale-105"
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
