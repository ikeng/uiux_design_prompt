import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-16 mt-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[rgb(var(--foreground))]">
          {t('app.title')}
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-[rgb(var(--muted-foreground))]">
          {t('app.description')}
        </p>
        
        <Link 
          to="/generator" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
        >
          {t('navigation.generator')}
        </Link>
      </div>
      
      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 rounded-lg shadow-md bg-[rgb(var(--card))]">
          <h2 className="text-xl font-bold mb-4 text-[rgb(var(--card-foreground))]">
            {t('about.featuresList.item1')}
          </h2>
          <p className="text-[rgb(var(--muted-foreground))]">
            {t('about.description')}
          </p>
        </div>
        
        <div className="p-6 rounded-lg shadow-md bg-[rgb(var(--card))]">
          <h2 className="text-xl font-bold mb-4 text-[rgb(var(--card-foreground))]">
            {t('about.featuresList.item3')}
          </h2>
          <p className="text-[rgb(var(--muted-foreground))]">
            {t('about.description')}
          </p>
        </div>
        
        <div className="p-6 rounded-lg shadow-md bg-[rgb(var(--card))]">
          <h2 className="text-xl font-bold mb-4 text-[rgb(var(--card-foreground))]">
            {t('about.featuresList.item4')}
          </h2>
          <p className="text-[rgb(var(--muted-foreground))]">
            {t('about.description')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home; 