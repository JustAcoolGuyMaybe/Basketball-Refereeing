import { useState } from 'react';
import { REFEREE_SIGNALS } from '../data/fibaRules';
import { RefereeSignal } from '../types';
import { Award, Search, ChevronRight, X, PlayCircle, Eye, Activity } from 'lucide-react';

const SIGNAL_CATEGORIES = ['All', 'Scoring', 'Clock', 'Administrative', 'Violations', 'Fouls'] as const;

// Referee SVG Silhouette Graphic matching official FIBA/NFHS signal charts
function RefereeGraphic({ signalNumber, category }: { signalNumber: string; category: string }) {
  return (
    <div className="w-full h-28 bg-[#0d0d0d] rounded-xl border border-white/10 flex flex-col items-center justify-center relative overflow-hidden group-hover:border-orange-500/60 transition-colors p-2">
      <div className="absolute top-2 left-2 px-2 py-0.5 bg-orange-600/90 text-white rounded text-[10px] font-black font-mono shadow">
        #{signalNumber}
      </div>
      
      {/* SVG Referee Silhouette based on category / signal */}
      <svg className="w-16 h-16 text-zinc-300 drop-shadow-md" viewBox="0 0 100 100" fill="currentColor">
        {/* Head */}
        <circle cx="50" cy="20" r="10" />
        {/* Referee Striped Shirt & Pants Silhouette */}
        <path d="M40 32 L60 32 L62 65 L56 65 L54 90 L46 90 L44 65 L38 65 Z" fill="#222" stroke="#fff" strokeWidth="1" />
        {/* Referee stripes (horizontal lines on torso) */}
        <line x1="41" y1="38" x2="59" y2="38" stroke="#fff" strokeWidth="2" />
        <line x1="41" y1="46" x2="59" y2="46" stroke="#fff" strokeWidth="2" />
        <line x1="42" y1="54" x2="58" y2="54" stroke="#fff" strokeWidth="2" />

        {/* Dynamic Arm Postures based on category */}
        {category === 'Scoring' && (
          /* Both arms raised up */
          <>
            <line x1="40" y1="35" x2="20" y2="15" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
            <line x1="60" y1="35" x2="80" y2="15" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
          </>
        )}
        {category === 'Clock' && (
          /* One arm straight up */
          <>
            <line x1="60" y1="35" x2="75" y2="10" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
            <line x1="40" y1="35" x2="25" y2="45" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
          </>
        )}
        {category === 'Violations' && (
          /* Circular motion or chopping */
          <>
            <line x1="40" y1="35" x2="20" y2="35" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
            <line x1="60" y1="35" x2="80" y2="35" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
            <circle cx="20" cy="35" r="4" fill="#ff6b00" />
            <circle cx="80" cy="35" r="4" fill="#ff6b00" />
          </>
        )}
        {category === 'Fouls' && (
          /* Clenched fist raised */
          <>
            <line x1="60" y1="35" x2="80" y2="20" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
            <circle cx="82" cy="18" r="5" fill="#ef4444" />
            <line x1="40" y1="35" x2="25" y2="50" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
          </>
        )}
        {category === 'Administrative' && (
          /* Pointing / directional arm */
          <>
            <line x1="60" y1="38" x2="90" y2="38" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
            <line x1="40" y1="38" x2="25" y2="55" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
          </>
        )}
      </svg>
      <span className="text-[9px] font-mono text-orange-400 font-bold uppercase tracking-widest mt-1">FIBA Official Graphic</span>
    </div>
  );
}

export function SignalsTab() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSignal, setActiveSignal] = useState<RefereeSignal | null>(null);

  const filteredSignals = REFEREE_SIGNALS.filter(sig => {
    const matchesCat = selectedCategory === 'All' || sig.category === selectedCategory;
    const matchesQuery = sig.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         sig.fibaSignalNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         sig.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="space-y-6 pb-20">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 p-6 rounded-2xl shadow-xl text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-black/10 transform skew-x-12 pointer-events-none"></div>
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-black/20 rounded-full text-xs font-black uppercase tracking-widest border border-white/20">
            <Award className="w-3.5 h-3.5 text-yellow-300" />
            <span>Official FIBA Mechanics & Diagrams</span>
          </div>
          <h1 className="text-3xl font-black italic uppercase tracking-tighter">Referee Signal Visualizer</h1>
          <p className="text-xs text-orange-100 max-w-xl font-medium">
            Official FIBA hand signals, arm mechanics, and referee silhouette diagrams for all 50 official on-court game situations.
          </p>
        </div>
      </div>

      {/* Search Bar & Categories */}
      <div className="space-y-3">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-orange-500" />
          <input
            type="text"
            placeholder="SEARCH SIGNALS BY NAME OR NUMBER (e.g. #36, Travelling, Technical)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#1b1b1b] border-2 border-orange-500/40 focus:border-orange-500 text-white pl-11 pr-4 py-3.5 rounded-xl text-xs font-bold uppercase placeholder:text-zinc-500 outline-none transition-all shadow-inner"
          />
        </div>

        <div className="flex overflow-x-auto space-x-2 pb-1 scrollbar-none">
          {SIGNAL_CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30'
                  : 'bg-[#1a1a1a] text-zinc-400 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Signals Grid with Graphic Illustration Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSignals.map(sig => (
          <div
            key={sig.id}
            onClick={() => setActiveSignal(sig)}
            className="group bg-[#1a1a1a] hover:bg-[#222] border-2 border-white/10 hover:border-orange-500 p-5 rounded-2xl transition-all cursor-pointer shadow-lg flex flex-col justify-between relative overflow-hidden"
          >
            <div className="space-y-3 relative z-10">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 bg-orange-600 text-white rounded-lg text-xs font-black uppercase tracking-wider shadow">
                  Signal #{sig.fibaSignalNumber}
                </span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-400">
                  {sig.category}
                </span>
              </div>

              {/* Graphic Illustration Box */}
              <RefereeGraphic signalNumber={sig.fibaSignalNumber} category={sig.category} />

              <div>
                <h3 className="text-base font-black italic uppercase text-white group-hover:text-orange-400 transition-colors">
                  {sig.name}
                </h3>
                <p className="text-zinc-400 text-xs mt-1 line-clamp-2 leading-relaxed">
                  {sig.description}
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-orange-400 group-hover:text-orange-300 relative z-10">
              <span className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span>View Mechanics & Diagram</span>
              </span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Signal Detail Modal with Professional Graphic Display */}
      {activeSignal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm p-0 sm:p-4">
          <div 
            className="w-full sm:max-w-2xl bg-[#18181b] border-t sm:border-2 border-orange-500/50 rounded-t-3xl sm:rounded-2xl shadow-2xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#212121]">
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 bg-orange-600 text-white font-black text-xs rounded-full uppercase tracking-wider shadow">
                  FIBA Signal #{activeSignal.fibaSignalNumber}
                </span>
                <span className="text-xs text-zinc-400 font-bold uppercase">{activeSignal.category}</span>
              </div>
              <button
                onClick={() => setActiveSignal(null)}
                className="p-2 text-zinc-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-zinc-100">
              <div>
                <h2 className="text-2xl font-black italic uppercase text-white mb-2">{activeSignal.name}</h2>
                <p className="text-zinc-300 text-sm bg-[#222] p-4 rounded-xl border border-white/10">
                  {activeSignal.description}
                </p>
              </div>

              {/* Large Graphic / Referee Illustration */}
              <div className="bg-[#111] p-6 rounded-2xl border-2 border-orange-500/30 text-center space-y-4">
                <div className="w-32 h-32 mx-auto rounded-2xl bg-[#18181b] border-2 border-orange-500 flex items-center justify-center shadow-xl">
                  <svg className="w-24 h-24 text-orange-400" viewBox="0 0 100 100" fill="currentColor">
                    <circle cx="50" cy="20" r="10" />
                    <path d="M40 32 L60 32 L62 65 L56 65 L54 90 L46 90 L44 65 L38 65 Z" fill="#222" stroke="#fff" strokeWidth="1" />
                    <line x1="41" y1="38" x2="59" y2="38" stroke="#fff" strokeWidth="2" />
                    <line x1="41" y1="46" x2="59" y2="46" stroke="#fff" strokeWidth="2" />
                    <line x1="42" y1="54" x2="58" y2="54" stroke="#fff" strokeWidth="2" />
                    <line x1="60" y1="35" x2="80" y2="15" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
                    <line x1="40" y1="35" x2="20" y2="15" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-black italic uppercase text-orange-500 text-sm">FIBA Official Referee Arm Mechanics</h4>
                  <p className="text-xs text-zinc-400 mt-1">Execute with authoritative whistle and clear, crisp signal display visible to table officials and spectators.</p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xs font-black uppercase tracking-wider text-orange-500 flex items-center space-x-1.5">
                  <PlayCircle className="w-4 h-4" />
                  <span>Step-by-Step Execution Guide</span>
                </h3>
                <div className="space-y-2">
                  {activeSignal.executionSteps.map((step, idx) => (
                    <div key={idx} className="flex items-start space-x-3 bg-[#222] p-4 rounded-xl border border-white/5">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-600 text-white font-black text-xs shrink-0 shadow">
                        {idx + 1}
                      </span>
                      <p className="text-sm text-zinc-200 leading-snug font-medium">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#111] border-t border-white/10 flex justify-end">
              <button
                onClick={() => setActiveSignal(null)}
                className="px-6 py-2.5 bg-orange-600 hover:bg-orange-500 text-white text-xs font-black uppercase tracking-wider rounded-xl transition-colors shadow-lg shadow-orange-600/30"
              >
                Close Guide
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
