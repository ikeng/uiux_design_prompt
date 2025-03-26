import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="border-t bg-[rgb(var(--card))] border-[rgb(var(--border))]">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-sm text-[rgb(var(--muted-foreground))]">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
};

export default Footer; 