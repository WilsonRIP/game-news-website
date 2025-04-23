'use client';

import { forwardRef, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyle = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
    
    const variants = {
      primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      outline: 'border border-input hover:bg-accent/10 hover:text-accent-foreground',
      ghost: 'hover:bg-accent/10 hover:text-accent-foreground',
      link: 'underline-offset-4 hover:underline text-primary',
    };
    
    const sizes = {
      sm: 'h-8 px-3 rounded-md',
      md: 'h-10 px-4 py-2',
      lg: 'h-12 px-6 py-3 rounded-md',
    };
    
    const variantStyle = variants[variant];
    const sizeStyle = sizes[size];
    
    return (
      <button
        ref={ref}
        className={`${baseStyle} ${variantStyle} ${sizeStyle} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, type ButtonProps }; 