import React from 'react';
import Image from 'next/image';

const Temp = () => {
  return (
    <section className="pt-20 px-6 sm:px-6 sm:pt-20 lg:px-8 lg:pt-40 bg-[#FEFEFE]">
      <div className="max-w-6xl mx-auto">
        {/* Mobile Layout: Heading first */}
        <div className="lg:hidden">
          <h2 className="text-3xl sm:text-4xl font-light text-[#7E7E6B] mb-8 text-center" data-aos="fade">
            About Dr. Serena Blake
          </h2>
          
          {/* Image */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-80 h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/Therapist image.webp"
                  alt="Dr. Jennifer Hahm"
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative circle background */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-teal-100 rounded-full -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-100 rounded-full -z-10"></div>
            </div>
          </div>
          
          {/* About Content */}
          <div className="space-y-6 text-[#7E7E6B] leading-relaxed">
            <p className="text-lg" data-aos="fade">
              Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, California, with over eight years of experience supporting individuals on their mental health journeys. Having facilitated more than 500 therapy sessions, she brings both depth and dedication to her practice. Dr. Blake specializes in helping clients navigate anxiety, trauma, and relational challenges, with a strong foundation in evidence-based treatments such as cognitive-behavioral therapy (CBT) and mindfulness-based approaches.
            </p>
            
            <p className="text-lg" data-aos="fade">
              Her therapeutic style is warm, collaborative, and rooted in compassion. She believes that every person&apos;s story is unique—and so should be their healing process. Whether you&apos;re working through life transitions, emotional distress, or long-standing patterns, Dr. Blake meets you where you are with personalized strategies and a non-judgmental presence. Her goal is to not only help you feel better but also to empower you with the tools to thrive in your everyday life.
            </p>
            
            <p className="text-lg" data-aos="fade">
              Dr. Blake offers both in-person sessions at her calm, welcoming office on Maplewood Drive in Los Angeles, and convenient virtual appointments via Zoom for clients across California. No matter the setting, she is committed to creating a safe, inclusive space where clients feel seen, heard, and supported. With a focus on authenticity and resilience, she partners with you to foster meaningful insight, emotional growth, and lasting change.
            </p>
          </div>
        </div>

        {/* Desktop Layout: Side by side */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#7E7E6B] mb-8" data-aos="fade">
              About Dr. Serena Blake
            </h2>
            
            <div className="space-y-6 text-[#7E7E6B] leading-relaxed">
              <p className="text-lg" data-aos="fade">
                Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, California, with over eight years of experience supporting individuals on their mental health journeys. Having facilitated more than 500 therapy sessions, she brings both depth and dedication to her practice. Dr. Blake specializes in helping clients navigate anxiety, trauma, and relational challenges, with a strong foundation in evidence-based treatments such as cognitive-behavioral therapy (CBT) and mindfulness-based approaches.
              </p>
              
              <p className="text-lg" data-aos="fade">
                Her therapeutic style is warm, collaborative, and rooted in compassion. She believes that every person&apos;s story is unique—and so should be their healing process. Whether you&apos;re working through life transitions, emotional distress, or long-standing patterns, Dr. Blake meets you where you are with personalized strategies and a non-judgmental presence. Her goal is to not only help you feel better but also to empower you with the tools to thrive in your everyday life.
              </p>
              
              <p className="text-lg" data-aos="fade">
                Dr. Blake offers both in-person sessions at her calm, welcoming office on Maplewood Drive in Los Angeles, and convenient virtual appointments via Zoom for clients across California. No matter the setting, she is committed to creating a safe, inclusive space where clients feel seen, heard, and supported. With a focus on authenticity and resilience, she partners with you to foster meaningful insight, emotional growth, and lasting change.
              </p>
            </div>
          </div>
          
          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-96 lg:w-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/Therapist image.webp"
                  alt="Dr. Jennifer Hahm"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative circle background */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-teal-100 rounded-full -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-100 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="mt-40 mb-20 mx-auto w-11/12 md:w-5/6 border-t-2 border-[#7E7E6B]" />
    </section>
  );
};

export default Temp;