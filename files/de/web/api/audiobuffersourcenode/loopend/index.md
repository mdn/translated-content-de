---
title: "AudioBufferSourceNode: loopEnd-Eigenschaft"
short-title: loopEnd
slug: Web/API/AudioBufferSourceNode/loopEnd
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die `loopEnd`-Eigenschaft der [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) Schnittstelle gibt als Gleitkommazahl an, an welchem Offset beim Abspielen des [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) die Wiedergabe zur durch die [`loopStart`](/de/docs/Web/API/AudioBufferSourceNode/loopStart)-Eigenschaft angegebenen Zeit zurückspringen soll. Dies wird nur verwendet, wenn die [`loop`](/de/docs/Web/API/AudioBufferSourceNode/loop)-Eigenschaft `true` ist.

## Wert

Eine Gleitkommazahl, die das Offset in Sekunden im Audiopuffer angibt, an dem jede Schleife zum Anfang der Schleife zurückkehrt (das heißt, die aktuelle Spielzeit wird auf [`AudioBufferSourceNode.loopStart`](/de/docs/Web/API/AudioBufferSourceNode/loopStart) zurückgesetzt). Diese Eigenschaft wird nur verwendet, wenn die [`loop`](/de/docs/Web/API/AudioBufferSourceNode/loop)-Eigenschaft `true` ist.

Der Standardwert ist 0.

## Beispiele

### Festlegen von `loopEnd`

In diesem Beispiel wird, wenn der Benutzer "Play" drückt, ein Audiotrack geladen, dekodiert und in einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) eingefügt.

Das Beispiel setzt dann die `loop`-Eigenschaft auf `true`, sodass der Track in einer Schleife abgespielt wird.

Der Benutzer kann die `loopStart`- und `loopEnd`-Eigenschaften mit [Range-Reglern](/de/docs/Web/HTML/Element/input/range) einstellen.

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
