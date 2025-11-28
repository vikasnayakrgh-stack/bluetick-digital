import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

export const Comparison: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Old Way */}
          <div className="bg-red-50 rounded-3xl p-8 md:p-10 border border-red-100">
            <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-red-200 flex items-center justify-center mr-3 text-sm">❌</span>
              The Old Way (Manual)
            </h3>
            <ul className="space-y-4">
              {['Missed calls & delayed replies', 'Manual lead qualification takes hours', 'Inconsistent follow-ups lose deals', 'Number blocking risks with bulk tools'].map((item, i) => (
                <li key={i} className="flex items-start text-red-800">
                  <XCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 opacity-70" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* New Way */}
          <div className="bg-blue-50 rounded-3xl p-8 md:p-10 border border-blue-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">RECOMMENDED</div>
            <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center mr-3 text-sm">✅</span>
              The Bluetick Way (AI)
            </h3>
            <ul className="space-y-4">
              {['Instant 24/7 AI responses', 'Leads qualified automatically in seconds', 'Smart nurturing sequences that convert', 'Official Green Tick API (No bans)'].map((item, i) => (
                <li key={i} className="flex items-start text-blue-800">
                  <CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};