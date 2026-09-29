---
title: "AudioBufferSourceNode: Eigenschaft playbackRate"
short-title: playbackRate
slug: Web/API/AudioBufferSourceNode/playbackRate
l10n:
  sourceCommit: 118909727d715a42a27e3d368379bf959feca4af
---

{{ APIRef("Web Audio API") }}

Die schreibgeschützte Eigenschaft **`playbackRate`** der Schnittstelle [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) ist ein [k-rate](/de/docs/Web/API/AudioParam#k-rate)-[`AudioParam`](/de/docs/Web/API/AudioParam), der die Geschwindigkeit festlegt, mit der das Audiomaterial wiedergegeben wird.

Ein Wert von 1.0 bedeutet, dass das Audiomaterial mit der Geschwindigkeit seiner Abtastrate wiedergegeben wird. Werte unter 1.0 bewirken eine langsamere Wiedergabe, während Werte über 1.0 zu einer schnelleren Wiedergabe als normal führen. Der Standardwert ist `1.0`. Wenn ein anderer Wert festgelegt wird, führt der `AudioBufferSourceNode` vor der Ausgabe ein Resampling des Audiomaterials durch.

## Wert

Ein [`AudioParam`](/de/docs/Web/API/AudioParam), dessen [`value`](/de/docs/Web/API/AudioParam/value) eine Gleitkommazahl ist, die die Wiedergabegeschwindigkeit als Dezimalwert im Verhältnis zur ursprünglichen Abtastrate angibt.

Betrachten wir einen Audiopuffer mit Audiomaterial, das mit 44,1 kHz (44.100 Samples pro Sekunde) abgetastet wurde. Die folgenden Werte von `playbackRate` haben diese Auswirkungen:

- Ein `playbackRate`-Wert von 1.0 gibt das Audiomaterial mit voller Geschwindigkeit wieder, also mit 44.100 Hz.
- Ein `playbackRate`-Wert von 0.5 gibt das Audiomaterial mit halber Geschwindigkeit wieder, also mit 22.050 Hz.
- Ein `playbackRate`-Wert von 2.0 verdoppelt die Wiedergabegeschwindigkeit des Audiomaterials auf 88.200 Hz.

## Beispiele

### `playbackRate` festlegen

Wenn der Benutzer in diesem Beispiel auf „Play“ klickt, laden wir eine Audiospur, dekodieren sie und übergeben sie an einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode).

Anschließend setzt das Beispiel die Eigenschaft `loop` auf `true`, sodass die Audiospur in einer Schleife wiedergegeben wird, und startet die Wiedergabe.

Der Benutzer kann die Eigenschaft `playbackRate` über einen [Schieberegler](/de/docs/Web/HTML/Reference/Elements/input/range) festlegen.

> [!NOTE]
> Sie können [das vollständige Beispiel live ausführen](https://mdn.github.io/webaudio-examples/audio-buffer-source-node/playbackrate/) (oder [den Quellcode ansehen](https://github.com/mdn/webaudio-examples/tree/main/audio-buffer-source-node/playbackrate).)

```js
let audioCtx;
let buffer;
let source;

const play = document.getElementById("play");
const stop = document.getElementById("stop");

const playbackControl = document.getElementById("playback-rate-control");
const playbackValue = document.getElementById("playback-rate-value");

async function loadAudio() {
  try {
    // Load an audio file
    const response = await fetch("rnb-lofi-melody-loop.wav");
    // Decode it
    buffer = await audioCtx.decodeAudioData(await response.arrayBuffer());
  } catch (err) {
    console.error(`Unable to fetch the audio file. Error: ${err.message}`);
  }
}

play.addEventListener("click", async () => {
  if (!audioCtx) {
    audioCtx = new AudioContext();
    await loadAudio();
  }
  source = audioCtx.createBufferSource();
  source.buffer = buffer;
  source.connect(audioCtx.destination);
  source.loop = true;
  source.playbackRate.value = playbackControl.value;
  source.start();
  play.disabled = true;
  stop.disabled = false;
  playbackControl.disabled = false;
});

stop.addEventListener("click", () => {
  source.stop();
  play.disabled = false;
  stop.disabled = true;
  playbackControl.disabled = true;
});

playbackControl.oninput = () => {
  source.playbackRate.value = playbackControl.value;
  playbackValue.textContent = playbackControl.value;
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
