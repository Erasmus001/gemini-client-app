
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, className = '', ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
          {label}
        </label>
      )}
      <input
        className={`w-full h-12 px-4 bg-white border border-zinc-200 rounded-md text-[#111111] placeholder-zinc-300 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all duration-200 ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''} ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};
