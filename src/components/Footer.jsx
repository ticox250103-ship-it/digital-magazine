import { Instagram, Pill } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="footer" className="bg-slate-950 text-slate-400 border-t border-slate-800">

            {/* Main Footer Body */}
            <div className="container mx-auto px-6 md:px-12 py-16 flex flex-col items-center gap-8 text-center">

                {/* Brand */}
                <div className="flex items-center gap-3">
                    <Pill className="h-8 w-8 text-[#ed772e] animate-subtle-float" />
                    <span className="font-heading font-semibold text-xl text-white">
                        Revista Pasantías I
                    </span>
                </div>

                <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
                    Publicación académica de prácticas profesionales farmacéuticas.<br />
                    Facultad de Farmacia — Edición 2026.
                </p>

                {/* Instagram */}
                <div className="flex flex-col items-center gap-3">
                    <p className="text-xs uppercase tracking-widest text-slate-500 font-medium">Síguenos</p>
                    <a
                        href="https://www.instagram.com/farmacia.usm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-900 hover:bg-[#ed772e] transition-all duration-300"
                    >
                        <Instagram className="w-5 h-5 text-[#ed772e] group-hover:text-white transition-colors duration-300" />
                        <span className="text-sm font-medium text-white">@farmacia.usm</span>
                    </a>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-slate-800 py-6">
                <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-center md:text-left text-xs text-slate-500">
                        © {new Date().getFullYear()} Revista Pasantías I · Todos los derechos reservados.
                    </p>
                    <div className="text-center md:text-right text-[10px] md:text-xs text-slate-500 font-medium leading-relaxed">
                        Desarrollado por Aoshi Blanco<br />
                        Estudiante de la Facultad de Ingeniería y Arquitectura de la Universidad Santa María
                    </div>
                </div>
            </div>
        </footer>
    );
}
