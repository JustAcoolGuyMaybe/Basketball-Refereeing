import { useState } from 'react';
import { Smartphone, Palette, Volume2, Shield, Check, RefreshCw, Award } from 'lucide-react';

interface SettingsTabProps {
  appIcon: string;
  setAppIcon: (icon: string) => void;
  deviceFrame: string;
  setDeviceFrame: (frame: string) => void;
  soundEnabled: boolean;
  setSoundEnabled: (val: boolean) => void;
}

const APP_ICONS = [
  { id: 'basketball', name: 'FIBA Basketball', bg: 'bg-orange-600', symbol: '🏀' },
  { id: 'whistle', name: 'Referee Whistle', bg: 'bg-zinc-800', symbol: '📯' },
  { id: 'trophy', name: 'Championship Gold', bg: 'bg-amber-500', symbol: '🏆' },
  { id: 'tactical', name: 'Tactical Board', bg: 'bg-blue-600', symbol: '📋' },
  { id: 'stealth', name: 'Stealth Obsidian', bg: 'bg-neutral-900', symbol: '⚡' },
];

export function SettingsTab({ appIcon, setAppIcon, deviceFrame, setDeviceFrame, soundEnabled, setSoundEnabled }: SettingsTabProps) {
  const [savedMessage, setSavedMessage] = useState(false);

  const handleSave = () => {
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 2500);
  };

  return (
    <div className="space-y-6 pb-24 text-zinc-100">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-zinc-800 via-neutral-800 to-orange-900 p-6 rounded-2xl shadow-xl text-white relative overflow-hidden border border-white/10">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-black/20 transform skew-x-12 pointer-events-none"></div>
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-black/30 rounded-full text-xs font-black uppercase tracking-widest border border-white/20">
            <Smartphone className="w-3.5 h-3.5 text-orange-400" />
            <span>Mobile App Customization</span>
          </div>
          <h1 className="text-3xl font-black italic uppercase tracking-tighter">App Settings & Appearance</h1>
          <p className="text-xs text-zinc-300 max-w-xl font-medium">
            Customize your mobile experience, select custom app icons, toggle device frames, and configure game audio preferences.
          </p>
        </div>
      </div>

      {/* App Icon Selector */}
      <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10 space-y-4 shadow-lg">
        <div className="flex items-center space-x-3 text-orange-500">
          <Palette className="w-5 h-5" />
          <h3 className="text-base font-black italic uppercase text-white">App Icon Customization</h3>
        </div>
        <p className="text-xs text-zinc-400">Choose your preferred application icon displayed on your home screen and header.</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
          {APP_ICONS.map((icon) => {
            const isSelected = appIcon === icon.id;
            return (
              <button
                key={icon.id}
                onClick={() => setAppIcon(icon.id)}
                className={`flex items-center space-x-3 p-3 rounded-xl border-2 transition-all text-left relative ${
                  isSelected
                    ? 'bg-orange-600/20 border-orange-500 shadow-lg shadow-orange-600/20'
                    : 'bg-[#222] border-white/5 hover:border-white/20'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl ${icon.bg} flex items-center justify-center text-xl shadow-md shrink-0`}>
                  {icon.symbol}
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-bold text-white truncate">{icon.name}</p>
                  <p className="text-[10px] text-zinc-400 font-mono">{isSelected ? 'Active Icon' : 'Tap to select'}</p>
                </div>
                {isSelected && (
                  <div className="absolute top-2 right-2 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center text-white text-[10px]">
                    ✓
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Device Viewport / Phone Frame Mode */}
      <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10 space-y-4 shadow-lg">
        <div className="flex items-center space-x-3 text-orange-500">
          <Smartphone className="w-5 h-5" />
          <h3 className="text-base font-black italic uppercase text-white">Device Viewport Frame</h3>
        </div>
        <p className="text-xs text-zinc-400">Switch between native phone enclosure modes optimized for iPhone and Android devices.</p>

        <div className="grid grid-cols-3 gap-3 pt-2">
          {[
            { id: 'iphone', name: 'iPhone 16 Pro', desc: 'Dynamic Island Frame' },
            { id: 'android', name: 'Android Pixel', desc: 'Punch-Hole Viewport' },
            { id: 'fullscreen', name: 'Full Responsive', desc: 'Expand to Edge' },
          ].map((frame) => {
            const isSelected = deviceFrame === frame.id;
            return (
              <button
                key={frame.id}
                onClick={() => setDeviceFrame(frame.id)}
                className={`p-3.5 rounded-xl border-2 text-center transition-all flex flex-col items-center justify-center space-y-1 ${
                  isSelected
                    ? 'bg-orange-600 text-white border-orange-500 shadow-lg shadow-orange-600/30'
                    : 'bg-[#222] text-zinc-300 border-white/5 hover:border-white/20'
                }`}
              >
                <span className="text-xs font-black uppercase tracking-wider">{frame.name}</span>
                <span className={`text-[10px] font-mono ${isSelected ? 'text-orange-100' : 'text-zinc-500'}`}>{frame.desc}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Audio & Haptics Preferences */}
      <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10 space-y-4 shadow-lg">
        <div className="flex items-center space-x-3 text-orange-500">
          <Volume2 className="w-5 h-5" />
          <h3 className="text-base font-black italic uppercase text-white">Audio & Whistle Feedback</h3>
        </div>

        <div className="flex items-center justify-between py-2 border-b border-white/5">
          <div>
            <p className="text-xs font-bold text-white uppercase">Whistle Audio & Sound Effects</p>
            <p className="text-[11px] text-zinc-400">Play official referee whistle tones on rule infractions and signals.</p>
          </div>
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`w-12 h-6 rounded-full transition-colors relative p-1 ${soundEnabled ? 'bg-orange-600' : 'bg-zinc-700'}`}
          >
            <div className={`w-4 h-4 rounded-full bg-white transition-transform ${soundEnabled ? 'translate-x-6' : 'translate-x-0'}`}></div>
          </button>
        </div>
      </div>

      {/* App Info & Save Action */}
      <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10 flex items-center justify-between">
        <div>
          <h4 className="font-black italic uppercase text-white text-sm">FIBA Referee Pro 2026</h4>
          <p className="text-[11px] text-zinc-400 font-mono mt-0.5">Official Rules Edition v2.6 • Mobile PWA Optimized</p>
        </div>
        <button
          onClick={handleSave}
          className="px-5 py-2.5 bg-orange-600 hover:bg-orange-500 text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-orange-600/30 flex items-center space-x-2"
        >
          {savedMessage ? (
            <>
              <Check className="w-4 h-4" />
              <span>Preferences Saved!</span>
            </>
          ) : (
            <>
              <RefreshCw className="w-4 h-4" />
              <span>Apply Changes</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
