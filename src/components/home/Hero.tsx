'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section, Container } from '../ui/Section';
import { Button } from '../ui/Button';

// Using Unsplash images for premium real estate feel since assets are missing
const slides = [
    {
        image: 'https://images.unsplash.com/photo-1600596542815-2a4d04774c13?q=80&w=2075&auto=format&fit=crop',
        title: 'Building Foundations for Life',
        subtitle: 'Premium open plots in strategic growth corridors'
    },
    {
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
        title: 'Your Dream, Our Commitment',
        subtitle: 'Secure, legally clear, and ready for construction'
    },
    {
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
        title: 'Strategic Investments',
        subtitle: 'High-growth potential in Amaravati and beyond'
    }
];

export function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden bg-deep-green">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 0.6, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src={slides[currentSlide].image}
                        alt="Hero Background"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-deep-green/90 via-deep-green/50 to-transparent z-10" />

            <Container className="relative z-20 h-full flex flex-col justify-center items-start pt-20">
                <motion.div
                    key={`text-${currentSlide}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <div className="h-1 w-20 bg-gold mb-8" />
                    <h1 className="text-5xl md:text-7xl font-bold text-white font-sans leading-tight mb-6">
                        {slides[currentSlide].title}
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 font-light mb-10 max-w-2xl">
                        {slides[currentSlide].subtitle}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button className="text-lg px-10 py-4">
                            Explore Projects
                        </Button>
                        <Button variant="outline" className="text-white border-white hover:bg-white hover:text-deep-green text-lg px-10 py-4">
                            Contact Us
                        </Button>
                    </div>
                </motion.div>
            </Container>

            {/* Slide Indicators */}
            <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-1 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-12 bg-gold' : 'w-4 bg-white/30'}`}
                    />
                ))}
            </div>
        </div>
    );
}
