import { useState, useMemo } from 'react';
import { BookOpen, Search, Sparkles, Filter, Calendar, Award } from 'lucide-react';
import ArticleCard from './ArticleCard';
import PdfModal from './PdfModal';
import { EDITIONS } from '../data/editions';
import { cn } from '../utils/cn';

export default function EditionsSection({ initialEditionId }) {
    const [selectedEditionId, setSelectedEditionId] = useState(initialEditionId || EDITIONS[0]?.id || 'edicion-1');
    const [selectedCategory, setSelectedCategory] = useState('Todas');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedArticle, setSelectedArticle] = useState(null);

    const currentEdition = useMemo(() => {
        return EDITIONS.find(e => e.id === selectedEditionId) || EDITIONS[0];
    }, [selectedEditionId]);

    // Categories available in the current edition
    const categories = useMemo(() => {
        if (!currentEdition?.articles) return ['Todas'];
        const unique = Array.from(new Set(currentEdition.articles.map(a => a.category)));
        return ['Todas', ...unique];
    }, [currentEdition]);

    // Filtered articles
    const filteredArticles = useMemo(() => {
        if (!currentEdition?.articles) return [];
        return currentEdition.articles.filter(article => {
            const matchesCategory = selectedCategory === 'Todas' || article.category === selectedCategory;
            const query = searchQuery.toLowerCase().trim();
            const matchesSearch = !query ||
                article.title.toLowerCase().includes(query) ||
                article.excerpt.toLowerCase().includes(query) ||
                article.category.toLowerCase().includes(query);
            return matchesCategory && matchesSearch;
        });
    }, [currentEdition, selectedCategory, searchQuery]);

    return (
        <section id="ediciones" className="min-h-screen pt-28 pb-24 bg-slate-50 dark:bg-dark transition-colors duration-500">
            {/* Background Decorative Blur */}
            <div className="relative">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary-200/30 dark:bg-primary-900/20 rounded-full blur-[130px] pointer-events-none -translate-y-1/2" />
                <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-orange-200/20 dark:bg-orange-900/10 rounded-full blur-[120px] pointer-events-none" />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-12">
                {/* Header Banner */}
                <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-100/70 dark:bg-primary-950/60 border border-primary-200/60 dark:border-primary-800/40 text-xs font-semibold text-primary-700 dark:text-primary-300 mb-4 backdrop-blur-sm shadow-sm">
                        <BookOpen className="w-3.5 h-3.5 text-primary-500" />
                        <span>Repositorio de Publicaciones</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
                        Ediciones de la <span className="text-[#ed772e]">Revista</span>
                    </h1>

                    <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                        Explora los artículos científicos organizados por edición. Selecciona una edición para consultar las investigaciones y visualizar sus documentos en formato PDF.
                    </p>
                </div>

                {/* Edition Selector Tabs */}
                <div className="flex items-center justify-center gap-3 mb-10 flex-wrap animate-fade-in-up">
                    {EDITIONS.map(edition => {
                        const isSelected = edition.id === selectedEditionId;
                        return (
                            <button
                                key={edition.id}
                                onClick={() => {
                                    setSelectedEditionId(edition.id);
                                    setSelectedCategory('Todas');
                                    setSearchQuery('');
                                }}
                                className={cn(
                                    "group relative flex items-center gap-2.5 px-6 py-3 rounded-2xl font-heading font-semibold text-sm transition-all duration-300 shadow-sm",
                                    isSelected
                                        ? "bg-primary-600 text-white shadow-lg shadow-primary-500/25 scale-[1.02]"
                                        : "bg-white dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700"
                                )}
                            >
                                <Sparkles className={cn("w-4 h-4", isSelected ? "text-amber-200" : "text-primary-500")} />
                                <span>{edition.title}</span>
                                <span className={cn(
                                    "ml-1.5 px-2 py-0.5 rounded-full text-xs font-bold",
                                    isSelected
                                        ? "bg-white/20 text-white"
                                        : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                                )}>
                                    {edition.articles.length} PDFs
                                </span>
                            </button>
                        );
                    })}

                    {/* Placeholder for future edition */}
                    <div className="flex items-center gap-2 px-5 py-3 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 text-slate-400 dark:text-slate-500 text-xs font-medium bg-slate-50/50 dark:bg-slate-900/30">
                        <span>+ 3era Edición (Próximamente)</span>
                    </div>
                </div>

                {/* Current Edition Card Overview */}
                {currentEdition && (
                    <div className="mb-12 p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 shadow-sm backdrop-blur-sm animate-fade-in-up">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                            <div className="space-y-2">
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 text-primary-700 dark:bg-primary-950/60 dark:text-primary-300 border border-primary-200/50 dark:border-primary-800/50">
                                        {currentEdition.fullTitle}
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {currentEdition.publishDate}
                                    </span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 dark:text-white">
                                    {currentEdition.subtitle}
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 text-sm max-w-3xl leading-relaxed">
                                    {currentEdition.description}
                                </p>
                                <p className="text-xs text-slate-500 dark:text-slate-500 font-medium">
                                    {currentEdition.faculty}
                                </p>
                            </div>

                            <div className="flex lg:flex-col items-center sm:items-start lg:items-end gap-3 shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100 dark:border-slate-700/60">
                                <div className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                                    <Award className="w-4 h-4 text-[#ed772e]" />
                                    <span>{currentEdition.articles.length} Artículos en PDF</span>
                                </div>
                                <div className="text-xs text-slate-500 dark:text-slate-400">
                                    Carpeta: <code className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-primary-600 dark:text-primary-400 font-mono">public/ediciones/{currentEdition.id}/</code>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Search & Category Filter Bar */}
                <div className="mb-10 space-y-5 animate-fade-in-up">
                    <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                        {/* Search Input */}
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Buscar por título, autor o palabra clave..."
                                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 transition-all shadow-sm"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                                >
                                    Limpiar
                                </button>
                            )}
                        </div>

                        {/* Results Count */}
                        <div className="text-xs md:text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
                            <Filter className="w-4 h-4 text-primary-500" />
                            <span>Mostrando <strong>{filteredArticles.length}</strong> de {currentEdition?.articles?.length || 0} artículos</span>
                        </div>
                    </div>

                    {/* Category Filter Pills */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                        {categories.map((cat) => {
                            const isSelected = selectedCategory === cat;
                            const count = cat === 'Todas'
                                ? currentEdition?.articles?.length || 0
                                : currentEdition?.articles?.filter(a => a.category === cat).length || 0;

                            return (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={cn(
                                        "px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5",
                                        isSelected
                                            ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm"
                                            : "bg-white dark:bg-slate-800/70 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/60 border border-slate-200/80 dark:border-slate-700/80"
                                    )}
                                >
                                    <span>{cat}</span>
                                    <span className={cn(
                                        "text-[10px] px-1.5 py-0.2 rounded-full",
                                        isSelected
                                            ? "bg-slate-700 text-slate-200 dark:bg-slate-200 dark:text-slate-800"
                                            : "bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400"
                                    )}>
                                        {count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Articles Grid */}
                {filteredArticles.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredArticles.map((article, index) => (
                            <div
                                key={article.id}
                                className="col-span-1"
                                style={{ animationDelay: `${(index % 5) * 0.08}s` }}
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
                ) : (
                    <div className="text-center py-20 bg-white dark:bg-slate-800/40 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 max-w-lg mx-auto">
                        <p className="text-base font-semibold text-slate-700 dark:text-slate-300 mb-2">
                            No se encontraron artículos
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                            No hay resultados que coincidan con los criterios de búsqueda o categoría seleccionada.
                        </p>
                        <button
                            onClick={() => {
                                setSelectedCategory('Todas');
                                setSearchQuery('');
                            }}
                            className="px-4 py-2 text-xs font-semibold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/60 border border-primary-200 dark:border-primary-800/50 rounded-xl hover:bg-primary-100 transition-colors"
                        >
                            Restablecer filtros
                        </button>
                    </div>
                )}
            </div>

            {/* PDF Modal Reader */}
            {selectedArticle && (
                <PdfModal
                    article={selectedArticle}
                    onClose={() => setSelectedArticle(null)}
                />
            )}
        </section>
    );
}
