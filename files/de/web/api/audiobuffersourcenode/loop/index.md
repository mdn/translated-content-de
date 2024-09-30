---
title: "AudioBufferSourceNode: loop-Eigenschaft"
short-title: loop
slug: Web/API/AudioBufferSourceNode/loop
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die `loop`-Eigenschaft der [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)-Schnittstelle ist ein Boolean, der angibt, ob das Audioelement erneut abgespielt werden soll, wenn das Ende des [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) erreicht ist.

Der Standardwert der `loop`-Eigenschaft ist `false`.

## Wert

Ein Boolean, der `true` ist, wenn das Looping aktiviert ist; andernfalls ist der Wert `false`.

Wenn Looping aktiviert ist, beginnt der Ton zur Zeit, die als Startpunkt angegeben ist, zu spielen, wenn [`start()`](/de/docs/Web/API/AudioBufferSourceNode/start) aufgerufen wird. Sobald die Zeit erreicht ist, die durch die [`loopEnd`](/de/docs/Web/API/AudioBufferSourceNode/loopEnd)-Eigenschaft angegeben wird, wird die Wiedergabe zur Zeit fortgesetzt, die durch [`loopStart`](/de/docs/Web/API/AudioBufferSourceNode/loopStart) angegeben ist.

## Beispiele

### `loop` einstellen

In diesem Beispiel laden wir, wenn der Benutzer "Play" drückt, einen Audiotrack, dekodieren ihn und legen ihn in eine [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode).

Das Beispiel setzt dann die `loop`-Eigenschaft auf `true`, sodass der Track wiederholt wird, und spielt den Track ab.

Der Benutzer kann die Eigenschaften `loopStart` und `loopEnd` mit [Bereichssteuerungen](/de/docs/Web/HTML/Element/input/range) einstellen.

> [!NOTE]
> Sie können [das vollständige Beispiel live ausführen](https://mdn.github.io/webaudio-examples/audio-buffer-source-node/loop/) (oder [den Quellcode ansehen](https://github.com/mdn/webaudio-examples/tree/main/audio-buffer-source-node/loop).)

```js
let audioCtx;
let buffer;
let source;

const play = document.getElementById("play");
const stop = document.getElementById("stop");

const loopstartControl = document.getElementById("loopstart-control");
const loopstartValue = document.getElementById("loopstart-value");

const loopendControl = document.getElementById("loopend-control");
const loopendValue = document.getElementById("loopend-value");

async function loadAudio() {
  try {
    // Load an audio file
    const response = await fetch("rnb-lofi-melody-loop.wav");
    // Decode it
    buffer = await audioCtx.decodeAudioData(await response.arrayBuffer());
    const max = Math.floor(buffer.duration);
    loopstartControl.setAttribute("max", max);
    loopendControl.setAttribute("max", max);
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
  source.loopStart = loopstartControl.value;
  source.loopEnd = loopendControl.value;
  source.start();
  play.disabled = true;
  stop.disabled = false;
  loopstartControl.disabled = false;
  loopendControl.disabled = false;
});

stop.addEventListener("click", () => {
  source.stop();
  play.disabled = false;
  stop.disabled = true;
  loopstartControl.disabled = true;
  loopendControl.disabled = true;
});

loopstartControl.addEventListener("input", () => {
  source.loopStart = loopstartControl.value;
  loopstartValue.textContent = loopstartControl.value;
});

loopendControl.addEventListener("input", () => {
  source.loopEnd = loopendControl.value;
  loopendValue.textContent = loopendControl.value;
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)
