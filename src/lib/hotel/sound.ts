type Cue = "tap" | "lang" | "open" | "ok" | "soft";

let ctx: AudioContext | null = null;
let master: GainNode | null = null;
let ambient: { stop: () => void } | null = null;
let enabled = false;

function context() {
  if (!ctx) {
    const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    ctx = new Ctx();
    master = ctx.createGain();
    master.gain.value = 0.22;
    master.connect(ctx.destination);
  }
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

function tone(freq: number, when: number, dur: number, gain: number, type: OscillatorType = "sine") {
  const audio = context();
  if (!master) return;
  const osc = audio.createOscillator();
  const amp = audio.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  amp.gain.setValueAtTime(0.0001, when);
  amp.gain.exponentialRampToValueAtTime(gain, when + 0.02);
  amp.gain.exponentialRampToValueAtTime(0.0001, when + dur);
  osc.connect(amp);
  amp.connect(master);
  osc.start(when);
  osc.stop(when + dur + 0.02);
}

function noise(when: number, dur: number, gain: number) {
  const audio = context();
  if (!master) return;
  const length = Math.floor(audio.sampleRate * dur);
  const buffer = audio.createBuffer(1, length, audio.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / length);
  const src = audio.createBufferSource();
  src.buffer = buffer;
  const filter = audio.createBiquadFilter();
  filter.type = "highpass";
  filter.frequency.value = 1200;
  const amp = audio.createGain();
  amp.gain.value = gain;
  src.connect(filter);
  filter.connect(amp);
  amp.connect(master);
  src.start(when);
}

export function setSoundEnabled(on: boolean) {
  enabled = on;
  if (!on) {
    ambient?.stop();
    ambient = null;
    return;
  }
  context();
}

export function isSoundEnabled() {
  return enabled;
}

export function play(cue: Cue) {
  if (!enabled) return;
  const audio = context();
  const t = audio.currentTime;
  if (cue === "tap") {
    noise(t, 0.05, 0.08);
    tone(740, t, 0.07, 0.05, "triangle");
  } else if (cue === "soft") {
    tone(220, t, 0.12, 0.04, "sine");
  } else if (cue === "lang") {
    tone(523.25, t, 0.16, 0.06);
    tone(659.25, t + 0.09, 0.2, 0.05);
  } else if (cue === "open") {
    tone(392, t, 0.22, 0.04);
    tone(587.33, t + 0.06, 0.28, 0.035);
  } else {
    tone(392, t, 0.28, 0.07);
    tone(493.88, t + 0.08, 0.32, 0.06);
    tone(587.33, t + 0.16, 0.46, 0.05);
  }
}

export function setAmbient(on: boolean) {
  if (!on || !enabled) {
    ambient?.stop();
    ambient = null;
    return;
  }
  if (ambient) return;
  const audio = context();
  if (!master) return;
  const bed = audio.createGain();
  bed.gain.value = 0.045;
  bed.connect(master);
  const oscA = audio.createOscillator();
  const oscB = audio.createOscillator();
  oscA.type = "sine";
  oscB.type = "sine";
  oscA.frequency.value = 110;
  oscB.frequency.value = 164.81;
  const filter = audio.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 420;
  oscA.connect(filter);
  oscB.connect(filter);
  filter.connect(bed);
  oscA.start();
  oscB.start();

  const scale = [329.63, 392, 440, 493.88, 587.33];
  let timer = 0;
  const tick = () => {
    if (!ambient) return;
    const now = audio.currentTime;
    tone(scale[Math.floor(Math.random() * scale.length)] ?? 440, now, 1.4, 0.018);
    timer = window.setTimeout(tick, 1800 + Math.random() * 2600);
  };
  timer = window.setTimeout(tick, 600);
  ambient = {
    stop: () => {
      window.clearTimeout(timer);
      oscA.stop();
      oscB.stop();
      bed.disconnect();
    },
  };
}
