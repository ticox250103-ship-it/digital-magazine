import { ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function HeroSection({ onGoToEditions }) {
    const [views, setViews] = useState(null);

    useEffect(() => {
        let isMounted = true;
        const key = 'revista-pasantias-usm-2026-homepage';
        const hasVisitedSession = sessionStorage.getItem('revista_usm_visited');
        const endpoint = hasVisitedSession
            ? `https://countapi.mileshilliard.com/api/v1/get/${key}`
            : `https://countapi.mileshilliard.com/api/v1/hit/${key}`;

        fetch(endpoint)
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                return res.json();
            })
            .then((data) => {
                if (!isMounted) return;
                if (data && typeof data.value === 'number') {
                    setViews(data.value);
                    localStorage.setItem('revista_usm_views_backup', String(data.value));
                    if (!hasVisitedSession) {
                        sessionStorage.setItem('revista_usm_visited', 'true');
                    }
                } else {
                    throw new Error('Formato de respuesta inesperado');
                }
            })
            .catch((err) => {
                console.error('Error al obtener visitas:', err);
                if (!isMounted) return;
                // Respaldo resiliente usando cache de localStorage o base inicial
                const cached = localStorage.getItem('revista_usm_views_backup');
                if (cached) {
                    setViews(parseInt(cached, 10));
                } else {
                    setViews(142);
                }
            });

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
            {/* Background Graphic elements */}
            <div className="absolute inset-0 bg-slate-50 dark:bg-dark transition-colors duration-500" />

            {/* Decorative Gradients */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-200/40 dark:bg-primary-900/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 animate-subtle-float" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-300/30 dark:bg-primary-800/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />

            <div className="container relative z-10 mx-auto px-6 lg:px-12 flex flex-col items-center">
                {/* Banner 2da Edición Destacado */}
                <div className="w-full max-w-5xl mb-8 animate-fade-in-up">
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-[#ed772e] p-[1.5px] shadow-lg shadow-orange-500/15">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-3.5 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md">
                            <div className="flex items-center gap-3 flex-wrap">
                                <span className="flex h-3 w-3 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#ed772e]"></span>
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-100 text-[#ed772e] dark:bg-orange-950/80 dark:text-orange-300">
                                    <Sparkles className="w-3.5 h-3.5" />
                                    2da Edición
                                </span>
                                <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">
                                    <span className="font-semibold text-slate-900 dark:text-white">¡Nueva Publicación Académica!</span> Período Académico 2027-01 · 21 artículos científicos disponibles.
                                </p>
                            </div>
                            <a
                                href="#latest"
                                className="shrink-0 text-xs sm:text-sm font-semibold text-[#ed772e] hover:text-[#d96620] dark:text-orange-400 dark:hover:text-orange-300 flex items-center gap-1.5 transition-all group/link"
                            >
                                <span>Explorar 2da Edición</span>
                                <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Hero Main Content */}
                <div className="w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
                    {/* Content */}
                    <div className="flex-1 w-full animate-fade-in-up">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/80 dark:bg-orange-950/70 backdrop-blur-sm text-xs font-semibold text-orange-700 dark:text-orange-300 w-fit border border-orange-200 dark:border-orange-900/50">
                                <span className="w-2 h-2 rounded-full bg-[#ed772e] animate-pulse" />
                                2da Edición · Período 2027-01
                            </div>

                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-slate-800/80 shadow-sm border border-slate-200 dark:border-slate-700 backdrop-blur-md text-sm font-semibold text-slate-800 dark:text-white transition-all hover:scale-105 w-fit">
                                {views !== null ? (
                                    <>
                                        <span className="relative flex h-3 w-3">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                        </span>
                                        <span>{Number(views).toLocaleString('es-ES')} {views === 1 ? 'Visita' : 'Visitas'}</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="inline-block w-4 h-4 border-2 border-slate-300 dark:border-slate-600 border-t-primary-500 rounded-full animate-spin"></span>
                                        <span>Cargando...</span>
                                    </>
                                )}
                            </div>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-extrabold tracking-tight text-slate-800 dark:text-white leading-[1.15] mb-6 text-balance">
                            Revista <span className="whitespace-nowrap">Pasantías I</span> <br className="hidden lg:block" />
                            <span className="text-[#ed772e]"> en la Oficina de Farmacia</span>
                        </h1>

                        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed text-balance">
                            Bienvenidos a los artículos científicos de la <strong>2da Edición</strong> realizados en la Unidad Curricular Pasantías I en la Oficina de Farmacia por los estudiantes del 8vo Semestre como requisito obligatorio de sus pasantías para el período académico <strong>2027-01</strong> en la Facultad de Farmacia de la Universidad Santa María, Sede La Florencia.
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <a
                                href="#latest"
                                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#ed772e] hover:bg-[#d96620] text-white font-heading font-semibold text-sm shadow-lg shadow-orange-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer group"
                            >
                                <span>Ver 2da Edición</span>
                                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                            </a>
                            <button
                                onClick={() => onGoToEditions && onGoToEditions('edicion-1')}
                                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-200 font-heading font-semibold text-sm shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
                            >
                                <BookOpen className="w-4 h-4 text-slate-500" />
                                <span>Ediciones Anteriores</span>
                            </button>
                            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                                21 artículos científicos disponibles
                            </span>
                        </div>
                    </div>

                    {/* Featured Image Frame */}
                    <div className="flex-1 w-full flex justify-center lg:justify-end animate-fade-in-up mt-8 lg:mt-0" style={{ animationDelay: '0.2s' }}>
                        <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/30 to-primary-400/20 mix-blend-overlay z-10" />
                            <img
                                src="/images/articulos/3.jpg"
                                alt="Modern Pharmacy Research"
                                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                            />
                            {/* Floating Edition Badge */}
                            <div className="absolute bottom-5 left-5 right-5 z-20 p-4 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-white/20 dark:border-slate-800/80 shadow-xl flex items-center justify-between">
                                <div>
                                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#ed772e]">Publicación Actual</span>
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">2da Edición · Pasantías 2027-01</h4>
                                </div>
                                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-[#ed772e] dark:bg-orange-950/80 dark:text-orange-300">
                                    21 Artículos
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
