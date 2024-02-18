import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ className, ...rest }) => {
  return (
    <button
      className={`px-4 py-1 rounded-md ${className}`}
      {...rest}
    />
  );
};

export default Button;