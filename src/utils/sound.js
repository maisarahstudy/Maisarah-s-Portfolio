let audioCtx = null;
let isMuted = false;
let ensembleInterval = null;
let bgmAudioElement = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export const toggleMute = () => {
  isMuted = !isMuted;
  if (isMuted) {
    stopAmbientSong();
  } else {
    startAmbientSong();
  }
  return isMuted;
};

export const getMuted = () => isMuted;

function playGentleTone(freq, startTime, duration = 0.5, peakVol = 0.02) {
  const ctx = getAudioContext();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(freq, startTime);

  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.linearRampToValueAtTime(peakVol, startTime + 0.04);
  gain.gain.exponentialRampToValueAtTime(0.00001, startTime + duration);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(startTime);
  osc.stop(startTime + duration);
}

export const playHoverSound = () => {
  if (isMuted) return;
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    playGentleTone(523.25, now, 0.25, 0.015);
  } catch {}
};

export const playClickSound = () => {
  if (isMuted) return;
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    playGentleTone(392.00, now, 0.4, 0.025);
    playGentleTone(587.33, now + 0.03, 0.5, 0.02);
  } catch {}
};

export const playStartSpellSound = () => playClickSound();

export const playLoadingCompleteSound = () => {
  if (isMuted) return;
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    const notes = [261.63, 329.63, 392.00, 523.25];
    notes.forEach((freq, idx) => {
      playGentleTone(freq, now + idx * 0.06, 1.2, 0.025);
    });
  } catch {}
};

export const playBookOpenSound = () => {
  if (isMuted) return;
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    const thudOsc = ctx.createOscillator();
    const thudGain = ctx.createGain();
    thudOsc.type = 'sine';
    thudOsc.frequency.setValueAtTime(95, now);
    thudOsc.frequency.exponentialRampToValueAtTime(45, now + 0.14);

    thudGain.gain.setValueAtTime(0.08, now);
    thudGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);
    thudOsc.connect(thudGain);
    thudGain.connect(ctx.destination);
    thudOsc.start(now);
    thudOsc.stop(now + 0.2);

    const bufferSize = ctx.sampleRate * 0.22;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(650, now);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.001, now);
    noiseGain.gain.linearRampToValueAtTime(0.03, now + 0.04);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(ctx.destination);
    noise.start(now);
  } catch {}
};

export const playBookCloseSound = () => {
  if (isMuted) return;
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    const thudOsc = ctx.createOscillator();
    const thudGain = ctx.createGain();
    thudOsc.type = 'triangle';
    thudOsc.frequency.setValueAtTime(110, now);
    thudOsc.frequency.exponentialRampToValueAtTime(38, now + 0.16);

    thudGain.gain.setValueAtTime(0.12, now);
    thudGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);
    thudOsc.connect(thudGain);
    thudGain.connect(ctx.destination);
    thudOsc.start(now);
    thudOsc.stop(now + 0.25);

    const bufferSize = ctx.sampleRate * 0.14;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(500, now);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.04, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.14);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(ctx.destination);
    noise.start(now);
  } catch {}
};

export const playPageFlipSound = () => {
  if (isMuted) return;
  try {
    const ctx = getAudioContext();
    const bufferSize = ctx.sampleRate * 0.15;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(950, ctx.currentTime);
    filter.Q.setValueAtTime(1.4, ctx.currentTime);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.001, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.03, ctx.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.15);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start();
  } catch {}
};

export const startAmbientSong = () => {
  if (isMuted) return;

  if (!bgmAudioElement) {
    bgmAudioElement = new Audio('/bgm.mp3');
    bgmAudioElement.loop = true;
    bgmAudioElement.volume = 0.22;
  }

  bgmAudioElement.play().catch(() => {
    if (ensembleInterval) return;

    try {
      const ctx = getAudioContext();
      const chords = [
        { bass: 130.81, pad: [261.63, 329.63, 392.00] },
        { bass: 123.47, pad: [246.94, 329.63, 392.00] },
        { bass: 110.00, pad: [220.00, 261.63, 329.63] },
        { bass: 87.31,  pad: [220.00, 261.63, 349.23] },
      ];

      const melodySteps = [
        { note: 523.25, time: 0 },
        { note: 659.25, time: 0.6 },
        { note: 783.99, time: 1.2 },
        { note: 1046.50, time: 1.8 },
        { note: 987.77, time: 2.4 },
        { note: 783.99, time: 3.0 },
        { note: 659.25, time: 3.6 },
        { note: 587.33, time: 4.2 },
        { note: 523.25, time: 4.8 },
        { note: 659.25, time: 5.4 },
        { note: 880.00, time: 6.0 },
        { note: 783.99, time: 6.6 },
        { note: 698.46, time: 7.2 },
        { note: 659.25, time: 7.8 },
        { note: 587.33, time: 8.4 },
        { note: 523.25, time: 9.0 },
      ];

      const playEnsembleLoop = () => {
        if (isMuted) return;
        const now = ctx.currentTime;

        chords.forEach((chord, idx) => {
          const chordTime = now + idx * 2.4;
          const bassOsc = ctx.createOscillator();
          const bassGain = ctx.createGain();
          bassOsc.type = 'triangle';
          bassOsc.frequency.setValueAtTime(chord.bass, chordTime);

          bassGain.gain.setValueAtTime(0.0001, chordTime);
          bassGain.gain.linearRampToValueAtTime(0.016, chordTime + 0.15);
          bassGain.gain.exponentialRampToValueAtTime(0.00001, chordTime + 2.3);

          bassOsc.connect(bassGain);
          bassGain.connect(ctx.destination);
          bassOsc.start(chordTime);
          bassOsc.stop(chordTime + 2.4);

          chord.pad.forEach((freq) => {
            const padOsc = ctx.createOscillator();
            const padGain = ctx.createGain();
            padOsc.type = 'sine';
            padOsc.frequency.setValueAtTime(freq, chordTime);

            padGain.gain.setValueAtTime(0.0001, chordTime);
            padGain.gain.linearRampToValueAtTime(0.007, chordTime + 0.3);
            padGain.gain.exponentialRampToValueAtTime(0.00001, chordTime + 2.35);

            padOsc.connect(padGain);
            padGain.connect(ctx.destination);
            padOsc.start(chordTime);
            padOsc.stop(chordTime + 2.4);
          });
        });

        melodySteps.forEach(({ note, time }) => {
          const noteTime = now + time;
          const mbOsc = ctx.createOscillator();
          const mbGain = ctx.createGain();
          mbOsc.type = 'sine';
          mbOsc.frequency.setValueAtTime(note, noteTime);

          const harmOsc = ctx.createOscillator();
          const harmGain = ctx.createGain();
          harmOsc.type = 'sine';
          harmOsc.frequency.setValueAtTime(note * 2, noteTime);

          mbGain.gain.setValueAtTime(0.0001, noteTime);
          mbGain.gain.linearRampToValueAtTime(0.018, noteTime + 0.012);
          mbGain.gain.exponentialRampToValueAtTime(0.00001, noteTime + 0.85);

          harmGain.gain.setValueAtTime(0.0001, noteTime);
          harmGain.gain.linearRampToValueAtTime(0.006, noteTime + 0.012);
          harmGain.gain.exponentialRampToValueAtTime(0.00001, noteTime + 0.55);

          mbOsc.connect(mbGain);
          mbGain.connect(ctx.destination);
          harmOsc.connect(harmGain);
          harmGain.connect(ctx.destination);

          mbOsc.start(noteTime);
          mbOsc.stop(noteTime + 0.9);
          harmOsc.start(noteTime);
          harmOsc.stop(noteTime + 0.6);
        });
      };

      playEnsembleLoop();
      ensembleInterval = setInterval(playEnsembleLoop, 9600);
    } catch {}
  });
};

export const stopAmbientSong = () => {
  if (bgmAudioElement) {
    bgmAudioElement.pause();
  }
  if (ensembleInterval) {
    clearInterval(ensembleInterval);
    ensembleInterval = null;
  }
};