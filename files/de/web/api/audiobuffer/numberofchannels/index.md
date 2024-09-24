---
title: "AudioBuffer: numberOfChannels-Eigenschaft"
short-title: numberOfChannels
slug: Web/API/AudioBuffer/numberOfChannels
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}

Die `numberOfChannels`-Eigenschaft des {{ domxref("AudioBuffer") }}-Interfaces gibt eine Ganzzahl zurück, die die Anzahl der diskreten Audiokanäle darstellt, die durch die im Puffer gespeicherten PCM-Daten beschrieben werden.

## Wert

Eine Ganzzahl.

## Beispiele

```js
// Stereo
const channels = 2;

// Erstellen Sie einen leeren zweisekündigen Stereo-Puffer bei der
// Abtastrate des AudioContext
const frameCount = audioCtx.sampleRate * 2.0;
const myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);

button.onclick = () => {
  // Füllen Sie den Puffer mit weißem Rauschen;
  // einfach Zufallswerte zwischen -1,0 und 1,0
  for (let channel = 0; channel < channels; channel++) {
    // Das gibt uns den tatsächlichen ArrayBuffer, der die Daten enthält
    const nowBuffering = myArrayBuffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      // Math.random() ist in [0; 1,0]
      // Audio muss in [-1,0; 1,0] sein
      nowBuffering[i] = Math.random() * 2 - 1;
    }
  }

  console.log(myArrayBuffer.numberOfChannels);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
