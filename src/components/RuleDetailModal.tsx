import { FibaRule, RefereeSignal } from '../types';
import { REFEREE_SIGNALS } from '../data/fibaRules';
import { X, ExternalLink, BookOpen, ShieldAlert, Award } from 'lucide-react';

interface RuleDetailModalProps {
  rule: FibaRule | null;
  onClose: () => void;
  onSelectSignal?: (signal: RefereeSignal) => void;
}

export function RuleDetailModal({ rule, onClose, onSelectSignal }: RuleDetailModalProps) {
  if (!rule) return null;

  const linkedSignal = rule.signalRef 
    ? REFEREE_SIGNALS.find(s => s.id === rule.signalRef) 
    : null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-sm p-0 sm:p-4">
      <div 
        className="w-full sm:max-w-2xl bg-[#18181b] border-t sm:border border-[#ff6b00]/30 rounded-t-3xl sm:rounded-2xl shadow-2xl max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/80">
          <div className="flex items-center space-x-3">
            <span className="px-3 py-1 bg-[#ff6b00]/20 text-[#ff6b00] border border-[#ff6b00]/30 rounded-full text-xs font-bold tracking-wider uppercase">
              {rule.article}
            </span>
            <span className="text-xs text-zinc-400 font-medium uppercase tracking-wide">
              {rule.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-full hover:bg-zinc-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-zinc-100">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-white mb-2">
              {rule.title}
            </h2>
            <p className="text-zinc-300 text-base leading-relaxed bg-zinc-900/50 p-4 rounded-xl border border-zinc-800/80">
              {rule.summary}
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#ff6b00] flex items-center space-x-2">
              <BookOpen className="w-4 h-4" />
              <span>Official FIBA Rule Description</span>
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed pl-2 border-l-2 border-[#ff6b00]/40">
              {rule.description}
            </p>
          </div>

          <div className="space-y-2 bg-orange-950/20 border border-orange-500/20 p-4 rounded-xl">
            <h3 className="text-sm font-bold uppercase tracking-wider text-orange-400 flex items-center space-x-2">
              <ShieldAlert className="w-4 h-4" />
              <span>Ruling & Penalty</span>
            </h3>
            <p className="text-zinc-200 text-sm leading-relaxed">
              {rule.penalty}
            </p>
          </div>

          {linkedSignal && (
            <div className="space-y-2 bg-zinc-900/80 border border-zinc-800 p-4 rounded-xl">
              <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400 flex items-center space-x-2">
                <Award className="w-4 h-4 text-[#ff6b00]" />
                <span>Associated Referee Signal: {linkedSignal.name}</span>
              </h3>
              <p className="text-xs text-zinc-400">{linkedSignal.description}</p>
              {onSelectSignal && (
                <button
                  onClick={() => {
                    onSelectSignal(linkedSignal);
                    onClose();
                  }}
                  className="mt-2 text-xs font-bold text-[#ff6b00] hover:underline flex items-center space-x-1"
                >
                  <span>View Signal Mechanics Guide &rarr;</span>
                </button>
              )}
            </div>
          )}
        </div>

        {/* Footer with Official FIBA Link */}
        <div className="p-4 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between">
          <a
            href={rule.fibaHandbookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2.5 bg-[#ff6b00] hover:bg-[#e05e00] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-orange-600/20 active:scale-95"
          >
            <span>Open FIBA Official Handbook</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={onClose}
            className="px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
