import { PromptFormData } from '../types';

export interface Template {
  id: string;
  name: string;
  prompt: string;
  formData: PromptFormData;
  createdAt: number;
} 