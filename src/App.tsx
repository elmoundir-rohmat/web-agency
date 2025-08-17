import React, { useState } from 'react';
import { 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  Zap, 
  Shield, 
  Users,
  ArrowRight,
  Menu,
  X,
  CheckCircle,
  Star,
  Mail,
  Phone,
  MapPin,
  Target,
  Play,
  Check,
  LayoutDashboard,
  Home,
  Code,
  Palette,
  Rocket
} from 'lucide-react';
import Modal from './components/Modal';
import ContactForm from './components/ContactForm';
import Dashboard from './components/Dashboard';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToForm = () => {
    const formSection = document.getElementById('contact');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  if (showDashboard) {
    return (
      <div className="relative">
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={() => setShowDashboard(false)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-2xl font-medium transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
          >
            <Home size={16} />
            Retour au site
          </button>
        </div>
        <Dashboard />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">WebAgency</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-green-500 transition-colors font-medium">
                Services
              </a>
              <a href="#why-us" className="text-gray-700 hover:text-green-500 transition-colors font-medium">
                Pourquoi nous ?
              </a>
              <a href="#contact" className="text-gray-700 hover:text-green-500 transition-colors font-medium">
                Contact
              </a>
              <button 
                onClick={() => setShowDashboard(true)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-2xl font-medium transition-all duration-300 inline-flex items-center gap-2"
              >
                <LayoutDashboard size={16} />
                Dashboard
              </button>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-2xl font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Devis gratuit
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-2xl hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4 pt-4">
                <a href="#services" className="text-gray-700 hover:text-green-500 transition-colors font-medium">
                  Services
                </a>
                <a href="#why-us" className="text-gray-700 hover:text-green-500 transition-colors font-medium">
                  Pourquoi nous ?
                </a>
                <a href="#contact" className="text-gray-700 hover:text-green-500 transition-colors font-medium">
                  Contact
                </a>
                <button 
                  onClick={() => setShowDashboard(true)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-2xl font-medium transition-all duration-300 inline-flex items-center gap-2"
                >
                  <LayoutDashboard size={16} />
                  Dashboard
                </button>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-2xl font-medium transition-all duration-300 w-full"
                >
                  Devis gratuit
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Votre site web
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
                professionnel
              </span>
              <br />
              <span className="text-3xl md:text-4xl text-green-500">
                en 2 semaines
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Création de sites web sur mesure pour entreprises. Design moderne, 
              performance optimale et accompagnement personnalisé.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 hover:shadow-xl hover:scale-105 inline-flex items-center gap-3 shadow-lg"
              >
                Demander un devis gratuit
                <ArrowRight size={20} />
              </button>
              
              <button className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors font-medium">
                <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center">
                  <Play size={16} />
                </div>
                Voir nos réalisations
              </button>
            </div>
            
            <div className="mt-8 text-sm text-gray-500">
              Réponse sous 24h • Sans engagement
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des solutions web complètes adaptées aux besoins de votre entreprise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Site Vitrine */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Site Vitrine</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Présentez votre entreprise avec un site web moderne et professionnel. 
                Design sur mesure, responsive et optimisé pour la conversion.
              </p>
            </div>

            {/* E-commerce */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">E-commerce</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Vendez en ligne avec une boutique performante. Gestion des produits, 
                paiements sécurisés et expérience utilisateur optimale.
              </p>
            </div>

            {/* Application Web */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Application Web</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Développement d'applications web sur mesure pour automatiser 
                vos processus et améliorer votre productivité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une expertise reconnue et un accompagnement personnalisé
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Rapide & Efficace</h3>
              <p className="text-gray-600 leading-relaxed">
                Livraison en 2 semaines maximum. Processus optimisé et 
                équipe expérimentée pour des résultats rapides.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Qualité Garantie</h3>
              <p className="text-gray-600 leading-relaxed">
                Code propre, design moderne et performance optimale. 
                Tests rigoureux et validation client à chaque étape.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Accompagnement</h3>
              <p className="text-gray-600 leading-relaxed">
                Suivi personnalisé et formation à l'utilisation. 
                Support technique et maintenance continue inclus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-green-500 mb-4">150+</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Projets réalisés</div>
              <div className="text-gray-600">Sites web créés avec succès</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-500 mb-4">98%</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Clients satisfaits</div>
              <div className="text-gray-600">Taux de satisfaction élevé</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-500 mb-4">14j</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Délai moyen</div>
              <div className="text-gray-600">De la commande à la livraison</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-500 mb-4">24h</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Support</div>
              <div className="text-gray-600">Réponse garantie sous 24h</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Prêt à transformer votre présence web ?
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
            Rejoignez nos clients satisfaits et donnez un coup de boost à votre business
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-green-600 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105 inline-flex items-center gap-3"
            >
              Demander un devis gratuit
              <ArrowRight size={20} />
            </button>
            
            <button 
              onClick={scrollToForm}
              className="border-2 border-white text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-white hover:text-green-600 transition-all duration-300"
            >
              Nous contacter
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Parlons de votre projet
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez comment nous pouvons vous aider à atteindre vos objectifs
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-12 shadow-xl">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">WebAgency</span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Créateur de sites web professionnels pour entreprises. 
                Design moderne, performance optimale et accompagnement personnalisé.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Services</h3>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Sites vitrines</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">E-commerce</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Applications web</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Maintenance</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Contact</h3>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center gap-3">
                  <Phone size={18} />
                  <span>+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} />
                  <span>contact@webagency.fr</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={18} />
                  <span>Paris, France</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 WebAgency. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ContactForm onSubmit={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
}

export default App;