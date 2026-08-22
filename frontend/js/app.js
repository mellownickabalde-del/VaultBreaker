/* ═══════════════════════════════════════════════════════════════════════
   VAULT — Bio Study Breaker  |  app.js  (v4 — Persona 5 Audio)
═══════════════════════════════════════════════════════════════════════ */

const App = (() => {

  /* ═══════════════════════════════════════════════════════
     VAULT DEFINITIONS
  ═══════════════════════════════════════════════════════ */
  const VAULTS = [
    {
      id:   'cel-resp',
      icon: '🫁',
      name: 'Cellular Respiration Overview',
      desc: '4 codes to unlock — trace the energy pathway',
      hint: 'WHERE each process happens: Cytoplasm → Mitochondrial matrix → Inner mitochondrial membrane. Energy yield grows at each stage.',
      discussion: `
        <p>Cellular respiration begins in the cytosol with Glycolysis, where glucose is split into two pyruvate molecules, releasing a small burst of immediate energy.</p>
        <p>Those pyruvates then enter the mitochondria for Pyruvate Oxidation — the bridge reaction that strips one carbon (releasing CO₂) and produces Acetyl-CoA, the ticket into the next stage.</p>
        <p>The Krebs Cycle fully oxidizes the remaining carbons, releasing more CO₂ and loading up electron carriers NADH and FADH₂ — its real job is charging those carriers, not making ATP directly.</p>
        <p>Finally, those carriers deliver their energy to the Electron Transport Chain, where a proton gradient spins ATP synthase to produce the vast majority of the cell's ATP.</p>
      `,
      steps: [
        { bold: 'Glycolysis',                                          rest: 'breaks glucose into pyruvate' },
        { bold: 'Pyruvate Oxidation (Link Reaction)',                   rest: 'converts pyruvate into acetyl-CoA' },
        { bold: 'Krebs Cycle',                                         rest: 'extracts high-energy electrons' },
        { bold: 'Electron Transport Chain & Oxidative Phosphorylation', rest: 'produces most ATP' },
      ]
    },
    {
      id:   'glycolysis',
      icon: '🔬',
      name: 'Glycolysis',
      desc: '10 codes to unlock — the 10 reactions of glucose breakdown',
      hint: 'Two phases: Investment (steps 1–5, spends 2 ATP) and Payoff (steps 6–10, gains 4 ATP). Net = 2 ATP + 2 NADH.',
      discussion: `
        <p>Glycolysis is the most ancient metabolic pathway in life, occurring entirely in the cytoplasm — no oxygen needed. It is universal across virtually all living organisms.</p>
        <p>The first half — the Energy Investment Phase (Steps 1–5) — spends 2 ATP to phosphorylate and cleave glucose, like cracking open a piggy bank to access its contents.</p>
        <p>The second half — the Energy Payoff Phase (Steps 6–10) — processes the resulting molecules through five more reactions, capturing electrons as NADH and generating ATP directly, ultimately yielding pyruvate.</p>
        <p>The net result per glucose: 2 ATP and 2 NADH — a modest but essential first unlock of glucose's full energy potential.</p>
      `,
      steps: [
        { bold: 'Phosphorylation of glucose',          rest: '' },
        { bold: 'Isomerization',                       rest: '' },
        { bold: 'Second Phosphorylation',              rest: '' },
        { bold: 'Break molecule into two',             rest: '' },
        { bold: 'Transformation of DHAP to G3P',       rest: '' },
        { bold: 'Energy Gain',                         rest: '(NADH formed)' },
        { bold: 'ATP production',                      rest: '' },
        { bold: 'Phosphate position change',           rest: '' },
        { bold: 'Formation of high-energy PEP',        rest: '' },
        { bold: 'Formation of Pyruvate',               rest: '' },
      ]
    },
    {
      id:   'etc',
      icon: '⚡',
      name: 'Electron Transport Chain',
      desc: '6 codes to unlock — from NADH to ATP',
      hint: 'Think of the ETC as a downhill electron relay. Each handoff pumps H⁺ ions across the membrane, building the gradient that spins ATP synthase.',
      discussion: `
        <p>The Electron Transport Chain is the powerhouse finale of respiration, embedded in the inner mitochondrial membrane and responsible for producing roughly 32–34 ATP per glucose.</p>
        <p>It begins when NADH and FADH₂ — charged up during earlier stages — donate their electrons to a series of protein complexes. As electrons pass down the chain, energy is released and used to pump protons (H⁺) across the membrane.</p>
        <p>This builds a steep electrochemical gradient — the proton motive force — which drives protons back through ATP synthase, a molecular motor that mechanically couples their flow to the phosphorylation of ADP into ATP.</p>
        <p>At the very end of the chain, electrons are accepted by oxygen, forming water — which is exactly why oxygen is essential for aerobic life.</p>
      `,
      steps: [
        { bold: 'Electrons enter ETC',         rest: 'from NADH/FADH₂' },
        { bold: 'Electrons move',              rest: 'through complexes' },
        { bold: 'Protons are pumped',          rest: 'across membrane' },
        { bold: 'Proton gradient forms',       rest: '' },
        { bold: 'ATP synthase rotates',        rest: '' },
        { bold: 'ATP is produced',             rest: '' },
      ]
    },
    {
      id:   'krebs',
      icon: '🔄',
      name: 'Krebs Cycle',
      desc: '9 codes to unlock — the citric acid cycle',
      hint: 'Starts and ends with oxaloacetate. Per turn: 2 CO₂ released, 3 NADH + 1 FADH₂ + 1 GTP formed. Runs TWICE per glucose.',
      discussion: `
        <p>The Krebs Cycle — also called the Citric Acid Cycle — runs in the mitochondrial matrix and serves as the central hub of aerobic respiration. Each turn begins when two-carbon Acetyl-CoA fuses with four-carbon oxaloacetate to form citrate.</p>
        <p>Through nine reactions, two carbons exit as CO₂ waste, while the cycle systematically captures high-energy electrons into NADH and FADH₂ carriers. One GTP (equivalent to ATP) is also made directly per turn.</p>
        <p>Crucially, oxaloacetate is regenerated at the end — so the cycle immediately spins again. Since one glucose yields two pyruvates, the cycle runs twice per glucose, totalling 6 NADH, 2 FADH₂, 2 GTP.</p>
        <p>Those electron carriers are then handed off to the ETC, where their stored energy is finally converted into the ATP that powers your cells.</p>
      `,
      steps: [
        { bold: 'Acetyl-CoA + oxaloacetate', rest: '→ Citrate' },
        { bold: 'Citrate',                   rest: 'becomes isocitrate' },
        { bold: 'Isocitrate oxidation',      rest: '' },
        { bold: 'α-ketoglutarate formation', rest: '' },
        { bold: 'Succinyl-CoA formation',    rest: '' },
        { bold: 'Succinate formation',       rest: '' },
        { bold: 'Fumarate formation',        rest: '' },
        { bold: 'Malate formation',          rest: '' },
        { bold: 'Oxaloacetate regeneration', rest: '' },
      ]
    },
  ];

  /* ══════════════════════════
     STATE
  ══════════════════════════ */
  const state = {
    score:0, streak:0, totalCracked:0,
    progress: {},

    vaultIdx:    0,
    vault:       null,
    codeMap:     [],
    slotIdx:     0,
    attempts:    0,
    maxAttempts: 3,
    waiting:     false,
    hintVisible: false,

    dialAngle:  0,
    nearestNum: 0,
    snappedNum: null,
    dragging:   false,
    lastAngle:  0,

    audioCtx:   null,
    musicOn:    true,
    musicNodes: null,
    lastTickAngle: 0,
    lastTickTime: 0,
  };

  VAULTS.forEach(v => {
    state.progress[v.id] = { cracked:false, stars:0 };
  });

  /* ══════════════════════════
     DOM helpers
  ══════════════════════════ */
  const $ = id => document.getElementById(id);
  const screenMenu  = $('screen-menu');
  const screenDisc  = $('screen-discussion');
  const screenVault = $('screen-vault');
  const dialBody    = $('dial-body');
  const canvas      = $('dial-canvas');
  const ctx         = canvas.getContext('2d');
  const overlay     = $('overlay');

  /* ═══════════════════════════════════════════════════════════════════════
     BACKGROUND MUSIC — Persona 5 "Last Surprise" via YouTube embed
  ═══════════════════════════════════════════════════════════════════════ */

  function startMusic() {
    if (!state.musicOn) return;
    stopMusic();

    const iframe = document.createElement('iframe');
    iframe.id = 'yt-music';
    iframe.width = '1';
    iframe.height = '1';
    iframe.style.cssText = 'position:fixed;bottom:-10px;left:-10px;opacity:0;pointer-events:none;z-index:-1;';
    iframe.allow = 'autoplay';
    iframe.src = 'https://www.youtube.com/embed/gGGf8k-Eifk?autoplay=1&loop=1&playlist=gGGf8k-Eifk&controls=0&mute=0&enablejsapi=1';
    document.body.appendChild(iframe);

    state.musicNodes = { iframe };
  }

  function stopMusic() {
    if (!state.musicNodes) return;
    try {
      if (state.musicNodes.iframe) {
        state.musicNodes.iframe.remove();
      }
    } catch(e) {}
    state.musicNodes = null;
  }

  function toggleMusic() {
    state.musicOn = !state.musicOn;
    const btn = $('music-toggle');
    if (state.musicOn) {
      btn.textContent = '🔊'; btn.classList.remove('muted');
      startMusic();
    } else {
      btn.textContent = '🔇'; btn.classList.add('muted');
      stopMusic();
    }
  }

  /* ══════════════════════════════════════════════════════════════════════
     AUDIO ENGINE — Escape Room Dial SFX (kept for sound effects only)
  ══════════════════════════════════════════════════════════════════════ */

  function getAudioCtx() {
    if (!state.audioCtx) {
      state.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (state.audioCtx.state === 'suspended') state.audioCtx.resume();
    return state.audioCtx;
  }

  function noiseBuffer(ac, dur, color = 'white') {
    const frames = Math.ceil(ac.sampleRate * dur);
    const buf    = ac.createBuffer(1, frames, ac.sampleRate);
    const data   = buf.getChannelData(0);
    for (let i = 0; i < frames; i++) data[i] = Math.random() * 2 - 1;
    if (color === 'pink') {
      let b0=0,b1=0,b2=0,b3=0,b4=0,b5=0,b6=0;
      for (let i = 0; i < frames; i++) {
        const w = Math.random() * 2 - 1;
        b0=0.99886*b0+w*0.0555179; b1=0.99332*b1+w*0.0750759;
        b2=0.96900*b2+w*0.1538520; b3=0.86650*b3+w*0.3104856;
        b4=0.55000*b4+w*0.5329522; b5=-0.7616*b5-w*0.0168980;
        data[i]=(b0+b1+b2+b3+b4+b5+b6+w*0.5362)/7; b6=w*0.115926;
      }
    }
    const src = ac.createBufferSource();
    src.buffer = buf;
    return src;
  }

  function makePlateReverb(ac, decaySec = 1.4, wet = 0.28) {
    const sr  = ac.sampleRate;
    const len = Math.ceil(sr * decaySec);
    const buf = ac.createBuffer(2, len, sr);
    for (let ch = 0; ch < 2; ch++) {
      const d = buf.getChannelData(ch);
      for (let i = 0; i < len; i++) {
        const t = i / sr;
        d[i] = (Math.random() * 2 - 1) * Math.exp(-t * (3.5 + ch * 0.4));
      }
    }
    const conv  = ac.createConvolver();
    conv.buffer = buf;
    const wg    = ac.createGain();
    wg.gain.value = wet;
    conv.connect(wg);
    return { input: conv, output: wg };
  }

  /* ── Dial Tick ── */
  function playDialTick() {
    const now_ms = Date.now();
    if (now_ms - state.lastTickTime < 48) return;
    state.lastTickTime = now_ms;

    const ac = getAudioCtx();
    const t  = ac.currentTime;

    const sc    = noiseBuffer(ac, 0.003);
    const scHpf = ac.createBiquadFilter();
    scHpf.type  = 'highpass'; scHpf.frequency.value = 4200; scHpf.Q.value = 1;
    const scG   = ac.createGain();
    scG.gain.setValueAtTime(0.55, t);
    scG.gain.exponentialRampToValueAtTime(0.0001, t + 0.003);
    sc.connect(scHpf); scHpf.connect(scG); scG.connect(ac.destination);
    sc.start(t); sc.stop(t + 0.004);

    const imp    = noiseBuffer(ac, 0.012, 'pink');
    const impBpf = ac.createBiquadFilter();
    impBpf.type  = 'bandpass'; impBpf.frequency.value = 900 + Math.random()*500; impBpf.Q.value = 3.5;
    const impG   = ac.createGain();
    impG.gain.setValueAtTime(0.72, t + 0.001);
    impG.gain.exponentialRampToValueAtTime(0.0001, t + 0.014);
    imp.connect(impBpf); impBpf.connect(impG); impG.connect(ac.destination);
    imp.start(t + 0.001); imp.stop(t + 0.016);

    const pin     = ac.createOscillator();
    const pinGain = ac.createGain();
    pin.type = 'sine';
    pin.frequency.setValueAtTime(340 + Math.random()*40, t + 0.001);
    pin.frequency.exponentialRampToValueAtTime(160, t + 0.028);
    pinGain.gain.setValueAtTime(0.32, t + 0.001);
    pinGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.03);
    pin.connect(pinGain); pinGain.connect(ac.destination);
    pin.start(t + 0.001); pin.stop(t + 0.032);

    const ring     = ac.createOscillator();
    const ringGain = ac.createGain();
    ring.type = 'sine';
    ring.frequency.setValueAtTime(2800 + Math.random()*400, t + 0.002);
    ringGain.gain.setValueAtTime(0.10, t + 0.002);
    ringGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.022);
    ring.connect(ringGain); ringGain.connect(ac.destination);
    ring.start(t + 0.002); ring.stop(t + 0.024);

    const sub     = ac.createOscillator();
    const subGain = ac.createGain();
    sub.type = 'sine';
    sub.frequency.setValueAtTime(68, t);
    sub.frequency.exponentialRampToValueAtTime(30, t + 0.022);
    subGain.gain.setValueAtTime(0.24, t);
    subGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.024);
    sub.connect(subGain); subGain.connect(ac.destination);
    sub.start(t); sub.stop(t + 0.026);
  }

  /* ── Dial Snap ── */
  function playDialSnap() {
    const ac = getAudioCtx();
    const t  = ac.currentTime;

    const sub     = ac.createOscillator();
    const subGain = ac.createGain();
    sub.type = 'sine';
    sub.frequency.setValueAtTime(78, t);
    sub.frequency.exponentialRampToValueAtTime(22, t + 0.12);
    subGain.gain.setValueAtTime(0.88, t);
    subGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.14);
    sub.connect(subGain); subGain.connect(ac.destination);
    sub.start(t); sub.stop(t + 0.16);

    const slam    = noiseBuffer(ac, 0.11, 'pink');
    const slamLpf = ac.createBiquadFilter();
    slamLpf.type  = 'lowpass'; slamLpf.frequency.value = 1100; slamLpf.Q.value = 0.8;
    const slamG   = ac.createGain();
    slamG.gain.setValueAtTime(0.78, t);
    slamG.gain.exponentialRampToValueAtTime(0.0001, t + 0.10);
    slam.connect(slamLpf); slamLpf.connect(slamG); slamG.connect(ac.destination);
    slam.start(t); slam.stop(t + 0.12);

    const clang    = ac.createOscillator();
    const clangBpf = ac.createBiquadFilter();
    const clangG   = ac.createGain();
    clang.type = 'sawtooth';
    clang.frequency.setValueAtTime(420, t);
    clang.frequency.exponentialRampToValueAtTime(150, t + 0.08);
    clangBpf.type = 'bandpass'; clangBpf.frequency.value = 750; clangBpf.Q.value = 3;
    clangG.gain.setValueAtTime(0.45, t);
    clangG.gain.exponentialRampToValueAtTime(0.0001, t + 0.12);
    clang.connect(clangBpf); clangBpf.connect(clangG); clangG.connect(ac.destination);
    clang.start(t); clang.stop(t + 0.14);

    for (let i = 0; i < 4; i++) {
      const d  = 0.007 + i * 0.009;
      const n  = noiseBuffer(ac, 0.008);
      const bf = ac.createBiquadFilter();
      bf.type  = 'bandpass'; bf.frequency.value = 1400 + i * 350; bf.Q.value = 8;
      const g  = ac.createGain();
      g.gain.setValueAtTime(0.38 - i * 0.06, t + d);
      g.gain.exponentialRampToValueAtTime(0.0001, t + d + 0.007);
      n.connect(bf); bf.connect(g); g.connect(ac.destination);
      n.start(t + d); n.stop(t + d + 0.01);
    }

    [[920, 0.22, 0.38], [1380, 0.14, 0.30], [2100, 0.08, 0.22]].forEach(([f, amp, dec]) => {
      const o = ac.createOscillator();
      const g = ac.createGain();
      o.type = 'sine';
      o.frequency.setValueAtTime(f, t + 0.01);
      g.gain.setValueAtTime(0, t + 0.01);
      g.gain.linearRampToValueAtTime(amp, t + 0.018);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dec);
      o.connect(g); g.connect(ac.destination);
      o.start(t + 0.01); o.stop(t + dec + 0.02);
    });

    const scr    = noiseBuffer(ac, 0.022);
    const scrHpf = ac.createBiquadFilter();
    scrHpf.type  = 'highpass'; scrHpf.frequency.value = 5500; scrHpf.Q.value = 1;
    const scrG   = ac.createGain();
    scrG.gain.setValueAtTime(0.12, t + 0.008);
    scrG.gain.exponentialRampToValueAtTime(0.0001, t + 0.030);
    scr.connect(scrHpf); scrHpf.connect(scrG); scrG.connect(ac.destination);
    scr.start(t + 0.008); scr.stop(t + 0.032);
  }

  /* ── Lock In ── */
  function playLockIn(success) {
    const ac = getAudioCtx();
    const t  = ac.currentTime;

    if (success) {
      const pawl    = noiseBuffer(ac, 0.018);
      const pawlBpf = ac.createBiquadFilter();
      pawlBpf.type  = 'bandpass'; pawlBpf.frequency.value = 2800; pawlBpf.Q.value = 7;
      const pawlG   = ac.createGain();
      pawlG.gain.setValueAtTime(0.52, t);
      pawlG.gain.exponentialRampToValueAtTime(0.0001, t + 0.016);
      pawl.connect(pawlBpf); pawlBpf.connect(pawlG); pawlG.connect(ac.destination);
      pawl.start(t); pawl.stop(t + 0.02);

      const spr    = noiseBuffer(ac, 0.010);
      const sprBpf = ac.createBiquadFilter();
      sprBpf.type  = 'bandpass'; sprBpf.frequency.value = 5200; sprBpf.Q.value = 5;
      const sprG   = ac.createGain();
      sprG.gain.setValueAtTime(0.28, t + 0.014);
      sprG.gain.exponentialRampToValueAtTime(0.0001, t + 0.024);
      spr.connect(sprBpf); sprBpf.connect(sprG); sprG.connect(ac.destination);
      spr.start(t + 0.014); spr.stop(t + 0.026);

      [[660, 0.010], [990, 0.110]].forEach(([f, d]) => {
        const o = ac.createOscillator();
        const g = ac.createGain();
        o.type = 'sine';
        o.frequency.setValueAtTime(f, t + d);
        g.gain.setValueAtTime(0, t + d);
        g.gain.linearRampToValueAtTime(0.28, t + d + 0.020);
        g.gain.exponentialRampToValueAtTime(0.0001, t + d + 0.30);
        o.connect(g); g.connect(ac.destination);
        o.start(t + d); o.stop(t + d + 0.32);
      });

      const si     = ac.createOscillator();
      const siGain = ac.createGain();
      si.type = 'sine';
      si.frequency.setValueAtTime(55, t + 0.02);
      si.frequency.exponentialRampToValueAtTime(28, t + 0.09);
      siGain.gain.setValueAtTime(0.38, t + 0.02);
      siGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.10);
      si.connect(siGain); siGain.connect(ac.destination);
      si.start(t + 0.02); si.stop(t + 0.12);

    } else {
      const sol    = noiseBuffer(ac, 0.022, 'pink');
      const solLpf = ac.createBiquadFilter();
      solLpf.type  = 'lowpass'; solLpf.frequency.value = 380; solLpf.Q.value = 0.7;
      const solG   = ac.createGain();
      solG.gain.setValueAtTime(0.85, t);
      solG.gain.exponentialRampToValueAtTime(0.0001, t + 0.020);
      sol.connect(solLpf); solLpf.connect(solG); solG.connect(ac.destination);
      sol.start(t); sol.stop(t + 0.025);

      const buz     = ac.createOscillator();
      const buzLpf  = ac.createBiquadFilter();
      const buzGain = ac.createGain();
      buz.type = 'sawtooth';
      buz.frequency.setValueAtTime(130, t + 0.005);
      buz.frequency.linearRampToValueAtTime(108, t + 0.240);
      buzLpf.type = 'lowpass'; buzLpf.frequency.value = 550; buzLpf.Q.value = 2;
      buzGain.gain.setValueAtTime(0.0, t + 0.005);
      buzGain.gain.linearRampToValueAtTime(0.45, t + 0.018);
      buzGain.gain.setValueAtTime(0.45, t + 0.16);
      buzGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.26);
      buz.connect(buzLpf); buzLpf.connect(buzGain); buzGain.connect(ac.destination);
      buz.start(t + 0.005); buz.stop(t + 0.28);

      const sd     = ac.createOscillator();
      const sdGain = ac.createGain();
      sd.type = 'sine';
      sd.frequency.setValueAtTime(52, t + 0.01);
      sd.frequency.exponentialRampToValueAtTime(24, t + 0.19);
      sdGain.gain.setValueAtTime(0.58, t + 0.01);
      sdGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
      sd.connect(sdGain); sdGain.connect(ac.destination);
      sd.start(t + 0.01); sd.stop(t + 0.24);

      const err     = ac.createOscillator();
      const errGain = ac.createGain();
      err.type = 'triangle';
      err.frequency.setValueAtTime(280, t + 0.08);
      err.frequency.linearRampToValueAtTime(190, t + 0.32);
      errGain.gain.setValueAtTime(0.0, t + 0.08);
      errGain.gain.linearRampToValueAtTime(0.18, t + 0.12);
      errGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.38);
      err.connect(errGain); errGain.connect(ac.destination);
      err.start(t + 0.08); err.stop(t + 0.40);
    }
  }

  /* ── Vault Crack ── */
  function playVaultCrack() {
    const ac   = getAudioCtx();
    const t    = ac.currentTime;
    const dest = ac.destination;

    const boom     = ac.createOscillator();
    const boomGain = ac.createGain();
    boom.type = 'sine';
    boom.frequency.setValueAtTime(62, t);
    boom.frequency.exponentialRampToValueAtTime(14, t + 0.55);
    boomGain.gain.setValueAtTime(1.0, t);
    boomGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.60);
    boom.connect(boomGain); boomGain.connect(dest);
    boom.start(t); boom.stop(t + 0.65);

    const slam    = noiseBuffer(ac, 0.22, 'pink');
    const slamLpf = ac.createBiquadFilter();
    slamLpf.type  = 'lowpass'; slamLpf.frequency.value = 1100;
    const slamG   = ac.createGain();
    slamG.gain.setValueAtTime(0.95, t);
    slamG.gain.exponentialRampToValueAtTime(0.0001, t + 0.20);
    slam.connect(slamLpf); slamLpf.connect(slamG); slamG.connect(dest);
    slam.start(t); slam.stop(t + 0.24);

    const bscr    = noiseBuffer(ac, 0.08);
    const bscrHpf = ac.createBiquadFilter();
    bscrHpf.type  = 'highpass'; bscrHpf.frequency.value = 2200;
    const bscrG   = ac.createGain();
    bscrG.gain.setValueAtTime(0.0, t + 0.04);
    bscrG.gain.linearRampToValueAtTime(0.28, t + 0.06);
    bscrG.gain.exponentialRampToValueAtTime(0.0001, t + 0.14);
    bscr.connect(bscrHpf); bscrHpf.connect(bscrG); bscrG.connect(dest);
    bscr.start(t + 0.04); bscr.stop(t + 0.16);

    for (let i = 0; i < 6; i++) {
      const d  = 0.08 + i * 0.060 + Math.random() * 0.015;
      const pf = 0.82 + (i % 3) * 0.19;

      const n  = noiseBuffer(ac, 0.030);
      const bf = ac.createBiquadFilter();
      bf.type  = 'bandpass'; bf.frequency.value = (780 + i * 195) * pf; bf.Q.value = 6;
      const g  = ac.createGain();
      g.gain.setValueAtTime(0.65 - i * 0.06, t + d);
      g.gain.exponentialRampToValueAtTime(0.0001, t + d + 0.028);
      n.connect(bf); bf.connect(g); g.connect(dest);
      n.start(t + d); n.stop(t + d + 0.034);

      const ro = ac.createOscillator();
      const rg = ac.createGain();
      ro.type  = 'sine';
      ro.frequency.setValueAtTime((1650 + i * 260) * pf, t + d + 0.002);
      rg.gain.setValueAtTime(0.18, t + d + 0.002);
      rg.gain.exponentialRampToValueAtTime(0.0001, t + d + 0.18);
      ro.connect(rg); rg.connect(dest);
      ro.start(t + d + 0.002); ro.stop(t + d + 0.20);

      if (i < 3) {
        const so = ac.createOscillator();
        const sg = ac.createGain();
        so.type  = 'sine';
        so.frequency.setValueAtTime(60 - i * 8, t + d);
        so.frequency.exponentialRampToValueAtTime(25, t + d + 0.10);
        sg.gain.setValueAtTime(0.32 - i * 0.06, t + d);
        sg.gain.exponentialRampToValueAtTime(0.0001, t + d + 0.12);
        so.connect(sg); sg.connect(dest);
        so.start(t + d); so.stop(t + d + 0.14);
      }
    }

    const gear    = noiseBuffer(ac, 0.09, 'pink');
    const gearBpf = ac.createBiquadFilter();
    gearBpf.type  = 'bandpass'; gearBpf.frequency.value = 1800; gearBpf.Q.value = 2.5;
    const gearG   = ac.createGain();
    gearG.gain.setValueAtTime(0.0, t + 0.50);
    gearG.gain.linearRampToValueAtTime(0.45, t + 0.52);
    gearG.gain.exponentialRampToValueAtTime(0.0001, t + 0.62);
    gear.connect(gearBpf); gearBpf.connect(gearG); gearG.connect(dest);
    gear.start(t + 0.50); gear.stop(t + 0.64);

    const gscr    = noiseBuffer(ac, 0.055);
    const gscrHpf = ac.createBiquadFilter();
    gscrHpf.type  = 'highpass'; gscrHpf.frequency.value = 4800;
    const gscrG   = ac.createGain();
    gscrG.gain.setValueAtTime(0.20, t + 0.50);
    gscrG.gain.exponentialRampToValueAtTime(0.0001, t + 0.56);
    gscr.connect(gscrHpf); gscrHpf.connect(gscrG); gscrG.connect(dest);
    gscr.start(t + 0.50); gscr.stop(t + 0.58);

    const groan    = ac.createOscillator();
    const groanBpf = ac.createBiquadFilter();
    const groanG   = ac.createGain();
    groan.type = 'sawtooth';
    groan.frequency.setValueAtTime(44, t + 0.75);
    groan.frequency.linearRampToValueAtTime(72, t + 1.45);
    groanBpf.type = 'bandpass'; groanBpf.frequency.value = 280; groanBpf.Q.value = 2;
    groanG.gain.setValueAtTime(0.0, t + 0.75);
    groanG.gain.linearRampToValueAtTime(0.52, t + 0.90);
    groanG.gain.exponentialRampToValueAtTime(0.0001, t + 1.55);
    groan.connect(groanBpf); groanBpf.connect(groanG); groanG.connect(dest);
    groan.start(t + 0.75); groan.stop(t + 1.60);

    [2, 3].forEach(h => {
      const ch  = ac.createOscillator();
      const chG = ac.createGain();
      ch.type = 'triangle';
      ch.frequency.setValueAtTime(44 * h, t + 0.78);
      ch.frequency.linearRampToValueAtTime(72 * h, t + 1.45);
      chG.gain.setValueAtTime(0.0, t + 0.78);
      chG.gain.linearRampToValueAtTime(0.12 / h, t + 0.90);
      chG.gain.exponentialRampToValueAtTime(0.0001, t + 1.50);
      ch.connect(chG); chG.connect(dest);
      ch.start(t + 0.78); ch.stop(t + 1.55);
    });

    [[220, 0.26, 0.75], [330, 0.18, 0.60], [440, 0.13, 0.50], [660, 0.08, 0.38]].forEach(([f, amp, dec]) => {
      const o = ac.createOscillator();
      const g = ac.createGain();
      o.type = 'sine';
      o.frequency.setValueAtTime(f, t + 1.10);
      g.gain.setValueAtTime(0, t + 1.10);
      g.gain.linearRampToValueAtTime(amp, t + 1.18);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 1.10 + dec);
      o.connect(g); g.connect(dest);
      o.start(t + 1.10); o.stop(t + 1.10 + dec + 0.05);
    });

    const triumph = makePlateReverb(ac, 1.8, 0.38);
    triumph.output.connect(dest);
    [[440, 0.90, 0.20], [550, 1.02, 0.18], [660, 1.15, 0.16], [880, 1.30, 0.13]].forEach(([f, d, amp]) => {
      const o = ac.createOscillator();
      const g = ac.createGain();
      o.type = 'triangle';
      o.frequency.setValueAtTime(f, t + d);
      g.gain.setValueAtTime(0, t + d);
      g.gain.linearRampToValueAtTime(amp, t + d + 0.08);
      g.gain.setValueAtTime(amp, t + d + 0.55);
      g.gain.exponentialRampToValueAtTime(0.0001, t + d + 1.60);
      o.connect(g); g.connect(triumph.input);
      o.start(t + d); o.stop(t + d + 1.70);
    });

    const vs     = ac.createOscillator();
    const vsGain = ac.createGain();
    vs.type = 'sine';
    vs.frequency.setValueAtTime(55, t + 0.85);
    vsGain.gain.setValueAtTime(0, t + 0.85);
    vsGain.gain.linearRampToValueAtTime(0.55, t + 1.05);
    vsGain.gain.exponentialRampToValueAtTime(0.0001, t + 2.20);
    vs.connect(vsGain); vsGain.connect(dest);
    vs.start(t + 0.85); vs.stop(t + 2.30);
  }

  /* ══════════════════════════
     MENU
  ══════════════════════════ */
  function buildMenu() {
    const grid = $('vault-grid');
    grid.innerHTML = '';
    VAULTS.forEach((v, idx) => {
      const p    = state.progress[v.id];
      const pct  = p.cracked ? 100 : 0;
      const stars= p.stars;
      const card = document.createElement('div');
      card.className = 'vault-card';
      card.innerHTML = `
        <div class="vc-rivet tl"></div><div class="vc-rivet tr"></div>
        <div class="vc-top">
          <div class="vc-icon">${v.icon}</div>
          <div class="vc-badge${p.cracked?' cracked':''}">${p.cracked?'🔓 CRACKED':'🔒 LOCKED'}</div>
        </div>
        <div class="vc-name">${v.name}</div>
        <div class="vc-steps">${v.steps.length} STEPS</div>
        <div class="vc-stars">
          ${'<span class="on">★</span>'.repeat(stars)}${'<span>★</span>'.repeat(3-stars)}
        </div>
        <div class="vc-prog-wrap"><div class="vc-prog-fill" style="width:${pct}%"></div></div>
      `;
      card.addEventListener('click', () => showDiscussion(idx));
      grid.appendChild(card);
    });
    updateHUD();
  }

  function updateHUD() {
    $('hud-score').textContent   = state.score;
    $('hud-streak').textContent  = state.streak;
    $('hud-cracked').textContent = state.totalCracked;
  }

  /* ══════════════════════════════════════
     DISCUSSION SCREEN
  ══════════════════════════════════════ */
  function showDiscussion(idx) {
    startMusic();

    state.vaultIdx = idx;
    state.vault    = VAULTS[idx];
    const v = state.vault;

    $('disc-badge').textContent       = `VAULT ${idx + 1} OF ${VAULTS.length}`;
    $('disc-vault-icon').textContent  = v.icon;
    $('disc-title').textContent       = v.name;
    $('disc-body').innerHTML          = v.discussion;
    $('disc-hint-text').textContent   = v.hint;

    showScreen(screenDisc);
  }

  function startVaultFromDisc() {
    enterVault(state.vaultIdx);
  }

  /* ══════════════════════════
     ENTER VAULT
  ══════════════════════════ */
  function enterVault(idx) {
    state.vaultIdx   = idx;
    state.vault      = VAULTS[idx];
    state.waiting    = false;
    state.hintVisible= false;

    $('vault-subject-label').textContent = state.vault.name.toUpperCase();
    $('dial-hub-icon').textContent       = state.vault.icon;
    $('dial-emblem').textContent         = state.vault.icon;
    $('hint-panel').style.display        = 'none';
    $('btn-hint').classList.remove('active');
    $('answer-key-row').style.display    = 'none';

    showScreen(screenVault);
    loadVault();
  }

  /* ══════════════════════════
     LOAD VAULT
  ══════════════════════════ */
  function loadVault() {
    const v = state.vault;
    const n = v.steps.length;

    const pool = [...Array(10).keys()];
    shuffle(pool);
    state.codeMap = pool.slice(0, n);

    state.slotIdx    = 0;
    state.attempts   = 0;
    state.waiting    = false;
    state.hintVisible= false;
    state.snappedNum = null;

    $('q-number').textContent          = `VAULT ${state.vaultIdx+1} / ${VAULTS.length}`;
    $('q-badge').textContent           = `${n} CODES TO UNLOCK`;
    $('q-topic').textContent           = v.name;
    $('topic-lock-icon').textContent   = '🔒';
    $('vault-score-live').textContent  = state.score + ' pts';
    $('result-msg').className          = 'result-msg';
    $('result-msg').textContent        = '';
    $('btn-confirm').disabled          = false;
    $('vault-door').classList.remove('door-opening','shake');
    $('hint-panel').style.display      = 'none';
    $('answer-key-row').style.display  = 'none';
    $('btn-hint').classList.remove('active');

    buildClueTable(v, state.codeMap);
    buildSlots(n);
    buildPips();

    state.dialAngle    = 0;
    state.nearestNum   = 0;
    state.snappedNum   = null;
    state.lastTickAngle= 0;
    state.lastTickTime = 0;
    updateSnapReadout();
    drawDial();
  }

  function shuffle(arr) {
    for (let i = arr.length-1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i+1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function buildClueTable(v, codeMap) {
    const rows = v.steps.map((s, i) => ({ stepIdx: i, code: codeMap[i], step: s }));
    shuffle(rows);

    const tbody = $('clue-tbody');
    tbody.innerHTML = '';
    rows.forEach(row => {
      const tr = document.createElement('tr');
      tr.dataset.stepIdx = row.stepIdx;
      tr.innerHTML = `
        <td class="ct-code">
          <div class="code-badge" id="code-badge-${row.stepIdx}">${row.code}</div>
        </td>
        <td class="ct-desc">
          <span class="step-bold">${row.step.bold}</span>${row.step.rest ? ' ' + row.step.rest : ''}
        </td>
      `;
      tbody.appendChild(tr);
    });

    markDoneBadges(0);
  }

  function markDoneBadges(slotIdx) {
    document.querySelectorAll('.code-badge').forEach(b => {
      b.classList.remove('active-target', 'done');
    });
    for (let i = 0; i < slotIdx; i++) {
      const b = $(`code-badge-${i}`);
      if (b) b.classList.add('done');
    }
  }

  function buildSlots(count) {
    const row = $('answer-display');
    row.innerHTML = '';
    for (let i = 0; i < count; i++) {
      const s = document.createElement('div');
      s.className = 'ans-slot' + (i===0?' active-slot':'');
      s.id = `slot-${i}`;
      s.textContent = '—';
      row.appendChild(s);
    }
  }

  function buildPips() {
    const row = $('attempts-row');
    row.innerHTML = '';
    for (let i = 0; i < state.maxAttempts; i++) {
      const p = document.createElement('div');
      p.className='pip'; p.id=`pip-${i}`;
      row.appendChild(p);
    }
  }

  /* ══════════════════════════════════════════════════════════════
     DIAL DRAWING
  ══════════════════════════════════════════════════════════════ */
  const DIGITS = 10;

  function drawDial() {
    const sz = canvas.width;
    const cx = sz / 2, cy = sz / 2;
    const r  = cx - 1;

    ctx.clearRect(0, 0, sz, sz);

    const bg = ctx.createRadialGradient(cx - 26, cy - 26, 10, cx, cy, r);
    bg.addColorStop(0,   '#2e2c26');
    bg.addColorStop(0.55,'#1a1816');
    bg.addColorStop(1,   '#0c0a08');
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fillStyle = bg; ctx.fill();

    ctx.beginPath(); ctx.arc(cx, cy, r - 2, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(212,168,67,0.30)'; ctx.lineWidth = 1.5; ctx.stroke();
    ctx.beginPath(); ctx.arc(cx, cy, r - 36, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(212,168,67,0.15)'; ctx.lineWidth = 1; ctx.stroke();

    [80, 64, 50, 36].forEach(rv => {
      ctx.beginPath(); ctx.arc(cx, cy, rv, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(212,168,67,0.07)'; ctx.lineWidth = 1; ctx.stroke();
    });

    const segAngle = (Math.PI * 2) / DIGITS;

    for (let d = 0; d < DIGITS; d++) {
      const ang = -Math.PI / 2 + d * segAngle;

      const segDeg   = 360 / DIGITS;
      const topDigit = ((-state.dialAngle / segDeg) % DIGITS + DIGITS) % DIGITS;
      const lit      = state.snappedNum !== null && d === Math.round(topDigit) % DIGITS;

      const tickOuter = r - 4;
      const tickInner = r - 20;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(ang) * tickInner, cy + Math.sin(ang) * tickInner);
      ctx.lineTo(cx + Math.cos(ang) * tickOuter, cy + Math.sin(ang) * tickOuter);
      ctx.strokeStyle = lit ? '#d4a843' : 'rgba(100,95,80,0.5)';
      ctx.lineWidth   = lit ? 3.5 : 1.5;
      if (lit) { ctx.shadowColor = '#d4a843'; ctx.shadowBlur = 12; }
      ctx.stroke();
      ctx.restore();

      for (let sub = 1; sub <= 4; sub++) {
        const sa = ang + (sub * segAngle / 5);
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(sa) * (r - 4),  cy + Math.sin(sa) * (r - 4));
        ctx.lineTo(cx + Math.cos(sa) * (r - 12), cy + Math.sin(sa) * (r - 12));
        ctx.strokeStyle = 'rgba(80,75,65,0.45)'; ctx.lineWidth = 1; ctx.stroke();
      }

      const numR = r - 28;
      const nx   = cx + Math.cos(ang) * numR;
      const ny   = cy + Math.sin(ang) * numR;

      ctx.save();
      ctx.translate(nx, ny);
      ctx.font         = lit ? 'bold 26px "Bebas Neue",sans-serif' : '20px "Bebas Neue",sans-serif';
      ctx.fillStyle    = lit ? '#f5d878' : 'rgba(90,86,72,0.75)';
      ctx.textAlign    = 'center';
      ctx.textBaseline = 'middle';
      if (lit) { ctx.shadowColor = '#d4a843'; ctx.shadowBlur = 24; }
      ctx.fillText(String(d), 0, 0);
      ctx.restore();
    }

    dialBody.style.transform = `rotate(${state.dialAngle}deg)`;
  }

  function updateSnapReadout() {
    const el = $('snap-val');
    if (state.snappedNum !== null) {
      el.textContent = String(state.snappedNum);
      el.classList.add('lit');
    } else {
      el.textContent = '—';
      el.classList.remove('lit');
    }
  }

  /* ══════════════════════════
     DRAG
  ══════════════════════════ */
  function pointerAngle(e) {
    const rect = dialBody.getBoundingClientRect();
    const cx = rect.left + rect.width/2;
    const cy = rect.top  + rect.height/2;
    const ex = e.touches ? e.touches[0].clientX : e.clientX;
    const ey = e.touches ? e.touches[0].clientY : e.clientY;
    return Math.atan2(ey-cy, ex-cx) * (180/Math.PI);
  }

  function calcNearest() {
    const segDeg = 360 / DIGITS;
    const raw    = ((-state.dialAngle / segDeg) % DIGITS + DIGITS) % DIGITS;
    return Math.round(raw) % DIGITS;
  }

  function checkDialTick() {
    const segDeg = 360 / DIGITS;
    const currentSeg = Math.floor(Math.abs(state.dialAngle) / segDeg);
    const lastSeg    = Math.floor(Math.abs(state.lastTickAngle) / segDeg);
    if (currentSeg !== lastSeg) {
      playDialTick();
      state.lastTickAngle = state.dialAngle;
    }
  }

  function onDown(e) {
    if (state.waiting) return;
    getAudioCtx();
    state.dragging   = true;
    state.lastAngle  = pointerAngle(e);
    state.snappedNum = null;
    updateSnapReadout();
    drawDial();
    e.preventDefault();
  }
  function onMove(e) {
    if (!state.dragging) return;
    const ang   = pointerAngle(e);
    let   delta = ang - state.lastAngle;
    if (delta >  180) delta -= 360;
    if (delta < -180) delta += 360;
    state.dialAngle += delta;
    state.lastAngle  = ang;
    state.nearestNum = calcNearest();
    state.snappedNum = null;
    checkDialTick();
    drawDial();
    e.preventDefault();
  }
  function onUp() {
    if (!state.dragging) return;
    state.dragging = false;
    state.nearestNum = calcNearest();
    state.dialAngle  = -(state.nearestNum * (360/DIGITS));
    state.snappedNum = state.nearestNum;
    drawDial();
    updateSnapReadout();
    playDialSnap();
    dialBody.classList.add('dial-snap-fx');
    setTimeout(()=>dialBody.classList.remove('dial-snap-fx'),220);
  }

  dialBody.addEventListener('mousedown',  onDown, {passive:false});
  window.addEventListener  ('mousemove',  onMove, {passive:false});
  window.addEventListener  ('mouseup',    onUp);
  dialBody.addEventListener('touchstart', onDown, {passive:false});
  window.addEventListener  ('touchmove',  onMove, {passive:false});
  window.addEventListener  ('touchend',   onUp);

  /* ══════════════════════════
     LOCK IN
  ══════════════════════════ */
  function confirmDigit() {
    if (state.waiting) return;

    if (state.snappedNum === null) {
      showResult('wrong', '▼  Spin the dial first — let it snap to a number, then LOCK IN');
      return;
    }

    const entered  = state.snappedNum;
    const expected = state.codeMap[state.slotIdx];

    const slot = $(`slot-${state.slotIdx}`);
    slot.textContent = entered;
    slot.classList.remove('active-slot');

    if (entered === expected) {
      playLockIn(true);
      slot.classList.add('filled','flash-correct');
      setTimeout(()=>{ slot.classList.remove('flash-correct'); slot.classList.add('filled'); }, 500);

      state.slotIdx++;
      markDoneBadges(state.slotIdx);

      if (state.slotIdx >= state.vault.steps.length) {
        vaultCracked();
      } else {
        $(`slot-${state.slotIdx}`).classList.add('active-slot');
        showResult('correct', `✔  Code ${expected} accepted — now find & dial code for Step ${state.slotIdx+1}`);
        state.snappedNum = null;
        updateSnapReadout();
        drawDial();
      }

    } else {
      playLockIn(false);
      slot.classList.add('flash-wrong');
      state.attempts++;
      state.streak = 0;

      const pip = $(`pip-${state.attempts-1}`);
      if (pip) pip.classList.add('used');

      $('vault-door').classList.add('shake');
      setTimeout(()=>$('vault-door').classList.remove('shake'), 440);

      if (state.attempts >= state.maxAttempts) {
        const correctSeq = state.codeMap.join(' → ');
        showResult('wrong', `✘  Locked out. Correct sequence: ${correctSeq}`);
        $('ak-codes').textContent = state.codeMap.join(' → ');
        $('answer-key-row').style.display = 'flex';
        state.waiting = true;
        $('btn-confirm').disabled = true;
        setTimeout(()=>showOverlay(false), 1100);
      } else {
        const left = state.maxAttempts - state.attempts;
        showResult('wrong', `✘  Wrong code — expected ${expected}. ${left} attempt${left>1?'s':''} left. Resetting…`);
        setTimeout(()=>resetSlots(), 900);
      }
    }
  }

  function vaultCracked() {
    playVaultCrack();
    const pts = calcPoints();
    state.score        += pts;
    state.streak       += 1;
    state.totalCracked += 1;
    state.progress[state.vault.id].cracked = true;
    state.progress[state.vault.id].stars   =
      Math.max(state.progress[state.vault.id].stars, attemptsToStars());

    $('vault-score-live').textContent = state.score + ' pts';
    $('topic-lock-icon').textContent  = '🔓';
    showResult('correct', '✔  Correct combination — Vault is Opening!');

    state.vault.steps.forEach((_,i) => {
      const b = $(`code-badge-${i}`);
      if (b) { b.classList.remove('active-target'); b.classList.add('done'); }
    });

    state.waiting = true;
    $('btn-confirm').disabled = true;
    setTimeout(()=>$('vault-door').classList.add('door-opening'), 350);
    setTimeout(()=>showOverlay(true, pts), 1300);
  }

  function resetSlots() {
    state.slotIdx    = 0;
    state.snappedNum = null;
    for (let i=0; i<state.vault.steps.length; i++) {
      const s = $(`slot-${i}`);
      if (s) { s.textContent='—'; s.className='ans-slot'+(i===0?' active-slot':''); }
    }
    markDoneBadges(0);
    $('result-msg').className  = 'result-msg';
    $('result-msg').textContent= '';
    updateSnapReadout();
    drawDial();
  }

  function clearAnswer() {
    if (state.waiting) return;
    resetSlots();
  }

  /* ══════════════════════════
     HINT
  ══════════════════════════ */
  function toggleHint() {
    state.hintVisible = !state.hintVisible;
    const panel = $('hint-panel');
    const btn   = $('btn-hint');
    if (state.hintVisible) {
      const v       = state.vault;
      const stepIdx = state.slotIdx;
      const step    = v.steps[stepIdx];
      $('hint-body').innerHTML = `
        Next to dial: <strong>${step.bold}${step.rest?' '+step.rest:''}</strong><br>
        Find this description in the table — its code number is what you spin to.<br><br>
        <em style="color:var(--text-dim)">${v.hint}</em>
      `;
      panel.style.display='block';
      btn.classList.add('active');
    } else {
      panel.style.display='none';
      btn.classList.remove('active');
    }
  }

  /* ══════════════════════════
     OVERLAY
  ══════════════════════════ */
  function showOverlay(success, pts) {
    const v      = state.vault;
    const isLast = state.vaultIdx >= VAULTS.length-1;

    $('ov-icon').textContent  = success ? '🔓' : '🔒';
    $('ov-title').textContent = success ? 'VAULT CRACKED' : 'VAULT SEALED';
    $('ov-pts').textContent   = success ? `+${pts} pts` : '+0 pts';
    $('ov-sub').textContent   = success
      ? `"${v.name}" unlocked with ${state.attempts} mistake${state.attempts===1?'':'s'}.`
      : 'Study the correct order and try again.';

    const orderEl = $('ov-correct');
    orderEl.innerHTML = v.steps.map((s,i)=>`
      <div class="step-line">
        <div class="step-num">Step ${i+1} → Code ${state.codeMap[i]}</div>
        <div class="step-txt">${s.bold}${s.rest?' '+s.rest:''}</div>
      </div>
    `).join('');

    $('ov-next-btn').textContent = isLast ? '🏁 FINISH' : 'NEXT VAULT →';
    overlay.classList.add('show');
  }

  function nextVault() {
    overlay.classList.remove('show');
    if (state.vaultIdx >= VAULTS.length-1) { goBack(); return; }
    showDiscussion(state.vaultIdx+1);
  }

  function goBack() {
    overlay.classList.remove('show');
    showScreen(screenMenu);
    buildMenu();
  }

  /* ══════════════════════════
     HELPERS
  ══════════════════════════ */
  function showResult(type, msg) {
    const el = $('result-msg');
    el.className   = `result-msg ${type}`;
    el.textContent = msg;
  }

  function calcPoints() {
    const base    = 100;
    const perfect = state.attempts===0 ? 60 : 0;
    const bonus   = Math.max(0, state.maxAttempts-state.attempts-1)*30;
    const streak  = Math.min(state.streak,8)*15;
    return base+perfect+bonus+streak;
  }

  function attemptsToStars() {
    if (state.attempts===0) return 3;
    if (state.attempts===1) return 2;
    return 1;
  }

  function showScreen(target) {
    [screenMenu, screenDisc, screenVault].forEach(s=>s.classList.remove('active'));
    target.classList.add('active');
  }

  /* ══════════════════════════
     PARTICLES
  ══════════════════════════ */
  function spawnParticles() {
    const c = $('particles');
    c.innerHTML='';
    for (let i=0;i<30;i++){
      const p=document.createElement('div');
      p.className='particle';
      const sz=Math.random()*2.5+0.8;
      p.style.cssText=`width:${sz}px;height:${sz}px;left:${Math.random()*100}%;animation-duration:${9+Math.random()*12}s;animation-delay:${Math.random()*10}s;`;
      c.appendChild(p);
    }
  }

  /* ══════════════════════════
     BOOT
  ══════════════════════════ */
  buildMenu();
  spawnParticles();
  drawDial();

  return {
    confirmDigit,
    clearAnswer,
    nextVault,
    goBack,
    toggleHint,
    toggleMusic,
    startVaultFromDisc,
  };

})();