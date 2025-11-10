---
title: "AudioBufferSourceNode: loop-Eigenschaft"
short-title: loop
slug: Web/API/AudioBufferSourceNode/loop
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("Web Audio API") }}

Die `loop`-Eigenschaft des [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)-Interfaces ist ein Boolean, der angibt, ob das Audio-Asset erneut abgespielt werden muss, wenn das Ende des [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) erreicht ist.

Der Standardwert der `loop`-Eigenschaft ist `false`.

## Wert

Ein Boolean, der `true` ist, wenn das Looping aktiviert ist; andernfalls ist der Wert `false`.

Wenn das Looping aktiviert ist, beginnt der Ton zu dem Zeitpunkt zu spielen, der als Startpunkt angegeben wurde, als [`start()`](/de/docs/Web/API/AudioBufferSourceNode/start) aufgerufen wurde. Wenn die durch die [`loopEnd`](/de/docs/Web/API/AudioBufferSourceNode/loopEnd)-Eigenschaft angegebene Zeit erreicht ist, setzt die Wiedergabe am durch [`loopStart`](/de/docs/Web/API/AudioBufferSourceNode/loopStart) angegebenen Zeitpunkt fort.

## Beispiele

### `loop` setzen

In diesem Beispiel, wenn der Nutzer "Play" drückt, laden wir einen Audio-Track, dekodieren ihn und legen ihn in einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode).

Das Beispiel setzt dann die `loop`-Eigenschaft auf `true`, sodass der Track in Schleife läuft und spielt den Track ab.

Der Nutzer kann die `loopStart`- und `loopEnd`-Eigenschaften mit [Range-Control-Elementen](/de/docs/Web/HTML/Reference/Elements/input/range) einstellen.

> [!NOTE]
> Sie können das [vollständige Beispiel live ausführen](https://mdn.github.io/webaudio-examples/audio-buffer-source-node/loop/) (oder [den Quellcode anzeigen](https://github.com/mdn/webaudio-examples/tree/main/audio-buffer-source-node/loop).)

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
