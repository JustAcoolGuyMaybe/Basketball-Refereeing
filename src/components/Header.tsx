import { Settings, Shield } from 'lucide-react';

interface HeaderProps {
  appIcon?: string;
  onOpenSettings?: () => void;
}

const ICON_SYMBOLS: Record<string, { bg: string; symbol: string }> = {
  basketball: { bg: 'bg-orange-600', symbol: '🏀' },
  whistle: { bg: 'bg-zinc-800', symbol: '📯' },
  trophy: { bg: 'bg-amber-500', symbol: '🏆' },
  tactical: { bg: 'bg-blue-600', symbol: '📋' },
  stealth: { bg: 'bg-neutral-900', symbol: '⚡' },
};

export function Header({ appIcon = 'basketball', onOpenSettings }: HeaderProps) {
  const currentIcon = ICON_SYMBOLS[appIcon] || ICON_SYMBOLS['basketball'];

  return (
    <header className="bg-[#1b1b1b] border-b border-white/10 sticky top-0 z-40 px-4 py-3 shadow-md flex items-center justify-between">
      <div className="flex items-center space-x-2.5">
        <div className={`w-9 h-9 rounded-xl ${currentIcon.bg} flex items-center justify-center text-lg border border-white/20 shadow-md`}>
          {currentIcon.symbol}
        </div>
        <div>
          <h1 className="text-lg font-black uppercase tracking-tighter italic text-white leading-tight">
            FIBA <span className="text-orange-500">Referee Pro</span>
          </h1>
          <p className="text-[9px] uppercase font-mono tracking-widest text-zinc-400">2026 Official Rules</p>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <div className="hidden xs:flex items-center space-x-1.5 px-2 py-1 bg-white/5 rounded-lg border border-white/10">
          <Shield className="w-3 h-3 text-orange-500" />
          <span className="text-[10px] font-mono font-bold text-zinc-300">FIBA Certified</span>
        </div>
        {onOpenSettings && (
          <button
            onClick={onOpenSettings}
            className="p-2 bg-white/5 hover:bg-white/10 rounded-xl text-zinc-300 hover:text-white border border-white/10 transition-colors"
            title="Settings"
          >
            <Settings className="w-4 h-4 text-orange-400" />
          </button>
        )}
      </div>
    </header>
  );
}
