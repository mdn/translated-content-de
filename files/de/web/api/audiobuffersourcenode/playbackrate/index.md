---
title: "AudioBufferSourceNode: playbackRate-Eigenschaft"
short-title: playbackRate
slug: Web/API/AudioBufferSourceNode/playbackRate
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die **`playbackRate`**-Eigenschaft des [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)-Interfaces ist ein [k-rate](/de/docs/Web/API/AudioParam#k-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das die Geschwindigkeit definiert, mit der das Audio-Asset abgespielt wird.

Ein Wert von 1.0 zeigt an, dass es mit der gleichen Geschwindigkeit wie seine Abtastrate abgespielt werden soll, Werte unter 1.0 führen dazu, dass der Sound langsamer abgespielt wird, während Werte größer als 1.0 dazu führen, dass das Audio schneller als normal abgespielt wird. Der Standardwert ist `1.0`. Wenn ein anderer Wert eingestellt wird, resampelt der `AudioBufferSourceNode` das Audio, bevor es an die Ausgabe gesendet wird.

## Wert

Ein [`AudioParam`](/de/docs/Web/API/AudioParam), dessen [`value`](/de/docs/Web/API/AudioParam/value) ein Gleitkommawert ist, der die Abspielgeschwindigkeit des Audio als Dezimalproportion der ursprünglichen Abtastrate angibt.

Betrachten Sie einen Soundpuffer, der Audio enthält, welches mit 44,1 kHz (44.100 Samples pro Sekunde) abgetastet wird. Sehen wir uns an, was einige Werte von `playbackRate` bewirken:

- Eine `playbackRate` von 1.0 spielt das Audio mit voller Geschwindigkeit oder 44.100 Hz ab.
- Eine `playbackRate` von 0.5 spielt das Audio mit halber Geschwindigkeit oder 22.050 Hz ab.
- Eine `playbackRate` von 2.0 verdoppelt die Abspielgeschwindigkeit des Audio auf 88.200 Hz.

## Beispiele

### Einstellen von `playbackRate`

In diesem Beispiel laden wir, wenn der Benutzer "Play" drückt, einen Audiotrack, dekodieren ihn, und legen ihn in ein [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode).

Das Beispiel setzt dann die `loop`-Eigenschaft auf `true`, sodass der Track in einer Schleife abgespielt wird, und spielt den Track ab.

Der Benutzer kann die `playbackRate`-Eigenschaft mit einem [Bereichssteuerungselement](/de/docs/Web/HTML/Element/input/range) einstellen.

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
