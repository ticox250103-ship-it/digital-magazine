import { ArrowUpRight } from 'lucide-react';
import { cn } from '../utils/cn';

export default function ArticleCard({ title, excerpt, category, imageUrl, readTime, onClick }) {
    return (
        <article onClick={onClick} className={cn(
            "group relative flex flex-col bg-white dark:bg-dark-paper rounded-3xl overflow-hidden cursor-pointer",
            "border border-slate-200 dark:border-dark-border shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-full"
        )}>
            {/* Image Container */}
            <div className="relative overflow-hidden aspect-[4/3]">
                <img
                    src={imageUrl}
                    alt={title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur text-xs font-semibold rounded-full text-primary-600 dark:text-primary-400 uppercase tracking-wider">
                        {category}
                    </span>
                </div>
            </div>

            {/* Content Container */}
            <div className="flex flex-col flex-1 p-6 md:p-8">
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-4">
                    <span>{readTime}</span>
                </div>

                <h3 className="font-heading font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors text-xl">
                    {title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-1 line-clamp-3 text-sm">
                    {excerpt}
                </p>

                <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium mt-auto group/btn">
                    <span>Leer Artículo</span>
                    <ArrowUpRight className="w-4 h-4 ml-1 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </div>
            </div>
        </article>
    );
}
