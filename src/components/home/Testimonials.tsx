'use client';

import React from 'react';
import { Section, Container } from '../ui/Section';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: 'Rajesh Kumar',
        role: 'IT Professional',
        text: 'Investing with SVS Developers was the best decision for my family. The clarity in documentation and the development speed of SVS Pearl exceeded my expectations.',
        rating: 5
    },
    {
        name: 'Deepa & Vikram',
        role: 'Home Owners',
        text: 'We were looking for a place to build our retirement home. The attention to detail in the layout and the peaceful location of the project stole our hearts.',
        rating: 5
    },
    {
        name: 'Srinivas Rao',
        role: 'Investor',
        text: 'I appreciate the transparency SVS brings to the table. No hidden costs, timely updates, and genuine growth potential. Highly recommended.',
        rating: 5
    }
];

export function Testimonials() {
    return (
        <Section className="bg-deep-green text-white relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4" />

            <Container className="relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Stories</h2>
                    <div className="h-1 w-24 bg-gold mx-auto" />
                    <p className="mt-6 text-white/80 max-w-2xl mx-auto">
                        Real experiences from families and investors who trusted SVS Developers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl relative"
                        >
                            <Quote className="absolute top-6 right-6 text-gold/20" size={48} />
                            <div className="flex gap-1 mb-6">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-gold text-gold" />
                                ))}
                            </div>
                            <p className="text-white/90 italic mb-8 leading-relaxed">"{t.text}"</p>
                            <div>
                                <h4 className="font-bold text-lg text-gold">{t.name}</h4>
                                <p className="text-white/60 text-sm">{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
