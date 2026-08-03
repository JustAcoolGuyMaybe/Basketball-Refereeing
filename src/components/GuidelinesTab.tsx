import { useState } from 'react';
import { BookOpen, Scale, Award, MonitorPlay, Users, Clock, ShieldCheck, FileText, Calculator, HelpCircle } from 'lucide-react';

export function GuidelinesTab() {
  const [activeSubTab, setActiveSubTab] = useState<'general' | 'court' | 'officials' | 'irs' | 'classification'>('general');

  // Classification simulation state
  const [teamA, setTeamA] = useState({ name: 'Team A', wins: 2, losses: 1, ptsFor: 230, ptsAgainst: 210 });
  const [teamB, setTeamB] = useState({ name: 'Team B', wins: 2, losses: 1, ptsFor: 220, ptsAgainst: 215 });
  const [teamC, setTeamC] = useState({ name: 'Team C', wins: 2, losses: 1, ptsFor: 210, ptsAgainst: 225 });

  const calculateStandings = () => {
    const teams = [
      { ...teamA, points: teamA.wins * 2 + teamA.losses * 1, diff: teamA.ptsFor - teamA.ptsAgainst },
      { ...teamB, points: teamB.wins * 2 + teamB.losses * 1, diff: teamB.ptsFor - teamB.ptsAgainst },
      { ...teamC, points: teamC.wins * 2 + teamC.losses * 1, diff: teamC.ptsFor - teamC.ptsAgainst },
    ];
    return teams.sort((x, y) => y.points - x.points || y.diff - x.diff);
  };

  return (
    <div className="space-y-6 pb-20">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-600 to-orange-600 p-6 rounded-2xl shadow-xl text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-black/10 transform skew-x-12 pointer-events-none"></div>
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-black/20 rounded-full text-xs font-black uppercase tracking-widest border border-white/20">
            <BookOpen className="w-3.5 h-3.5 text-blue-300" />
            <span>FIBA 2026 Official Rulebook - Complete Scope</span>
          </div>
          <h1 className="text-3xl font-black italic uppercase tracking-tighter">Game Guidelines & Provisions</h1>
          <p className="text-xs text-blue-100 max-w-xl font-medium">
            Comprehensive operational guidelines covering court standards, team regulations, table official duties, Instant Replay System (IRS), Head Coach's Challenge, and Team Classification rules.
          </p>
        </div>
      </div>

      {/* Sub-Navigation Tabs */}
      <div className="flex overflow-x-auto space-x-2 pb-1 scrollbar-none">
        <button
          onClick={() => setActiveSubTab('general')}
          className={`px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all ${
            activeSubTab === 'general' ? 'bg-orange-600 text-white shadow-lg' : 'bg-[#1a1a1a] text-zinc-400 hover:text-white border border-white/10'
          }`}
        >
          Game Structure & Teams
        </button>
        <button
          onClick={() => setActiveSubTab('court')}
          className={`px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all ${
            activeSubTab === 'court' ? 'bg-orange-600 text-white shadow-lg' : 'bg-[#1a1a1a] text-zinc-400 hover:text-white border border-white/10'
          }`}
        >
          Court & Equipment
        </button>
        <button
          onClick={() => setActiveSubTab('officials')}
          className={`px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all ${
            activeSubTab === 'officials' ? 'bg-orange-600 text-white shadow-lg' : 'bg-[#1a1a1a] text-zinc-400 hover:text-white border border-white/10'
          }`}
        >
          Table Officials & Errors
        </button>
        <button
          onClick={() => setActiveSubTab('irs')}
          className={`px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all ${
            activeSubTab === 'irs' ? 'bg-orange-600 text-white shadow-lg' : 'bg-[#1a1a1a] text-zinc-400 hover:text-white border border-white/10'
          }`}
        >
          IRS & Coach Challenge
        </button>
        <button
          onClick={() => setActiveSubTab('classification')}
          className={`px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all ${
            activeSubTab === 'classification' ? 'bg-orange-600 text-white shadow-lg' : 'bg-[#1a1a1a] text-zinc-400 hover:text-white border border-white/10'
          }`}
        >
          Classification & Protests
        </button>
      </div>

      {/* Content Sections */}
      {activeSubTab === 'general' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10 space-y-4 shadow-lg">
            <div className="flex items-center space-x-3 text-orange-500">
              <Clock className="w-6 h-6" />
              <h3 className="text-lg font-black italic uppercase text-white">Playing Time & Overtime (Art. 8-9)</h3>
            </div>
            <ul className="space-y-2.5 text-xs text-zinc-300 leading-relaxed">
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Quarters:</strong> The game consists of 4 quarters of 10 minutes each.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Intervals:</strong> 2-minute intervals between Q1-Q2 and Q3-Q4, and before each overtime. 15-minute half-time interval.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Overtime:</strong> If scores are tied at the end of Q4, the game continues with 5-minute overtime periods as necessary to break the tie.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Clock Precision:</strong> Minimum 0.1 second must be shown on game clock for fouls near period ends.</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10 space-y-4 shadow-lg">
            <div className="flex items-center space-x-3 text-orange-500">
              <Users className="w-6 h-6" />
              <h3 className="text-lg font-black italic uppercase text-white">Teams & Uniforms (Art. 4-7)</h3>
            </div>
            <ul className="space-y-2.5 text-xs text-zinc-300 leading-relaxed">
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Roster:</strong> Up to 12 players per team, 1 head coach, 1 first assistant coach, and max 8 accompanying delegation members.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Numbers:</strong> Permitted numbers are 0, 00, and 1 to 99. Back numbers at least 16cm high, front numbers at least 8cm high.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Coach Standing:</strong> Only the head coach (or assistant, one at a time) may remain standing in the team bench area.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Captain Duties:</strong> Represents team on court and may address referees courteously during dead balls.</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {activeSubTab === 'court' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10 space-y-4 shadow-lg">
            <div className="flex items-center space-x-3 text-orange-500">
              <Scale className="w-6 h-6" />
              <h3 className="text-lg font-black italic uppercase text-white">Court Dimensions (Art. 2)</h3>
            </div>
            <ul className="space-y-2.5 text-xs text-zinc-300 leading-relaxed">
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Playing Surface:</strong> 28 meters in length by 15 meters in width measured from inner boundary line.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Floor Clearance:</strong> Minimum 2-meter surrounding unobstructed buffer zone (total floor min 32m x 19m).</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>3-Point Arc:</strong> 6.75 meters radius from exact center of basket (1.575m from inner edge of baseline).</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>No-Charge Semi-Circle:</strong> 1.30 meters radius beneath the basket center for charge/block interpretations.</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10 space-y-4 shadow-lg">
            <div className="flex items-center space-x-3 text-orange-500">
              <ShieldCheck className="w-6 h-6" />
              <h3 className="text-lg font-black italic uppercase text-white">Required Equipment (Art. 3)</h3>
            </div>
            <ul className="space-y-2.5 text-xs text-zinc-300 leading-relaxed">
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Backstops & Baskets:</strong> Backboards, pressure-release rings, nets, and support structure padding.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Clocks:</strong> Game clock, scoreboard, 24-second shot clock, and separate visible timeout stopwatch.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Audible Signals:</strong> 2 separate, distinctly different and loud horn signals for timer and shot clock operator.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Markers:</strong> Player foul markers (1-5), team foul markers, and alternating possession arrow.</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {activeSubTab === 'officials' && (
        <div className="space-y-6">
          <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10 space-y-4 shadow-lg">
            <div className="flex items-center space-x-3 text-orange-500">
              <FileText className="w-6 h-6" />
              <h3 className="text-lg font-black italic uppercase text-white">Table Officials & Correctable Errors (Art. 45, 48-51)</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="bg-[#222] p-4 rounded-xl border border-white/5 space-y-2">
                <h4 className="font-black italic uppercase text-orange-400 text-xs">Scorer Duties</h4>
                <p className="text-zinc-300 text-xs leading-relaxed">Maintains official scoresheet, running summary of points, player fouls, timeouts, alternating possession, and notifies referees immediately on 5th foul or 2nd technical.</p>
              </div>
              <div className="bg-[#222] p-4 rounded-xl border border-white/5 space-y-2">
                <h4 className="font-black italic uppercase text-orange-400 text-xs">Timer & Shot Clock</h4>
                <p className="text-zinc-300 text-xs leading-relaxed">Operates game clock, stopwatch, team foul red markers, interval horns, and 24/14 second shot clock resets upon ring touches and frontcourt throw-ins.</p>
              </div>
              <div className="bg-[#222] p-4 rounded-xl border border-white/5 space-y-2">
                <h4 className="font-black italic uppercase text-orange-400 text-xs">Correctable Errors (Art. 45)</h4>
                <p className="text-zinc-300 text-xs leading-relaxed">Category 1 errors (unmerited free throws, wrong shooter, scoring errors) can be corrected before the ball becomes live after the first dead ball when clock stops.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSubTab === 'irs' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10 space-y-4 shadow-lg">
            <div className="flex items-center space-x-3 text-orange-500">
              <MonitorPlay className="w-6 h-6" />
              <h3 className="text-lg font-black italic uppercase text-white">Instant Replay System (IRS - App. F)</h3>
            </div>
            <ul className="space-y-2.5 text-xs text-zinc-300 leading-relaxed">
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Review Authority:</strong> Referees may use IRS until crew chief signs scoresheet.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Reviewable Situations:</strong> Clock expiration at end of quarter/overtime, 3-point vs 2-point shots, goaltending/interference calls, foul upgrading (flagrant/disqualifying), and identifying players in fights.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Evidence Standard:</strong> Initial decision can only be corrected if IRS provides clear and conclusive visual evidence.</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10 space-y-4 shadow-lg">
            <div className="flex items-center space-x-3 text-orange-500">
              <Award className="w-6 h-6" />
              <h3 className="text-lg font-black italic uppercase text-white">Head Coach's Challenge (HCC - App. F.4)</h3>
            </div>
            <ul className="space-y-2.5 text-xs text-zinc-300 leading-relaxed">
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Allowance:</strong> Each team is granted exactly 1 Head Coach's Challenge per game, regardless of success.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Procedure:</strong> Head coach must establish eye contact with nearest referee, shout "Challenge" in English, and make the rectangle hand signal (Signal #61). Request is final and irreversible.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Outcome:</strong> If review favors requesting team, initial decision is overturned. Otherwise, call stands.</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {activeSubTab === 'classification' && (
        <div className="space-y-6">
          <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10 space-y-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 text-orange-500">
                <Calculator className="w-6 h-6" />
                <h3 className="text-lg font-black italic uppercase text-white">Team Classification & Tie-Breaker Simulator (App. D)</h3>
              </div>
              <span className="text-xs font-mono text-zinc-400">FIBA Rule D.1</span>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed">
              Teams are ranked by win-loss record: <strong>2 points</strong> for a win, <strong>1 point</strong> for a loss, <strong>0 points</strong> for a forfeit. If tied, head-to-head records and game points difference apply. Test the standings calculation below:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#222] p-4 rounded-xl border border-white/5 space-y-3">
                <h4 className="font-black italic uppercase text-orange-400 text-xs">Team A Stats</h4>
                <div className="space-y-2 text-xs">
                  <div>
                    <label className="text-zinc-400">Wins: {teamA.wins}</label>
                    <input type="range" min="0" max="5" value={teamA.wins} onChange={(e) => setTeamA({ ...teamA, wins: Number(e.target.value) })} className="w-full accent-orange-500" />
                  </div>
                  <div>
                    <label className="text-zinc-400">Points Diff: {teamA.ptsFor - teamA.ptsAgainst}</label>
                    <input type="number" value={teamA.ptsFor - teamA.ptsAgainst} onChange={(e) => setTeamA({ ...teamA, ptsFor: 200 + Number(e.target.value), ptsAgainst: 200 })} className="w-full bg-[#111] border border-white/10 rounded p-1 text-white" />
                  </div>
                </div>
              </div>

              <div className="bg-[#222] p-4 rounded-xl border border-white/5 space-y-3">
                <h4 className="font-black italic uppercase text-orange-400 text-xs">Team B Stats</h4>
                <div className="space-y-2 text-xs">
                  <div>
                    <label className="text-zinc-400">Wins: {teamB.wins}</label>
                    <input type="range" min="0" max="5" value={teamB.wins} onChange={(e) => setTeamB({ ...teamB, wins: Number(e.target.value) })} className="w-full accent-orange-500" />
                  </div>
                  <div>
                    <label className="text-zinc-400">Points Diff: {teamB.ptsFor - teamB.ptsAgainst}</label>
                    <input type="number" value={teamB.ptsFor - teamB.ptsAgainst} onChange={(e) => setTeamB({ ...teamB, ptsFor: 200 + Number(e.target.value), ptsAgainst: 200 })} className="w-full bg-[#111] border border-white/10 rounded p-1 text-white" />
                  </div>
                </div>
              </div>

              <div className="bg-[#222] p-4 rounded-xl border border-white/5 space-y-3">
                <h4 className="font-black italic uppercase text-orange-400 text-xs">Team C Stats</h4>
                <div className="space-y-2 text-xs">
                  <div>
                    <label className="text-zinc-400">Wins: {teamC.wins}</label>
                    <input type="range" min="0" max="5" value={teamC.wins} onChange={(e) => setTeamC({ ...teamC, wins: Number(e.target.value) })} className="w-full accent-orange-500" />
                  </div>
                  <div>
                    <label className="text-zinc-400">Points Diff: {teamC.ptsFor - teamC.ptsAgainst}</label>
                    <input type="number" value={teamC.ptsFor - teamC.ptsAgainst} onChange={(e) => setTeamC({ ...teamC, ptsFor: 200 + Number(e.target.value), ptsAgainst: 200 })} className="w-full bg-[#111] border border-white/10 rounded p-1 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Live Standings Table */}
            <div className="bg-[#111] rounded-xl overflow-hidden border border-white/10">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#222] text-zinc-400 uppercase font-mono">
                  <tr>
                    <th className="p-3">Rank</th>
                    <th className="p-3">Team</th>
                    <th className="p-3">Wins</th>
                    <th className="p-3">Losses</th>
                    <th className="p-3">Classification Points</th>
                    <th className="p-3">Points Difference</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {calculateStandings().map((t, idx) => (
                    <tr key={t.name} className="hover:bg-white/5">
                      <td className="p-3 font-black text-orange-500">#{idx + 1}</td>
                      <td className="p-3 font-bold text-white">{t.name}</td>
                      <td className="p-3">{t.wins}</td>
                      <td className="p-3">{t.losses}</td>
                      <td className="p-3 font-bold text-orange-400">{t.points} PTS</td>
                      <td className={`p-3 font-mono font-bold ${t.diff >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {t.diff > 0 ? `+${t.diff}` : t.diff}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Protest Procedure Box */}
          <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10 space-y-4 shadow-lg">
            <div className="flex items-center space-x-3 text-orange-500">
              <HelpCircle className="w-6 h-6" />
              <h3 className="text-lg font-black italic uppercase text-white">Protest Procedure (App. C)</h3>
            </div>
            <ul className="space-y-2.5 text-xs text-zinc-300 leading-relaxed">
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Notification:</strong> Team captain must inform crew chief within 15 minutes of game end and sign scoresheet in protest column.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Written Submission:</strong> Detailed protest reasons submitted in writing within 1 hour following game end.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Fee & Ruling:</strong> CHF 1,500 deposit applied. Competent body must issue decision within 24 hours of game completion.</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
