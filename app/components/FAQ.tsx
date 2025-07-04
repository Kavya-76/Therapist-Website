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
      question: "What is the structure of Cognitive Behavioral Treatment for Insomnia (CBT-I)?",
      answer: "CBT-I is a structured, evidence-based treatment that typically involves 6-8 sessions focusing on sleep habits, thoughts about sleep, and behavioral changes to improve sleep quality."
    },
    {
      question: "Do you treat children or adolescents?",
      answer: "I primarily work with adults. For children and adolescents, I can provide referrals to specialists who focus on younger populations."
    },
    {
      question: "Which geographic regions do you serve?",
      answer: "I serve clients throughout California via telehealth sessions, and provide in-person sessions at my Los Angeles office."
    },
    {
      question: "Do you offer in-person sessions?",
      answer: "Yes, I offer in-person sessions on Tuesdays and Thursdays from 10 AM to 6 PM at my Los Angeles office."
    },
    {
      question: "What technology do we use for virtual sessions?",
      answer: "All virtual sessions are conducted via Zoom, which provides a secure and reliable platform for telehealth services."
    },
    {
      question: "What are your hours?",
      answer: "In-person sessions: Tuesday & Thursday, 10 AM–6 PM. Virtual sessions via Zoom: Monday, Wednesday & Friday, 1 PM–5 PM."
    },
    {
      question: "Do you take insurance?",
      answer: "I accept both private pay and insurance. I am in-network with BCBS and Aetna. For out-of-network plans, I can provide a superbill for self-submission to your insurance company."
    },
    {
      question: "What is the cost of therapy?",
      answer: "Individual session fee is $200, and couples session fee is $240. I accept insurance and also offer private pay options."
    },
    {
      question: "What are the benefits of private pay therapy?",
      answer: "Private pay therapy offers greater flexibility in scheduling, no insurance limitations on treatment length, and complete privacy as no information is shared with insurance companies."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl sm:text-5xl font-light text-gray-800 mb-4 text-center">
          Frequently Asked Questions
        </h2>
        
        {/* Therapy Category */}
        <h3 className="text-2xl font-light text-gray-700 mb-12 text-left">
          Therapy
        </h3>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-b border-gray-200"
            >
              <AccordionTrigger className="text-left text-lg text-gray-700 hover:text-gray-900 py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6 text-base leading-relaxed">
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
