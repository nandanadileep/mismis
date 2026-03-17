const modules = [
  {
    title: '1) Foundations & Gear',
    lessons: [
      lesson('Signal Flow Basics', 'Understand how audio moves from deck to crowd.', 'Audio travels: track source -> deck -> channel gain/EQ -> crossfader/master -> speakers. When you know this chain, you can troubleshoot quickly.', ['Load one track and set channel gain so peaks sit below red.', 'Toggle cue/master in headphones and identify each path.', 'Mute one section at a time to hear what each control changes.'], 'Which control should usually be adjusted first for clean level?', ['Master volume', 'Channel gain/trim', 'Crossfader curve'], 1),
      lesson('Library & Cue Preparation', 'Prepare tracks so performance decisions are fast.', 'Good prep means fewer surprises. Set memory cues for intro/drop/outro and tag tracks by energy, key, and vibe.', ['Pick 10 tracks and label energy 1-5.', 'Set hot cues at intro, first drop, and mix-out.', 'Write one sentence describing each track mood.'], 'Best reason to set hot cues before a gig?', ['They improve audio quality', 'They speed up navigation and phrasing decisions', 'They auto-harmonic mix'], 1),
      lesson('Headroom & Clipping', 'Keep your sound loud but clean.', 'Headroom leaves space for peaks. Red meters mean distortion risk, especially on big systems.', ['Set channel gain while cueing, not during drop.', 'Keep master below clipping and check booth + mains.', 'Compare distorted vs clean example at same perceived loudness.'], 'Why avoid redlining?', ['It causes distortion and listener fatigue', 'It improves bass punch', 'It helps beatmatching'], 0)
    ]
  },
  {
    title: '2) Rhythm & Beatmatching',
    lessons: [
      lesson('Counting Beats and Bars', 'Feel structure so transitions land on time.', 'Most club music uses 4 beats per bar with 8/16/32-bar phrases. Counting helps predict musical events.', ['Count aloud for one full phrase: 1-2-3-4...', 'Mark each 8 bars with a hand tap.', 'Predict when the next breakdown starts.'], 'Typical dance phrase sizes are:', ['3/6/12 bars', '8/16/32 bars', '5/10/20 bars'], 1),
      lesson('Manual Tempo Match', 'Align BPM without sync dependence.', 'Use pitch fader for base tempo, jog for temporary correction. Small moves are smoother than big jumps.', ['Hide BPM display and match by ear.', 'Adjust pitch in tiny increments.', 'Use jog nudges only when drift appears.'], 'Pitch fader changes:', ['Track key only', 'Long-term playback speed', 'Headphone volume'], 1),
      lesson('Drift Correction', 'Keep tracks locked over time.', 'Even matched tracks drift. Correct early with tiny nudges to avoid audible trainwrecks.', ['Run two percussive tracks for 64 bars.', 'Nudge forward/back in micro moves.', 'Reset and repeat until corrections are invisible.'], 'Best correction habit is to:', ['Wait until drift is huge', 'Make frequent tiny corrections', 'Move crossfader rapidly'], 1)
    ]
  },
  {
    title: '3) Phrasing & Structure',
    lessons: [
      lesson('Map Song Sections', 'Recognize intros, drops, and outros by ear.', 'If you can hear section changes, you can place transitions where they feel musical instead of random.', ['Listen to 5 tracks and write timestamps for section changes.', 'Identify low-energy and high-energy zones.', 'Call out phrase boundaries before they happen.'], 'A phrase-aware mix usually starts the incoming track:', ['At random points', 'At phrase boundaries', 'Only at first beat of song'], 1),
      lesson('Vocal Clash Avoidance', 'Prevent two lead elements from fighting.', 'Simultaneous vocals/hooks create clutter. Layer instrumental with vocal, or vocal with sparse section.', ['Find two vocal-heavy tracks.', 'Test overlaps and note clash moments.', 'Rebuild transition avoiding overlapping hooks.'], 'What usually causes muddy vocal transitions?', ['Too little reverb', 'Overlapping lead vocals/hook content', 'Low BPM'], 1),
      lesson('Launch Timing', 'Drop tracks exactly when they support momentum.', 'Launching late or early breaks flow. Cueing with phrase awareness keeps energy coherent.', ['Set 8-bar countdown before launch.', 'Enter incoming track on bar 1 of new phrase.', 'Record and review whether drop landed musically.'], 'Launching 1 bar late often feels:', ['Natural and better', 'Like momentum dip/misalignment', 'Harmonically stronger'], 1)
    ]
  },
  {
    title: '4) EQ & Frequency Control',
    lessons: [
      lesson('Bass Management', 'Control low-end so transitions stay clean.', 'Low frequencies carry lots of energy. Two full basslines at once often cause mud and pumping.', ['Blend two tracks with both lows up, then with one low cut.', 'Compare clarity and punch.', 'Practice 8-bar bass swap timing.'], 'During most blends, bass should be:', ['Fully up on both tracks', 'Managed so one bassline dominates', 'Removed from both tracks'], 1),
      lesson('Midrange Clarity', 'Protect vocals and melody intelligibility.', 'Mids hold vocals/synth leads. Small EQ cuts can create space without killing energy.', ['Identify vocal frequency conflicts.', 'Cut 1-3 dB mids on one channel during overlap.', 'Restore after transition settles.'], 'A subtle mid cut is useful for:', ['Phase cancellation fixes only', 'Creating space for competing vocal/synth content', 'Raising loudness drastically'], 1),
      lesson('Filter Discipline', 'Use filters musically, not as a crutch.', 'Filters are expressive when tied to phrase timing. Overuse makes sets predictable and thin.', ['Do one clean transition with no filter.', 'Repeat with gentle HP filter into drop.', 'Compare which tells story better.'], 'Best filter use is:', ['On every transition by default', 'Purposeful and phrase-aware', 'Only in warmup sets'], 1)
    ]
  },
  {
    title: '5) Transition Techniques',
    lessons: [
      lesson('Long Blend Transition', 'Create smooth handoffs for groove-based genres.', 'Long blends rely on careful EQ, gain, and phrasing. They preserve groove continuity.', ['Blend over 16 bars.', 'Swap bass around bar 8.', 'Exit outgoing track cleanly before next break.'], 'Long blends are strongest when:', ['EQ and phrase timing are controlled', 'Crossfader is slammed quickly', 'No cueing is done'], 0),
      lesson('Cut Transition', 'Inject energy with decisive timing.', 'Cuts are effective at phrase boundaries, impact moments, or genre switches.', ['Pick a high-impact phrase end.', 'Cut outgoing on beat 1.', 'Immediately stabilize EQ on incoming track.'], 'A cut transition should usually happen:', ['Mid-vocal line randomly', 'On a strong phrase point', 'Only after full silence'], 1),
      lesson('Echo/FX Exit', 'Use FX as punctuation, not camouflage.', 'Echo outs can smooth difficult endings, but repeated overuse sounds lazy.', ['Perform two clean non-FX transitions first.', 'Then apply short echo on one exit only.', 'Judge whether effect improves storytelling.'], 'Healthy FX practice is:', ['FX first, technique second', 'Technique first, FX for emphasis', 'Never use FX'], 1)
    ]
  },
  {
    title: '6) Harmonic Mixing',
    lessons: [
      lesson('Key Compatibility', 'Mix keys that complement each other.', 'Camelot neighbors and same-key mixes tend to sound smoother, especially with melodic material.', ['Pick 6 melodic tracks.', 'Arrange by key compatibility.', 'Test each transition and note tension vs smoothness.'], 'Moving from 8A to which key is commonly compatible?', ['12B', '8A or 7A/9A', '3A'], 1),
      lesson('Detect Clashes by Ear', 'Trust ears beyond software tags.', 'Key analysis can be wrong. Your ears decide if chords and melodies fight.', ['Do one transition marked compatible but listen critically.', 'Do one marked incompatible and compare.', 'Write what clash sounded like.'], 'If software key and ears disagree, trust:', ['Software only', 'Your ears in context', 'BPM'], 1),
      lesson('Creative Key Shifts', 'Recover when perfect key match is unavailable.', 'You can use EQ and timing to reduce harmonic friction, or shift key subtly if tool allows.', ['Attempt a mildly incompatible mix.', 'Reduce melodic overlap duration.', 'Use percussion-focused section for swap.'], 'To minimize key clash, shorten overlap of:', ['Percussion only parts', 'Melodic/harmonic parts', 'Silence'], 1)
    ]
  },
  {
    title: '7) Crowd Reading & Set Flow',
    lessons: [
      lesson('Energy Curves', 'Guide the room instead of random track dumping.', 'Great sets breathe: build, peak, reset, rebuild. Crowd stamina matters.', ['Design a 30-min arc: warm, lift, peak, reset.', 'Play it and track crowd response moments.', 'Adjust sequence based on reaction.'], 'A good set arc usually includes:', ['Constant max energy', 'Build and release cycles', 'Only unknown tracks'], 1),
      lesson('Real-Time Adaptation', 'React to room feedback quickly.', 'Watch body language, floor density, and attention shifts. Swap strategy when response drops.', ['Play three tracks and observe response.', 'If energy dips, change style or familiarity level.', 'Log what recovered floor fastest.'], 'Crowd reading prioritizes:', ['Preplanned ego choices', 'Observed room response', 'Only harmonic compatibility'], 1),
      lesson('Mistake Recovery', 'Stay calm and re-lock the groove.', 'Mistakes happen. The audience cares more about recovery confidence than perfection.', ['Intentionally misalign two tracks.', 'Recover in under 16 bars.', 'Practice neutral facial/body language while fixing.'], 'Best reaction to a mix mistake:', ['Stop music abruptly', 'Recover smoothly and continue', 'Blame equipment on mic'], 1)
    ]
  },
  {
    title: '8) Creative Performance',
    lessons: [
      lesson('Loop Control', 'Extend or reshape phrases in real time.', 'Loops help when intros/outros are short or timing needs extension.', ['Set 8-beat loop on outro.', 'Bring in next track while loop holds.', 'Exit loop cleanly on phrase start.'], 'Looping is most useful when:', ['You need phrase extension', 'You want random chaos', 'You forgot headphones'], 0),
      lesson('Layering Acapellas', 'Add identity without clutter.', 'Acapella layering works when rhythm and key relationship are considered.', ['Find instrumental with space in mids.', 'Layer short acapella phrase.', 'EQ mids/highs to avoid masking.'], 'Before layering vocals, first check:', ['Battery level', 'Rhythm + key compatibility', 'Screen brightness'], 1),
      lesson('Signature Moves', 'Develop repeatable creative transitions.', 'A signature move is a reliable, musical trick you can execute under pressure.', ['Design one transition recipe (loop + EQ + cue).', 'Practice it 10 times.', 'Use it once per set at peak moment.'], 'A signature move should be:', ['Complex but inconsistent', 'Reliable and musical', 'Used every 2 minutes'], 1)
    ]
  },
  {
    title: '9) Workflow & Gig Readiness',
    lessons: [
      lesson('Smart Crate Design', 'Find right track fast under pressure.', 'Organize by energy, mood, and context so you can pivot quickly during real gigs.', ['Create crates: warmup, peak, recovery, closer.', 'Add tags for key and genre.', 'Test retrieval speed with 10 random prompts.'], 'Best crate system is:', ['Alphabetical only', 'Context + energy driven', 'One giant unsorted folder'], 1),
      lesson('Backup Strategy', 'Avoid set-ending technical failures.', 'Professional DJs bring redundancy: duplicate USBs and tested exports.', ['Export library to primary USB.', 'Clone to backup USB.', 'Test both on a separate system.'], 'Minimum reliable gig backup is:', ['One USB only', 'Primary + tested backup', 'Streaming only'], 1),
      lesson('Booth Etiquette', 'Hand off smoothly and protect relationships.', 'Professional behavior gets rebooked: punctuality, communication, and respectful transitions.', ['Arrive early for soundcheck.', 'Coordinate handoff timing with prior DJ.', 'Leave booth levels clean for next act.'], 'Booth etiquette mainly impacts:', ['Only sound quality', 'Reputation and rebooking potential', 'Track key detection'], 1)
    ]
  },
  {
    title: '10) Branding & Growth',
    lessons: [
      lesson('Artist Identity', 'Present a clear musical point of view.', 'Branding is consistency across name, visuals, sound, and communication.', ['Write a 1-sentence DJ identity.', 'Select 3 adjectives describing your sound.', 'Audit socials for consistency.'], 'Strong branding should be:', ['Generic to everyone', 'Clear and consistent', 'Changed daily'], 1),
      lesson('Review Recorded Sets', 'Improve using evidence, not memory.', 'Recording reveals timing, EQ, and energy issues you miss live.', ['Record a 20-minute practice set.', 'Mark 3 strong and 3 weak moments.', 'Set one improvement goal for next session.'], 'Set review is most useful when it is:', ['Occasional and vague', 'Regular and specific', 'Never revisited'], 1),
      lesson('Networking & Reliability', 'Turn skill into opportunities.', 'Promoters value DJs who are easy to work with and consistently prepared.', ['Build a short promo pack (bio, links, mix).', 'Reach out with tailored message to one venue.', 'Follow up professionally after shows.'], 'Most bookings come from:', ['Skill only', 'Skill + reliability + relationships', 'Expensive gear alone'], 1)
    ]
  }
];

function lesson(title, objective, explain, steps, prompt, choices, answerIndex) {
  return { title, objective, explain, steps, quiz: { prompt, choices, answerIndex } };
}

const drills = [
  'Beatmatch two tracks by ear for 64 bars with no visual BPM.',
  'Do 5 phrase-perfect transitions where drop lands exactly on bar 1.',
  'Practice bass swaps: one bassline at a time, 8 bars each handoff.',
  'Run a recovery drill: force a drift, then fix it within 8 bars.',
  'Build a 15-minute mini-set with a clear energy arc.',
  'Record and critique one transition for EQ and timing clarity.'
];

const stateKey = 'dj-learning-lab-v2';
let state = {
  completed: {},
  practiced: {},
  notes: ''
};

let activeModuleIndex = 0;
let activeLessonIndex = 0;
let currentQuizPassed = false;

const completionBadge = document.getElementById('completionBadge');
const moduleContainer = document.getElementById('moduleContainer');
const notesEl = document.getElementById('practiceNotes');
const resetBtn = document.getElementById('resetProgress');

const playerModule = document.getElementById('playerModule');
const playerTitle = document.getElementById('playerTitle');
const playerObjective = document.getElementById('playerObjective');
const playerExplain = document.getElementById('playerExplain');
const playerSteps = document.getElementById('playerSteps');
const markPracticeBtn = document.getElementById('markPractice');
const practiceStatus = document.getElementById('practiceStatus');
const quizPrompt = document.getElementById('quizPrompt');
const quizChoices = document.getElementById('quizChoices');
const quizFeedback = document.getElementById('quizFeedback');
const completeLessonBtn = document.getElementById('completeLesson');

function getLessonId(moduleIndex, lessonIndex) {
  return `m${moduleIndex}-l${lessonIndex}`;
}

function loadState() {
  const raw = localStorage.getItem(stateKey);
  if (!raw) return;
  try {
    state = JSON.parse(raw);
  } catch {
    state = { completed: {}, practiced: {}, notes: '' };
  }
}

function saveState() {
  localStorage.setItem(stateKey, JSON.stringify(state));
}

function updateCompletionBadge() {
  const total = modules.reduce((sum, m) => sum + m.lessons.length, 0);
  const done = Object.values(state.completed).filter(Boolean).length;
  const pct = Math.round((done / total) * 100);
  completionBadge.textContent = `${pct}% complete (${done}/${total} lessons)`;
}

function renderModuleList() {
  moduleContainer.innerHTML = '';

  modules.forEach((module, moduleIndex) => {
    const moduleCard = document.createElement('section');
    moduleCard.className = 'module';

    const title = document.createElement('h3');
    title.textContent = module.title;
    moduleCard.appendChild(title);

    const list = document.createElement('div');
    list.className = 'lesson-list';

    module.lessons.forEach((item, lessonIndex) => {
      const id = getLessonId(moduleIndex, lessonIndex);
      const button = document.createElement('button');
      button.className = 'lesson-nav';
      if (moduleIndex === activeModuleIndex && lessonIndex === activeLessonIndex) {
        button.classList.add('active');
      }
      if (state.completed[id]) {
        button.classList.add('done');
      }
      button.innerHTML = `<span>${item.title}</span><strong>${state.completed[id] ? '✓' : '•'}</strong>`;
      button.addEventListener('click', () => {
        activeModuleIndex = moduleIndex;
        activeLessonIndex = lessonIndex;
        currentQuizPassed = Boolean(state.completed[id]);
        renderModuleList();
        renderLessonPlayer();
      });
      list.appendChild(button);
    });

    moduleCard.appendChild(list);
    moduleContainer.appendChild(moduleCard);
  });

  updateCompletionBadge();
}

function renderLessonPlayer() {
  const module = modules[activeModuleIndex];
  const lesson = module.lessons[activeLessonIndex];
  const lessonId = getLessonId(activeModuleIndex, activeLessonIndex);

  playerModule.textContent = module.title;
  playerTitle.textContent = lesson.title;
  playerObjective.textContent = lesson.objective;
  playerExplain.textContent = lesson.explain;

  playerSteps.innerHTML = '';
  lesson.steps.forEach((step) => {
    const li = document.createElement('li');
    li.textContent = step;
    playerSteps.appendChild(li);
  });

  markPracticeBtn.disabled = false;
  const practiced = Boolean(state.practiced[lessonId]);
  practiceStatus.textContent = practiced ? 'Practice logged for this lesson.' : 'Complete the drill, then click "I practiced this drill".';

  quizPrompt.textContent = lesson.quiz.prompt;
  quizFeedback.textContent = currentQuizPassed ? 'Quiz already passed for this lesson.' : 'Choose the best answer.';
  quizChoices.innerHTML = '';

  lesson.quiz.choices.forEach((choice, idx) => {
    const choiceBtn = document.createElement('button');
    choiceBtn.className = 'choice-btn';
    choiceBtn.textContent = choice;
    choiceBtn.addEventListener('click', () => handleQuizAnswer(idx));
    quizChoices.appendChild(choiceBtn);
  });

  const canComplete = (currentQuizPassed || state.completed[lessonId]) && practiced;
  completeLessonBtn.disabled = !canComplete;
  completeLessonBtn.textContent = state.completed[lessonId] ? 'Lesson completed ✓' : 'Mark lesson complete';
}

function handleQuizAnswer(index) {
  const lesson = modules[activeModuleIndex].lessons[activeLessonIndex];
  const lessonId = getLessonId(activeModuleIndex, activeLessonIndex);
  const correct = index === lesson.quiz.answerIndex;

  if (correct) {
    currentQuizPassed = true;
    quizFeedback.textContent = 'Correct. Nice—now finish the drill and complete the lesson.';
  } else {
    currentQuizPassed = false;
    quizFeedback.textContent = 'Not quite. Re-read the lesson explanation and try again.';
  }

  const practiced = Boolean(state.practiced[lessonId]);
  completeLessonBtn.disabled = !(currentQuizPassed && practiced);
}

markPracticeBtn.addEventListener('click', () => {
  const lessonId = getLessonId(activeModuleIndex, activeLessonIndex);
  state.practiced[lessonId] = true;
  saveState();
  practiceStatus.textContent = 'Practice logged for this lesson.';
  completeLessonBtn.disabled = !currentQuizPassed;
});

completeLessonBtn.addEventListener('click', () => {
  const lessonId = getLessonId(activeModuleIndex, activeLessonIndex);
  state.completed[lessonId] = true;
  saveState();
  renderModuleList();
  renderLessonPlayer();
});

notesEl.addEventListener('input', () => {
  state.notes = notesEl.value;
  saveState();
});

resetBtn.addEventListener('click', () => {
  state = { completed: {}, practiced: {}, notes: '' };
  currentQuizPassed = false;
  notesEl.value = '';
  saveState();
  renderModuleList();
  renderLessonPlayer();
});

let timer = 300;
let timerRef = null;
const timerDisplay = document.getElementById('timerDisplay');

function renderTimer() {
  const mm = String(Math.floor(timer / 60)).padStart(2, '0');
  const ss = String(timer % 60).padStart(2, '0');
  timerDisplay.textContent = `${mm}:${ss}`;
}

document.getElementById('startTimer').addEventListener('click', () => {
  if (timerRef) return;
  timerRef = setInterval(() => {
    if (timer <= 0) {
      clearInterval(timerRef);
      timerRef = null;
      return;
    }
    timer -= 1;
    renderTimer();
  }, 1000);
});

document.getElementById('pauseTimer').addEventListener('click', () => {
  clearInterval(timerRef);
  timerRef = null;
});

document.getElementById('resetTimer').addEventListener('click', () => {
  clearInterval(timerRef);
  timerRef = null;
  timer = 300;
  renderTimer();
});

document.getElementById('newDrill').addEventListener('click', () => {
  const text = drills[Math.floor(Math.random() * drills.length)];
  document.getElementById('drillOutput').textContent = text;
});

const songCatalog = [
  { title: 'Midnight Metro', artist: 'Neon Circuit', bpm: 124, key: '8A', energy: 3, genre: 'Progressive House' },
  { title: 'Lift Off', artist: 'Nova K', bpm: 126, key: '9A', energy: 4, genre: 'Tech House' },
  { title: 'Velvet Pulse', artist: 'Iris Loop', bpm: 122, key: '8A', energy: 2, genre: 'Deep House' },
  { title: 'Strobe Echo', artist: 'Arc Light', bpm: 128, key: '9B', energy: 5, genre: 'Mainstage House' },
  { title: 'Concrete Rhythm', artist: 'Sub District', bpm: 125, key: '10A', energy: 4, genre: 'Minimal Tech' },
  { title: 'Ocean Drive', artist: 'Night Tides', bpm: 120, key: '7A', energy: 2, genre: 'Melodic House' },
  { title: 'Skyline Runner', artist: 'Alta Mode', bpm: 124, key: '8B', energy: 3, genre: 'Nu Disco' },
  { title: 'Afterglow Signal', artist: 'Pulse Habit', bpm: 127, key: '10B', energy: 4, genre: 'Electro House' },
  { title: 'Warehouse Bloom', artist: 'Grey Unit', bpm: 126, key: '11A', energy: 4, genre: 'Techno' },
  { title: 'Dawn Reset', artist: 'Miri Vale', bpm: 123, key: '7B', energy: 2, genre: 'Organic House' },
  { title: 'Voltage Tide', artist: 'Binary Drift', bpm: 128, key: '11B', energy: 5, genre: 'Peak Techno' },
  { title: 'Silver Fade', artist: 'Loft Runner', bpm: 121, key: '6A', energy: 1, genre: 'Warmup House' }
];

function normalizeCamelot(key) {
  const value = key.trim().toUpperCase();
  const num = Number.parseInt(value, 10);
  const letter = value.endsWith('B') ? 'B' : 'A';
  return { num, letter };
}

function keyDistance(a, b) {
  const aa = normalizeCamelot(a);
  const bb = normalizeCamelot(b);
  if (aa.letter !== bb.letter) {
    return aa.num === bb.num ? 1 : 2;
  }
  const diff = Math.abs(aa.num - bb.num);
  return Math.min(diff, 12 - diff);
}

function renderSongMatches() {
  const bpmInput = Number(document.getElementById('songBpm').value);
  const keyInput = document.getElementById('songKey').value;
  const energyInput = Number(document.getElementById('songEnergy').value);
  const resultsEl = document.getElementById('songResults');

  const ranked = songCatalog
    .map((song) => {
      const bpmDiff = Math.abs(song.bpm - bpmInput);
      const keyDiff = keyDistance(song.key, keyInput);
      const energyDiff = Math.abs(song.energy - energyInput);
      const score = bpmDiff * 2 + keyDiff * 6 + energyDiff * 3;
      return { song, score, bpmDiff, keyDiff, energyDiff };
    })
    .sort((a, b) => a.score - b.score)
    .slice(0, 5);

  resultsEl.innerHTML = '';

  ranked.forEach(({ song, bpmDiff, keyDiff, energyDiff }) => {
    const card = document.createElement('div');
    card.className = 'song-card';
    const reason = [];
    reason.push(`BPM diff: ${bpmDiff}`);
    reason.push(`Key distance: ${keyDiff}`);
    reason.push(`Energy diff: ${energyDiff}`);
    card.innerHTML = `
      <h4>${song.title} — ${song.artist}</h4>
      <p class="muted">${song.genre} · ${song.bpm} BPM · ${song.key} · Energy ${song.energy}</p>
      <p class="muted">Why it fits: ${reason.join(' | ')}</p>
    `;
    resultsEl.appendChild(card);
  });
}

document.getElementById('findSongs').addEventListener('click', renderSongMatches);

async function findOnlineSongs() {
  const style = document.getElementById('songStyle').value.trim() || 'house';
  const bpmInput = Number(document.getElementById('songBpm').value);
  const statusEl = document.getElementById('onlineStatus');
  const resultsEl = document.getElementById('onlineSongResults');

  statusEl.textContent = 'Searching internet songs...';
  resultsEl.innerHTML = '';

  try {
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(`${style} dance`)}&entity=song&limit=18`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const payload = await response.json();
    const rows = Array.isArray(payload.results) ? payload.results : [];

    if (!rows.length) {
      statusEl.textContent = 'No internet results found. Try another style keyword.';
      return;
    }

    const ranked = rows.slice(0, 6).map((row) => ({
      title: row.trackName,
      artist: row.artistName,
      genre: row.primaryGenreName,
      preview: row.previewUrl,
      link: row.trackViewUrl
    }));

    ranked.forEach((song) => {
      const card = document.createElement('div');
      card.className = 'song-card';
      const previewLine = song.preview
        ? `<audio controls preload="none" src="${song.preview}"></audio>`
        : '<p class="muted">No preview available</p>';
      card.innerHTML = `
        <h4>${song.title} — ${song.artist}</h4>
        <p class="muted">${song.genre} · Verify BPM/key in your DJ software against target ${bpmInput} BPM.</p>
        <p><a href="${song.link}" target="_blank" rel="noreferrer">Open source track page</a></p>
        ${previewLine}
      `;
      resultsEl.appendChild(card);
    });

    statusEl.textContent = 'Internet songs loaded. Verify BPM/key in your DJ software before gig use.';
  } catch (error) {
    statusEl.textContent = `Internet search failed: ${error.message}.`;
  }
}

document.getElementById('findOnlineSongs').addEventListener('click', findOnlineSongs);

loadState();
notesEl.value = state.notes || '';
renderModuleList();
renderLessonPlayer();
renderTimer();
renderSongMatches();
