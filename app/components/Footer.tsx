import React from 'react'

const Footer = () => {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F3F0E8]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Therapist's Name and Title */}
        <h2 className="text-3xl sm:text-4xl font-light text-[#41413F] mb-8" data-aos="fade">
          Dr. Serena Blake, PsyD, Licensed Clinical Psychologist
        </h2>

        {/* Email */}
        <div className="mb-6">
          <a
            href="mailto:serena@blakepsychology.com"
            className="text-lg text-teal-600 hover:text-teal-700 underline"
            data-aos="fade"
          >
            serena@drserenablake.com
          </a>
        </div>

        {/* Phone and Fax */}
        <div className="mb-8 space-y-2">
          <p className="text-lg text-[#41413F]" data-aos="fade">
            Phone: <span className="underline">(310) 123-4567</span>&nbsp;
            Fax: (310) 123-4568
          </p>
        </div>

        {/* Address */}
        <div className="mb-12">
          <p className="text-lg text-[#41413F]" data-aos="fade">
            1234 Maplewood Drive, Los Angeles, CA 90001
          </p>
        </div>

        {/* Navigation Links */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center items-center gap-6 text-lg">
            <a
              href="#home"
              className="text-[#41413F] hover:text-teal-600 underline"
              data-aos="fade"
            >
              Home
            </a>
            <a
              href="#privacy"
              className="text-[#41413F] hover:text-teal-600 underline"
              data-aos="fade"
            >
              Privacy Policy
            </a>
            <a
              href="#estimate"
              className="text-[#41413F] hover:text-teal-600 underline"
              data-aos="fade"
            >
              Good Faith Estimate
            </a>
          </div>
        </div>

        {/* Client Portal */}
        <div className="mb-12">
          <a
            href="#portal"
            className="text-xl text-[#41413F] hover:text-teal-600 underline font-medium"
            data-aos="fade"
          >
            Client Portal
          </a>
        </div>

        {/* Copyright */}
        <div className="text-[#41413F]">
          <p>
            © 2025 Dr. Serena Blake, PsyD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer
