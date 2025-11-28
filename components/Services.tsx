import React from 'react';
import { Bot, MessageSquare, Zap, ArrowRight } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    title: 'WhatsApp Cloud API',
    description: 'Official Meta API access for broadcasting, green tick verification, and unlimited scaling without ban risks.',
    icon: MessageSquare,
  },
  {
    title: 'AI Lead Nurturing',
    description: 'Intelligent agents that qualify leads, answer queries, and book appointments while you sleep.',
    icon: Bot,
  },
  {
    title: 'Custom Chatbots',
    description: 'Tailor-made flows for E-commerce, Real Estate, or Education to automate your specific business logic.',
    icon: Zap,
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything You Need to Scale</h2>
          <p className="text-xl text-gray-600">Complete WhatsApp automation suite for modern businesses.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <a href="#contact" className="inline-flex items-center text-primary font-semibold hover:text-blue-700">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};