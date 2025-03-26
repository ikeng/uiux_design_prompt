import React, { useState, useEffect } from 'react';
import PromptForm from '../components/PromptForm';
import PromptResult from '../components/PromptResult';
import SaveTemplateModal from '../components/SaveTemplateModal';
import { v4 as uuidv4 } from 'uuid';
import { PromptFormData } from '../types';
import { Template } from '../types/template';

const Generator: React.FC = () => {
  const [generatedPrompt, setGeneratedPrompt] = useState<string | null>(null);
  const [formData, setFormData] = useState<PromptFormData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  
  // 从sessionStorage读取选中的模板
  useEffect(() => {
    const selectedTemplateJSON = sessionStorage.getItem('selected-template');
    if (selectedTemplateJSON) {
      try {
        const selectedTemplate: Template = JSON.parse(selectedTemplateJSON);
        // 设置表单数据和生成的提示词
        setFormData(selectedTemplate.formData);
        setGeneratedPrompt(selectedTemplate.prompt);
        // 清除sessionStorage中的数据，避免刷新页面时重复加载
        sessionStorage.removeItem('selected-template');
        
        // 滚动到结果部分
        setTimeout(() => {
          const resultSection = document.getElementById('result-section');
          if (resultSection) {
            window.scrollTo({
              top: resultSection.offsetTop,
              behavior: 'smooth'
            });
          }
        }, 100);
      } catch (error) {
        console.error('Error parsing selected template:', error);
      }
    }
  }, []);
  
  const handleGenerate = (prompt: string, data: PromptFormData) => {
    setGeneratedPrompt(prompt);
    setFormData(data);
    // Scroll to the result
    setTimeout(() => {
      const resultSection = document.getElementById('result-section');
      if (resultSection) {
        window.scrollTo({
          top: resultSection.offsetTop,
          behavior: 'smooth'
        });
      }
    }, 100);
  };
  
  const handleSaveTemplate = (templateName: string) => {
    if (!formData || !generatedPrompt) return;
    
    // 创建新模板
    const newTemplate: Template = {
      id: uuidv4(),
      name: templateName,
      prompt: generatedPrompt,
      formData: formData,
      createdAt: Date.now()
    };
    
    // 从localStorage获取现有模板
    const savedTemplatesJSON = localStorage.getItem('saved-templates');
    const savedTemplates: Template[] = savedTemplatesJSON ? JSON.parse(savedTemplatesJSON) : [];
    
    // 添加新模板并保存回localStorage
    localStorage.setItem('saved-templates', JSON.stringify([...savedTemplates, newTemplate]));
    
    // 关闭模态框
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-16 mt-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-[rgb(var(--foreground))]">
        UI/UX Design Prompt Generator
      </h1>
      
      <PromptForm onGenerate={handleGenerate} initialValues={formData || undefined} />
      
      {generatedPrompt && (
        <div id="result-section">
          <PromptResult 
            prompt={generatedPrompt} 
            onSave={() => setIsModalOpen(true)}
          />
        </div>
      )}
      
      <SaveTemplateModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveTemplate}
      />
    </div>
  );
};

export default Generator; 