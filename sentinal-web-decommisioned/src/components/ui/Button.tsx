import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'hazard' | 'ghost';
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    children,
    className,
    ...props
}) => {
    const variants = {
        primary: 'bg-primary text-canvas hover:shadow-sentinel-glow border border-primary active:scale-95',
        secondary: 'bg-transparent border border-primary text-primary hover:bg-primary-dim',
        hazard: 'border border-hazard text-hazard bg-hazard/10 hover:bg-hazard hover:text-white',
        ghost: 'bg-transparent text-primary border border-primary/50 hover:bg-primary/10',
    };

    return (
        <button
            className={clsx(
                "font-bold px-5 py-2 text-sm transition-all duration-300 uppercase tracking-widest clip-corners",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};
