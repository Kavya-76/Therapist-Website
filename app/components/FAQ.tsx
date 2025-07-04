import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
    const faqData = [
    {
      question: "Do you accept insurance?",
      answer: "No, but a superbill is provided for self-submission."
    },
    {
      question: "Are online sessions available?",
      answer: "Yes—all virtual sessions via Zoom."
    },
    {
      question: "What is your cancellation policy?",
      answer: "24-hour notice required."
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F3F0E8]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl sm:text-5xl font-light text-[#41413F] mb-6 text-center" data-aos="fade">
          Frequently Asked Questions
        </h2>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-b border-gray-200"
              data-aos="fade"
            >
              <AccordionTrigger className="text-left text-lg text-[#41413F] py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#41413F] pb-6 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default FAQ
