
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import PledgeCard from '@/components/PledgeCard';
import SDGModal from '@/components/SDGModal';
import Footer from '@/components/Footer';
import { pledges } from '@/data/pledges';
import { ArrowDown, Target, Sparkles } from 'lucide-react';

const Index = () => {
  const [selectedPledge, setSelectedPledge] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Handle modal open/close
  const openModal = (pledgeId: number) => {
    setSelectedPledge(pledgeId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200 && !hasScrolled) {
        setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen bg-white flex flex-col justify-center pt-24 pb-16">
        <div className="container mt-12">
          <div className="max-w-3xl mx-auto">
            <div className="mb-4 inline-block">
              <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
                Personal SDG Commitments
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold leading-tight mb-6 animate-fade-in">
              My Pledges for a Sustainable Future
            </h1>
            <p className="text-xl text-muted-foreground mb-10 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Seventeen personal commitments aligned with the United Nations Sustainable Development Goals to create a better world for all.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <a 
                href="#pledges"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium transition-all hover:bg-primary/90"
              >
                View My Pledges <ArrowDown size={16} />
              </a>
              <a 
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-900 rounded-full font-medium transition-all hover:bg-gray-200"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center">
              What Are the SDGs?
            </h2>
            
            <p className="text-lg text-center mb-12 text-muted-foreground">
              The Sustainable Development Goals (SDGs) are a universal call to action to end poverty, 
              protect the planet, and ensure prosperity for all.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">17 Global Goals</h3>
                <p className="text-muted-foreground">
                  Adopted by all UN Member States in 2015 as part of the 2030 Agenda for Sustainable Development.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Individual Impact</h3>
                <p className="text-muted-foreground">
                  Each of us can contribute to the SDGs through our daily actions and personal commitments.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Measurable Progress</h3>
                <p className="text-muted-foreground">
                  Setting specific, measurable goals allows us to track our impact and continuously improve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pledges Section */}
      <section id="pledges" className="py-24">
        <div className="container">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              My 17 SDG Pledges
            </h2>
            <p className="text-lg text-muted-foreground">
              Each of these pledges represents my personal commitment to advancing the Sustainable Development Goals through concrete actions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pledges.map((pledge, index) => (
              <PledgeCard
                key={pledge.id}
                pledge={pledge}
                index={index}
                onClick={() => openModal(pledge.id)}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* SDG Modal */}
      <SDGModal 
        pledge={selectedPledge ? pledges.find(p => p.id === selectedPledge) || null : null}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default Index;
