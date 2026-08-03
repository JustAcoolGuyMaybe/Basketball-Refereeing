import { FibaRule, RefereeSignal } from '../types';

export const FIBA_RULES: FibaRule[] = [
  // --- CHAPTER 1: GAME (Articles 1 - 8) ---
  {
    id: 'rule-1',
    article: 'Art. 1',
    title: 'Definitions & Game Structure',
    category: 'Equipment & Court',
    summary: 'Basketball is played by two (2) teams of 5 players each. The objective is to score into opponents basket and prevent opponents from scoring.',
    description: 'The game is controlled by referees, table officials, and a commissioner if present. The basket attacked is the opponents basket and defended is own basket.',
    penalty: 'Standard game governance under FIBA rules.',
    signalRef: 'sig-admin',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['game structure', 'teams', 'basket', 'objective']
  },
  {
    id: 'rule-2',
    article: 'Art. 2',
    title: 'Playing Court Dimensions & Markings',
    category: 'Equipment & Court',
    summary: 'The playing court shall be a flat, hard surface free from obstructions with dimensions of 28m in length by 15m in width.',
    description: 'Includes backcourt, frontcourt, center line, center circle, free-throw lines, restricted areas (key), and 3-point field goal area (6.75m arc).',
    penalty: 'Infractions of court setup handled by commissioner prior to tip-off.',
    signalRef: 'sig-admin',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['court', 'dimensions', 'court markings', '3-point line', 'restricted area']
  },
  {
    id: 'rule-3',
    article: 'Art. 3',
    title: 'Equipment Standards',
    category: 'Equipment & Court',
    summary: 'Specifies backstops, baskets (rings and nets), basketballs (size 7 for men, size 6 for women), game clock, shot clock, and scoreboard.',
    description: 'All equipment used must meet FIBA rigorous testing standards and certification for official international competitions.',
    penalty: 'Game cannot commence until equipment complies with FIBA standards.',
    signalRef: 'sig-admin',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['equipment', 'basketball', 'backboard', 'rim', 'shot clock']
  },
  {
    id: 'rule-4',
    article: 'Art. 4',
    title: 'Teams & Player Uniforms',
    category: 'Equipment & Court',
    summary: 'A team member is eligible to play when authorized to play. Each team consists of up to 12 players including a captain.',
    description: 'Uniforms must consist of shirts of the same dominant color front and back, matching shorts, and numbered jerseys (numbers 0 and 00, and from 1 to 99).',
    penalty: 'Illegal uniform or equipment must be corrected before entering the game.',
    signalRef: 'sig-admin',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['teams', 'uniforms', 'numbers', 'captain', 'roster']
  },
  {
    id: 'rule-5',
    article: 'Art. 5',
    title: 'Players: Injury & Substitution',
    category: 'Equipment & Court',
    summary: 'Players may be substituted when the ball becomes dead and the game clock is stopped, or during throw-in situations.',
    description: 'If a player is injured, referees may authorize a substitute. Bleeding players must be substituted immediately until bleeding stops.',
    penalty: 'Illegal substitution penalized by technical foul on coach (B).',
    signalRef: 'sig-substitute',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['substitution', 'injury', 'bleeding', 'player replacement']
  },
  {
    id: 'rule-6',
    article: 'Art. 6',
    title: 'Captain: Duties & Powers',
    category: 'Equipment & Court',
    summary: 'The captain is a player designated by the coach to represent the team on the court.',
    description: 'The captain may address referees in a courteous manner during dead-ball periods to obtain information, but must not question judgment calls.',
    penalty: 'Disrespectful conduct penalized by technical foul.',
    signalRef: 'sig-technical-foul',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['captain', 'team representative', 'communication']
  },
  {
    id: 'rule-7',
    article: 'Art. 7',
    title: 'Head Coach & First Assistant Coach',
    category: 'Equipment & Court',
    summary: 'The head coach is responsible for team conduct, submitting the starting 5 line-up prior to game time, and directing timeouts.',
    description: 'Only the head coach may remain standing during the game. Assistant coaches may stand only when addressing players during timeouts.',
    penalty: 'Coach technical foul (B or C) for unsportsmanlike behavior or encroaching on court.',
    signalRef: 'sig-technical-foul',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['head coach', 'coach conduct', 'lineup', 'timeout']
  },
  {
    id: 'rule-8',
    article: 'Art. 8',
    title: 'Referees, Table Officials & Commissioner',
    category: 'Equipment & Court',
    summary: 'Game officials consist of referees (crew chief and referee), table officials (scorekeeper, assistant scorekeeper, timekeeper, 24-sec operator).',
    description: 'Referees have authority over the game from arrival at court until the end of the game signal. Their decisions on facts are final.',
    penalty: 'Official rulings are final and binding.',
    signalRef: 'sig-admin',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['referees', 'table officials', 'crew chief', 'commissioner']
  },

  // --- CHAPTER 2: PLAYING REGULATIONS (Articles 9 - 22) ---
  {
    id: 'rule-9',
    article: 'Art. 9',
    title: 'Beginning and End of a Game',
    category: 'Violations',
    summary: 'The game shall consist of 4 quarters of 10 minutes each, with intervals of 2 minutes between quarters and 15 minutes at half-time.',
    description: 'The game begins with a jump ball in the center circle when the ball is legally tapped by a jumper.',
    penalty: 'Failure of team to appear with 5 players results in forfeiture.',
    signalRef: 'sig-start-clock',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['game duration', 'quarters', 'halftime', 'jump ball', 'forfeit']
  },
  {
    id: 'rule-10',
    article: 'Art. 10',
    title: 'Status of the Ball',
    category: 'Violations',
    summary: 'The ball can be live or dead. A live ball begins when the ball leaves the hand of the referee on a jump ball.',
    description: 'The ball becomes dead when any goal is made, whistle blows while ball is live, game clock sounds for end of period, etc.',
    penalty: 'Play stops when ball becomes dead.',
    signalRef: 'sig-stop-clock',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['live ball', 'dead ball', 'whistle']
  },
  {
    id: 'rule-11',
    article: 'Art. 11',
    title: 'Location of a Player and Official',
    category: 'Violations',
    summary: 'The location of a player is determined by where they are touching the floor.',
    description: 'When airborne, a player retains the same status as when they last touched the floor (including boundary lines).',
    penalty: 'Out-of-bounds ruling based on player floor contact.',
    signalRef: 'sig-out-of-bounds',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['player location', 'airborne', 'boundary']
  },
  {
    id: 'rule-12',
    article: 'Art. 12',
    title: 'Jump Ball & Alternating Possession',
    category: 'Violations',
    summary: 'A jump ball occurs at the beginning of the first quarter where the referee tosses the ball between two opponents in the center circle.',
    description: 'For all other jump ball situations, teams will share alternating possession throw-ins indicated by the possession arrow.',
    penalty: 'Violation on jump ball (tapping before ball reaches highest point) results in opponent throw-in.',
    signalRef: 'sig-jump-ball',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['jump ball', 'alternating possession', 'possession arrow', 'center circle']
  },
  {
    id: 'rule-13',
    article: 'Art. 13',
    title: 'How the Ball is Played',
    category: 'Violations',
    summary: 'During the game, the ball is played with the hands only and may be passed, thrown, batted, rolled or dribbled.',
    description: 'It is a violation to run with the ball, intentionally kick it with the foot, strike it with the fist, or cause it to touch legs.',
    penalty: 'Violation. Throw-in awarded to opponents.',
    signalRef: 'sig-kicked-ball',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['playing the ball', 'kicked ball', 'fist', 'hands']
  },
  {
    id: 'rule-14',
    article: 'Art. 14',
    title: 'Control of the Ball',
    category: 'Violations',
    summary: 'Team control starts when a player of that team is in control of a live ball by holding, dribbling, or passing it.',
    description: 'Team control continues until the ball leaves the shooters hand, opponent gains control, or ball becomes dead.',
    penalty: 'Determines shot clock and foul status.',
    signalRef: 'sig-admin',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['ball control', 'team control']
  },
  {
    id: 'rule-15',
    article: 'Art. 15',
    title: 'Player in the Act of Shooting',
    category: 'Violations',
    summary: 'The act of shooting begins when the player starts continuous motion normally preceding the release of the ball.',
    description: 'Ends when the ball is released and, in the case of an airborne shooter, both feet have returned to the floor.',
    penalty: 'Free throws awarded if fouled during the act of shooting.',
    signalRef: 'sig-points-scored',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['act of shooting', 'shooting motion', 'airborne shooter']
  },
  {
    id: 'rule-16',
    article: 'Art. 16',
    title: 'Goal: When Made and Its Value',
    category: 'Violations',
    summary: 'A goal is made when a live ball enters the basket from above and remains within or passes through entirely.',
    description: 'Goals count as 1 point (free throw), 2 points (field goals inside 3pt arc), or 3 points (field goals outside 3pt arc).',
    penalty: 'Points added to score.',
    signalRef: 'sig-points-scored',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['goal', 'points', '3-pointer', 'field goal']
  },
  {
    id: 'rule-17',
    article: 'Art. 17',
    title: 'Throw-in',
    category: 'Violations',
    summary: 'A throw-in occurs when the ball is passed into the court from out-of-bounds by a player.',
    description: 'The thrower-in must release the ball within 5 seconds. Must not touch the court inbounds before pass, nor step over boundary line.',
    penalty: 'Violation. Turn-over throw-in to opponents.',
    signalRef: 'sig-throw-in-spot',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['throw-in', 'inbounds', '5 seconds throw-in']
  },
  {
    id: 'rule-18',
    article: 'Art. 18',
    title: 'Time-out',
    category: 'Violations',
    summary: 'A time-out is a stoppage of the game requested by the head coach or assistant coach.',
    description: 'Each team may be granted 2 time-outs in the first half, 3 time-outs in the second half, and 1 time-out in each extra period. Each timeout lasts 60 seconds.',
    penalty: 'Unauthorized timeout request denied or penalized if none remaining.',
    signalRef: 'sig-timeout-60',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['timeout', '60 seconds', 'coach request']
  },
  {
    id: 'rule-19',
    article: 'Art. 19',
    title: 'Substitution',
    category: 'Violations',
    summary: 'A substitution is an opportunity for a player to replace another player.',
    description: 'Requested by the substitute at the scorer table during a dead ball when the game clock is stopped.',
    penalty: 'Refused if substitution opportunity has passed.',
    signalRef: 'sig-substitute',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['substitution', 'scorer table', 'replacement']
  },
  {
    id: 'rule-20',
    article: 'Art. 20',
    title: 'Game Lost by Forfeit',
    category: 'Violations',
    summary: 'A team shall lose the game by forfeit if they refuse to play after being instructed by referee, or actions prevent game from playing.',
    description: 'Score is 20-0 for the opposing team, and forfeited team receives 0 classification points.',
    penalty: 'Forfeit of match.',
    signalRef: 'sig-admin',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['forfeit', 'game lost', 'refusal to play']
  },
  {
    id: 'rule-21',
    article: 'Art. 21',
    title: 'Game Lost by Default',
    category: 'Violations',
    summary: 'A team shall lose the game by default if fewer than 2 players of the team are on the court ready to play.',
    description: 'Declared when team fails to present 5 players ready to play 15 minutes after scheduled start time.',
    penalty: 'Default of match.',
    signalRef: 'sig-admin',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['default', 'fewer than 2 players', 'absent team']
  },
  {
    id: 'rule-22',
    article: 'Art. 22',
    title: 'Violations: General Rule',
    category: 'Violations',
    summary: 'A violation is an infraction of the rules resulting in a throw-in for the opponents.',
    description: 'Includes out-of-bounds, travelling, dribbling infractions, shot clock and time violations.',
    penalty: 'Turnover throw-in.',
    signalRef: 'sig-violation',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['violation', 'infraction', 'turnover']
  },

  // --- CHAPTER 3: VIOLATIONS (Articles 23 - 31) ---
  {
    id: 'rule-23',
    article: 'Art. 23',
    title: 'Player Out-of-Bounds & Ball Out-of-Bounds',
    category: 'Violations',
    summary: 'The ball is out-of-bounds when it touches a player or object on or outside the boundary lines.',
    description: 'Caused by the last player to touch the ball before it goes out.',
    penalty: 'Throw-in for opponents.',
    signalRef: 'sig-out-of-bounds',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['out of bounds', 'boundary', 'line touch']
  },
  {
    id: 'rule-24',
    article: 'Art. 24',
    title: 'Dribbling',
    category: 'Violations',
    summary: 'Illegal dribble or double dribble when a player dribbles a second time after first dribble has ended.',
    description: 'Starts when player bounces live ball and touches it again before another player.',
    penalty: 'Throw-in for opponents.',
    signalRef: 'sig-dribble',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['dribble', 'double dribble', 'bounce']
  },
  {
    id: 'rule-25',
    article: 'Art. 25',
    title: 'Travelling',
    category: 'Violations',
    summary: 'Illegal movement of one or both feet while holding a live ball beyond allowed pivot and step limits.',
    description: 'Gathering ball allows 2 steps to stop, pass, or shoot.',
    penalty: 'Travelling violation. Throw-in.',
    signalRef: 'sig-travelling',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['travelling', 'steps', 'pivot']
  },
  {
    id: 'rule-26',
    article: 'Art. 26',
    title: '3 Seconds',
    category: 'Violations',
    summary: 'Remaining in opponents restricted area (key) for more than 3 consecutive seconds while team has ball control.',
    description: 'Exemptions for shooting act and leaving immediately.',
    penalty: '3-second violation. Throw-in.',
    signalRef: 'sig-3seconds',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['3 seconds', 'key violation', 'restricted area']
  },
  {
    id: 'rule-27',
    article: 'Art. 27',
    title: 'Closely Guarded Player',
    category: 'Violations',
    summary: 'Holding live ball while closely guarded within 1 meter for more than 5 seconds without passing, shooting, or dribbling.',
    description: 'A closely guarded player must pass, shoot or dribble the ball within 5 seconds. Failure to do so is a violation.',
    penalty: 'Closely guarded violation. Throw-in.',
    signalRef: 'sig-5seconds',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['closely guarded', '5 seconds']
  },
  {
    id: 'rule-28',
    article: 'Art. 28',
    title: '8 Seconds',
    category: 'Violations',
    summary: 'Failing to advance ball from backcourt to frontcourt within 8 seconds of gaining team control.',
    description: 'Whenever a player gains control of a live ball in their backcourt, that team must transition the ball into their frontcourt within 8 seconds.',
    penalty: '8-second violation. Throw-in.',
    signalRef: 'sig-8seconds',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['8 seconds', 'backcourt count']
  },
  {
    id: 'rule-29-50',
    article: 'Art. 29 & 50',
    title: '24-Second Shot Clock',
    category: 'Violations',
    summary: 'Failing to release a shot touching the ring within 24 seconds of team ball control.',
    description: 'A team in possession of a live ball must attempt a shot that touches the ring or enters the basket within 24 seconds.',
    penalty: 'Shot clock violation. Turnover.',
    signalRef: 'sig-24seconds',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['24 seconds', 'shot clock violation']
  },
  {
    id: 'rule-30',
    article: 'Art. 30',
    title: 'Ball Returned to Backcourt',
    category: 'Violations',
    summary: 'Causing the ball to be illegally returned from frontcourt to backcourt by same team.',
    description: 'A backcourt violation occurs when a player of the team in control of the live ball is the last to touch the ball in their frontcourt, and the ball is then first touched by a player of that same team in the backcourt.',
    penalty: 'Backcourt violation. Throw-in.',
    signalRef: 'sig-backcourt',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['backcourt', 'over and back']
  },
  {
    id: 'rule-31',
    article: 'Art. 31',
    title: 'Goaltending & Interference',
    category: 'Violations',
    summary: 'Touching ball on downward flight above ring or touching basket during shot.',
    description: 'Goaltending occurs during a shot for a field goal when a player touches the ball while it is completely above the level of the ring and on its downward flight towards the basket.',
    penalty: 'If defensive: basket counts. If offensive: turnover.',
    signalRef: 'sig-goaltending',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['goaltending', 'interference']
  },

  // --- CHAPTER 4: FOULS (Articles 32 - 44) ---
  {
    id: 'rule-32',
    article: 'Art. 32',
    title: 'Fouls: General Rule',
    category: 'Fouls',
    summary: 'A foul is an infraction of the rules concerning illegal personal contact with an opponent or unsportsmanlike behavior.',
    description: 'Charged to the offender and penalized accordingly.',
    penalty: 'Personal, technical, unsportsmanlike, or disqualifying foul recorded.',
    signalRef: 'sig-personal-foul',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['foul', 'general rule', 'contact']
  },
  {
    id: 'rule-33',
    article: 'Art. 33',
    title: 'Contact: General Principles (Cylinder & Verticality)',
    category: 'Fouls',
    summary: 'Each player has the right to occupy any position on the floor not already occupied. Verticality principle.',
    description: 'Defenders cannot impede progress outside cylinder. Legal guarding position requires facing opponent with both feet on floor.',
    penalty: 'Personal foul.',
    signalRef: 'sig-personal-foul',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['contact', 'verticality', 'cylinder']
  },
  {
    id: 'rule-34',
    article: 'Art. 34',
    title: 'Personal Foul',
    category: 'Fouls',
    summary: 'Player illegal contact with an opponent whether ball is live or dead.',
    description: 'Holding, blocking, pushing, charging, tripping opponent.',
    penalty: 'Personal foul (P). Free throws if shooting or team in penalty.',
    signalRef: 'sig-personal-foul',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['personal foul', 'holding', 'pushing']
  },
  {
    id: 'rule-35',
    article: 'Art. 35',
    title: 'Double Foul',
    category: 'Fouls',
    summary: 'A double foul is a situation where two opponents commit personal fouls against each other at approximately the same time.',
    description: 'Personal foul charged to both players. No free throws awarded.',
    penalty: 'Game resumes with alternating possession or jump ball.',
    signalRef: 'sig-double-foul',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['double foul', 'simultaneous fouls']
  },
  {
    id: 'rule-36',
    article: 'Art. 36',
    title: 'Technical Foul',
    category: 'Fouls',
    summary: 'Player non-contact foul of a behavioural nature or administrative infraction.',
    description: 'Disrespect, language, flopping/simulation, excessive hanging on rim.',
    penalty: '1 free throw plus possession to opponents. 2 technicals = disqualification.',
    signalRef: 'sig-technical-foul',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['technical foul', 'unsportsmanlike conduct', 'flopping']
  },
  {
    id: 'rule-37',
    article: 'Art. 37',
    title: 'Unsportsmanlike Foul',
    category: 'Fouls',
    summary: 'A player contact foul which, in the opinion of the referee, is not a legitimate attempt to directly play the ball within the spirit of the rules.',
    description: 'Excessive, hard contact, unnecessary contact caused by defensive player on fast break, contact from behind.',
    penalty: '2 free throws and throw-in to opponents from throw-in line in frontcourt. 2 unsportsmanlike fouls = disqualification.',
    signalRef: 'sig-unsportsmanlike',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['unsportsmanlike foul', 'hard contact', 'fast break foul']
  },
  {
    id: 'rule-38',
    article: 'Art. 38',
    title: 'Disqualifying Foul',
    category: 'Fouls',
    summary: 'Any flagrant unsportsmanlike action by players, substitutes, coaches, or team bench personnel.',
    description: 'Extreme unsportsmanlike conduct, fighting, violent retaliation.',
    penalty: 'Disqualification from game. 2 free throws and throw-in to opponents.',
    signalRef: 'sig-disqualifying',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['disqualifying foul', 'flagrant foul', 'ejection']
  },
  {
    id: 'rule-39',
    article: 'Art. 39',
    title: 'Fighting',
    category: 'Fouls',
    summary: 'Fighting is physical interaction between two or more opponents (players, substitutes, coaches).',
    description: 'Zero tolerance for throwing punches or kicking during altercation.',
    penalty: 'Disqualification of all participants involved. Penalties assessed under FIBA regulations.',
    signalRef: 'sig-disqualifying',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['fighting', 'brawl', 'punching']
  },
  {
    id: 'rule-40',
    article: 'Art. 40',
    title: '5 Fouls by a Player',
    category: 'Fouls',
    summary: 'A player who has committed 5 fouls (personal and/or technical) must be informed immediately and must leave the game within 30 seconds.',
    description: 'Must be substituted by another eligible player.',
    penalty: 'Player disqualified from remainder of game.',
    signalRef: 'sig-player-disqualification',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['5 fouls', 'player disqualification', 'fouled out']
  },
  {
    id: 'rule-41',
    article: 'Art. 41',
    title: 'Team Fouls: Penalty',
    category: 'Fouls',
    summary: 'A team foul is a personal, technical, unsportsmanlike, or disqualifying foul committed by a player.',
    description: 'When a team has accumulated 5 team fouls in a quarter, all subsequent player personal fouls are penalized by 2 free throws.',
    penalty: '2 free throws for team foul penalty situation.',
    signalRef: 'sig-team-foul-penalty',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['team fouls', 'penalty situation', 'bonus free throws']
  },
  {
    id: 'rule-42',
    article: 'Art. 42',
    title: 'Special Situations',
    category: 'Free Throws & Penalties',
    summary: 'In special situations with multiple fouls committed during the same dead-ball interval, all fouls are penalized and cancellation rules apply.',
    description: 'Equal penalties cancel each other out if charged against opposing teams in the order incurred.',
    penalty: 'Cancellation of equal penalties or execution in order of occurrence.',
    signalRef: 'sig-admin',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['special situations', 'cancelling fouls', 'multiple fouls']
  },
  {
    id: 'rule-43',
    article: 'Art. 43',
    title: 'Free Throws',
    category: 'Free Throws & Penalties',
    summary: 'A free throw is an opportunity given to a player to score 1 point from an unhindered position behind the free-throw line.',
    description: 'Must shoot within 5 seconds. Up to 5 players may occupy rebounding spaces along the lane.',
    penalty: '1, 2, or 3 free throws awarded depending on foul type.',
    signalRef: 'sig-1-free-throw',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['free throw', 'bonus shot', 'foul line']
  },
  {
    id: 'rule-44',
    article: 'Art. 44',
    title: 'Correctable Errors',
    category: 'Free Throws & Penalties',
    summary: 'Referees may correct an error if a rule is inadvertently disregarded concerning awarding unmerited free throws, wrong free throw shooter, etc.',
    description: 'Must be identified before the ball becomes live following first dead ball after clock started.',
    penalty: 'Error corrected; play resumes from exact correction point.',
    signalRef: 'sig-admin',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['correctable errors', 'referee error correction']
  },

  // --- CHAPTER 5: TABLE OFFICIALS, COMMISSIONER & REFEREES (Articles 45 - 50) ---
  {
    id: 'rule-45',
    article: 'Art. 45',
    title: 'Referees: Duties and Powers',
    category: 'Officials & Mechanics',
    summary: 'Referees have the power to make decisions on infractions, inspect equipment, approve scoresheet, and stop game when necessary.',
    description: 'Decisions are final and unimpeachable.',
    penalty: 'Official match decisions.',
    signalRef: 'sig-admin',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['referee powers', 'official duties']
  },
  {
    id: 'rule-46',
    article: 'Art. 46',
    title: 'Crew Chief: Duties and Powers',
    category: 'Officials & Mechanics',
    summary: 'The crew chief inspects all equipment, designates official game clock and timing devices, and is in supreme command.',
    description: 'Approves final score by signing scoresheet at game conclusion.',
    penalty: 'Match governance.',
    signalRef: 'sig-admin',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['crew chief', 'lead referee']
  },
  {
    id: 'rule-47',
    article: 'Art. 47',
    title: 'Referees: Time and Place of Decision',
    category: 'Officials & Mechanics',
    summary: 'Referees have power to make decisions on infractions committed during playing time and intervals.',
    description: 'Jurisdiction continues until referees leave the visual confines of the arena.',
    penalty: 'Post-game disciplinary reporting if warranted.',
    signalRef: 'sig-admin',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['referee jurisdiction', 'timing of decisions']
  },
  {
    id: 'rule-48',
    article: 'Art. 48',
    title: 'Scorekeeper and Assistant Scorekeeper: Duties',
    category: 'Officials & Mechanics',
    summary: 'Maintains scoresheet, records points scored, running score, fouls charged, timeouts, and alternating possession arrow.',
    description: 'Notifies referees immediately of 5th player foul or 2nd technical foul.',
    penalty: 'Administrative score tracking.',
    signalRef: 'sig-admin',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['scorekeeper', 'scoresheet', 'scoring records']
  },
  {
    id: 'rule-49',
    article: 'Art. 49',
    title: 'Timekeeper: Duties',
    category: 'Officials & Mechanics',
    summary: 'Operates game clock, monitors quarter durations, timeouts, and interval countdowns.',
    description: 'Signals horn for end of quarters and timeouts.',
    penalty: 'Timing control.',
    signalRef: 'sig-stop-clock',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['timekeeper', 'game clock', 'timer']
  },
  {
    id: 'rule-50',
    article: 'Art. 50',
    title: '24-Second Operator: Duties',
    category: 'Officials & Mechanics',
    summary: 'Operates the 24-second shot clock in coordination with team ball control and ring touches.',
    description: 'Resets to 24 or 14 seconds as required by FIBA rules.',
    penalty: 'Shot clock sound triggers violation horn.',
    signalRef: 'sig-24seconds',
    fibaHandbookUrl: 'https://www.fiba.basketball/en/documents',
    keywords: ['24-second operator', 'shot clock operator']
  }
];

export const REFEREE_SIGNALS: RefereeSignal[] = [
  // Scoring
  {
    id: 'sig-points-scored',
    name: '1 Point, 2 Points, or 3 Points Scored',
    category: 'Scoring',
    fibaSignalNumber: '18 / 19',
    description: '1 point: 1 arm dangling, index finger flicking. 2 points: 2 fingers flicking. 3 points: 3 fingers extended on both arms (attempt) and both arms fully extended overhead (successful 3-pointer).',
    executionSteps: [
      'Stop clock or maintain eye contact with table.',
      'Extend arm(s) towards basket with index/fingers extended.',
      'Flick wrist downwards clearly for score value.'
    ],
    iconName: 'Award'
  },
  {
    id: 'sig-no-score',
    name: 'No Score / Cancellation',
    category: 'Scoring',
    fibaSignalNumber: '16',
    description: 'Both arms crossed in front of chest with open palms facing outwards, scissoring motion.',
    executionSteps: [
      'Blow whistle sharply to stop play.',
      'Bring both arms crossed in front of chest.',
      'Swing arms outward horizontally to cancel basket or play.'
    ],
    iconName: 'X'
  },

  // Clock
  {
    id: 'sig-start-clock',
    name: 'Start Clock / Chop with Hand',
    category: 'Clock',
    fibaSignalNumber: '1',
    description: 'Chop hand forward into court to start the game clock or shot clock.',
    executionSteps: [
      'Raise arm high.',
      'Chop hand sharply downward towards the playing court.'
    ],
    iconName: 'Play'
  },
  {
    id: 'sig-stop-clock',
    name: 'Stop Clock / Open Palm',
    category: 'Clock',
    fibaSignalNumber: '2',
    description: 'Raise open right palm upward high above head, blowing whistle simultaneously.',
    executionSteps: [
      'Blow whistle sharply.',
      'Raise right arm straight up with open palm facing table.'
    ],
    iconName: 'Square'
  },
  {
    id: 'sig-stop-clock-foul',
    name: 'Stop Clock for Foul',
    category: 'Clock',
    fibaSignalNumber: '4',
    description: 'Raise open hand (stop clock) and point clenched fist towards the offender (foul).',
    executionSteps: [
      'Raise right hand open to stop clock.',
      'Extend left arm with clenched fist towards offending player.'
    ],
    iconName: 'ShieldAlert'
  },
  {
    id: 'sig-jump-ball',
    name: 'Jump Ball / Held Ball',
    category: 'Clock',
    fibaSignalNumber: '3',
    description: 'Thumbs up with both arms extended upward, followed by pointing direction of possession arrow.',
    executionSteps: [
      'Blow whistle for held ball.',
      'Extend both arms upwards with thumbs pointing up.',
      'Indicate alternating possession arrow direction.'
    ],
    iconName: 'Activity'
  },

  // Administrative
  {
    id: 'sig-admin',
    name: 'Administrative Signal / Directional',
    category: 'Administrative',
    fibaSignalNumber: '5 / 6',
    description: 'Arm parallel to sidelines pointing in the direction of the attacking team.',
    executionSteps: [
      'Stand facing sidelines.',
      'Extend arm fully parallel to floor pointing towards frontcourt.'
    ],
    iconName: 'ChevronRight'
  },
  {
    id: 'sig-substitute',
    name: 'Beckoning Substitutes',
    category: 'Administrative',
    fibaSignalNumber: '10',
    description: 'Crossing forearms in front of chest with open hands to welcome substitute onto court.',
    executionSteps: [
      'Face table officials.',
      'Cross forearms back and forth in front of chest with open hands.'
    ],
    iconName: 'Users'
  },
  {
    id: 'sig-timeout-60',
    name: 'Time-out (60-sec or 20-sec)',
    category: 'Administrative',
    fibaSignalNumber: '11 / 12',
    description: 'Forming a "T" with index fingers and hands, pointing towards requesting team bench.',
    executionSteps: [
      'Stop clock.',
      'Form letter "T" with hands overhead or at chest level.',
      'Point index finger toward bench requesting timeout.'
    ],
    iconName: 'Timer'
  },
  {
    id: 'sig-visible-counts',
    name: 'Visible Counts (5-sec / 8-sec / 24-sec)',
    category: 'Administrative',
    fibaSignalNumber: '9',
    description: 'Tapping shoulder or counting with fingers visibly in the air for closely guarded or time counts.',
    executionSteps: [
      'Keep arm raised with fingers counting seconds visibly.',
      'Maintain rhythm corresponding to game clock.'
    ],
    iconName: 'Clock'
  },
  {
    id: 'sig-not-closely-guarded',
    name: 'Not Closely Guarded',
    category: 'Administrative',
    fibaSignalNumber: '13',
    description: 'Both arms extended horizontally out to sides.',
    executionSteps: [
      'Extend both arms straight out to sides to signal defender is outside 1-meter guarding distance.'
    ],
    iconName: 'ShieldCheck'
  },

  // Violations
  {
    id: 'sig-travelling',
    name: 'Travelling Violation',
    category: 'Violations',
    fibaSignalNumber: '25',
    description: 'Rotating fists around each other in a circular motion in front of chest.',
    executionSteps: [
      'Blow whistle to stop play.',
      'Rotate fists around each other in vertical circle.',
      'Point direction of throw-in for opponents.'
    ],
    iconName: 'RotateCcw'
  },
  {
    id: 'sig-dribble',
    name: 'Illegal Dribble (Double Dribble / Carry)',
    category: 'Violations',
    fibaSignalNumber: '24',
    description: 'Patting motion with palm facing downward, alternating hands or patting once.',
    executionSteps: [
      'Blow whistle.',
      'Pat air with palm facing down indicating illegal dribble or carry.'
    ],
    iconName: 'Hand'
  },
  {
    id: 'sig-3seconds',
    name: '3-Second Violation',
    category: 'Violations',
    fibaSignalNumber: '26',
    description: 'Arm extended with 3 fingers showing, sweeping motion downwards from waist.',
    executionSteps: [
      'Extend arm with 3 fingers (index, middle, ring).',
      'Sweep arm downward.'
    ],
    iconName: 'AlertTriangle'
  },
  {
    id: 'sig-5seconds',
    name: '5-Second Violation (Closely Guarded)',
    category: 'Violations',
    fibaSignalNumber: '27',
    description: 'Showing 5 fingers on hand raised in air.',
    executionSteps: [
      'Raise hand with 5 fingers extended to signal expiration of 5-second closely guarded count.'
    ],
    iconName: 'Clock'
  },
  {
    id: 'sig-8seconds',
    name: '8-Second Backcourt Violation',
    category: 'Violations',
    fibaSignalNumber: '28',
    description: 'Showing 8 fingers in air (4 on each hand or sequential count).',
    executionSteps: [
      'Raise 8 fingers in air to indicate backcourt 8-second count expired.'
    ],
    iconName: 'Clock'
  },
  {
    id: 'sig-24seconds',
    name: '24-Second Shot Clock Violation',
    category: 'Violations',
    fibaSignalNumber: '29',
    description: 'Tapping fingers on shoulder.',
    executionSteps: [
      'Tap fingertips on shoulder to indicate shot clock violation.'
    ],
    iconName: 'Timer'
  },
  {
    id: 'sig-backcourt',
    name: 'Ball Returned to Backcourt (Over and Back)',
    category: 'Violations',
    fibaSignalNumber: '30',
    description: 'Waving forearm back and forth horizontally in front of body.',
    executionSteps: [
      'Wave right forearm back and forth above waist indicating illegal backcourt return.'
    ],
    iconName: 'ArrowLeftRight'
  },
  {
    id: 'sig-goaltending',
    name: 'Goaltending / Basket Interference',
    category: 'Violations',
    fibaSignalNumber: '31',
    description: 'Touching basket or imitating blocking ring above cylinder.',
    executionSteps: [
      'Stop play with whistle.',
      'Touch head or raise arm with open palm near basket symbol.'
    ],
    iconName: 'ShieldAlert'
  },
  {
    id: 'sig-out-of-bounds',
    name: 'Out-of-Bounds / Directional Throw-in',
    category: 'Violations',
    fibaSignalNumber: '23',
    description: 'Pointing parallel to boundary line and pointing direction of throw-in.',
    executionSteps: [
      'Point parallel to sideline.',
      'Point finger in direction of team awarded throw-in.'
    ],
    iconName: 'CornerUpRight'
  },
  {
    id: 'sig-kicked-ball',
    name: 'Kicked Ball Violation',
    category: 'Violations',
    fibaSignalNumber: '13',
    description: 'Pointing towards foot with index finger.',
    executionSteps: [
      'Point clearly toward foot or leg to signal intentional contact with foot/leg.'
    ],
    iconName: 'Footprints'
  },
  {
    id: 'sig-tipped-ball',
    name: 'Tipped Ball / Loose Ball Touch',
    category: 'Violations',
    fibaSignalNumber: '14',
    description: 'Brush fingertips of one hand across palm of other hand.',
    executionSteps: [
      'Brush fingertips of right hand across palm of left hand held horizontally.'
    ],
    iconName: 'Activity'
  },
  {
    id: 'sig-flopping',
    name: 'Flopping / Simulation Warning',
    category: 'Violations',
    fibaSignalNumber: '15',
    description: 'Raising lower arm with fist twice in front of chest.',
    executionSteps: [
      'Raise lower arm and bend wrist twice downward to signal simulation / flopping warning.'
    ],
    iconName: 'AlertTriangle'
  },

  // Fouls
  {
    id: 'sig-personal-foul',
    name: 'Personal Foul',
    category: 'Fouls',
    fibaSignalNumber: '34',
    description: 'Clenched fist raised toward offender, followed by pointing to foul line or sideline.',
    executionSteps: [
      'Stop clock with open hand.',
      'Raise clenched fist firmly.'
    ],
    iconName: 'ShieldAlert'
  },
  {
    id: 'sig-double-foul',
    name: 'Double Foul',
    category: 'Fouls',
    fibaSignalNumber: '35',
    description: 'Both arms with clenched fists extended horizontally from shoulders.',
    executionSteps: [
      'Extend both arms outward with clenched fists to indicate simultaneous fouls by opponents.'
    ],
    iconName: 'X'
  },
  {
    id: 'sig-technical-foul',
    name: 'Technical Foul',
    category: 'Violations',
    fibaSignalNumber: '36',
    description: 'Forming a letter "T" with hands, palms facing outward.',
    executionSteps: [
      'Form "T" with palms perpendicular to each other overhead.'
    ],
    iconName: 'AlertTriangle'
  },
  {
    id: 'sig-unsportsmanlike',
    name: 'Unsportsmanlike Foul',
    category: 'Fouls',
    fibaSignalNumber: '37',
    description: 'Grasping wrist with other hand overhead.',
    executionSteps: [
      'Raise both arms and grasp left wrist with right hand overhead.'
    ],
    iconName: 'ShieldAlert'
  },
  {
    id: 'sig-disqualifying',
    name: 'Disqualifying Foul / Ejection',
    category: 'Fouls',
    fibaSignalNumber: '38',
    description: 'Both fists clenched and raised upward alongside head.',
    executionSteps: [
      'Clench both fists and raise straight up alongside head to signal player or coach ejection.'
    ],
    iconName: 'X'
  },
  {
    id: 'sig-player-disqualification',
    name: 'Player Disqualification (5 Fouls)',
    category: 'Fouls',
    fibaSignalNumber: '40',
    description: 'Pointing to bench or holding up 5 fingers.',
    executionSteps: [
      'Signal 5 fouls and direct player to bench.'
    ],
    iconName: 'Users'
  },
  {
    id: 'sig-team-foul-penalty',
    name: 'Team Foul Penalty Situation',
    category: 'Fouls',
    fibaSignalNumber: '41',
    description: 'Pointing both index fingers toward floor or waving arm downward.',
    executionSteps: [
      'Point both arms/fingers downward toward floor indicating team foul penalty limit reached.'
    ],
    iconName: 'ShieldAlert'
  },
  {
    id: 'sig-1-free-throw',
    name: 'Free Throw Administration (1, 2, or 3 FTs)',
    category: 'Fouls',
    fibaSignalNumber: '43',
    description: 'Holding up 1, 2, or 3 fingers near shoulder during free throw administration.',
    executionSteps: [
      'Stand at free throw lane line.',
      'Display number of free throws with fingers clearly to table and players.'
    ],
    iconName: 'Award'
  }
];
