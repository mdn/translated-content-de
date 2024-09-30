---
title: "AudioBufferSourceNode: loopEnd-Eigenschaft"
short-title: loopEnd
slug: Web/API/AudioBufferSourceNode/loopEnd
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die `loopEnd`-Eigenschaft des [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)-Interfaces ist eine Gleitkommazahl, die in Sekunden angibt, an welchem Offset die Wiedergabe des [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) zurück zur Zeit, die durch die [`loopStart`](/de/docs/Web/API/AudioBufferSourceNode/loopStart)-Eigenschaft angegeben wird, wiederholen soll. Dies wird nur verwendet, wenn die [`loop`](/de/docs/Web/API/AudioBufferSourceNode/loop)-Eigenschaft `true` ist.

## Wert

Eine Gleitkommazahl, die das Offset in Sekunden im Audiopuffer angibt, bei dem jede Schleife wieder an den Anfang der Schleife zurückkehrt (das heißt, die aktuelle Abspielzeit wird auf [`AudioBufferSourceNode.loopStart`](/de/docs/Web/API/AudioBufferSourceNode/loopStart) zurückgesetzt). Diese Eigenschaft wird nur verwendet, wenn die [`loop`](/de/docs/Web/API/AudioBufferSourceNode/loop)-Eigenschaft `true` ist.

Der Standardwert ist 0.

## Beispiele

### `loopEnd` setzen

In diesem Beispiel laden wir beim Drücken der "Play"-Taste einen Audiotrack, dekodieren ihn und legen ihn in einem [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) ab.

Das Beispiel setzt dann die `loop`-Eigenschaft auf `true`, so dass der Track in einer Schleife wiedergegeben wird, und spielt den Track ab.

Der Benutzer kann die Eigenschaften `loopStart` und `loopEnd` mit [Bereichsreglern](/de/docs/Web/HTML/Element/input/range) einstellen.

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

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
