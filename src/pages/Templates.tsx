import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Template } from '../types/template';
import { TrashIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

const Templates: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [templates, setTemplates] = useState<Template[]>([]);

  // 加载模板
  useEffect(() => {
    const savedTemplatesJSON = localStorage.getItem('saved-templates');
    if (savedTemplatesJSON) {
      try {
        const savedTemplates = JSON.parse(savedTemplatesJSON);
        setTemplates(savedTemplates);
      } catch (error) {
        console.error('Error parsing saved templates:', error);
      }
    }
  }, []);

  // 删除模板
  const handleDelete = (id: string) => {
    const updatedTemplates = templates.filter(template => template.id !== id);
    setTemplates(updatedTemplates);
    localStorage.setItem('saved-templates', JSON.stringify(updatedTemplates));
  };

  // 使用模板
  const handleUse = (template: Template) => {
    // 将模板数据存储在sessionStorage中，以便在Generator组件中使用
    sessionStorage.setItem('selected-template', JSON.stringify(template));
    navigate('/generator');
  };

  // 格式化日期
  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString();
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-[rgb(var(--foreground))]">
          {t('templates.title')}
        </h1>

        {templates.length === 0 ? (
          <div className="bg-[rgb(var(--card))] rounded-lg shadow p-8 text-center">
            <p className="text-[rgb(var(--muted-foreground))] text-lg">
              {t('templates.empty')}
            </p>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {templates.map(template => (
              <div 
                key={template.id} 
                className="bg-[rgb(var(--card))] rounded-lg shadow overflow-hidden border border-[rgb(var(--border))]"
              >
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2 text-[rgb(var(--card-foreground))] truncate">
                    {template.name}
                  </h3>
                  <p className="text-[rgb(var(--muted-foreground))] text-sm mb-4">
                    {formatDate(template.createdAt)}
                  </p>
                  <div className="line-clamp-3 text-[rgb(var(--muted))] text-sm mb-4">
                    {template.prompt}
                  </div>
                </div>
                <div className="bg-[rgb(var(--accent))] px-5 py-3 flex justify-between">
                  <button
                    onClick={() => handleUse(template)}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    <ArrowPathIcon className="h-5 w-5" />
                    <span>{t('templates.use')}</span>
                  </button>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleDelete(template.id)}
                      className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Templates; 