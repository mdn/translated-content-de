---
title: "BaseAudioContext: Methode createBufferSource()"
short-title: createBufferSource()
slug: Web/API/BaseAudioContext/createBufferSource
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ APIRef("Web Audio API") }}

Die Methode `createBufferSource()` der [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)-Schnittstelle wird verwendet, um ein neues [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) zu erstellen, das zur Wiedergabe von Audiodaten eingesetzt werden kann, die in einem [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)-Objekt enthalten sind. [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)s werden mithilfe von [`BaseAudioContext.createBuffer`](/de/docs/Web/API/BaseAudioContext/createBuffer) erstellt oder von [`BaseAudioContext.decodeAudioData`](/de/docs/Web/API/BaseAudioContext/decodeAudioData) zurückgegeben, wenn ein Audiotrack erfolgreich decodiert wird.

> [!NOTE]
> Der Konstruktor [`AudioBufferSourceNode()`](/de/docs/Web/API/AudioBufferSourceNode/AudioBufferSourceNode) ist die empfohlene Methode zur Erstellung eines [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode); siehe [Erstellen eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
createBufferSource()
```

### Parameter

Keine.

### Rückgabewert

Ein [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode).

## Beispiele

In diesem Beispiel erstellen wir einen zwei Sekunden langen Puffer, füllen ihn mit weißem Rauschen und spielen ihn dann über ein [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) ab. Die Kommentare sollten klar erklären, was geschieht.

> [!NOTE]
> Sie können den [Code auch live ausführen](https://mdn.github.io/webaudio-examples/audio-buffer/) oder [den Quellcode ansehen](https://github.com/mdn/webaudio-examples/blob/main/audio-buffer/index.html).

```js
const audioCtx = new AudioContext();
const button = document.querySelector("button");
const pre = document.querySelector("pre");
const myScript = document.querySelector("script");

pre.textContent = myScript.textContent;

// Stereo
const channels = 2;
// Create an empty two second stereo buffer at the
// sample rate of the AudioContext
const frameCount = audioCtx.sampleRate * 2.0;

const myArrayBuffer = audioCtx.createBuffer(
  channels,
  frameCount,
  audioCtx.sampleRate,
);

button.onclick = () => {
  // Fill the buffer with white noise;
  //just random values between -1.0 and 1.0
  for (let channel = 0; channel < channels; channel++) {
    // This gives us the actual ArrayBuffer that contains the data
    const nowBuffering = myArrayBuffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      // Math.random() is in [0; 1.0]
      // audio needs to be in [-1.0; 1.0]
      nowBuffering[i] = Math.random() * 2 - 1;
    }
  }

  // Get an AudioBufferSourceNode.
  // This is the AudioNode to use when we want to play an AudioBuffer
  const source = audioCtx.createBufferSource();
  // set the buffer in the AudioBufferSourceNode
  source.buffer = myArrayBuffer;
  // connect the AudioBufferSourceNode to the
  // destination so we can hear the sound
  source.connect(audioCtx.destination);
  // start the source playing
  source.start();
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
