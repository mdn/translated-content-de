---
title: AudioBuffer
slug: Web/API/AudioBuffer
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("Web Audio API")}}

Die **`AudioBuffer`**-Schnittstelle repräsentiert ein kurzes Audio-Asset, das sich im Arbeitsspeicher befindet und entweder aus einer Audiodatei mit der Methode [`AudioContext.decodeAudioData()`](/de/docs/Web/API/BaseAudioContext/decodeAudioData) oder aus Rohdaten mit [`AudioContext.createBuffer()`](/de/docs/Web/API/BaseAudioContext/createBuffer) erstellt wurde. Sobald das Audio in einem AudioBuffer ist, kann es abgespielt werden, indem es in einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) übergeben wird.

Objekte dieser Typen sind dafür ausgelegt, kleine Audioschnipsel zu halten, typischerweise weniger als 45 Sekunden. Für längere Sounds sind Objekte, die das [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode) implementieren, besser geeignet. Der Puffer enthält die Audiosignal-Wellenform, die als eine Reihe von Amplituden in folgendem Format kodiert ist: nicht-interleaved IEEE754 32-Bit linear PCM mit einem nominalen Bereich zwischen `-1` und `+1`, das heißt ein 32-Bit-Gleitkomma-Puffer, wobei jede Probe zwischen -1.0 und 1.0 liegt. Hat der `AudioBuffer` mehrere Kanäle, werden diese in separaten Puffern gespeichert.

## Konstruktor

- [`AudioBuffer()`](/de/docs/Web/API/AudioBuffer/AudioBuffer)
  - : Erstellt und gibt eine neue `AudioBuffer`-Objektinstanz zurück.

## Instanz-Eigenschaften

- [`AudioBuffer.sampleRate`](/de/docs/Web/API/AudioBuffer/sampleRate) {{ReadOnlyInline}}
  - : Gibt einen Float-Wert zurück, der die Sample-Rate, in Samples pro Sekunde, der im Puffer gespeicherten PCM-Daten darstellt.
- [`AudioBuffer.length`](/de/docs/Web/API/AudioBuffer/length) {{ReadOnlyInline}}
  - : Gibt einen Integer-Wert zurück, der die Länge, in Sample-Frames, der im Puffer gespeicherten PCM-Daten darstellt.
- [`AudioBuffer.duration`](/de/docs/Web/API/AudioBuffer/duration) {{ReadOnlyInline}}
  - : Gibt einen Double-Wert zurück, der die Dauer, in Sekunden, der im Puffer gespeicherten PCM-Daten darstellt.
- [`AudioBuffer.numberOfChannels`](/de/docs/Web/API/AudioBuffer/numberOfChannels) {{ReadOnlyInline}}
  - : Gibt einen Integer-Wert zurück, der die Anzahl der diskreten Audiokanäle beschreibt, die durch die im Puffer gespeicherten PCM-Daten repräsentiert werden.

## Instanz-Methoden

- [`AudioBuffer.getChannelData()`](/de/docs/Web/API/AudioBuffer/getChannelData)
  - : Gibt ein {{jsxref("Float32Array")}} zurück, das die PCM-Daten enthält, die dem durch den `channel`-Parameter definierten Kanal zugeordnet sind (wobei `0` den ersten Kanal darstellt).
- [`AudioBuffer.copyFromChannel()`](/de/docs/Web/API/AudioBuffer/copyFromChannel)
  - : Kopiert die Proben aus dem angegebenen Kanal des `AudioBuffer` in das `destination`-Array.
- [`AudioBuffer.copyToChannel()`](/de/docs/Web/API/AudioBuffer/copyToChannel)
  - : Kopiert die Proben in den angegebenen Kanal des `AudioBuffer` aus dem `source`-Array.

## Beispiel

Das folgende einfache Beispiel zeigt, wie ein `AudioBuffer` erstellt und mit zufälligem weißem Rauschen gefüllt wird. Sie finden den vollständigen Quellcode in unserem [webaudio-examples](https://github.com/mdn/webaudio-examples) Repository; eine [laufende Live-Version](https://mdn.github.io/webaudio-examples/audio-buffer/) ist ebenfalls verfügbar.

```js
const audioCtx = new AudioContext();

// Create an empty three-second stereo buffer at the sample rate of the AudioContext
const myArrayBuffer = audioCtx.createBuffer(
  2,
  audioCtx.sampleRate * 3,
  audioCtx.sampleRate,
);

// Fill the buffer with white noise;
// just random values between -1.0 and 1.0
for (let channel = 0; channel < myArrayBuffer.numberOfChannels; channel++) {
  // This gives us the actual array that contains the data
  const nowBuffering = myArrayBuffer.getChannelData(channel);
  for (let i = 0; i < myArrayBuffer.length; i++) {
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
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
