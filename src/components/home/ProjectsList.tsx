import React from 'react';
import { Section, Container } from '../ui/Section';
import { Button } from '../ui/Button';
import { ArrowRight, MapPin } from 'lucide-react';
import Link from 'next/link';

const projects = [
    {
        name: 'SVS Pearl',
        location: 'Kondapur, Hyderabad',
        image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop', // Placeholder
        description: 'A premium gated community offering widely spaced plots with state-of-the-art amenities and lush green landscapes.',
        status: 'Ready for Registration'
    },
    {
        name: 'SVS Jewel',
        location: 'Amaravati Region',
        image: 'https://images.unsplash.com/photo-1625602812206-5ec545ca1231?q=80&w=2070&auto=format&fit=crop', // Placeholder
        description: 'Strategically located plots in the heart of the growth corridor, perfect for high-return investment and future living.',
        status: 'New Launch'
    }
];

export function ProjectsList() {
    return (
        <Section className="bg-white">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-deep-green mb-2">Explore our Projects</h2>
                        <div className="h-1 w-24 bg-gold" />
                    </div>
                    <Button variant="ghost" className="hidden md:flex">
                        View All Projects <ArrowRight size={18} />
                    </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((project, idx) => (
                        <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-xl bg-biscuit">
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 bg-gold text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                                    {project.status}
                                </div>
                            </div>

                            <div className="p-8 relative bg-white mx-4 -mt-16 mb-4 rounded-xl shadow-lg border-t-2 border-gold z-10">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-deep-green">{project.name}</h3>
                                        <p className="text-neutral-500 text-sm flex items-center gap-1 mt-1">
                                            <MapPin size={14} className="text-gold" /> {project.location}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-neutral-600 mb-6 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button className="w-full sm:w-auto text-sm">
                                        Book Your Dream Plot Today
                                    </Button>
                                    <Link href={`/projects/${project.name.toLowerCase().replace(' ', '-')}`} className="w-full sm:w-auto">
                                        <Button variant="outline" className="w-full sm:w-auto text-sm justify-center">
                                            View Details
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Button variant="ghost">
                        View All Projects <ArrowRight size={18} />
                    </Button>
                </div>
            </Container>
        </Section>
    );
}
