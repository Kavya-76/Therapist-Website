import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FEFEFE]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 mb-8">
              About Dr. Serena Blake
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, California, with over eight years of experience supporting individuals on their mental health journeys. Having facilitated more than 500 therapy sessions, she brings both depth and dedication to her practice. Dr. Blake specializes in helping clients navigate anxiety, trauma, and relational challenges, with a strong foundation in evidence-based treatments such as cognitive-behavioral therapy (CBT) and mindfulness-based approaches.
              </p>

              <p className="text-lg">
                Her therapeutic style is warm, collaborative, and rooted in compassion. She believes that every person&apos;s story is unique—and so should be their healing process. Whether you&pos;re working through life transitions, emotional distress, or long-standing patterns, Dr. Blake meets you where you are with personalized strategies and a non-judgmental presence. Her goal is to not only help you feel better but also to empower you with the tools to thrive in your everyday life.
              </p>

              <p className="text-lg">
                Dr. Blake offers both in-person sessions at her calm, welcoming office on Maplewood Drive in Los Angeles, and convenient virtual appointments via Zoom for clients across California. No matter the setting, she is committed to creating a safe, inclusive space where clients feel seen, heard, and supported. With a focus on authenticity and resilience, she partners with you to foster meaningful insight, emotional growth, and lasting change.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-96 lg:w-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl relative">
                <Image
                  src="/Therapist image.webp"
                  alt="Dr. Serena Blake"
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
