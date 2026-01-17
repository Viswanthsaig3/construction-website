import React from 'react';
import { Section, Container } from '../ui/Section';
import { Card } from '../ui/Card';
import { ShieldCheck, TrendingUp, Users, Clock, HeartHandshake, Eye } from 'lucide-react';

const values = [
    {
        title: 'Quality',
        icon: ShieldCheck,
        text: 'At SVS Developers, quality is the promise that will never be compromised. Every layout, road, and utility detail is executed to be a safe, solid foundation for life.'
    },
    {
        title: 'Strategic Investment',
        icon: TrendingUp,
        text: 'Projects chosen after studying growth corridors and infrastructure plans. We help buyers enter at the right locations and prices for long-term wealth building.'
    },
    {
        title: 'Commitment',
        icon: HeartHandshake,
        text: 'Delivering exactly what is promised—down to the last tree and paving stone. We are dedicated to providing the best buying experience and growth potential.'
    },
    {
        title: 'Customer Oriented',
        icon: Users,
        text: 'Support built to flex around your goals. Whether building a home or investing, we guide you on planning, design, and even resale through our network.'
    },
    {
        title: 'Timeliness',
        icon: Clock,
        text: 'Commitments tied to clear timelines. We prioritise early registration and ensure infrastructure and handover are completed as scheduled.'
    },
    {
        title: 'Transparency & Trust',
        icon: Eye,
        text: 'Open and honest at every stage—from clear legal titles to straightforward pricing. We disclose all info to eliminate surprises and build genuine trust.'
    }
];

export function CoreValues() {
    return (
        <Section className="bg-biscuit relative">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-deep-green mb-4">Core Values</h2>
                    <div className="h-1 w-24 bg-gold mx-auto" />
                    <p className="mt-6 text-lg text-neutral-600 max-w-2xl mx-auto">
                        Our principles are the foundation of your trust. Here is what drives us every day.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((val, idx) => (
                        <Card key={idx} className="h-full">
                            <div className="w-12 h-12 bg-deep-green/10 rounded-full flex items-center justify-center mb-6">
                                <val.icon className="text-deep-green" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-deep-green mb-4">{val.title}</h3>
                            <p className="text-neutral-600 leading-relaxed text-sm">
                                {val.text}
                            </p>
                        </Card>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
