import React from "react";

const Contact = () => {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F3F0E8]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Doctor's Name and Title */}
        <h2 className="text-3xl sm:text-4xl font-light text-gray-800 mb-8">
          Serena Blake, Ph.D., Licensed Psychologist
        </h2>

        {/* Email */}
        <div className="mb-6">
          <a
            href="mailto:serena@blakepsychology.com"
            className="text-lg text-teal-600 hover:text-teal-700 underline"
          >
            serena@blakepsychology.com
          </a>
        </div>

        {/* Phone and Fax */}
        <div className="mb-8 space-y-2">
          <p className="text-lg text-gray-700">
            Phone: <span className="underline">(323) 555-0192</span> Fax: (323)
            555-0193
          </p>
        </div>

        {/* Address */}
        <div className="mb-12">
          <p className="text-lg text-gray-700">
            1287 Maplewood Drive, Los Angeles, CA 90026
          </p>
        </div>

        {/* Navigation Links */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center items-center gap-6 text-lg">
            <a
              href="#home"
              className="text-gray-700 hover:text-teal-600 underline"
            >
              Home
            </a>
            <a
              href="#privacy"
              className="text-gray-700 hover:text-teal-600 underline"
            >
              Privacy Policy
            </a>
            <a
              href="#estimate"
              className="text-gray-700 hover:text-teal-600 underline"
            >
              Good Faith Estimate
            </a>
          </div>
        </div>

        {/* Client Portal */}
        <div className="mb-12">
          <a
            href="#portal"
            className="text-xl text-gray-800 hover:text-teal-600 underline font-medium"
          >
            Client Portal
          </a>
        </div>

        {/* Copyright */}
        <div className="text-gray-600">
          <p>
            © 2025 Serena Blake Ph.D. Psychological Services, PLLC. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
