import React from 'react';
import { Section, Container } from '@/components/ui/Section';

export default function GalleryPage() {
    return (
        <div className="pt-24 bg-biscuit min-h-screen">
            <Section>
                <Container>
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold text-deep-green mb-4">Gallery</h1>
                        <div className="h-1 w-24 bg-gold mx-auto" />
                        <p className="mt-6 text-lg text-neutral-600">Glimpses of our premium developments.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Placeholders */}
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <div key={i} className="aspect-square bg-neutral-200 rounded-xl animate-pulse"></div>
                        ))}
                    </div>
                </Container>
            </Section>
        </div>
    );
}
