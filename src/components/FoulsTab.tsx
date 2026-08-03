import { useState } from 'react';
import { FIBA_RULES } from '../data/fibaRules';
import { FibaRule } from '../types';
import { Search, ChevronRight, ShieldAlert, Award, ExternalLink } from 'lucide-react';
import { RuleDetailModal } from './RuleDetailModal';

export function FoulsTab() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeRule, setActiveRule] = useState<FibaRule | null>(null);

  const fouls = FIBA_RULES.filter(rule => {
    const matchesCategory = rule.category === 'Fouls' || rule.category === 'Free Throws & Penalties';
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
    <div className="space-y-6 pb-20">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 p-6 rounded-2xl shadow-xl text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-black/10 transform skew-x-12 pointer-events-none"></div>
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-black/20 rounded-full text-xs font-black uppercase tracking-widest border border-white/20">
            <ShieldAlert className="w-3.5 h-3.5 text-red-200" />
            <span>FIBA Official Rulebook</span>
          </div>
          <h1 className="text-3xl font-black italic uppercase tracking-tighter">Fouls & Penalties</h1>
          <p className="text-xs text-red-100 max-w-xl font-medium">
            Official FIBA Articles 33–44 covering personal fouls, technical fouls, unsportsmanlike contact, disqualifications, and team foul penalties.
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-red-500" />
        <input
          type="text"
          placeholder="SEARCH FOULS (e.g. Unsportsmanlike, Technical, Art. 36, Flopping)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-[#1b1b1b] border-2 border-red-500/40 focus:border-red-500 text-white pl-11 pr-4 py-3.5 rounded-xl text-xs font-bold uppercase placeholder:text-zinc-500 outline-none transition-all shadow-inner"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-red-400 hover:text-white uppercase"
          >
            Clear
          </button>
        )}
      </div>

      {/* Fouls List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {fouls.map(rule => (
          <div
            key={rule.id}
            onClick={() => setActiveRule(rule)}
            className="group bg-[#1a1a1a] hover:bg-[#222] border-2 border-white/10 hover:border-red-500 p-5 rounded-2xl transition-all cursor-pointer shadow-lg flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 rounded-bl-full pointer-events-none group-hover:bg-red-600/10 transition-colors"></div>
            
            <div className="space-y-3 relative z-10">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-red-600/20 text-red-400 border border-red-500/30 rounded-lg text-xs font-black uppercase tracking-wider">
                  {rule.article}
                </span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-400">
                  {rule.category}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-black italic uppercase text-white group-hover:text-red-400 transition-colors">
                  {rule.title}
                </h3>
                <p className="text-zinc-300 text-xs mt-2 line-clamp-2 leading-relaxed">
                  {rule.summary}
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-red-400 group-hover:text-red-300">
              <span className="flex items-center space-x-1">
                <Award className="w-4 h-4" />
                <span>View Penalty & Ruling</span>
              </span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {fouls.length === 0 && (
        <div className="text-center py-16 bg-[#18181b] rounded-2xl border border-zinc-800 p-8">
          <ShieldAlert className="w-12 h-12 text-red-500 mx-auto mb-3" />
          <h3 className="text-white font-bold text-base uppercase">No fouls found</h3>
          <p className="text-zinc-400 text-xs mt-1">Try searching for "unsportsmanlike", "technical", or "personal".</p>
        </div>
      )}

      {/* Modal */}
      <RuleDetailModal
        rule={activeRule}
        onClose={() => setActiveRule(null)}
      />
    </div>
  );
}
