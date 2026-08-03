import { useState } from 'react';
import { FIBA_RULES } from '../data/fibaRules';
import { FibaRule, RuleCategory } from '../types';
import { Search, ChevronRight, Shield, BookOpen, AlertTriangle } from 'lucide-react';
import { RuleDetailModal } from './RuleDetailModal';

const CATEGORIES: RuleCategory[] = [
  'All',
  'Violations',
  'Fouls',
  'Free Throws & Penalties',
  'Officials & Mechanics'
];

export function RulesTab() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<RuleCategory>('All');
  const [activeRule, setActiveRule] = useState<FibaRule | null>(null);

  const filteredRules = FIBA_RULES.filter(rule => {
    const matchesCategory = selectedCategory === 'All' || rule.category === selectedCategory;
    const query = searchQuery.toLowerCase();
    const matchesSearch = 
      rule.title.toLowerCase().includes(query) ||
      rule.article.toLowerCase().includes(query) ||
      rule.summary.toLowerCase().includes(query) ||
      rule.description.toLowerCase().includes(query) ||
      rule.keywords.some(k => k.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-4 pb-20">
      {/* Search Bar & Title */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-black text-white tracking-tight uppercase flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-[#ff6b00]" />
              <span>FIBA Rulebook & Violations</span>
            </h1>
            <p className="text-xs text-zinc-400">Official Official Basketball Rules (OBR) reference database</p>
          </div>
          <span className="px-2.5 py-1 bg-zinc-800 text-zinc-300 font-bold text-xs rounded-lg border border-zinc-700">
            {filteredRules.length} Rules
          </span>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <input
            type="text"
            placeholder="Search by rule name, article (e.g. Art. 36), keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-800 focus:border-[#ff6b00] text-white pl-10 pr-4 py-3 rounded-xl text-sm placeholder:text-zinc-500 outline-none transition-all shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Categories Pills */}
        <div className="flex overflow-x-auto space-x-2 pb-1 scrollbar-none">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all uppercase tracking-wider ${
                selectedCategory === cat
                  ? 'bg-[#ff6b00] text-white shadow-lg shadow-orange-600/30'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Rules List */}
      <div className="space-y-3">
        {filteredRules.length === 0 ? (
          <div className="text-center py-12 bg-zinc-900/50 rounded-2xl border border-zinc-800/80 p-8">
            <AlertTriangle className="w-10 h-10 text-orange-500 mx-auto mb-3 opacity-80" />
            <h3 className="text-white font-bold text-base mb-1">No matching rules found</h3>
            <p className="text-zinc-400 text-xs">Try searching for terms like "travelling", "unsportsmanlike", "3 seconds", or "Art. 33".</p>
          </div>
        ) : (
          filteredRules.map(rule => (
            <div
              key={rule.id}
              onClick={() => setActiveRule(rule)}
              className="group bg-zinc-900/80 hover:bg-zinc-900 border border-zinc-800/80 hover:border-[#ff6b00]/50 p-4 rounded-2xl transition-all cursor-pointer shadow-sm hover:shadow-md flex items-center justify-between"
            >
              <div className="space-y-1.5 pr-4">
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 bg-[#ff6b00]/20 text-[#ff6b00] rounded text-[10px] font-black uppercase tracking-wider">
                    {rule.article}
                  </span>
                  <span className="text-[10px] text-zinc-400 uppercase font-semibold">
                    {rule.category}
                  </span>
                </div>
                <h3 className="text-white font-bold text-base group-hover:text-[#ff6b00] transition-colors">
                  {rule.title}
                </h3>
                <p className="text-zinc-400 text-xs line-clamp-2 leading-relaxed">
                  {rule.summary}
                </p>
              </div>
              <div className="p-2 bg-zinc-800/80 group-hover:bg-[#ff6b00] text-zinc-400 group-hover:text-white rounded-xl transition-colors shrink-0">
                <ChevronRight className="w-5 h-5" />
              </div>
            </div>
          ))
        )}
      </div>

      {/* Detail Modal */}
      <RuleDetailModal
        rule={activeRule}
        onClose={() => setActiveRule(null)}
      />
    </div>
  );
}
