---
title: "AudioBufferSourceNode: Buffer-Eigenschaft"
short-title: buffer
slug: Web/API/AudioBufferSourceNode/buffer
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{ APIRef("Web Audio API") }}

Die **`buffer`**-Eigenschaft der [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)-Schnittstelle ermöglicht es, Audio unter Verwendung eines [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) als Quelle der Klangdaten wiederzugeben.

Wenn die `buffer`-Eigenschaft auf den Wert `null` gesetzt ist, erzeugt der Knoten einen einzelnen Kanal, der Stille enthält (d.h. jeder Sample-Wert ist 0).

## Wert

Ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), das die Daten enthält, die den Klang repräsentieren, den der Knoten abspielen wird.

## Beispiele

> [!NOTE]
> Für ein vollständiges lauffähiges Beispiel, sehen Sie sich [dieses live laufende Beispiel](https://mdn.github.io/webaudio-examples/audio-buffer/) an oder [betrachten Sie den Quellcode](https://github.com/mdn/webaudio-examples/blob/main/audio-buffer/index.html).

```js
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

  // Get an AudioBufferSourceNode.
  // This is the AudioNode to use when we want to play an AudioBuffer
  const source = audioCtx.createBufferSource();
  // set the buffer in the AudioBufferSourceNode
  source.buffer = myArrayBuffer;
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
