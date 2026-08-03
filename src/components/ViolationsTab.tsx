import { useState } from 'react';
import { FIBA_RULES } from '../data/fibaRules';
import { FibaRule } from '../types';
import { Search, ChevronRight, AlertTriangle, ShieldCheck, ExternalLink } from 'lucide-react';
import { RuleDetailModal } from './RuleDetailModal';

export function ViolationsTab() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeRule, setActiveRule] = useState<FibaRule | null>(null);

  const violations = FIBA_RULES.filter(rule => {
    const matchesCategory = rule.category === 'Violations';
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
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 p-6 rounded-2xl shadow-xl text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-black/10 transform skew-x-12 pointer-events-none"></div>
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-black/20 rounded-full text-xs font-black uppercase tracking-widest border border-white/20">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-300" />
            <span>FIBA Official Rulebook</span>
          </div>
          <h1 className="text-3xl font-black italic uppercase tracking-tighter">Rule Violations</h1>
          <p className="text-xs text-orange-100 max-w-xl font-medium">
            Official FIBA Articles 23–31 governing travelling, dribbling, shot clock violations, backcourt, and goaltending with exact penalties.
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-orange-500" />
        <input
          type="text"
          placeholder="SEARCH VIOLATIONS (e.g. Travelling, 24 seconds, Art. 25)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-[#1b1b1b] border-2 border-orange-500/40 focus:border-orange-500 text-white pl-11 pr-4 py-3.5 rounded-xl text-xs font-bold uppercase placeholder:text-zinc-500 outline-none transition-all shadow-inner"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-orange-400 hover:text-white uppercase"
          >
            Clear
          </button>
        )}
      </div>

      {/* Violations List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {violations.map(rule => (
          <div
            key={rule.id}
            onClick={() => setActiveRule(rule)}
            className="group bg-[#1a1a1a] hover:bg-[#222] border-2 border-white/10 hover:border-orange-500 p-5 rounded-2xl transition-all cursor-pointer shadow-lg flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-600/5 rounded-bl-full pointer-events-none group-hover:bg-orange-600/10 transition-colors"></div>
            
            <div className="space-y-3 relative z-10">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-orange-600/20 text-orange-400 border border-orange-500/30 rounded-lg text-xs font-black uppercase tracking-wider">
                  {rule.article}
                </span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-400">
                  {rule.category}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-black italic uppercase text-white group-hover:text-orange-500 transition-colors">
                  {rule.title}
                </h3>
                <p className="text-zinc-300 text-xs mt-2 line-clamp-2 leading-relaxed">
                  {rule.summary}
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-orange-400 group-hover:text-orange-300">
              <span className="flex items-center space-x-1">
                <ShieldCheck className="w-4 h-4" />
                <span>View Full Rule & Penalty</span>
              </span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {violations.length === 0 && (
        <div className="text-center py-16 bg-[#18181b] rounded-2xl border border-zinc-800 p-8">
          <AlertTriangle className="w-12 h-12 text-orange-500 mx-auto mb-3" />
          <h3 className="text-white font-bold text-base uppercase">No violations found</h3>
          <p className="text-zinc-400 text-xs mt-1">Try searching for keywords like "travelling", "dribble", or "3 seconds".</p>
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
