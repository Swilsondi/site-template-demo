import React from 'react';
import { motion } from 'framer-motion';

type ButtonProps = {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  leftIcon,
  rightIcon,
}) => {
  const base = 'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 gap-2';

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variants = {
    primary: 'bg-red-600 text-white hover:bg-red-700',
    secondary: 'bg-gray-800 text-white hover:bg-gray-900',
    outline: 'border border-gray-600 text-gray-900 hover:bg-gray-100',
    ghost: 'bg-transparent text-gray-900 hover:bg-gray-100',
  };

  const full = fullWidth ? 'w-full' : '';

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      type={type}
      className={`${base} ${sizes[size]} ${variants[variant]} ${full}`}
    >
      {leftIcon}
      {text}
      {rightIcon}
    </motion.button>
  );
};
