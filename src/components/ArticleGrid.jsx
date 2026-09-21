import { useState } from 'react';
import ArticleCard from './ArticleCard';
import PdfModal from './PdfModal';
import { homeArticles } from '../data/homeArticles';

export default function ArticleGrid() {
    const [selectedArticle, setSelectedArticle] = useState(null);

    return (
        <>
            <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-500" id="latest">
                <div className="container mx-auto px-6 md:px-12">
                    {/* Header de la sección de artículos */}
                    <div className="mb-12 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 dark:bg-orange-950/70 text-xs font-bold text-[#ed772e] dark:text-orange-300 mb-3 border border-orange-200 dark:border-orange-900/40">
                            <span className="w-2 h-2 rounded-full bg-[#ed772e] animate-pulse"></span>
                            <span>2da Edición · Artículos Científicos</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white">
                            Investigaciones Académicas (2027-01)
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
                            21 investigaciones y propuestas científicas desarrolladas por estudiantes del 8vo Semestre de la Facultad de Farmacia — USM en sus pasantías en oficina de farmacia.
                        </p>
                    </div>

                    {/* Grid uniforme - 21 artículos */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 outline-none">
                        {homeArticles.map((article, index) => (
                            <div
                                key={article.id}
                                className="col-span-1"
                                style={{ animationDelay: `${(index % 5) * 0.1}s` }}
                            >
                                <div className="animate-fade-in-up h-full">
                                    <ArticleCard
                                        {...article}
                                        onClick={() => setSelectedArticle(article)}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {selectedArticle && (
                <PdfModal
                    article={selectedArticle}
                    onClose={() => setSelectedArticle(null)}
                />
            )}
        </>
    );
}
