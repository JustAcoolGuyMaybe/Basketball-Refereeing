import { useState } from 'react';
import { TabType } from './types';
import { Header } from './components/Header';
import { ViolationsTab } from './components/ViolationsTab';
import { FoulsTab } from './components/FoulsTab';
import { SignalsTab } from './components/SignalsTab';
import { GuidelinesTab } from './components/GuidelinesTab';
import { AiMentorTab } from './components/AiMentorTab';
import { SettingsTab } from './components/SettingsTab';
import { AlertTriangle, ShieldAlert, Award, BookOpen, Bot, Settings, Smartphone } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('violations');
  const [appIcon, setAppIcon] = useState<string>('basketball');
  const [deviceFrame, setDeviceFrame] = useState<string>('iphone'); // 'iphone' | 'android' | 'fullscreen'
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white flex flex-col items-center justify-center font-sans selection:bg-orange-600 selection:text-white p-0 sm:py-6 sm:px-4">
      {/* Viewport / Frame Selector Bar */}
      <div className="hidden sm:flex items-center space-x-3 mb-4 bg-[#18181b] px-4 py-2 rounded-full border border-white/10 shadow-lg text-xs font-mono">
        <span className="text-zinc-400 flex items-center space-x-1.5">
          <Smartphone className="w-3.5 h-3.5 text-orange-500" />
          <span>Mobile Viewport Simulator:</span>
        </span>
        <button
          onClick={() => setDeviceFrame('iphone')}
          className={`px-3 py-1 rounded-full font-bold transition-all ${
            deviceFrame === 'iphone' ? 'bg-orange-600 text-white shadow' : 'text-zinc-400 hover:text-white'
          }`}
        >
          iPhone 16 Pro
        </button>
        <button
          onClick={() => setDeviceFrame('android')}
          className={`px-3 py-1 rounded-full font-bold transition-all ${
            deviceFrame === 'android' ? 'bg-orange-600 text-white shadow' : 'text-zinc-400 hover:text-white'
          }`}
        >
          Android Pixel
        </button>
        <button
          onClick={() => setDeviceFrame('fullscreen')}
          className={`px-3 py-1 rounded-full font-bold transition-all ${
            deviceFrame === 'fullscreen' ? 'bg-orange-600 text-white shadow' : 'text-zinc-400 hover:text-white'
          }`}
        >
          Expanded View
        </button>
      </div>

      {/* Mobile Device Enclosure Wrapper */}
      <div
        className={`w-full bg-[#111111] flex flex-col relative transition-all duration-300 overflow-hidden ${
          deviceFrame === 'iphone'
            ? 'max-w-[414px] h-[896px] rounded-[50px] border-[14px] border-[#262629] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] ring-1 ring-white/20'
            : deviceFrame === 'android'
            ? 'max-w-[412px] h-[892px] rounded-[36px] border-[10px] border-[#222225] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] ring-1 ring-white/20'
            : 'max-w-4xl min-h-screen sm:min-h-[850px] sm:rounded-2xl sm:border border-white/10 sm:shadow-2xl'
        }`}
      >
        {/* iOS / Android simulated status bar for phone frames */}
        {deviceFrame !== 'fullscreen' && (
          <div className="bg-[#1b1b1b] px-6 pt-3 pb-1 flex items-center justify-between text-[11px] font-mono text-zinc-400 select-none shrink-0 border-b border-white/5">
            <span className="font-bold text-white">9:41</span>
            {deviceFrame === 'iphone' && (
              <div className="w-24 h-4 bg-black rounded-full absolute left-1/2 -translate-x-1/2 top-2 flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-[#111] rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-[#111] rounded-full"></div>
              </div>
            )}
            {deviceFrame === 'android' && (
              <div className="w-3.5 h-3.5 bg-black rounded-full absolute left-1/2 -translate-x-1/2 top-2"></div>
            )}
            <div className="flex items-center space-x-2 text-[10px]">
              <span>5G</span>
              <div className="w-5 h-2.5 border border-zinc-400 rounded-sm p-0.5 flex items-center">
                <div className="h-full w-3.5 bg-green-500 rounded-2xs"></div>
              </div>
            </div>
          </div>
        )}

        {/* Top Header */}
        <Header appIcon={appIcon} onOpenSettings={() => setActiveTab('settings')} />

        {/* Main Content Scrollable Area */}
        <main className="flex-1 overflow-y-auto px-4 py-4 sm:px-6 sm:py-6 bg-[#111111] pb-24">
          {activeTab === 'violations' && <ViolationsTab />}
          {activeTab === 'fouls' && <FoulsTab />}
          {activeTab === 'signals' && <SignalsTab />}
          {activeTab === 'guidelines' && <GuidelinesTab />}
          {activeTab === 'ai' && <AiMentorTab />}
          {activeTab === 'settings' && (
            <SettingsTab
              appIcon={appIcon}
              setAppIcon={setAppIcon}
              deviceFrame={deviceFrame}
              setDeviceFrame={setDeviceFrame}
              soundEnabled={soundEnabled}
              setSoundEnabled={setSoundEnabled}
            />
          )}
        </main>

        {/* Bottom Mobile Navigation Tab Bar */}
        <nav aria-label="Mobile Navigation" className="absolute bottom-0 left-0 right-0 bg-[#18181b]/95 backdrop-blur-md border-t border-white/10 px-2 py-2 flex items-center justify-around z-50 shadow-2xl">
          <button
            onClick={() => setActiveTab('violations')}
            className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all ${
              activeTab === 'violations' ? 'text-orange-500 font-bold scale-105' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <AlertTriangle className="w-5 h-5 mb-0.5" />
            <span className="text-[10px] uppercase tracking-tight">Violations</span>
          </button>

          <button
            onClick={() => setActiveTab('fouls')}
            className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all ${
              activeTab === 'fouls' ? 'text-orange-500 font-bold scale-105' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <ShieldAlert className="w-5 h-5 mb-0.5" />
            <span className="text-[10px] uppercase tracking-tight">Fouls</span>
          </button>

          <button
            onClick={() => setActiveTab('signals')}
            className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all ${
              activeTab === 'signals' ? 'text-orange-500 font-bold scale-105' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Award className="w-5 h-5 mb-0.5" />
            <span className="text-[10px] uppercase tracking-tight">Signals</span>
          </button>

          <button
            onClick={() => setActiveTab('guidelines')}
            className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all ${
              activeTab === 'guidelines' ? 'text-orange-500 font-bold scale-105' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <BookOpen className="w-5 h-5 mb-0.5" />
            <span className="text-[10px] uppercase tracking-tight">Rules</span>
          </button>

          <button
            onClick={() => setActiveTab('ai')}
            className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all ${
              activeTab === 'ai' ? 'text-orange-500 font-bold scale-105' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Bot className="w-5 h-5 mb-0.5" />
            <span className="text-[10px] uppercase tracking-tight">AI Mentor</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all ${
              activeTab === 'settings' ? 'text-orange-500 font-bold scale-105' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Settings className="w-5 h-5 mb-0.5" />
            <span className="text-[10px] uppercase tracking-tight">Settings</span>
          </button>
        </nav>

        {/* Phone home indicator bar at bottom */}
        {deviceFrame !== 'fullscreen' && (
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-zinc-600 rounded-full pointer-events-none z-50"></div>
        )}
      </div>
    </div>
  );
}
