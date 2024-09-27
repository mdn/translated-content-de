---
title: "AudioBufferSourceNode: buffer-Eigenschaft"
short-title: buffer
slug: Web/API/AudioBufferSourceNode/buffer
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die **`buffer`**-Eigenschaft der [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)-Schnittstelle ermöglicht die Wiedergabe von Audio, indem ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) als Quelle der Audiodaten verwendet wird.

Wenn die `buffer`-Eigenschaft auf den Wert `null` gesetzt ist, erzeugt der Knoten einen Kanal, der Stille enthält (d. h., jede Probe ist 0).

## Wert

Ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), der die Daten enthält, die den Klang repräsentieren, den der Knoten abspielen wird.

## Beispiele

> [!NOTE]
> Für ein vollständiges funktionierendes Beispiel sehen Sie [dieses Code-Beispiel live](https://mdn.github.io/webaudio-examples/audio-buffer/) oder [sehen Sie sich den Quellcode an](https://github.com/mdn/webaudio-examples/blob/main/audio-buffer/index.html).

```js
const myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);

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
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
