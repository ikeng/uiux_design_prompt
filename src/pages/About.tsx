import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="max-w-4xl mx-auto">
        <div className="p-8 rounded-lg shadow-md bg-[rgb(var(--card))]">
          <h1 className="text-3xl font-bold mb-6 text-[rgb(var(--foreground))]">
            {t('about.title')}
          </h1>
          
          <p className="mb-8 text-[rgb(var(--muted-foreground))]">
            {t('about.description')}
          </p>
          
          <h2 className="text-2xl font-bold mb-4 text-[rgb(var(--foreground))]">
            {t('about.features')}
          </h2>
          
          <ul className="list-disc pl-6 mb-8 space-y-2 text-[rgb(var(--muted-foreground))]">
            <li>{t('about.featuresList.item1')}</li>
            <li>{t('about.featuresList.item2')}</li>
            <li>{t('about.featuresList.item3')}</li>
            <li>{t('about.featuresList.item4')}</li>
            <li>{t('about.featuresList.item5')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
