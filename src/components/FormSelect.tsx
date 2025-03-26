import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface FormSelectProps {
  id: string;
  label: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  placeholder?: string;
  className?: string;
}

const FormSelect: React.FC<FormSelectProps> = ({
  id,
  label,
  options,
  value,
  onChange,
  required = false,
  placeholder = '',
  className = '',
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={id} className="block font-medium mb-2 text-[rgb(var(--foreground))]">
        {label} {required && <span className="text-red-600 dark:text-red-400">*</span>}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full rounded-md border border-[rgb(var(--input))] shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[rgb(var(--background))] text-[rgb(var(--foreground))]"
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect; 