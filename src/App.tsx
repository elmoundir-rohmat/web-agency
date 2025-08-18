import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Check, 
  Phone, 
  Mail, 
  Star,
  Shield,
  Zap,
  Target,
  Play,
  Sparkles,
  TrendingUp,
  Users,
  Award,
  Monitor,
  Smartphone,
  Globe,
  Clock,
  CheckCircle,
  Code,
  Palette,
  Rocket,
  Headphones,
  FileText,
  Heart,
  ShoppingCart
} from 'lucide-react';
import Modal from './components/Modal';
import ContactForm from './components/ContactForm';
import ThankYouPage from './components/ThankYouPage';
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById('contact');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = () => {
    setShowThankYou(true);
    setIsModalOpen(false);
  };

  // Show thank you page if form was submitted
  if (showThankYou) {
    return <ThankYouPage />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center">
                <Code className="text-white" size={20} />
              </div>
              WebCraft Pro
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-green-500 transition-colors duration-300 font-medium">Services</a>
              <a href="#why-us" className="text-gray-600 hover:text-green-500 transition-colors duration-300 font-medium">Pourquoi nous ?</a>
              <a href="#contact" className="text-gray-600 hover:text-green-500 transition-colors duration-300 font-medium">Contact</a>
            </div>
            
            <Button 
              onClick={() => setIsModalOpen(true)}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Devis gratuit
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className={`${isVisible ? 'animate-fade-in-up' : ''}`}>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Votre site web 2x moins cher
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500"> En 2x moins de temps</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Votre plus beau site pro en 2 semaines, financé à 100% via Qualiopi.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button 
                onClick={() => setIsModalOpen(true)}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Démarrer mon projet
                <ArrowRight size={20} className="ml-2" />
              </Button>
              
              <Button 
                variant="outline"
                className="border-2 border-gray-200 text-gray-700 hover:border-green-500 hover:text-green-500 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300"
              >
                <Play size={16} className="mr-2" />
                Voir nos réalisations
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={16} />
                <span>Livraison en 2 semaines</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={16} />
                <span>Support 7j/7</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={16} />
                <span>Ne payez que si vous êtes satisfait</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nos services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions web complètes et sur mesure pour répondre à tous vos besoins
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Monitor,
                title: "Sites Vitrines",
                description: "Sites web professionnels et modernes pour présenter votre entreprise et vos services de manière impactante.",
                color: "from-green-500 to-green-600"
              },
              {
                icon: ShoppingCart,
                title: "E-commerce",
                description: "Boutiques en ligne performantes avec gestion des stocks, paiements sécurisés et expérience client optimisée.",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: Rocket,
                title: "Applications Web",
                description: "Applications web personnalisées pour automatiser vos processus et améliorer votre productivité.",
                color: "from-purple-500 to-purple-600"
              }
            ].map((service, index) => (
              <Card key={index} className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0">
                <CardHeader className="text-center pb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <service.icon className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg leading-relaxed text-center">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre expertise et notre approche client font la différence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Équipe expérimentée",
                description: "Plus de 8 ans d'expérience dans la création de sites web et le développement d'applications."
              },
              {
                icon: Headphones,
                title: "Support réactif",
                description: "Une équipe dédiée à votre écoute 7j/7 pour répondre à toutes vos questions et demandes."
              },
              {
                icon: Award,
                title: "Qualité garantie",
                description: "Nous nous engageons sur la qualité de nos livrables avec une garantie satisfaction."
              }
            ].map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <advantage.icon className="text-green-500" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{advantage.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Notre processus
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une méthodologie itérative pour des résultats garantis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "01", title: "Analyse", description: "Nous étudions vos besoins et objectifs" },
              { number: "02", title: "Version de travail", description: "Valider une version de travail en 72h avec vous" },
              { number: "03", title: "Développement", description: "Intégration et développement technique" },
              { number: "04", title: "Livraison", description: "Mise en ligne et formation" }
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="text-6xl font-bold text-gray-100 mb-4">{step.number}</div>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-white font-bold text-xl">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-8 h-0.5 bg-gray-200 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "150+", label: "Projets réalisés" },
              { number: "98%", label: "Clients satisfaits" },
              { number: "24h", label: "Temps de réponse" },
              { number: "8+", label: "Années d'expérience" }
            ].map((stat, index) => (
              <div key={index} className="space-y-4">
                <div className="text-5xl font-bold text-green-400">{stat.number}</div>
                <div className="text-xl text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Parlons de votre projet
            </h2>
            <p className="text-xl text-gray-600">
              Recevez un devis personnalisé et gratuit en 24h
            </p>
          </div>
          
          <Card className="shadow-2xl rounded-2xl border-0">
            <CardContent className="p-12">
              <ContactForm onSubmit={handleFormSubmit} />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <Code className="text-white" size={16} />
                </div>
                WebCraft Pro
              </div>
              <p className="text-gray-400 max-w-md">
                Votre partenaire digital pour des sites web professionnels et performants.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>contact@webcraftpro.fr</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Liens utiles</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Mentions légales</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Politique de confidentialité</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">CGV</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 WebCraft Pro. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ContactForm onSubmit={handleFormSubmit} />
      </Modal>
    </div>
  );
}

export default App;