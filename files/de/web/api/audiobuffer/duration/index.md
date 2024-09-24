---
title: "AudioBuffer: Eigenschaft duration"
short-title: duration
slug: Web/API/AudioBuffer/duration
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{ APIRef("Web Audio API") }}

Die **`duration`** Eigenschaft des {{ domxref("AudioBuffer")}} Interfaces gibt einen Double-Wert zurück, der die Dauer in Sekunden der im Puffer gespeicherten PCM-Daten darstellt.

## Wert

Ein Double-Wert.

## Beispiele

```js
// Stereo
const channels = 2;

// Erstellen eines leeren zwei Sekunden Stereo-Puffers mit der
// Abtastrate des AudioContext
const frameCount = audioCtx.sampleRate * 2.0;
const myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);

button.onclick = () => {
  // Füllen Sie den Puffer mit weißem Rauschen;
  // einfach zufällige Werte zwischen -1,0 und 1,0
  for (let channel = 0; channel < channels; channel++) {
    // Dies gibt uns den tatsächlichen ArrayBuffer, der die Daten enthält
    const nowBuffering = myArrayBuffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      // Math.random() ist in [0; 1.0]
      // Audio muss in [-1.0; 1.0] sein
      nowBuffering[i] = Math.random() * 2 - 1;
    }
  }

  console.log(myArrayBuffer.duration);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
