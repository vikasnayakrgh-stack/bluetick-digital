import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaqItem } from '../types';

const faqs: FaqItem[] = [
  {
    question: "Will my WhatsApp number get banned?",
    answer: "No. We use the official WhatsApp Cloud API (Meta Partner), which is the legitimate way to send bulk messages. As long as you follow quality guidelines, there is zero risk of banning compared to unauthorized bulk tools."
  },
  {
    question: "How long does the setup take?",
    answer: "Typically, we can get your Green Tick application and API setup done within 3-5 working days, provided your Facebook Business Manager is verified."
  },
  {
    question: "Can I integrate this with my CRM?",
    answer: "Absolutely! We support integrations with Zoho, HubSpot, Salesforce, Google Sheets, and custom webhooks."
  },
  {
    question: "Do I need to pay Facebook directly?",
    answer: "Yes, apart from our service fee, you pay conversation charges directly to Meta. We help you set up your credit card in the Meta dashboard for transparent billing."
  },
  {
    question: "Can the AI bot handle complex queries?",
    answer: "Our AI agents are trained on your specific business data. For 80% of routine queries, it handles them perfectly. For complex issues, it seamlessly hands over the chat to a human agent."
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-gray-400" />}
              </button>
              
              <div 
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};