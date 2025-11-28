import React from 'react';
import { MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="z-10 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-medium text-blue-800">Meta-Approved Tech Partner</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Business Ko <span className="text-primary">WhatsApp + AI</span> Se 24/7 Automate Karein.
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              Generate leads, nurture them automatically, and close deals 3x faster with our Meta-Approved API & AI Agents.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="https://wa.me/916261003050"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </a>
              <a
                href="#pricing"
                className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-4 rounded-full font-bold text-lg transition-all"
              >
                View Pricing
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>

            <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-500">
              <div className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-primary mr-1" />
                100+ Workflows Delivered
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-primary mr-1" />
                ₹50L+ Revenue Generated
              </div>
            </div>
          </div>

          {/* Visual/Illustration */}
          <div className="relative z-10 lg:ml-auto w-full max-w-lg">
            <div className="relative rounded-2xl bg-gradient-to-tr from-blue-100 to-white p-6 shadow-2xl border border-blue-50">
                {/* Mock Chat Interface */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="bg-[#075E54] p-4 flex items-center text-white">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                            <MessageCircle className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="font-bold text-sm">Bluetick AI Assistant</p>
                            <p className="text-xs opacity-80">Online</p>
                        </div>
                    </div>
                    <div className="p-4 bg-[#e5ddd5] space-y-4 h-64 overflow-hidden relative">
                        {/* Background pattern opacity would go here */}
                        <div className="flex justify-start">
                            <div className="bg-white p-3 rounded-lg rounded-tl-none shadow max-w-[80%]">
                                <p className="text-sm text-gray-800">Hello! 👋 Welcome to Bluetick Digital. How can we help you grow today?</p>
                                <p className="text-[10px] text-gray-500 text-right mt-1">10:00 AM</p>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <div className="bg-[#dcf8c6] p-3 rounded-lg rounded-tr-none shadow max-w-[80%]">
                                <p className="text-sm text-gray-800">I want to automate my leads.</p>
                                <p className="text-[10px] text-gray-500 text-right mt-1">10:01 AM</p>
                            </div>
                        </div>
                        <div className="flex justify-start">
                            <div className="bg-white p-3 rounded-lg rounded-tl-none shadow max-w-[80%]">
                                <p className="text-sm text-gray-800">Great choice! 🚀 Our AI agents can handle lead qualification 24/7. Would you like to see a demo?</p>
                                <p className="text-[10px] text-gray-500 text-right mt-1">10:01 AM</p>
                            </div>
                        </div>
                         {/* Typing indicator */}
                         <div className="flex justify-start">
                             <div className="bg-white px-4 py-2 rounded-full shadow">
                                 <div className="flex space-x-1">
                                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                                 </div>
                             </div>
                         </div>
                    </div>
                </div>
                {/* Floating Elements */}
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center animate-bounce duration-[2000ms]">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">New Lead Qualified</p>
                        <p className="font-bold text-gray-900">+ ₹25,000 Potential</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-blue-50/50 skew-x-12 transform origin-top-right" />
    </section>
  );
};