---
title: "AudioBufferSourceNode: buffer-Eigenschaft"
short-title: buffer
slug: Web/API/AudioBufferSourceNode/buffer
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die **`buffer`**-Eigenschaft der {{domxref("AudioBufferSourceNode")}}-Schnittstelle ermöglicht das Abspielen von Audio, indem ein {{domxref("AudioBuffer")}} als Quelle für die Schallwellen-Daten genutzt wird.

Wenn die `buffer`-Eigenschaft auf den Wert `null` gesetzt wird, erzeugt der Knoten einen einzelnen Kanal mit Stille (d.h. jeder Samplewert ist 0).

## Wert

Ein {{domxref("AudioBuffer")}}, der die Daten enthält, die den Klang repräsentieren, den der Knoten abspielen wird.

## Beispiele

> [!NOTE]
> Für ein vollständiges funktionierendes Beispiel, siehe [dieser Code live ausgeführt](https://mdn.github.io/webaudio-examples/audio-buffer/), oder [betrachten Sie den Quellcode](https://github.com/mdn/webaudio-examples/blob/main/audio-buffer/index.html).

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
