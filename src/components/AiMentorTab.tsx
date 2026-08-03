import { useState } from 'react';
import { ChatMessage } from '../types';
import { Bot, Send, User, Sparkles, AlertCircle, RefreshCw } from 'lucide-react';

const SAMPLE_QUESTIONS = [
  "What is the exact penalty for an Unsportsmanlike Foul?",
  "Explain the FIBA rule on flopping (simulation)",
  "When does a 24-second shot clock reset to 14 seconds?",
  "What constitutes a legal guarding position in FIBA Art. 33?"
];

export function AiMentorTab() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'model',
      content: 'Hello Referee! I am your FIBA Referee AI Assistant, trained on Official FIBA Basketball Rules (OBR), interpretations, and referee mechanics. Ask me any rule interpretation question or game scenario.',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: query.trim(),
      timestamp: new Date()
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    if (!textToSend) setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map(m => ({ role: m.role, content: m.content }))
        })
      });

      if (res.status === 404) {
        throw new Error('The AI backend endpoint (/api/chat) is not available on static hosting (e.g. GitHub Pages). To enable live AI answers, run the app with the Node.js backend server or Cloud Run container.');
      }

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to get response from AI assistant');
      }

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        content: data.text,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (err: any) {
      setError(err.message || 'Network error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-16rem)] min-h-[550px] bg-[#1a1a1a] border-2 border-orange-500/30 rounded-2xl shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 bg-[#212121] border-b-2 border-orange-500/40 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-orange-600/20 border-2 border-orange-500 flex items-center justify-center text-orange-500 shadow-lg">
            <Bot className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h2 className="text-white font-black italic uppercase text-lg tracking-tighter flex items-center space-x-2">
              <span>FIBA Referee AI Mentor</span>
              <Sparkles className="w-4 h-4 text-orange-400" />
            </h2>
            <p className="text-[10px] uppercase font-mono tracking-widest text-zinc-400">Powered by FIBA Official Rules & Gemini</p>
          </div>
        </div>
        <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-black uppercase rounded-full border border-emerald-500/30 flex items-center space-x-1.5 shadow">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
          <span>Online Expert</span>
        </span>
      </div>

      {/* Suggested Questions */}
      <div className="p-3 bg-[#111] border-b border-white/10 flex overflow-x-auto space-x-2 scrollbar-none">
        {SAMPLE_QUESTIONS.map((q, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(q)}
            disabled={isLoading}
            className="px-4 py-2 bg-[#222] hover:bg-orange-600 text-zinc-300 hover:text-white rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap border border-white/10 transition-all shadow"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start space-x-3 ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}
          >
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-md ${
              msg.role === 'user' ? 'bg-orange-600 text-white font-black' : 'bg-[#222] text-orange-500 border border-orange-500/30'
            }`}>
              {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-5 h-5" />}
            </div>
            <div className={`max-w-[80%] sm:max-w-[75%] p-4 rounded-2xl text-sm leading-relaxed font-medium ${
              msg.role === 'user'
                ? 'bg-orange-600 text-white rounded-tr-none shadow-lg'
                : 'bg-[#222] text-zinc-100 rounded-tl-none border border-white/10 shadow-lg'
            }`}>
              <div className="whitespace-pre-wrap">{msg.content}</div>
              <div className={`text-[10px] mt-1.5 opacity-60 font-mono ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex items-start space-x-3">
            <div className="w-9 h-9 rounded-xl bg-[#222] text-orange-500 border border-orange-500/30 flex items-center justify-center shrink-0">
              <Bot className="w-5 h-5 animate-spin" />
            </div>
            <div className="bg-[#222] text-zinc-300 p-4 rounded-2xl rounded-tl-none border border-white/10 flex items-center space-x-3 shadow-lg">
              <RefreshCw className="w-4 h-4 animate-spin text-orange-500" />
              <span className="text-xs font-bold uppercase tracking-wider">Analyzing FIBA Rulebook & Case Law...</span>
            </div>
          </div>
        )}

        {error && (
          <div className="p-4 bg-red-950/50 border border-red-500/50 rounded-xl text-red-200 text-xs flex items-center space-x-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}
      </div>

      {/* Input Form */}
      <div className="p-4 bg-[#212121] border-t-2 border-orange-500/40">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center space-x-3"
        >
          <input
            type="text"
            placeholder="ASK AI REFEREE ABOUT ANY FIBA RULE, PENALTY, OR GAME SCENARIO..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
            className="flex-1 bg-[#111] border-2 border-orange-500/40 focus:border-orange-500 text-white px-4 py-3.5 rounded-xl text-xs font-bold uppercase placeholder:text-zinc-500 outline-none shadow-inner"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="p-3.5 bg-orange-600 hover:bg-orange-500 disabled:opacity-50 text-white rounded-xl transition-all shadow-lg shadow-orange-600/30 flex items-center justify-center"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
