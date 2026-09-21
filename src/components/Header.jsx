import { useState, useEffect } from 'react';
import { Menu, X, Pill } from 'lucide-react';
import { cn } from '../utils/cn';

export default function Header({ activeSection = 'inicio', onNavigate }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { id: 'inicio', label: 'Inicio', href: '#inicio' },
        { id: 'articulos', label: 'Artículos', href: '#latest' },
        { id: 'ediciones', label: 'Ediciones', href: '#ediciones' },
        { id: 'contacto', label: 'Contacto', href: '#footer' },
    ];

    const handleLinkClick = (e, link) => {
        e.preventDefault();
        setIsMenuOpen(false);

        if (link.id === 'contacto') {
            const footerEl = document.getElementById('footer');
            if (footerEl) {
                footerEl.scrollIntoView({ behavior: 'smooth' });
            }
            return;
        }

        if (link.id === 'articulos') {
            if (activeSection !== 'inicio') {
                if (onNavigate) onNavigate('inicio');
                setTimeout(() => {
                    const articlesEl = document.getElementById('latest');
                    if (articlesEl) articlesEl.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            } else {
                const articlesEl = document.getElementById('latest');
                if (articlesEl) articlesEl.scrollIntoView({ behavior: 'smooth' });
            }
            return;
        }

        if (link.id === 'inicio') {
            if (onNavigate) onNavigate('inicio');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        if (link.id === 'ediciones') {
            if (onNavigate) onNavigate('ediciones');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
    };

    return (
        <header
            className={cn(
                'fixed top-0 w-full z-50 transition-all duration-300',
                isScrolled
                    ? 'py-4 glass dark:glass-dark shadow-sm'
                    : 'py-6 bg-transparent dark:text-white'
            )}
        >
            <div className="container mx-auto px-4 md:px-12 flex items-center justify-between">
                <button
                    onClick={(e) => handleLinkClick(e, { id: 'inicio' })}
                    className="flex items-center gap-2 md:gap-3 flex-shrink-0 z-50 text-left cursor-pointer"
                >
                    <Pill className="h-6 w-6 text-[#ed772e] animate-subtle-float" />
                    <span className="font-heading font-semibold text-sm md:text-lg text-slate-700 dark:text-slate-200 whitespace-nowrap">
                        Revista Pasantías I
                    </span>
                </button>

                {/* Desktop Navigation — center (original clean text style) */}
                <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={(e) => handleLinkClick(e, link)}
                            className={cn(
                                "font-medium text-sm transition-colors",
                                (activeSection === link.id && link.id !== 'contacto')
                                    ? "text-primary-500 font-semibold"
                                    : "text-slate-600 dark:text-slate-300 hover:text-primary-500"
                            )}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Mobile menu toggle — right */}
                <button
                    className="lg:hidden p-2 text-slate-700 dark:text-white z-50 transition-transform active:scale-95"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Desktop right spacer (mirrors logo width to keep nav truly centered) */}
                <div className="hidden lg:block invisible flex-shrink-0">
                    <div className="flex items-center gap-2">
                        <Pill className="h-6 w-6" />
                        <span className="text-lg">Revista Pasantías I</span>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    "fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
                onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Menu Panel (original style) */}
            <div
                className={cn(
                    "fixed top-0 right-0 h-[100dvh] w-[80%] max-w-sm bg-white dark:bg-slate-900 z-50 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden flex flex-col pt-24 px-6 border-l border-slate-100 dark:border-slate-800",
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                {navLinks.map((link, index) => (
                    <a
                        key={link.label}
                        href={link.href}
                        className="py-4 text-xl font-medium text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                        onClick={(e) => handleLinkClick(e, link)}
                        style={{ transitionDelay: `${index * 50}ms` }}
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </header>
    );
}
