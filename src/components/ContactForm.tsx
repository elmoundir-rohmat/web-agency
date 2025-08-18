import React, { useState } from 'react';
import { Send, User, Building, Mail, Phone, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';

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

  const [focusedField, setFocusedField] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    // Let Netlify handle the form submission completely
    // Remove preventDefault to allow natural form submission
    setIsSubmitting(true);
    
    // The form will submit to Netlify via action="/merci"
    // We just need to show loading state and handle the redirect
    setTimeout(() => {
      if (onSubmit) {
        onSubmit(formData);
      }
    }, 1000);
  };

  // Alternative: Let Netlify handle everything (uncomment if fetch method fails)
  const handleNetlifySubmit = () => {
    // This will let the form submit directly to Netlify
    // Remove the onSubmit handler and let the form action="/merci" work
  };

  const inputClasses = (fieldName: string) => `
    w-full px-6 py-4 border-2 rounded-2xl transition-all duration-300 text-lg bg-white
    ${focusedField === fieldName 
      ? 'border-green-500 ring-4 ring-green-100 shadow-lg' 
      : 'border-gray-200 hover:border-gray-300'
    }
    focus:outline-none focus:ring-4 focus:ring-green-100 focus:border-green-500
  `;

  const labelClasses = (fieldName: string) => `
    block text-sm font-semibold mb-3 transition-colors duration-300
    ${focusedField === fieldName ? 'text-green-600' : 'text-gray-700'}
  `;

  return (
    <form 
      onSubmit={handleSubmit} 
      className="space-y-8"
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      action="/merci"
    >
      {/* Hidden form-name input for Netlify */}
      <input type="hidden" name="form-name" value="contact" />
      
      {/* Honeypot anti-spam (invisible) */}
      <p style={{display: 'none'}}>
        <label>Ne pas remplir : <input name="bot-field" /></label>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group">
          <label className={labelClasses('name')}>
            <User size={16} className="inline mr-2 text-green-500" />
            Nom *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            onFocus={() => setFocusedField('name')}
            onBlur={() => setFocusedField('')}
            className={inputClasses('name')}
            placeholder="Votre nom complet"
          />
        </div>
        <div className="group">
          <label className={labelClasses('company')}>
            <Building size={16} className="inline mr-2 text-green-500" />
            Entreprise *
          </label>
          <input
            type="text"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            onFocus={() => setFocusedField('company')}
            onBlur={() => setFocusedField('')}
            className={inputClasses('company')}
            placeholder="Nom de votre entreprise"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group">
          <label className={labelClasses('email')}>
            <Mail size={16} className="inline mr-2 text-green-500" />
            Email *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField('')}
            className={inputClasses('email')}
            placeholder="votre@email.com"
          />
        </div>
        <div className="group">
          <label className={labelClasses('phone')}>
            <Phone size={16} className="inline mr-2 text-green-500" />
            Téléphone *
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            onFocus={() => setFocusedField('phone')}
            onBlur={() => setFocusedField('')}
            className={inputClasses('phone')}
            placeholder="06 12 34 56 78"
          />
        </div>
      </div>
      
      <div className="group">
        <label className={labelClasses('message')}>
          <MessageSquare size={16} className="inline mr-2 text-green-500" />
          Parlez-nous de votre projet
        </label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          onFocus={() => setFocusedField('message')}
          onBlur={() => setFocusedField('')}
          className={inputClasses('message')}
          placeholder="Décrivez votre activité et vos besoins..."
          style={{ resize: 'none' }}
        />
      </div>
      
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
            Envoi en cours...
          </>
        ) : (
          <>
            <Send size={20} className="mr-2" />
            {buttonText}
          </>
        )}
      </Button>
      
      <div className="text-center space-y-3">
        <p className="text-sm text-gray-500">
          Réponse sous 24h, sans engagement
        </p>
        <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          Données sécurisées et confidentielles
        </div>
      </div>
    </form>
  );
};

export default ContactForm;