---
title: "AudioBuffer: length-Eigenschaft"
short-title: Länge
slug: Web/API/AudioBuffer/length
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}

Die **`length`**-Eigenschaft der {{ domxref("AudioBuffer") }}
Schnittstelle gibt eine ganze Zahl zurück, die die Länge der im Puffer gespeicherten PCM-Daten in Sample-Frames darstellt.

## Wert

Eine ganze Zahl.

## Beispiele

```js
// Stereo
const channels = 2;

// Erstellen Sie einen leeren zweisekündigen Stereo-Puffer mit der
// Abtastrate des AudioContext
const frameCount = audioCtx.sampleRate * 2.0;
const myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);

button.onclick = () => {
  // Füllen Sie den Puffer mit Weißrauschen;
  // nur Zufallswerte zwischen -1.0 und 1.0
  for (let channel = 0; channel < channels; channel++) {
    // Dies gibt uns das tatsächliche ArrayBuffer, das die Daten enthält
    const nowBuffering = myArrayBuffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      // Math.random() ist in [0; 1.0]
      // Audio muss in [-1.0; 1.0] sein
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

- [Web Audio API verwenden](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
