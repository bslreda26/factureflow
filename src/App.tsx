import { motion } from "framer-motion";
import {
  Check,
  X,
  ArrowRight,
  FileText,
  Upload,
  Shield,
  Menu,
} from "lucide-react";
import { useState } from "react";
import "./App.css";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br">
      {/* Navigation */}
      <nav>
        <div className="nav-container">
          <div className="nav-content">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="nav-brand"
            >
              FactureFlow
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="nav-links"
            >
              <a href="#features" className="nav-link">
                Fonctionnalités
              </a>
              <a href="#pricing" className="nav-link">
                Tarifs
              </a>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mobile-menu-btn"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <Menu size={24} />
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isMobileMenuOpen ? 1 : 0,
              height: isMobileMenuOpen ? "auto" : 0,
            }}
            transition={{ duration: 0.3 }}
            className="mobile-menu"
          >
            <div className="mobile-menu-content">
              <a
                href="#features"
                className="mobile-nav-link"
                onClick={closeMobileMenu}
              >
                Fonctionnalités
              </a>
              <a
                href="#pricing"
                className="mobile-nav-link"
                onClick={closeMobileMenu}
              >
                Tarifs
              </a>
              <a
                href="#contact"
                className="mobile-nav-link"
                onClick={closeMobileMenu}
              >
                Contact
              </a>
            </div>
          </motion.div>
        </div>
      </nav>

      {/* Section 1: Hero with Title and Slogan */}
      <section className="section-hero">
        <div className="section-container">
          <div className="section-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="section-title mb-6">FactureFlow</h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="section-subtitle"
              >
                La FNE en un Click
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="section-description"
            >
              <p className="section-text">
                Automatisez la normalisation et la certification de vos factures
                FNE. Simplifiez votre processus de gestion documentaire.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary"
                onClick={() => {
                  const message = encodeURIComponent(
                    "Bonjour, je suis intéressé par FactureFlow. Pouvez-vous me donner plus d'informations ?"
                  );
                  window.open(
                    "https://wa.me/2250704087884?text=" + message,
                    "_blank"
                  );
                }}
              >
                Commencer maintenant
                <ArrowRight
                  className="ml-2"
                  style={{ width: "1.25rem", height: "1.25rem" }}
                />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Animated Stepper */}
      <section id="features" className="bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Processus en 3 étapes
            </h2>
            <p className="text-xl text-gray-600">
              Simplifiez votre workflow FNE
            </p>
          </motion.div>

          <div className="stepper-container">
            {[
              {
                icon: FileText,
                title: "Lire",
                description: "lire les factures",
                color: "blue",
                step: 1,
              },
              {
                icon: Upload,
                title: "Importer",
                description: "importez les documents",
                color: "green",
                step: 2,
              },
              {
                icon: Shield,
                title: "Certifier",
                description:
                  "Obtenez une certification FNE conforme et sécurisée",
                color: "purple",
                step: 3,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                viewport={{ once: true }}
                className="stepper-item"
              >
                <div className="stepper-content">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.3 + 0.2 }}
                    viewport={{ once: true }}
                    className={`stepper-icon ${step.color}`}
                  >
                    <step.icon style={{ width: "2.5rem", height: "2.5rem" }} />
                    <div className="stepper-number">{step.step}</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.3 + 0.4 }}
                    viewport={{ once: true }}
                    className="stepper-text"
                  >
                    <h3 className="stepper-title">{step.title}</h3>
                    <p className="stepper-description">{step.description}</p>
                  </motion.div>
                </div>

                {index < 2 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.3 + 0.6 }}
                    viewport={{ once: true }}
                    className="stepper-connector"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Pros vs Cons */}
      <section className="bg-gray-50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pourquoi choisir FactureFlow ?
            </h2>
            <p className="text-xl text-gray-600">
              Comparez avec les méthodes traditionnelles
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Manuelle */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-2xl font-bold text-red-600 mb-6 flex items-center">
                <X
                  style={{ width: "1.5rem", height: "1.5rem" }}
                  className="mr-2"
                />
                Manuelle
              </h3>
              <div className="feature-list">
                {[
                  "Processus manuel chronophage",
                  "Risque d'erreurs humaines",
                  "Conformité difficile à maintenir",
                  "Coûts de formation élevés",
                  "Temps de traitement long",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="feature-item negative"
                  >
                    <X style={{ width: "1.25rem", height: "1.25rem" }} />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Card 2: Autres logiciels */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-2xl font-bold text-orange-600 mb-6 flex items-center">
                <X
                  style={{ width: "1.5rem", height: "1.5rem" }}
                  className="mr-2"
                />
                Autres logiciels
              </h3>
              <div className="feature-list">
                {[
                  "Coûts élevés",
                  "Complexité d'utilisation",
                  "Intégration difficile",
                  "Fonctionnalités limitées",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="feature-item negative"
                  >
                    <X style={{ width: "1.25rem", height: "1.25rem" }} />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Card 3: FactureFlow */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card card-featured"
            >
              <h3 className="text-2xl font-bold text-green-600 mb-6 flex items-center">
                <Check
                  style={{ width: "1.5rem", height: "1.5rem" }}
                  className="mr-2"
                />
                FactureFlow
              </h3>
              <div className="feature-list">
                {[
                  "Simple",
                  "Abordable",
                  "Sécurité locale et fonctionnalités cloud",
                  "Interface intuitive",
                  "Dernières technologies",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="feature-item positive"
                  >
                    <Check style={{ width: "1.25rem", height: "1.25rem" }} />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Pricing */}
      <section id="pricing" className="bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tarifs transparents
            </h2>
            <p className="text-xl text-gray-600">
              Choisissez le plan qui vous convient
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Local",
                price: "700 000",
                period: "FCFA",
                features: [
                  "Installation du logiciel FactureFlow",
                  "(Agent local + BDD + Interface UI)",
                  "Abonnement annuel (100 000 FCFA)",
                  "Support technique",
                ],
                popular: false,
              },
              {
                name: "Cloud",
                price: "700 000",
                period: "FCFA",
                features: [
                  "Installation du logiciel FactureFlow",
                  "(Agent local + BDD + Interface UI + plusieurs point de vente)",
                  "Abonnement annuel (300 000 FCFA)",
                  "Support technique",
                ],
                popular: true,
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`pricing-card ${plan.popular ? "featured" : ""}`}
              >
                {plan.popular && (
                  <div className="pricing-badge">Plus populaire</div>
                )}

                <div className="pricing-header">
                  <h3 className="pricing-title">{plan.name}</h3>
                  <div className="pricing-price">
                    <span className="pricing-amount">{plan.price}</span>
                    <span className="pricing-period"> {plan.period}</span>
                  </div>
                </div>

                <ul className="pricing-features">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="pricing-feature"
                    >
                      <Check style={{ width: "1.25rem", height: "1.25rem" }} />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`btn btn-full ${
                    plan.popular ? "btn-primary" : "btn-outline"
                  }`}
                  onClick={() => {
                    const message = encodeURIComponent(
                      `Bonjour, je suis intéressé par le plan ${plan.name} de FactureFlow. Pouvez-vous me donner plus d'informations ?`
                    );
                    window.open(
                      `https://wa.me/2250704087884?text=${message}`,
                      "_blank"
                    );
                  }}
                >
                  Commencer
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact">
        <div className="section-container">
          <div className="text-center">
            <div className="footer-brand">FactureFlow</div>
            <p className="footer-slogan">La FNE en un Click</p>
            <div className="footer-links">
              <a href="#" className="footer-link">
                Mentions légales
              </a>
              <a href="#" className="footer-link">
                Confidentialité
              </a>
              <a href="#" className="footer-link">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
