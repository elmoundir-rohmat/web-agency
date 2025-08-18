import React from 'react';
import { CheckCircle, ArrowLeft, Home } from 'lucide-react';
import { Button } from './ui/button';

const ThankYouPage: React.FC = () => {
  const goBack = () => {
    window.history.back();
  };

  const goHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="text-white" size={48} />
        </div>
        
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Merci pour votre message !
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Nous avons bien reçu votre demande et nous vous recontacterons dans les 24h. 
          Notre équipe étudie votre projet avec attention pour vous proposer la meilleure solution.
        </p>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Prochaines étapes
          </h2>
          <div className="space-y-3 text-left">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-sm">1</span>
              </div>
              <span className="text-gray-700">Analyse de votre projet</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-sm">2</span>
              </div>
              <span className="text-gray-700">Devis personnalisé sous 24h</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-sm">3</span>
              </div>
              <span className="text-gray-700">Démarrage du projet</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={goBack}
            variant="outline"
            className="border-2 border-gray-200 text-gray-700 hover:border-green-500 hover:text-green-500 px-8 py-3 rounded-2xl font-semibold transition-all duration-300"
          >
            <ArrowLeft size={20} className="mr-2" />
            Retour
          </Button>
          
          <Button 
            onClick={goHome}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Home size={20} className="mr-2" />
            Accueil
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
