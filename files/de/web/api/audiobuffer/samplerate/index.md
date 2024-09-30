---
title: "AudioBuffer: sampleRate-Eigenschaft"
short-title: sampleRate
slug: Web/API/AudioBuffer/sampleRate
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{ APIRef("Web Audio API") }}

Die **`sampleRate`**-Eigenschaft der [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)-Schnittstelle gibt eine Gleitkommazahl zurück, die die Samplingrate, in Abtastungen pro Sekunde, der im Puffer gespeicherten PCM-Daten darstellt.

## Wert

Ein Gleitkommawert, der die aktuelle Samplingrate der Pufferdaten in Abtastungen pro Sekunde angibt.

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

  console.log(myArrayBuffer.sampleRate);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
