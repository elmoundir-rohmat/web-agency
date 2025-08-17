import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ContactFormProps {
  onSubmit?: (data: FormData) => void;
  buttonText?: string;
}

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, buttonText = "Envoyer ma demande" }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
    alert('Merci ! Nous vous recontactons sous 24h.');
    setFormData({ name: '', company: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-3">Nom *</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all text-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-3">Entreprise *</label>
          <input
            type="text"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all text-lg"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-3">Email *</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all text-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-3">Téléphone *</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all text-lg"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-bold text-gray-900 mb-3">Parlez-nous de votre projet</label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Décrivez votre activité et vos besoins..."
          className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all text-lg resize-none"
        />
      </div>
      
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 px-8 rounded-2xl flex items-center justify-center gap-3 transition-all group text-lg"
      >
        <Send size={20} className="group-hover:translate-x-1 transition-transform" />
        {buttonText}
      </button>
      
      <p className="text-sm text-gray-500 text-center">
        Réponse sous 24h, sans engagement
      </p>
    </form>
  );
};

export default ContactForm;