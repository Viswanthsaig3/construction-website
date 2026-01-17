import React from 'react';
import { Section, Container } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
    return (
        <div className="pt-24 bg-biscuit min-h-screen">
            <Section>
                <Container>
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold text-deep-green mb-4">Contact Us</h1>
                        <div className="h-1 w-24 bg-gold mx-auto" />
                        <p className="mt-6 text-lg text-neutral-600">We are here to help you build your dream.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <Card>
                            <h2 className="text-2xl font-bold text-deep-green mb-6">Get in Touch</h2>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-1">Name</label>
                                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-1">Email</label>
                                    <input type="email" className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-1">Message</label>
                                    <textarea rows={4} className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none"></textarea>
                                </div>
                                <Button className="w-full">Send Message</Button>
                            </form>
                        </Card>
                        <div className="rounded-xl overflow-hidden shadow-lg h-full min-h-[400px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.467885474747!2d78.3653!3d17.4485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzU0LjYiTiA3OMKwMjEnNTguOCJF!5e0!3m2!1sen!2sin!4v1633000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
