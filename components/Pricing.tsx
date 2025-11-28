import React from 'react';
import { Check } from 'lucide-react';
import { PricingTier } from '../types';

const tiers: PricingTier[] = [
  {
    name: 'WhatsApp API',
    price: '₹1,200',
    setupFee: '₹3,000 One-time Setup',
    features: ['Official API Access', 'Unlimited Broadcasting', 'Basic Auto-reply', 'Green Tick Assistance'],
    cta: 'Get API Access',
  },
  {
    name: 'Combo (Best Value)',
    price: '₹3,499',
    highlight: true,
    features: ['Everything in API Plan', 'AI Smart Agents', 'Priority Support', 'CRM Integration', 'Advanced Analytics'],
    cta: 'Get Started Now',
  },
  {
    name: 'AI Automation',
    price: '₹2,499',
    features: ['AI Lead Scoring', 'Intelligent Chatbot', 'Lead Qualification', '24/7 Auto-Nurture'],
    cta: 'Automate Now',
  },
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600">Choose the plan that fits your growth stage.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`rounded-3xl p-8 relative ${
                tier.highlight 
                  ? 'bg-white shadow-2xl border-2 border-primary scale-105 z-10' 
                  : 'bg-white shadow-lg border border-gray-100'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                  MOST POPULAR
                </div>
              )}
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
              <div className="flex items-baseline mb-1">
                <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                <span className="text-gray-500 ml-1">/month</span>
              </div>
              {tier.setupFee && <p className="text-sm text-gray-500 mb-6">{tier.setupFee}</p>}
              {!tier.setupFee && <p className="text-sm text-transparent mb-6">No Setup Fee</p>}

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={tier.name === 'Enterprise' ? '#contact' : 'https://wa.me/916261003050'}
                className={`block w-full text-center py-3 rounded-xl font-semibold transition-all ${
                  tier.highlight 
                    ? 'bg-primary text-white hover:bg-blue-700 shadow-lg hover:shadow-xl' 
                    : 'bg-blue-50 text-primary hover:bg-blue-100'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-gray-600">Need a custom enterprise solution?</p>
            <a href="#contact" className="text-primary font-bold hover:underline">Contact Sales</a>
        </div>
      </div>
    </section>
  );
};