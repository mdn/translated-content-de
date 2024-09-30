---
title: "AudioBuffer: length-Eigenschaft"
short-title: length
slug: Web/API/AudioBuffer/length
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}

Die **`length`**-Eigenschaft des [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)
Interfaces gibt eine Ganzzahl zurück, die die Länge der PCM-Daten in Abtastrahmen darstellt, die im Puffer gespeichert sind.

## Wert

Eine Ganzzahl.

## Beispiele

```js
// Stereo
const channels = 2;

// Create an empty two second stereo buffer at the
// sample rate of the AudioContext
const frameCount = audioCtx.sampleRate * 2.0;
const myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);

button.onclick = () => {
  // Fill the buffer with white noise;
  // just random values between -1.0 and 1.0
  for (let channel = 0; channel < channels; channel++) {
    // This gives us the actual ArrayBuffer that contains the data
    const nowBuffering = myArrayBuffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      // Math.random() is in [0; 1.0]
      // audio needs to be in [-1.0; 1.0]
      nowBuffering[i] = Math.random() * 2 - 1;
    }
  }

  console.log(myArrayBuffer.length);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
