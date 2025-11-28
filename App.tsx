import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Comparison } from './components/Comparison';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

// Inline simple components to keep file count reasonable within prompt limits
// Trust Strip
const TrustStrip = () => (
  <section className="py-10 bg-white border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">Trusted by 100+ Businesses</p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
         {/* Placeholder Logos using Text or SVGs */}
         {[1, 2, 3, 4, 5].map((i) => (
             <div key={i} className="h-8 bg-gray-300 w-32 rounded animate-pulse"></div>
         ))}
      </div>
    </div>
  </section>
);

// How It Works
const HowItWorks = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
            {[
                { step: '01', title: 'Lead Capture', desc: 'Capture leads from Ads/Web via API.' },
                { step: '02', title: 'AI Qualification', desc: 'Bot asks questions to qualify intent.' },
                { step: '03', title: 'Nurturing', desc: 'Drip campaigns educate the lead.' },
                { step: '04', title: 'Closing', desc: 'Sales team gets notified to close.' }
            ].map((item, i) => (
                <div key={i} className="text-center relative">
                    <div className="w-16 h-16 rounded-full bg-blue-100 text-primary text-xl font-bold flex items-center justify-center mx-auto mb-4">
                        {item.step}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                    {i < 3 && <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-blue-100 -z-10 transform translate-x-1/2"></div>}
                </div>
            ))}
        </div>
    </div>
  </section>
);

// Case Studies
const CaseStudies = () => (
   <section id="results" className="py-20 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <h2 className="text-3xl font-bold text-center mb-16">Real Results</h2>
         <div className="grid md:grid-cols-3 gap-8">
             {[
                 { title: 'EdTech Brand', metric: '3X', desc: 'Increase in webinar attendance rates via WhatsApp reminders.' },
                 { title: 'Real Estate', metric: '₹2Cr', desc: 'Worth of inventory sold using AI lead qualification bots.' },
                 { title: 'E-commerce', metric: '45%', desc: 'Reduction in abandoned carts with automated recovery messages.' }
             ].map((study, i) => (
                 <div key={i} className="bg-blue-800 p-8 rounded-2xl border border-blue-700">
                     <div className="text-4xl font-bold text-yellow-400 mb-2">{study.metric}</div>
                     <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                     <p className="text-blue-200">{study.desc}</p>
                 </div>
             ))}
         </div>
      </div>
   </section>
);

// Testimonials
const Testimonials = () => (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-16">What Our Clients Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { name: 'Rahul S.', role: 'Founder, SkillUp', quote: 'The AI bot handles 1000s of student queries automatically. Huge time saver.' },
                    { name: 'Priya M.', role: 'Marketing Head', quote: 'Setup was super fast. We got the Green Tick in just 3 days!' },
                    { name: 'Amit K.', role: 'Real Estate Broker', quote: 'My team now only talks to qualified leads. No more time wasting.' }
                ].map((t, i) => (
                    <div key={i} className="bg-gray-50 p-6 rounded-2xl">
                        <p className="text-gray-600 italic mb-4">"{t.quote}"</p>
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                            <div>
                                <p className="font-bold text-sm text-gray-900">{t.name}</p>
                                <p className="text-xs text-gray-500">{t.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Comparison />
      <Services />
      <HowItWorks />
      <CaseStudies />
      <Pricing />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;