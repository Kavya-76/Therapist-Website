
import React from 'react';

const Rates = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#94B0B0]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-4xl sm:text-5xl font-light text-[#41413F] mb-16" data-aos="fade">
          Rates and Insurance
        </h2>

        {/* Content Container */}
        <div className="space-y-12 text-[#41413F]">
          {/* Session Fees */}
          <div className="space-y-6">
            <p className="text-xl font-light" data-aos="fade">
              Individual Session Fee - $200
            </p>
            <p className="text-xl font-light" data-aos="fade">
              Couples Session Fee - $240
            </p>
          </div>

          {/* Insurance Information */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed" data-aos="fade">
              I accept both private pay and insurance. I am in-network with BCBS and Aetna.
            </p>
            <p className="text-lg leading-relaxed" data-aos="fade">
              For out-of-network plans, I&apos;ve partnered with Mentaya using{' '}
              <a 
                href="#" 
                className="text-teal-600 hover:text-teal-700 underline"
              >
                this tool
              </a>{' '}
              to help you check your eligibility for reimbursement for my services.
            </p>
          </div>

          {/* Office Hours */}
          <div className="mt-16">
            <h3 className="text-3xl font-light text-[#41413F] mb-8" data-aos="fade">
              Office Hours
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* In-person */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h4 className="text-xl font-medium text-[#41413F] mb-4" data-aos="fade">
                  In-Person
                </h4>
                <p className="text-lg text-[#41413F]" data-aos="fade">
                  Tuesday & Thursday
                </p>
                <p className="text-lg text-[#41413F]" data-aos="fade">
                  10 AM – 6 PM
                </p>
              </div>

              {/* Virtual */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h4 className="text-xl font-medium text-[#41413F] mb-4" data-aos="fade">
                  Virtual via Zoom
                </h4>
                <p className="text-lg text-[#41413F]" data-aos="fade">
                  Monday, Wednesday & Friday
                </p>
                <p className="text-lg text-[#41413F]" data-aos="fade">
                  1 PM – 5 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rates;
