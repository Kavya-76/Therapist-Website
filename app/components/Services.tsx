import Image from "next/image";
import React from "react";

const Services = () => {
  const services = [
    {
      title: "Anxiety & Stress Management",
      description:
        "Whether you're navigating academic pressures, workplace burnout, or constant overthinking, therapy can help you develop practical tools to reduce stress, understand your anxiety triggers, and restore calm to your daily life.",
      image:
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Relationship Counseling",
      description:
        "Whether you're facing communication issues, recurring conflicts, or struggling with emotional intimacy, couples or individual therapy can provide a space to understand your relational patterns and build healthier connections.",
      image:
        "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Trauma Recovery",
      description:
        "Recovering from trauma—whether recent or long past—takes courage and care. Therapy offers a safe space to process your experiences, regulate difficult emotions, and begin healing from the inside out.",
      image:
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F3F0E8]">
      <div className="max-w-4xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-thin text-center mb-10 text-[#3b3b3b]" data-aos="fade">
          Therapy can be a space where you invest in yourself— one of the
          highest forms of self-care.
        </h2>

        {/* Paragraph */}
        <p className="text-lg sm:text-xl text-center leading-relaxed text-[#3b3b3b]" data-aos="fade">
          You may be led to therapy by anxiety, depression, relationship stress,
          past or recent trauma, grief and loss, self-esteem issues, or
          challenges with family, parenting, or parental relationships. Whatever
          the source of your stress, you don&apos;t have to face it alone. Therapy
          offers you the time and space to work toward wellness and peace.
        </p>
      </div>

      {/* Divider line */}
      <hr className="mt-20 mb-25 mx-auto w-15/16 border-1 border-[#7E7E6B]" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-[#41413F] mb-4" data-aos="fade">
            Areas of Focus
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <div key={index} className="text-center space-y-6">
              {/* Circular Image */}
              <div className="flex justify-center mb-8">
                <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="w-full h-full object-cover"
                    data-aos="fade"
                  />
                </div>
              </div>

              {/* Service Title */}
              <h3 className="text-xl sm:text-2xl font-light text-[#41413F] leading-relaxed px-4" data-aos="fade">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-[#41413F] leading-relaxed px-2 text-base" data-aos="fade">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
