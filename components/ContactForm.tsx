import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Send, Phone } from 'lucide-react';

type Inputs = {
  name: string;
  businessName: string;
  phone: string;
  volume: string;
  useCase: string;
};

export const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log('Form Data:', data);
    
    // Simulate API call placeholder
    // await fetch('/api/lead', { method: 'POST', body: JSON.stringify(data) });
    
    // Fallback mailto
    const subject = `New Lead from ${data.businessName}`;
    const body = `Name: ${data.name}%0APhone: ${data.phone}%0AVolume: ${data.volume}%0AUse Case: ${data.useCase}`;
    window.location.href = `mailto:hi@bluetick.digital?subject=${subject}&body=${body}`;
    
    alert('Thank you! Redirecting to email client...');
    reset();
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-50 rounded-3xl p-8 md:p-12 shadow-sm border border-blue-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Automate Your Business?</h2>
            <p className="text-gray-600">Fill out the form below or chat with us directly.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  {...register("name", { required: true })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
                {errors.name && <span className="text-red-500 text-xs">This field is required</span>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
                <input
                  {...register("businessName", { required: true })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Acme Corp"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number (WhatsApp)</label>
                <input
                  type="tel"
                  {...register("phone", { required: true, pattern: /^[0-9+ ]+$/ })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="+91 98765 43210"
                />
                {errors.phone && <span className="text-red-500 text-xs">Valid phone required</span>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Message Volume</label>
                <select
                  {...register("volume")}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="<1000">Less than 1,000</option>
                  <option value="1000-10000">1,000 - 10,000</option>
                  <option value="10000+">10,000+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Use Case / Requirement</label>
              <textarea
                rows={4}
                {...register("useCase")}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                placeholder="I want to automate lead qualification..."
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-4">
               <button
                type="submit"
                className="w-full sm:w-auto flex items-center justify-center bg-primary hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl"
              >
                Request Demo <Send className="w-4 h-4 ml-2" />
              </button>
              
              <div className="text-gray-500 text-sm flex items-center">
                 <span className="hidden sm:inline mr-2">or</span>
                 <a href="https://wa.me/916261003050" className="flex items-center text-green-600 font-semibold hover:underline">
                     <Phone className="w-4 h-4 mr-1" /> Call: +91 62610 03050
                 </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};