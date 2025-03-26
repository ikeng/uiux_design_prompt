import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ClipboardDocumentIcon, BookmarkIcon } from '@heroicons/react/24/outline';

interface PromptResultProps {
  prompt: string;
  onSave?: () => void;
}

const PromptResult: React.FC<PromptResultProps> = ({ prompt, onSave }) => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleSave = () => {
    if (onSave) {
      onSave();
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    }
  };

  return (
    <div className="p-6 rounded-lg shadow-md mt-8 bg-[rgb(var(--card))] border border-[rgb(var(--border))]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-[rgb(var(--card-foreground))]">
          {t('result.title')}
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 bg-[rgb(var(--primary))] hover:bg-blue-700 text-[rgb(var(--primary-foreground))] font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            <ClipboardDocumentIcon className="h-5 w-5" />
            {copied ? t('result.copySuccess') : t('generator.copyButton')}
          </button>
          
          {onSave && (
            <button
              onClick={handleSave}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              <BookmarkIcon className="h-5 w-5" />
              {saved ? t('result.saveSuccess') : t('generator.saveButton')}
            </button>
          )}
        </div>
      </div>
      
      <div className="p-4 rounded-md border bg-[rgb(var(--accent))] border-[rgb(var(--border))]">
        <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-[rgb(var(--card-foreground))]">
          {prompt}
        </pre>
      </div>
    </div>
  );
};

export default PromptResult; 