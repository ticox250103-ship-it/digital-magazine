import { useEffect } from 'react';
import { X, FileText, ExternalLink } from 'lucide-react';

export default function PdfModal({ article, onClose }) {
    // Close on Escape key
    useEffect(() => {
        const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', handleKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleKey);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    if (!article) return null;

    const pdfUrl = article.pdfFile.startsWith('/') ? article.pdfFile : `/${article.pdfFile}`;

    return (
        <div
            className="fixed inset-0 z-50 flex flex-col"
            style={{ background: 'rgba(2, 6, 23, 0.85)', backdropFilter: 'blur(8px)' }}
            onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
            {/* Header Bar */}
            <div className="flex items-center justify-between gap-4 px-6 py-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 shadow-sm flex-shrink-0">
                <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 bg-primary-100 dark:bg-primary-900/40 rounded-xl flex-shrink-0">
                        <FileText className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="min-w-0">
                        <p className="text-xs font-semibold text-primary-500 uppercase tracking-wider mb-0.5">{article.category}</p>
                        <h2 className="text-base md:text-lg font-heading font-bold text-slate-900 dark:text-white truncate">
                            {article.title}
                        </h2>
                    </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                    <a
                        href={pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-primary-300 dark:hover:border-primary-600 transition-all shrink-0"
                        title="Open in new tab"
                    >
                        <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        <span>Abrir PDF</span>
                    </a>
                    <button
                        onClick={onClose}
                        className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all"
                        title="Cerrar (Esc)"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* PDF Viewer Container */}
            <div className="flex-1 min-h-0 relative flex flex-col bg-slate-100 dark:bg-slate-950/50">
                {/* Mobile Fallback Hint */}
                <div className="md:hidden absolute inset-x-0 top-0 z-10 p-3 bg-amber-50 dark:bg-amber-900/20 border-b border-amber-100 dark:border-amber-800/30 flex items-center gap-2">
                    <div className="p-1 px-2 bg-amber-100 dark:bg-amber-900/40 rounded text-[10px] font-bold text-amber-700 dark:text-amber-400 uppercase">Tip</div>
                    <p className="text-[11px] text-amber-800 dark:text-amber-200 leading-tight">
                        Si el PDF no carga o no puedes verlo bien, usa el botón <strong>Abrir PDF</strong> arriba.
                    </p>
                </div>

                <div className="flex-1 w-full h-full pt-12 md:pt-0">
                    <iframe
                        src={`${pdfUrl}#toolbar=1&navpanes=0&view=fitH`}
                        className="w-full h-full border-0"
                        title={article.title}
                    />
                </div>

                {/* Mobile Direct Action (Bottom) */}
                <div className="md:hidden p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 flex flex-col gap-3">
                    <a
                        href={pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold shadow-lg shadow-primary-500/20 transition-all"
                    >
                        <ExternalLink className="w-4 h-4" />
                        <span>Ver PDF Completo</span>
                    </a>
                    <p className="text-center text-[10px] text-slate-500 dark:text-slate-400">
                        Los navegadores móviles visualizan mejor los PDF en una pestaña independiente.
                    </p>
                </div>
            </div>
        </div>
    );
}
