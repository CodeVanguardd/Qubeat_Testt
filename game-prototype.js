/*
 Refactored game prototype script
 - Scopes initialization to DOMContentLoaded
 - Binds four logical choices (indices 0..3) to both top and bottom buttons
 - Keeps core timeline/flow from the prototype
*/

// Allow early calls to setQuBeatPool before DOMContentLoaded — store pending
window.__qubeat_pending_pool = null;
window.setQuBeatPool = function(arr){
    // If internal setter is ready, use it; otherwise store pending
    if (window.__qubeat_internal_set) {
        try{ window.__qubeat_internal_set(arr); return; }catch(e){}
    }
    window.__qubeat_pending_pool = arr;
};

document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const restartButton = document.getElementById('restartButton');
    const rightControlGroup = document.querySelector('.right-group');
    const rightPanel = document.querySelector('.right-panel');
    const questionCard = document.querySelector('.question-card');
    const hudRow = document.querySelector('.hud-row');
    const time = document.getElementById('time');
    const timeBeatPanel = document.getElementById('timeBeatPanel');
    const ind = document.getElementById('indicate');
    const dialogue = document.getElementById('dialouge');
    const getReadyOverlay = document.getElementById('getReadyOverlay');
    const getReadyText = document.getElementById('getReadyText');
    const gamePauseBtn = document.getElementById('gamePauseBtn');
    const pauseSfx = document.getElementById('pauseSfx');
    const pauseTipText = document.getElementById('pauseTipText');
    const characterImg = document.getElementById('man');
    const characterP2Img = document.getElementById('manP2');
    const characterDisplayLabel = document.getElementById('characterDisplayLabel');
    const track = document.getElementById('projectile-track');
    const bgMap = document.getElementById('Bgmap');
    const bgm = document.getElementById('bgm');
    const p1Gunshot = document.getElementById('p1Gunshot');
    const p2Gunshot = document.getElementById('p2Gunshot');
    const p1ParrySfx = document.getElementById('p1ParrySfx');
    const p2ParrySfx = document.getElementById('p2ParrySfx');
    const hpLostSfx = document.getElementById('hpLostSfx');
    const gameOverSfx = document.getElementById('gameOverSfx');
    const getReadySfx = document.getElementById('getReadySfx');
    const p1ChooseSfx = document.getElementById('p1ChooseSfx');
    const p2ChooseSfx = document.getElementById('p2ChooseSfx');
    const p1AnswerSfx = document.getElementById('p1AnswerSfx');
    const p2AnswerSfx = document.getElementById('p2AnswerSfx');
    const p1ParriedVoiceSfx = document.getElementById('p1ParriedVoiceSfx');
    const p2ParriedVoiceSfx = document.getElementById('p2ParriedVoiceSfx');
    function playSfx(el){ if (el){ el.currentTime = 0; el.play().catch((err) => console.warn('QuBeat: sfx could not play.', el.id, err, 'src:', el.currentSrc)); } }
    [p1ChooseSfx, p2ChooseSfx, p1AnswerSfx, p2AnswerSfx, p1ParriedVoiceSfx, p2ParriedVoiceSfx].forEach((el) => {
        if (el) el.addEventListener('error', () => console.warn('QuBeat: sfx failed to load —', el.id, 'check the file path:', el.src));
    });

    const buttons = Array.from(document.querySelectorAll('.answer-btn'));
    const displays = { 1: document.getElementById('p1'), 2: document.getElementById('p2') };
    const beatIndicator = document.getElementById('beatIndicator');
    const modeLabel = document.getElementById('modeLabel');
    const phaseLabel = document.getElementById('phaseLabel');
    const streakLabel = document.getElementById('streakLabel');
    const difficultyLabel = document.getElementById('difficultyLabel');
    const turnBanner = document.getElementById('turnBanner');
    const lowHpWarning = document.getElementById('lowHpWarning');
    const parryBanner = document.getElementById('parryBanner');
    function triggerParryBanner(){
        if (!parryBanner) return;
        parryBanner.textContent = 'PARRY!';
        parryBanner.classList.remove('parry-active');
        void parryBanner.offsetWidth;
        parryBanner.classList.add('parry-active');
    }
    const LOW_HP_THRESHOLD = 30;
    let lowHpWarned = { 1: false, 2: false };
    let lowHpWarningTimeout = null;
    function checkLowHealth(player){
        if (!lowHpWarning) return;
        if (hp[player] > 0 && hp[player] <= LOW_HP_THRESHOLD && !lowHpWarned[player]){
            lowHpWarned[player] = true;
            lowHpWarning.textContent = `\u26A0 WARNING — YOU'RE ON LOW HEALTH (PLAYER ${player})`;
            lowHpWarning.classList.remove('low-hp-active');
            void lowHpWarning.offsetWidth;
            lowHpWarning.classList.add('low-hp-active');
            clearTimeout(lowHpWarningTimeout);
            lowHpWarningTimeout = setTimeout(() => { lowHpWarning.classList.remove('low-hp-active'); }, 2600);
        } else if (hp[player] > LOW_HP_THRESHOLD) {
            // HP recovered above the threshold (e.g. a fresh match) — allow the warning to fire again if it drops back down
            lowHpWarned[player] = false;
        }
    }

    const params = new URLSearchParams(window.location.search);
    const selectedMode = params.get('mode') ? params.get('mode').toLowerCase() : '';
    const selectedPacing = params.get('pacing') ? params.get('pacing').toLowerCase() : '';
    const selectedDiff = params.get('diff') ? params.get('diff').toLowerCase() : '';
    const selectedLang = params.get('lang') ? params.get('lang') : '';
    // Fallback: if URL params missing, try localStorage (set by previous pages)
    let fallbackMode = selectedMode;
    let fallbackPacing = selectedPacing;
    let fallbackDiff = selectedDiff;
    let fallbackLang = selectedLang;
    try{
        if(!fallbackMode && localStorage.getItem('qubeat.mode')) fallbackMode = localStorage.getItem('qubeat.mode');
        if(!fallbackPacing && localStorage.getItem('qubeat.pacing')) fallbackPacing = localStorage.getItem('qubeat.pacing');
        if(!fallbackDiff && localStorage.getItem('qubeat.diff')) fallbackDiff = localStorage.getItem('qubeat.diff');
        if(!fallbackLang && localStorage.getItem('qubeat.lang')) fallbackLang = localStorage.getItem('qubeat.lang');
    }catch(e){ }
    const validModes = ['arcade', 'coop'];
    const modeText = validModes.includes(fallbackMode) ? (fallbackMode === 'coop' ? 'Logic Duel' : 'Arcade') : 'Mode Not Selected';
    const defaultPacing = 'whole-note';
    const effectivePacing = fallbackPacing || defaultPacing;
    const difficultyText = fallbackDiff ? fallbackDiff.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) : 'Syntax';
    const pacingText = effectivePacing ? effectivePacing.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) : 'Whole Note';

    // Debug: show which params were found
    try{ console.log('GameStart params', { modeParam: params.get('mode'), pacingParam: params.get('pacing'), diffParam: params.get('diff'), langParam: params.get('lang'), fallbackMode, fallbackPacing, fallbackDiff, fallbackLang }); }catch(e){}

    const languageText = fallbackLang ? fallbackLang.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) : 'HTML';
    // In Arcade mode Player 2 is the NPC, so every place that names Player 2 in the
    // UI should say "NPC" instead — avoids implying there's a second human player.
    const player2Label = (fallbackMode === 'arcade') ? 'NPC' : 'Player 2';
    if (modeLabel) modeLabel.textContent = modeText;
    if (phaseLabel) phaseLabel.textContent = pacingText;
    if (streakLabel) streakLabel.textContent = languageText;
    if (difficultyLabel) difficultyLabel.textContent = difficultyText;
    const player2LabelEl = document.getElementById('player2Label');
    if (player2LabelEl) player2LabelEl.textContent = player2Label;

    // Each pacing tier gets its own background beat track, so the music actually
    // matches the speed the player picked (Turtle = slow track, Lightning = fast track).
    const ARCADE_PACING_MUSIC = {
        turtle: 'musics/Turtle_Mode.mp3',
        normal: 'musics/Normal_Mode.mp3',
        swift: 'musics/Swift_Mode.mp3',
        blitz: 'musics/Blitz_Mode.mp3',
        lightning: 'musics/Lightning_Mode.mp3'
    };
    const COOP_PACING_MUSIC = {
        'whole-note': 'musics/Whole_Note.mp3',
        'off-beat-note': 'musics/Off_Beat.mp3',
        'ghost-note': 'musics/Death_Note.mp3'
    };
    const PACING_MUSIC = (fallbackMode === 'coop') ? COOP_PACING_MUSIC : ARCADE_PACING_MUSIC;
    if (bgm) bgm.src = PACING_MUSIC[effectivePacing] || 'musics/Normal_Mode.mp3';
    if (bgm) bgm.addEventListener('error', () => console.warn('bgm failed to load — check the file path:', bgm.src));

    const PICK_TIMELINE = [ { label: '4', wait: 1095 }, { label: '3', wait: 1095 }, { label: '2', wait: 1095 }, { label: '1', wait: 1095 }, { label: 'SHOOT', wait: 1095 } ];
    const ANSWER_TIMELINE = [ { label: '4', wait: 833 }, { label: '3', wait: 1095 }, { label: '2', wait: 1095 }, { label: '1', wait: 1095 }, { label: 'PARRY', wait: 1095 } ];

    // Pacing controls how long the beat countdown runs before SHOOT/PARRY — slower
    // tiers give more time to react, faster tiers give less. Each step is one
    // second; the number below is the top the countdown starts counting down from.
    const ARCADE_COUNTDOWN_SECONDS = { turtle: 7, normal: 5, swift: 4, blitz: 3, lightning: 2 };
    const COOP_COUNTDOWN_SECONDS = { 'whole-note': 5, 'off-beat-note': 3, 'ghost-note': 2 };
    function buildCountdownTimeline(actionLabel, seconds){
        const steps = [];
        for (let n = seconds; n >= 1; n--) steps.push({ label: String(n), wait: 1000 });
        steps.push({ label: actionLabel, wait: 1000 });
        return steps;
    }
    function getPhaseTimeline(phase){
        const actionLabel = phase === 'PICK' ? 'SHOOT' : 'PARRY';
        if (fallbackMode === 'arcade'){
            const seconds = ARCADE_COUNTDOWN_SECONDS[effectivePacing] || ARCADE_COUNTDOWN_SECONDS.normal;
            return buildCountdownTimeline(actionLabel, seconds);
        }
        if (fallbackMode === 'coop'){
            const seconds = COOP_COUNTDOWN_SECONDS[effectivePacing] || COOP_COUNTDOWN_SECONDS['whole-note'];
            return buildCountdownTimeline(actionLabel, seconds);
        }
        return phase === 'PICK' ? PICK_TIMELINE : ANSWER_TIMELINE;
    }

    // Default placeholder pool — can be replaced at runtime by calling `window.setQuBeatPool(array)`
    let pool = Array.from({ length: 10 }, (_, idx) => ({
        q: `Placeholder question ${idx + 1}`,
        choices: ['Answer A', 'Answer B', 'Answer C', 'Answer D'],
        correct: 'Answer A'
    }));

    // Internal setter used once DOM is ready
    function __internalSetPool(arr){
        try{
            if(!Array.isArray(arr) || arr.length === 0) return;
            const normalized = arr.slice(0,10).map(item => {
                if(!item) return null;
                const q = item.q || item.question || '';
                const choices = item.options || item.choices || [];
                const correct = (typeof item.correct === 'number') ? choices[item.correct] : item.correct;
                return { q, choices, correct };
            }).filter(Boolean);
            if(normalized.length) pool = normalized;
            try{ console.log('game-prototype: __internalSetPool applied, pool length', pool.length, 'first:', pool[0] && pool[0].q); }catch(e){}
        }catch(e){ /* ignore */ }
    }
    
    // Update Start button state based on selections and pool content
    function updateStartState(){
        try{
            const poolHasReal = Array.isArray(pool) && pool.length > 0 && !(typeof pool[0].q === 'string' && /^Placeholder question/i.test(pool[0].q));
            const enableStart = (validModes.includes(fallbackMode) && !!effectivePacing && !!fallbackDiff) || poolHasReal;
            try{ console.log('game-prototype: updateStartState', { fallbackMode, fallbackDiff, effectivePacing, poolHasReal, poolLength: Array.isArray(pool)?pool.length:0, enableStart }); }catch(e){}
            if (startButton){
                startButton.disabled = !enableStart;
                const startButtonLabelEl = document.getElementById('startButtonLabel');
                const startLabelText = enableStart ? 'S T A R T' : 'Select Mode First';
                if (startButtonLabelEl) { startButtonLabelEl.textContent = startLabelText; } else { startButton.textContent = startLabelText; }
                if (enableStart){ if (dialogue) dialogue.textContent = 'Press Start to begin the game.'; }
                else { if (dialogue) dialogue.textContent = 'Please choose mode and phase from the menu first.'; }
            }
        }catch(e){ }
    }

    // If a pending pool was provided before DOMContentLoaded, apply it now
    if (window.__qubeat_pending_pool) {
        __internalSetPool(window.__qubeat_pending_pool);
        window.__qubeat_pending_pool = null;
    }
    // expose internal setter for early global call
    window.__qubeat_internal_set = __internalSetPool;
    // Ensure Start state reflects current pool/selection
    updateStartState();

    // If code calls the internal setter later, re-evaluate start state after pool update
    const originalInternalSet = window.__qubeat_internal_set;
    window.__qubeat_internal_set = function(arr){
        try{ originalInternalSet(arr); }catch(e){}
        updateStartState();
    };

    // Listen for explicit readiness event from the page script
    try{
        window.addEventListener('qubeat.pool.ready', (ev)=>{
            try{ console.log('game-prototype: received qubeat.pool.ready', ev && ev.detail); }catch(e){}
            updateStartState();
            // If a real pool arrived, ensure Start is enabled for the player
            try{
                const poolHasReal = Array.isArray(pool) && pool.length > 0 && !(typeof pool[0].q === 'string' && /^Placeholder question/i.test(pool[0].q));
                if (poolHasReal && startButton){ startButton.disabled = false; const _sbl = document.getElementById('startButtonLabel'); if (_sbl) { _sbl.textContent = 'S T A R T'; } else { startButton.textContent = 'Start'; } }
            }catch(e){}
        });
    }catch(e){}

    // If an external caller used window.setQuBeatPool after DOM ready, it's routed to __qubeat_internal_set which now updates start state.

    let hp, picker, answerer, selectedQ, activeBullet;
    let missStreak = { 1: 0, 2: 0 };
    let timelineTimeout = null;
    let readySequence = [];
    let readySequenceIndex = 0;
    let readySequenceOnDone = null;
    let gamePaused = false;
    let pendingResume = null;
    let pauseTipTimeout = null;
    let pauseTipIndex = 0;
    const pauseTips = [
        'Think logically.',
        'Win strategically.',
        'Defeat enemies using knowledge.',
        'The smarter coder wins.',
        'Sharpen your coding skills.',
        'Master programming through battle.'
    ];
    let currentStepIndex = 0;
    let canClick = false;
    let stunTimeEnd = 0;
    // Tracks questions already used this match (by question text) so they never repeat,
    // regardless of which player picked them.
    let usedQuestionKeys = new Set();

    // --- Arcade mode: Player 2 is an NPC. Its speed and mistake rate are driven
    // by the chosen pacing tier (Turtle → Lightning). When true, real clicks on
    // the answer buttons are ignored during Player 2's turn — only the AI's own
    // simulated click (aiClickInProgress) is allowed through.
    let aiControlled = false;
    let aiClickInProgress = false;
    // Blitz and Lightning were previously near-unbeatable (very low/zero mistakeChance
    // and razor-fast reactions), so the NPC almost never lost. These two tiers are tuned
    // to still be the hardest, but give the player a real shot: Lightning's mistakeChance
    // and missTimingChance are raised so the player can win roughly ~20% of matches, while
    // Blitz gets slower reactions (lower "speed") and a higher mistakeChance (lower "accuracy")
    // than before, without dropping below Swift's difficulty.
    const AI_PROFILES = {
        turtle:    { reactionMin: 700, reactionMax: 950, mistakeChance: 0.55, missTimingChance: 0.15 },
        normal:    { reactionMin: 450, reactionMax: 700, mistakeChance: 0.35, missTimingChance: 0.06 },
        swift:     { reactionMin: 250, reactionMax: 450, mistakeChance: 0.20, missTimingChance: 0.02 },
        blitz:     { reactionMin: 200, reactionMax: 400, mistakeChance: 0.18, missTimingChance: 0.05 },
        lightning: { reactionMin: 70,  reactionMax: 190, mistakeChance: 0.22, missTimingChance: 0.06 }
    };
    function getAIProfile(){ return AI_PROFILES[effectivePacing] || AI_PROFILES.normal; }
    function randomBetween(min, max){ return min + Math.random() * (max - min); }

    function shuffleArray(arr){ const a = arr.slice(); for (let i = a.length - 1; i > 0; i--){ const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

    // Palette for the A/B/C/D tiles — picked (not all-pink) and randomized each phase so it's easier to tell them apart at a glance.
    const answerColorPalette = [
        { bg: '#4DE7FF', fg: '#04101c' }, // cyan
        { bg: '#FF62D6', fg: '#1c0414' }, // pink
        { bg: '#FFD93D', fg: '#1c1204' }, // yellow
        { bg: '#7CFF6B', fg: '#04140a' }, // green
        { bg: '#FF8C42', fg: '#1c0d04' }, // orange
        { bg: '#B388FF', fg: '#0d041c' }, // purple
    ];

    // Palette for the HUD/stat/time-beat boxes — randomized per game so each box
    // (Mode, Pacing, Language, Difficulty, Player 1, Player 2, Time/Beat) gets a
    // distinct accent color instead of all of them blending into the same pink.
    const infoBoxPalette = [
        '#4DE7FF', // cyan
        '#FF62D6', // pink
        '#FFD93D', // yellow
        '#7CFF6B', // green
        '#FF8C42', // orange
        '#B388FF', // purple
    ];
    function randomizeInfoBoxColors(){
        const boxes = Array.from(document.querySelectorAll('.hud-box, .stat-box')).filter(box => !box.classList.contains('player1-health') && !box.classList.contains('player2-health'));
        if (!boxes.length) return;
        const picks = shuffleArray(infoBoxPalette);
        boxes.forEach((box, i) => {
            const accent = picks[i % picks.length];
            box.style.borderColor = accent;
            const strong = box.querySelector('strong');
            if (strong) strong.style.color = accent;
        });
    }

    function setBtnText(i, txt) { if (buttons[i]) buttons[i].textContent = txt ?? ''; }
    function setBtnHandler(i, fn) { if (buttons[i]) buttons[i].onclick = fn; }
    function clearBtnHandler(i) { setBtnHandler(i, null); }
    function resetButtonColors() { const picks = shuffleArray(answerColorPalette).slice(0,4); for (let i=0;i<4;i++){ if (buttons[i]){ const c = picks[i] || answerColorPalette[i % answerColorPalette.length]; buttons[i].style.background = ''; buttons[i].style.borderColor = c.bg; buttons[i].style.color = c.bg; } } }
    function disableButtons() { for (let i=0;i<4;i++){ clearBtnHandler(i); } }
    function revealAnswers(clickedIndex) {
        for (let i=0;i<4;i++){
            const correct = selectedQ && selectedQ.correct === (buttons[i] && buttons[i].textContent);
            if (!buttons[i]) continue;
            if (correct) { buttons[i].style.background = '#00ff88'; buttons[i].style.borderColor = '#00ff88'; buttons[i].style.color = '#000'; }
            else if (i === clickedIndex) { buttons[i].style.background = '#ff3333'; buttons[i].style.borderColor = '#ff3333'; buttons[i].style.color = '#fff'; }
        }
    }
    function triggerExplosion() { const fx = document.createElement('div'); fx.className = 'square-explosion'; if (track) track.appendChild(fx); fx.onanimationend = () => fx.remove(); }
    function flashRed(player) { const targetPlayer = player || answerer; const el = targetPlayer === 1 ? characterImg : characterP2Img; if (el) { el.style.filter = 'drop-shadow(0px 0px 30px red)'; setTimeout(()=>{ el.style.filter='none'; },1000); } }
    function triggerIndicator(msg) { if (ind) { ind.textContent = msg; ind.classList.remove('pop-active'); void ind.offsetWidth; ind.classList.add('pop-active'); } }
    function shakeButtonMiss(i) { const btn = buttons[i]; if (!btn) return; btn.classList.remove('shake-miss'); void btn.offsetWidth; btn.classList.add('shake-miss'); setTimeout(()=>{ btn.classList.remove('shake-miss'); resetButtonColors(); }, 450); }
    function showHpLoss(player, amount) { if (!amount) return; const box = document.querySelector('.character-display-stage'); if (!box) return; const popup = document.createElement('span'); popup.className = 'hp-loss-popup'; popup.textContent = '-' + amount + ' HP'; box.appendChild(popup); setTimeout(()=>{ popup.remove(); }, 1150); }

    function setActiveStatBox(player){
        [1,2].forEach(p => {
            const box = displays[p] && displays[p].closest('.stat-box');
            if (box) box.classList.toggle('active-turn', p === player);
        });
        if (timeBeatPanel){
            timeBeatPanel.classList.toggle('p1-active', player === 1);
            timeBeatPanel.classList.toggle('p2-active', player === 2);
        }
        if (turnBanner){
            turnBanner.classList.toggle('p1-active', player === 1);
            turnBanner.classList.toggle('p2-active', player === 2);
        }
    }
    function updateTurnBanner(phase){
        if (!turnBanner) return;
        if (parryBanner){ parryBanner.classList.remove('parry-active'); parryBanner.textContent=''; }
        if (!phase){ turnBanner.textContent = ''; turnBanner.classList.remove('turn-alert-active'); setActiveStatBox(0); updateCharacterDisplay(0); return; }
        const activePlayer = (phase === 'PICK') ? picker : answerer;
        const actionText = (phase === 'PICK') ? 'PICK A QUESTION' : 'ANSWER NOW';
        const activeLabel = activePlayer === 2 ? player2Label.toUpperCase() : `PLAYER ${activePlayer}`;
        turnBanner.textContent = `${activeLabel}'S TURN — ${actionText}`;
        turnBanner.classList.toggle('answer-turn', phase === 'ANSWER');
        turnBanner.classList.remove('turn-alert-active');
        void turnBanner.offsetWidth;
        turnBanner.classList.add('turn-alert-active');
        setActiveStatBox(activePlayer);
        updateCharacterDisplay(activePlayer);
        if (phase === 'PICK') playSfx(activePlayer === 1 ? p1ChooseSfx : p2ChooseSfx);
        else if (phase === 'ANSWER') playSfx(activePlayer === 1 ? p1AnswerSfx : p2AnswerSfx);
    }

    // Shows whichever player currently needs to act (picker while PICKing, answerer
    // while ANSWERing) — always matching the turn banner. The sprite crossfade is
    // handled purely in CSS (opacity transition on .active-character); here we just
    // fade the text label out, swap it, then fade it back in so the change never
    // pops instantly.
    let characterLabelFadeTimeout = null;
    function updateCharacterDisplay(activePlayer){
        if (characterImg) characterImg.classList.toggle('active-character', activePlayer === 1);
        if (characterP2Img) characterP2Img.classList.toggle('active-character', activePlayer === 2);
        if (characterDisplayLabel){
            characterDisplayLabel.classList.toggle('p1-active', activePlayer === 1);
            characterDisplayLabel.classList.toggle('p2-active', activePlayer === 2);
            const newText = activePlayer ? (activePlayer === 2 ? `${player2Label}'s Turn` : `Player ${activePlayer}'s Turn`) : '';
            if (characterDisplayLabel.textContent !== newText){
                clearTimeout(characterLabelFadeTimeout);
                characterDisplayLabel.style.opacity = '0';
                characterLabelFadeTimeout = setTimeout(() => {
                    characterDisplayLabel.textContent = newText;
                    characterDisplayLabel.style.opacity = '1';
                }, 250);
            }
        }
    }
    // Sprite sets per selectable character. No dedicated "Hurts" gif was
    // provided for either character, so Hurts falls back to that
    // character's Idle gif rather than pointing at a missing file.
    const CHARACTER_SPRITES = {
        scig: {
            Idle:  'gifs/SciG%20(2).gif',
            Shoot: 'gifs/Shot.gif',
            Parry: 'gifs/SciGParry.gif',
            Hurts: 'gifs/SciG%20(2).gif'
        },
        winter: {
            Idle:  'gifs/Winter%20(1).gif',
            Shoot: 'gifs/WinterShot.gif',
            Parry: 'gifs/WinterParry.gif',
            Hurts: 'gifs/Winter%20(1).gif'
        },
        boy: {
            Idle:  'gifs/IronFist.gif',
            Shoot: 'gifs/IronFistShoot.gif',
            Parry: 'gifs/IronFistParry.gif',
            Hurts: 'gifs/IronFist.gif'
        },
        assasin: {
            Idle:  'gifs/Assasin.gif',
            Shoot: 'gifs/AssasinShot.gif',
            Parry: 'gifs/AssasinParry.gif',
            Hurts: 'gifs/Assasin.gif'
        }
    };
    // Which character each player is using. Populated by the Character
    // Selection screen via window.qubeatCharacterSelection = {1:'scig'|'winter', 2:'scig'|'winter'}.
    // Falls back to Player 1 = SciG / Player 2 = Winter if no selection was made
    // (e.g. this page loaded without going through character select).
    function getPlayerCharacterId(playerNum){
        const sel = window.qubeatCharacterSelection;
        if (sel && sel[playerNum] && CHARACTER_SPRITES[sel[playerNum]]) return sel[playerNum];
        return playerNum === 1 ? 'scig' : 'winter';
    }
    function getCharacterFrame(playerNum, pose){
        const set = CHARACTER_SPRITES[getPlayerCharacterId(playerNum)];
        return (set && set[pose]) || (set && set.Idle);
    }
    function updateImg(actionSuffix){
        let suffix = actionSuffix;
        if (suffix === 'M' || suffix === 'Oops') suffix = 'Hurts';
        const valid=['Idle','Parry','Shoot','Hurts'];
        const verified = valid.includes(suffix)?suffix:'Idle';
        let activePlayer = picker;
        if (selectedQ !== null && verified !== 'Shoot') activePlayer = answerer;
        // Both characters stay on screen at all times; only the active player's
        // sprite changes pose (Shoot/Parry/Hurts) — the other stays Idle.
        if (characterImg) characterImg.src = getCharacterFrame(1, activePlayer===1?verified:'Idle');
        if (characterP2Img) characterP2Img.src = getCharacterFrame(2, activePlayer===2?verified:'Idle');
        if (bgMap){
            bgMap.style.transformOrigin = activePlayer===1 ? 'left bottom' : 'right bottom';
            bgMap.style.transform='scale(1.35)';
        }
    }

    function resetToDefaults(){ clearTimeout(timelineTimeout); pendingResume=null; gamePaused=false; document.body.classList.remove('game-paused'); stopPauseTips(); if (gamePauseBtn){ gamePauseBtn.textContent='Pause'; gamePauseBtn.classList.remove('is-paused'); } [bgm,p1Gunshot,p2Gunshot,p1ParrySfx,p2ParrySfx,hpLostSfx,gameOverSfx,getReadySfx,pauseSfx].forEach(a=>{ if(a){ a.pause(); a.currentTime=0; }}); if (track) track.innerHTML=''; if (beatIndicator) beatIndicator.style.width='0%'; activeBullet=null; hp={1:100,2:100}; missStreak={1:0,2:0}; lowHpWarned={1:false,2:false}; clearTimeout(lowHpWarningTimeout); if (lowHpWarning){ lowHpWarning.classList.remove('low-hp-active'); lowHpWarning.textContent=''; } if (parryBanner){ parryBanner.classList.remove('parry-active'); parryBanner.textContent=''; } picker=1; answerer=2; selectedQ=null; canClick=false; currentStepIndex=0; stunTimeEnd=0; usedQuestionKeys=new Set(); if (displays[1]) displays[1].textContent='100%'; if (displays[2]) displays[2].textContent='100%'; if (time) time.textContent='3'; if (ind) ind.textContent=''; resetButtonColors(); randomizeInfoBoxColors(); updateImg('Idle'); updateTurnBanner(null); updateStartState(); if (modeLabel) modeLabel.textContent = modeText; if (phaseLabel) phaseLabel.textContent = pacingText; if (streakLabel) streakLabel.textContent = languageText; if (difficultyLabel) difficultyLabel.textContent = difficultyText; }

    function endTheGame(reason){
        clearTimeout(timelineTimeout);
        // Cut off every other sound immediately — whatever was mid-playback (turn
        // voice lines, damage sfx, gunshot, parry, etc.) stops the instant the
        // match ends, so only the game-over sound is heard, right away.
        [bgm, p1Gunshot, p2Gunshot, p1ParrySfx, p2ParrySfx, hpLostSfx, getReadySfx,
         p1ChooseSfx, p2ChooseSfx, p1AnswerSfx, p2AnswerSfx, p1ParriedVoiceSfx, p2ParriedVoiceSfx, pauseSfx
        ].forEach((a) => { if (a) { a.pause(); a.currentTime = 0; } });
        playSfx(gameOverSfx);
        if (time) time.textContent='GAME OVER';
        if (ind) ind.textContent='';
        if (track) track.innerHTML='';
        if (beatIndicator) beatIndicator.style.width='0%';
        updateImg('Idle');
        disableButtons();
        // Hand off to the results screen: it decides the winner from final HP
        // (highest HP wins; equal HP is a tie) and carries the run settings
        // forward so "Play Again" can rebuild the same match.
        const params = new URLSearchParams({
            hp1: hp[1], hp2: hp[2], reason: reason || 'time',
            mode: fallbackMode || '', pacing: fallbackPacing || '', diff: fallbackDiff || '', lang: fallbackLang || ''
        });
        setTimeout(()=>{ window.location.href = `QubeatResults.html?${params.toString()}`; }, 1200);
    }

    // NOTE: bgm now loops indefinitely, so there's no more 'time' ending —
    // matches only end via elimination or the question pool running out.

    function punish(player, suffix){ const before = hp[player]; hp[player]=Math.max(0,hp[player]-20); const lost = before - hp[player]; if (displays[player]) displays[player].textContent = hp[player] + '%'; showHpLoss(player, lost); if (lost > 0) playSfx(hpLostSfx); updateImg(suffix); checkLowHealth(player); if (hp[1]<=0 || hp[2]<=0) endTheGame('elimination'); }
    // Escalating penalty for missing the beat (off-timing click or no click at all):
    // 1st miss in a row = -5, 2nd = -10, 3rd = -15, and so on. Resets to 0 the
    // next time that player lands a click on the correct beat.
    function punishBeatMiss(player, suffix){
        missStreak[player] = (missStreak[player] || 0) + 1;
        const dmg = 5 * missStreak[player];
        const before = hp[player];
        hp[player] = Math.max(0, hp[player] - dmg);
        const lost = before - hp[player];
        if (displays[player]) displays[player].textContent = hp[player] + '%';
        showHpLoss(player, lost);
        if (lost > 0) playSfx(hpLostSfx);
        updateImg(suffix);
        checkLowHealth(player);
        if (hp[1] <= 0 || hp[2] <= 0) endTheGame('elimination');
    }
    function resetMissStreak(player){ missStreak[player] = 0; }

    function nextTurn(){ [picker,answerer] = [answerer,picker]; selectedQ=null; updateImg('Idle'); startPhase('PICK'); }

    // Used when the answerer FAILS to parry: they take damage, but the same
    // picker gets to pick again (no role swap) — only a successful parry swaps roles.
    function retryPick(){ selectedQ=null; updateImg('Idle'); startPhase('PICK'); }

    function runGetReadySequence(onDone){
        // Slowed down from the original quick blink timings so each word has
        // time to fade in, hold, and fade out — easier to actually read.
        readySequence = [
            { text: 'Get Ready...', duration: 1200, className: '' },
            { text: 'Code',         duration: 1000, className: 'word-fade' },
            { text: 'Fight',        duration: 1000, className: 'word-fade' },
            { text: 'Conquer',      duration: 1500, className: 'word-fade word-conquer' }
        ];
        readySequenceIndex = 0;
        readySequenceOnDone = onDone;
        playSfx(getReadySfx);
        stepReadySequence();
    }

    function stepReadySequence(){
        if (readySequenceIndex >= readySequence.length){ if (readySequenceOnDone) readySequenceOnDone(); return; }
        const s = readySequence[readySequenceIndex];
        if (getReadyText){
            getReadyText.textContent = s.text;
            getReadyText.className = 'get-ready-text' + (s.className ? (' ' + s.className) : '');
        }
        readySequenceIndex++;
        scheduleTimeline(stepReadySequence, s.duration);
    }

    // Generic wrapper around every "wait, then advance" timeout in the game
    // (get-ready words, PICK/ANSWER timeline steps). Remembers which function
    // was pending and how long was left on it, so togglePause() can freeze
    // and later resume from the exact same spot.
    function scheduleTimeline(fn, delay){
        pendingResume = { fn, remaining: delay, start: Date.now() };
        timelineTimeout = setTimeout(fn, delay);
        return timelineTimeout;
    }

    // Cycles the fade in/out motivational lines shown on the pause blackout.
    function showNextPauseTip(){
        if (!pauseTipText) return;
        pauseTipText.textContent = pauseTips[pauseTipIndex % pauseTips.length];
        pauseTipIndex++;
        pauseTipText.classList.remove('pause-tip-fade');
        void pauseTipText.offsetWidth;
        pauseTipText.classList.add('pause-tip-fade');
        pauseTipTimeout = setTimeout(showNextPauseTip, 3200);
    }

    function startPauseTips(){
        pauseTipIndex = 0;
        showNextPauseTip();
    }

    function stopPauseTips(){
        clearTimeout(pauseTipTimeout);
        if (pauseTipText){ pauseTipText.classList.remove('pause-tip-fade'); pauseTipText.textContent=''; }
    }

    // Pauses/resumes the whole game: freezes whichever timed step is
    // currently pending, the beat meter's progress bar, and the music —
    // then puts everything back exactly where it left off.
    function togglePause(){
        if (pauseSfx){ pauseSfx.currentTime = 0; pauseSfx.play().catch(()=>{}); }
        if (gamePaused){
            gamePaused = false;
            document.body.classList.remove('game-paused');
            stopPauseTips();
            if (gamePauseBtn){ gamePauseBtn.textContent = 'Pause'; gamePauseBtn.classList.remove('is-paused'); }
            if (bgm){ bgm.play().catch(()=>{}); }
            if (pendingResume){
                const { fn, remaining } = pendingResume;
                timelineTimeout = setTimeout(fn, remaining);
                pendingResume = { fn, remaining, start: Date.now() };
            }
            if (beatIndicator && beatIndicator.dataset.pausedTarget){
                beatIndicator.style.transition = `width ${pendingResume ? pendingResume.remaining : 0}ms linear`;
                beatIndicator.style.width = beatIndicator.dataset.pausedTarget;
                delete beatIndicator.dataset.pausedTarget;
            }
        } else {
            gamePaused = true;
            document.body.classList.add('game-paused');
            startPauseTips();
            if (gamePauseBtn){ gamePauseBtn.textContent = 'Resume'; gamePauseBtn.classList.add('is-paused'); }
            if (bgm){ bgm.pause(); }
            clearTimeout(timelineTimeout);
            if (pendingResume){
                const elapsed = Date.now() - pendingResume.start;
                pendingResume.remaining = Math.max(0, pendingResume.remaining - elapsed);
            }
            if (beatIndicator){
                const targetWidth = beatIndicator.style.width || '0%';
                const parentWidth = beatIndicator.parentElement ? beatIndicator.parentElement.getBoundingClientRect().width : 0;
                const currentPct = parentWidth ? (beatIndicator.getBoundingClientRect().width / parentWidth * 100) : 0;
                beatIndicator.dataset.pausedTarget = targetWidth;
                beatIndicator.style.transition = 'none';
                beatIndicator.style.width = currentPct + '%';
            }
        }
    }

    if (gamePauseBtn){ gamePauseBtn.addEventListener('click', togglePause); }
    function startGame(){ resetToDefaults(); if (startButton) startButton.style.display='none'; if (rightControlGroup){ rightControlGroup.classList.add('show-after-start'); } if (questionCard){ questionCard.classList.add('show-after-start'); } if (hudRow){ hudRow.classList.add('show-after-start'); } if (rightPanel){ rightPanel.classList.remove('initial-center'); } if (bgm){ bgm.volume=0.3; } if (time) time.textContent='INTRO'; if (getReadyOverlay) getReadyOverlay.classList.add('show'); runGetReadySequence(()=>{ if (getReadyOverlay) getReadyOverlay.classList.remove('show'); startPhase('PICK'); }); }
    try{ console.log('game-prototype: startGame defined'); }catch(e){}

    // Hook Start button to runtime
    if (startButton){ startButton.addEventListener('click', (e)=>{ if (!startButton.disabled) startGame(); }); }

    // Drives Player 2's NPC behavior in Arcade mode. Waits until the on-beat word
    // (SHOOT / PARRY) is about to appear, then "reacts" after a delay set by the
    // pacing tier, and — during ANSWER — picks the wrong tile some of the time
    // based on that tier's mistake chance. missTimingChance lets slower tiers
    // occasionally fail to act at all, falling through to the existing miss logic.
    function scheduleAIMove(phase, activeTimeline){
        const profile = getAIProfile();
        if (Math.random() < profile.missTimingChance) return;
        const arriveDelay = activeTimeline.slice(0, -1).reduce((sum, step) => sum + step.wait, 0);
        const windowDuration = activeTimeline[activeTimeline.length - 1].wait;
        const reactionDelay = Math.min(randomBetween(profile.reactionMin, profile.reactionMax), windowDuration - 80);
        const totalDelay = arriveDelay + Math.max(reactionDelay, 0);
        setTimeout(() => {
            if (!aiControlled || !canClick || gamePaused) return;
            const validIndices = [0,1,2,3].filter(i => buttons[i] && !buttons[i].disabled && buttons[i].style.visibility !== 'hidden');
            if (!validIndices.length) return;
            let targetIndex;
            if (phase === 'ANSWER' && selectedQ){
                const correctIndex = validIndices.find(i => buttons[i].textContent === selectedQ.correct);
                const wrongIndices = validIndices.filter(i => i !== correctIndex);
                const shouldMiss = Math.random() < profile.mistakeChance && wrongIndices.length;
                targetIndex = shouldMiss ? wrongIndices[Math.floor(Math.random() * wrongIndices.length)] : correctIndex;
            } else {
                targetIndex = validIndices[Math.floor(Math.random() * validIndices.length)];
            }
            if (targetIndex === undefined) return;
            aiClickInProgress = true;
            buttons[targetIndex].click();
            aiClickInProgress = false;
        }, totalDelay);
    }

    function startPhase(phase){ if (hp[1]<=0||hp[2]<=0) return; clearTimeout(timelineTimeout);
        // Check for remaining questions FIRST, before any turn sound plays — otherwise
        // the "choose a question" voice line fires for a turn that's about to be
        // cut short by game-over, and the two sounds collide.
        if (phase === 'PICK' && pool.filter(q => !usedQuestionKeys.has(q.q)).length === 0) {
            // Every question in the bank has been answered — nothing left to
            // offer, so the match ends now and the winner is decided from the
            // current HP standing instead of repeating answered questions.
            endTheGame('questions-exhausted');
            return;
        }
        if (track) track.innerHTML=''; activeBullet=null; currentStepIndex=0; canClick=true; resetButtonColors(); updateTurnBanner(phase); if (bgm){ bgm.currentTime=0; bgm.play().catch(()=>{}); } const activeTimeline = getPhaseTimeline(phase); if (phase==='PICK' && dialogue) dialogue.textContent=''; if (phase==='ANSWER'){ activeBullet=document.createElement('div'); activeBullet.className='tile-bullet'; activeBullet.classList.add(answerer===2?'pos-left-out':'pos-right-out'); if (track) track.appendChild(activeBullet); void activeBullet.offsetWidth; }
        // Arcade mode: Player 2 is the NPC. Whichever role (picker/answerer) Player 2
        // holds this phase, its clicks are simulated by scheduleAIMove below and real
        // clicks on the buttons are locked out for that phase.
        aiControlled = (fallbackMode === 'arcade' && ((phase === 'PICK') ? picker : answerer) === 2);

        // For PICK phase, offer up to 4 random questions the players haven't answered yet.
        // Answered questions never come back — only the still-unanswered ones cycle
        // through the options each round.
        let pickOptions = [];
        if (phase === 'PICK') {
            pickOptions = shuffleArray(pool.filter(q => !usedQuestionKeys.has(q.q))).slice(0, 4);
        }

        for (let i=0;i<4;i++){
            if (buttons[i]) { buttons[i].disabled = false; buttons[i].style.visibility = 'visible'; }
            const pickQ = pickOptions[i];
            const txt = (phase==='PICK') ? (pickQ ? pickQ.q : '') : (selectedQ? selectedQ.choices[i] : '');
            setBtnText(i, txt);
            if (phase === 'PICK' && !pickQ){
                clearBtnHandler(i);
                if (buttons[i]) { buttons[i].disabled = true; buttons[i].style.visibility = 'hidden'; }
                continue;
            }
            setBtnHandler(i, () => {
                if (!canClick || gamePaused) return; if (Date.now() < stunTimeEnd) return;
                if (aiControlled && !aiClickInProgress) return;
                const targetWord = phase === 'PICK' ? 'SHOOT' : 'PARRY';
                if (time && time.textContent !== targetWord){
                    shakeButtonMiss(i);
                    if (phase === 'PICK') { triggerIndicator('Miss'); stunTimeEnd = Date.now() + 1095; punishBeatMiss(picker,'M'); }
                    else { triggerIndicator('Oops'); stunTimeEnd = Date.now() + 1095; punishBeatMiss(answerer,'Oops'); }
                } else if (phase === 'PICK'){
                    resetMissStreak(picker);
                    disableButtons(); canClick=false; triggerIndicator('Boom'); selectedQ = pickOptions[i]; usedQuestionKeys.add(selectedQ.q); if (dialogue) dialogue.textContent = selectedQ.q; updateImg('Shoot'); playSfx(picker === 1 ? p1Gunshot : p2Gunshot);
                    activeBullet = document.createElement('div'); activeBullet.className='tile-bullet pos-center'; if (track) track.appendChild(activeBullet);
                    setTimeout(()=>{ if (activeBullet){ activeBullet.classList.remove('pos-center'); activeBullet.classList.add(picker===1?'pos-right-out':'pos-left-out'); } }, 10);
                } else {
                    resetMissStreak(answerer);
                    disableButtons(); canClick=false; if (dialogue) dialogue.textContent = (buttons[i] && buttons[i].textContent) || '';
                    revealAnswers(i);
                    if (!selectedQ || (buttons[i] && buttons[i].textContent) !== selectedQ.correct){ clearTimeout(timelineTimeout); if (activeBullet){ activeBullet.style.transition = 'left 0.15s cubic-bezier(0.25, 1, 0.5, 1), transform 0.15s linear'; activeBullet.style.left = '50%'; activeBullet.style.transform = 'translateX(-50%)'; }
                        setTimeout(()=>{ triggerIndicator('Ouch'); triggerExplosion(); flashRed(answerer); punish(answerer,'Hurts'); if (hp[1] > 0 && hp[2] > 0) retryPick(); },150);
                    } else { triggerIndicator('Parry'); triggerParryBanner(); triggerExplosion(); playSfx(answerer === 1 ? p1ParrySfx : p2ParrySfx); playSfx(answerer === 1 ? p1ParriedVoiceSfx : p2ParriedVoiceSfx); updateImg('Parry'); if (track) track.innerHTML = ''; }
                }
            });
        }

        if (aiControlled) scheduleAIMove(phase, activeTimeline);

        function runNextWaitStep(){
            if (currentStepIndex >= activeTimeline.length){ disableButtons(); canClick=false;
                if (phase === 'PICK'){
                    if (selectedQ === null){ triggerIndicator('Miss'); punishBeatMiss(picker,'M'); if (hp[1] > 0 && hp[2] > 0) nextTurn(); }
                    else setTimeout(()=>{ updateImg('Idle'); startPhase('ANSWER'); }, 50);
                } else {
                    if (ind && ind.textContent !== 'Parry'){ revealAnswers(null); triggerIndicator('Oops'); if (activeBullet){ activeBullet.style.transition = 'left 0.15s cubic-bezier(0.25, 1, 0.5, 1), transform 0.15s linear'; activeBullet.style.left = '50%'; activeBullet.style.transform = 'translateX(-50%)'; }
                        setTimeout(()=>{ triggerIndicator('Ouch'); triggerExplosion(); flashRed(answerer); punishBeatMiss(answerer,'Hurts'); if (hp[1] > 0 && hp[2] > 0) retryPick(); },150);
                    } else { nextTurn(); }
                }
                return;
            }
            const step = activeTimeline[currentStepIndex]; if (time) time.textContent = step.label;
            if (beatIndicator){ const progress = ((currentStepIndex + 1) / activeTimeline.length) * 100; beatIndicator.style.transition = `width ${step.wait}ms linear`; beatIndicator.style.width = progress + '%'; }
            if (phase === 'ANSWER' && activeBullet){ if (step.label === '2'){ activeBullet.style.transition = 'left 1.6s linear, transform 1s linear'; activeBullet.classList.remove('pos-left-out','pos-right-out'); activeBullet.style.left = answerer === 2 ? '30%' : '70%'; }
                else if (step.label === 'PARRY'){ activeBullet.style.left = '50%'; activeBullet.style.transform = 'translateX(-50%)'; } }
            currentStepIndex++; scheduleTimeline(runNextWaitStep, step.wait);
        }
        runNextWaitStep();
    }

    // Wire controls
    if (startButton) startButton.addEventListener('click', (e)=>{ console.log('game-prototype: startButton clicked, disabled=', startButton.disabled); if (!startButton.disabled) startGame(); });
    if (restartButton) restartButton.addEventListener('click', startGame);

    // Expose small hooks so the Character Selection screen (in QubeatGameStart.html)
    // can safely refresh sprites / the Start-state text after players pick.
    window.__qubeatRefreshCharacterImgs = function(){ updateImg('Idle'); };
    window.__qubeatUpdateStartState = updateStartState;
    // Lets the BACK button (in QubeatGameStart.html) fully reset the match
    // when it sends the player back to Character Selection.
    window.__qubeatResetToDefaults = resetToDefaults;

    // Initialize display state
    resetToDefaults();
    if (rightControlGroup){ rightControlGroup.classList.remove('show-after-start'); }
    if (questionCard){ questionCard.classList.remove('show-after-start'); }
    if (hudRow){ hudRow.classList.remove('show-after-start'); }
    if (rightPanel){ rightPanel.classList.add('initial-center'); }
    // Retry enabling Start a few times in case of timing races with inline scripts
    try{
        let _tries = 0;
        const _ensure = setInterval(()=>{
            try{
                updateStartState();
                if (startButton && !startButton.disabled) { clearInterval(_ensure); return; }
            }catch(e){}
            if (++_tries > 8) clearInterval(_ensure);
        }, 200);
    }catch(e){}
});
