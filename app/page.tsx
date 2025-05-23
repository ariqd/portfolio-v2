'use client';

import { useEffect, useMemo, useRef, useState } from "react";

import Navbar from "@/components/Navbar";
import HomePage from "@/components/Home";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
    const sections = useMemo(() => [
        // { id: 'home', name: 'Home' },
        { id: 'experience', name: 'Experience' },
        { id: 'education', name: 'Education' },
        { id: 'articles', name: 'Articles', isComingSoon: true },
        { id: 'contact', name: 'Contact' },
    ], []);

    const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        Object.values(sectionRefs.current).forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div className="flex flex-col md:h-screen">
                <Navbar sections={sections} activeSection={activeSection} />
                <HomePage id="home" ref={(el) => { sectionRefs.current['home'] = el; }} />
            </div>
            <div className="bg-white">
                <Experience id="experience" ref={(el) => { sectionRefs.current['experience'] = el; }} />
                <Education id="education" ref={(el) => { sectionRefs.current['education'] = el; }} />
                <Contact id="contact" ref={(el) => { sectionRefs.current['contact'] = el; }} />
            </div>
        </>
    );
}
