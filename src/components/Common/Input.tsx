import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<InputProps> = ({ className, ...rest }) => {
  return (
    <input
      className={`w-full px-4 py-1 border rounded-md ${className}`}
      {...rest}
    />
  );
};

export default Input;