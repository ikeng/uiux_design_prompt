import React, { useState, useEffect, useRef } from 'react';

interface Option {
  value: string;
  label: string;
}

interface FormMultiSelectProps {
  id: string;
  label: string;
  options: Option[];
  value: string[];
  onChange: (value: string[]) => void;
  required?: boolean;
  placeholder?: string;
  className?: string;
}

const FormMultiSelect: React.FC<FormMultiSelectProps> = ({
  id,
  label,
  options,
  value,
  onChange,
  required = false,
  placeholder = '',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // 处理点击外部关闭下拉框
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    // 添加事件监听器
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // 移除事件监听器
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  const toggleOption = (optionValue: string) => {
    if (value.includes(optionValue)) {
      onChange(value.filter((v) => v !== optionValue));
    } else {
      onChange([...value, optionValue]);
    }
  };

  const getDisplayValue = () => {
    if (value.length === 0) return placeholder;
    return value.map(v => {
      const option = options.find(opt => opt.value === v);
      return option ? option.label : v;
    }).join(', ');
  };

  return (
    <div className={`mb-4 relative ${className}`} ref={wrapperRef}>
      <label htmlFor={id} className="block font-medium mb-2 text-[rgb(var(--foreground))]">
        {label} {required && <span className="text-red-600 dark:text-red-400">*</span>}
      </label>
      
      <div 
        className="w-full rounded-md border border-[rgb(var(--input))] shadow-sm py-2 px-3 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[rgb(var(--background))] text-[rgb(var(--foreground))]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center">
          <div className="truncate">{getDisplayValue()}</div>
          <div>
            <svg className={`h-5 w-5 transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div 
          className="absolute z-10 mt-1 w-full rounded-md border border-[rgb(var(--input))] shadow-lg max-h-60 overflow-auto bg-[rgb(var(--background))]"
        >
          {options.map((option) => (
            <div
              key={option.value}
              className={`px-3 py-2 cursor-pointer hover:bg-[rgb(var(--accent))] text-[rgb(var(--foreground))] ${
                value.includes(option.value) 
                  ? 'bg-blue-50/80 dark:bg-blue-900/30' 
                  : ''
              }`}
              onClick={(e) => {
                e.stopPropagation(); // 阻止冒泡，避免触发父元素的点击事件
                toggleOption(option.value);
              }}
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={value.includes(option.value)}
                  onChange={() => {}}
                  className="mr-2 h-4 w-4 rounded text-blue-600 dark:text-blue-400 focus:ring-blue-500 border-[rgb(var(--input))]"
                />
                {option.label}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FormMultiSelect;