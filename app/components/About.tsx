import React from "react";

const About = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 mb-8">
              About Dr. Serena Blake
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Finding time and opportunities to care for ourselves can be
                incredibly challenging in today's busy and demanding world. I
                believe therapy offers a dedicated space for self-care,
                providing the support and tools needed to improve this essential
                practice.
              </p>

              <p className="text-lg">
                Therapy can help individuals identify and clarify their goals,
                values, and the various elements that contribute to their
                well-being, recognizing that these aspects vary from person to
                person.
              </p>

              <p className="text-lg">
                I am dedicated to supporting this journey by offering active
                listening, psychological knowledge, empathy, compassion, and
                insights into behavioral patterns and tendencies. I hold a
                master's degree in Clinical Psychology from the Michigan School
                of Psychology (2012) and a Ph.D. in Counseling Psychology from
                Western Michigan University (2018).
              </p>

              <p className="text-lg">
                My experience spans therapy and psychological assessment in
                psychiatric inpatient units, academic medical centers,
                universities, and outpatient practice settings.
              </p>

              <p className="text-lg">
                My therapeutic approach is primarily psychodynamic and focuses
                on understanding unconscious patterns and developing insight
                into how past experiences influence present behavior and
                relationships.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-96 lg:w-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/Therapist image.webp"
                  alt="Dr. Serena Blake"
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
