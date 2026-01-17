import React from 'react';
import { Container } from '../ui/Section';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-deep-green text-white py-16 border-t-4 border-gold">
            <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* Brand */}
                <div>
                    <h3 className="text-2xl font-bold font-sans mb-6">SVS <span className="text-gold">Developers</span></h3>
                    <p className="text-white/80 mb-6">
                        Building foundations for life with quality, trust, and timeless value. Your dream plot awaits.
                    </p>
                    <div className="flex gap-4">
                        {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                            <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors">
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-gold font-bold text-lg mb-6">Quick Links</h4>
                    <ul className="space-y-3">
                        {[
                            { label: 'Home', href: '/' },
                            { label: 'Our Story', href: '/our-story' },
                            { label: 'Projects', href: '/projects' },
                            { label: 'Investor Lounge', href: '/investor-lounge' },
                            { label: 'Gallery', href: '/gallery' },
                            { label: 'Contact Us', href: '/contact-us' },
                        ].map((link) => (
                            <li key={link.label}>
                                <Link href={link.href} className="text-white/80 hover:text-gold transition-colors">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Registered Office */}
                <div>
                    <h4 className="text-gold font-bold text-lg mb-6">Registered Office</h4>
                    <address className="not-italic text-white/80 space-y-4">
                        <p className="flex gap-3">
                            <MapPin className="shrink-0 text-gold" size={20} />
                            <span>
                                Flat no 104, Tri home Gitanjali Apts,<br />
                                Gautami Enclave, Besides Chirec Public School,<br />
                                Kondapur, Hyderabad, Telangana 500084
                            </span>
                        </p>
                        <p className="flex gap-3">
                            <Mail className="shrink-0 text-gold" size={20} />
                            <a href="mailto:svsdevelopers111@gmail.com" className="hover:text-gold">svsdevelopers111@gmail.com</a>
                        </p>
                        <p className="flex gap-3">
                            <Phone className="shrink-0 text-gold" size={20} />
                            <a href="tel:8142955888" className="hover:text-gold">8142955888</a>
                        </p>
                    </address>
                </div>

                {/* Guntur Office */}
                <div>
                    <h4 className="text-gold font-bold text-lg mb-6">Guntur Office</h4>
                    <address className="not-italic text-white/80 space-y-4">
                        <p className="flex gap-3">
                            <MapPin className="shrink-0 text-gold" size={20} />
                            <span>
                                SVS Developers, Fourth Floor,<br />
                                Satya's Urban Edge, Opp: Vijay Digital,<br />
                                Mahatma Gandhi Inner Ring Road,<br />
                                Balaji Nagar, Guntur - 522034
                            </span>
                        </p>
                    </address>
                </div>
            </Container>

            <div className="border-t border-white/10 mt-16 pt-8 text-center text-white/50 text-sm">
                <p>&copy; {new Date().getFullYear()} SVS Developers. All rights reserved.</p>
            </div>
        </footer>
    );
}
