import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
}

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  default:
    'bg-blue-600 text-white hover:bg-blue-700 shadow-[0_12px_30px_rgba(37,99,235,0.25)]',
  outline: 'border border-slate-200 bg-white text-slate-900 hover:bg-slate-50',
  ghost: 'bg-transparent text-slate-700 hover:bg-slate-100',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex h-11 items-center justify-center rounded-2xl px-5 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:opacity-60',
          variantClasses[variant],
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';
