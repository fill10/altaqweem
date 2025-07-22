import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SearchSection } from './components/SearchSection';
import { CalendarSection } from './components/CalendarSection';
import { CategorySection } from './components/CategorySection';
import { WhatsNewSection } from './components/WhatsNewSection';
import { SmartAssistant } from './components/SmartAssistant';
import { Footer } from './components/Footer';
import { NewsletterSection } from './components/NewsletterSection';
import { FeaturesSection } from './components/FeaturesSection';
import { CalendarSaleSection } from './components/CalendarSaleSection';
import { QuickLinksSection } from './components/QuickLinksSection';

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      <Hero currentDate={currentDate} />
      <SearchSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <QuickLinksSection />
      <WhatsNewSection />
      <CalendarSection activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <CategorySection />
      <CalendarSaleSection />
      <FeaturesSection />
      <NewsletterSection />
      <Footer />
      <SmartAssistant />
    </div>
  );
}

export default App;