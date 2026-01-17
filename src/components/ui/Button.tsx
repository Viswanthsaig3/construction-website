'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps extends HTMLMotionProps<'button'> {
    variant?: 'primary' | 'outline' | 'ghost';
    children: React.ReactNode;
}

export function Button({
    className,
    variant = 'primary',
    children,
    ...props
}: ButtonProps) {
    const variants = {
        primary: "bg-gold text-white hover:bg-[#C89329]",
        outline: "border-2 border-gold text-gold hover:bg-gold hover:text-white",
        ghost: "bg-transparent text-deep-green hover:bg-deep-green/10"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                "px-8 py-3 rounded-full font-sans font-medium transition-colors duration-200 flex items-center justify-center gap-2",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
}
