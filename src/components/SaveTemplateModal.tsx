import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface SaveTemplateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (templateName: string) => void;
}

const SaveTemplateModal: React.FC<SaveTemplateModalProps> = ({ isOpen, onClose, onSave }) => {
  const { t } = useTranslation();
  const [templateName, setTemplateName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (templateName.trim()) {
      onSave(templateName);
      setTemplateName('');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
      <div className="bg-[rgb(var(--card))] rounded-lg shadow-xl max-w-md w-full p-6 border border-[rgb(var(--border))]">
        <h2 className="text-xl font-bold mb-4 text-[rgb(var(--card-foreground))]">
          {t('result.templateName')}
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={templateName}
            onChange={(e) => setTemplateName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md mb-4 bg-[rgb(var(--background))] text-[rgb(var(--foreground))] border-[rgb(var(--input))] focus:ring-blue-500 focus:ring-offset-2 focus:border-blue-500 focus:outline-none"
            placeholder={t('result.templateName')}
            required
            autoFocus
          />

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-[rgb(var(--secondary))] hover:bg-gray-300 text-[rgb(var(--secondary-foreground))] rounded-md font-medium"
            >
              {t('result.cancel')}
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[rgb(var(--primary))] hover:bg-blue-700 text-[rgb(var(--primary-foreground))] font-medium rounded-md"
            >
              {t('result.save')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SaveTemplateModal;