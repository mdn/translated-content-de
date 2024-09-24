---
title: "AudioBufferSourceNode: Schleifen-Eigenschaft"
short-title: Schleife
slug: Web/API/AudioBufferSourceNode/loop
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die `loop`-Eigenschaft der {{ domxref("AudioBufferSourceNode") }}-Schnittstelle ist ein Boolean, das anzeigt, ob das Audio-Asset erneut abgespielt werden muss, wenn das Ende des {{domxref("AudioBuffer")}} erreicht ist.

Der Standardwert der `loop`-Eigenschaft ist `false`.

## Wert

Ein Boolean, der `true` ist, wenn Schleifen aktiviert ist; andernfalls ist der Wert `false`.

Wenn das Schleifen aktiviert ist, beginnt der Ton an der Zeit zu spielen, die als Startpunkt angegeben ist, wenn {{domxref("AudioBufferSourceNode.start", "start()")}} aufgerufen wird. Wenn die durch die {{domxref("AudioBufferSourceNode.loopEnd", "loopEnd")}}-Eigenschaft angegebene Zeit erreicht ist, wird die Wiedergabe zur Zeit fortgesetzt, die durch {{domxref("AudioBufferSourceNode.loopStart", "loopStart")}} angegeben ist.

## Beispiele

### `loop` setzen

In diesem Beispiel laden wir, wenn der Benutzer "Play" drückt, einen Audio-Track, dekodieren ihn und legen ihn in eine {{domxref("AudioBufferSourceNode")}}.

Das Beispiel setzt dann die `loop`-Eigenschaft auf `true`, sodass der Track in einer Schleife läuft, und spielt den Track ab.

Der Benutzer kann die `loopStart`- und `loopEnd`-Eigenschaften mithilfe von [Regelelementen](/de/docs/Web/HTML/Element/input/range) festlegen.

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
- {{domxref("AudioBufferSourceNode")}}
