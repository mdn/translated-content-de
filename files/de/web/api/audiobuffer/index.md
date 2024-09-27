---
title: AudioBuffer
slug: Web/API/AudioBuffer
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("Web Audio API")}}

Die **`AudioBuffer`**-Schnittstelle stellt ein kurzes Audioelement dar, das sich im Speicher befindet, erstellt aus einer Audiodatei mithilfe der Methode [`AudioContext.decodeAudioData()`](/de/docs/Web/API/BaseAudioContext/decodeAudioData) oder aus Rohdaten mittels [`AudioContext.createBuffer()`](/de/docs/Web/API/BaseAudioContext/createBuffer). Sobald sie in einen AudioBuffer eingebracht wird, kann die Audiodatei abgespielt werden, indem sie an einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) übergeben wird.

Objekte dieser Typen sind dafür ausgelegt, kleine Audiofragmente zu halten, typischerweise weniger als 45 Sekunden. Für längere Klänge sind Objekte, die die [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode) implementieren, besser geeignet. Der Buffer enthält die Audiosignalwellenform, die als eine Reihe von Amplituden im folgenden Format kodiert ist: nicht verwebtes IEEE754 32-Bit lineares PCM mit einem nominalen Bereich zwischen `-1` und `+1`, das heißt, ein 32-Bit-Gleitkomma-Buffer, wobei jede Probe zwischen -1.0 und 1.0 liegt. Wenn der `AudioBuffer` mehrere Kanäle hat, werden diese in separaten Buffern gespeichert.

## Konstruktor

- [`AudioBuffer()`](/de/docs/Web/API/AudioBuffer/AudioBuffer)
  - : Erstellt und gibt eine neue Instanz eines `AudioBuffer`-Objekts zurück.

## Instanz-Eigenschaften

- [`AudioBuffer.sampleRate`](/de/docs/Web/API/AudioBuffer/sampleRate) {{ReadOnlyInline}}
  - : Gibt eine Fließkommazahl zurück, die die Abtastrate in Samples pro Sekunde der im Buffer gespeicherten PCM-Daten darstellt.
- [`AudioBuffer.length`](/de/docs/Web/API/AudioBuffer/length) {{ReadOnlyInline}}
  - : Gibt einen Integer zurück, der die Länge in Sample-Frames der im Buffer gespeicherten PCM-Daten darstellt.
- [`AudioBuffer.duration`](/de/docs/Web/API/AudioBuffer/duration) {{ReadOnlyInline}}
  - : Gibt eine Fließkommazahl zurück, die die Dauer in Sekunden der im Buffer gespeicherten PCM-Daten darstellt.
- [`AudioBuffer.numberOfChannels`](/de/docs/Web/API/AudioBuffer/numberOfChannels) {{ReadOnlyInline}}
  - : Gibt einen Integer zurück, der die Anzahl der im Buffer gespeicherten diskreten Audiokanäle beschreibt.

## Instanz-Methoden

- [`AudioBuffer.getChannelData()`](/de/docs/Web/API/AudioBuffer/getChannelData)
  - : Gibt eine {{jsxref("Float32Array")}} zurück, die die PCM-Daten des durch den `channel`-Parameter definierten Kanals enthält (wobei `0` den ersten Kanal darstellt).
- [`AudioBuffer.copyFromChannel()`](/de/docs/Web/API/AudioBuffer/copyFromChannel)
  - : Kopiert die Samples des spezifizierten Kanals des `AudioBuffer` in das `destination`-Array.
- [`AudioBuffer.copyToChannel()`](/de/docs/Web/API/AudioBuffer/copyToChannel)
  - : Kopiert die Samples in den spezifizierten Kanal des `AudioBuffer` aus dem `source`-Array.

## Beispiel

Das folgende einfache Beispiel zeigt, wie ein `AudioBuffer` erstellt und mit zufälligem Weißrauschen gefüllt wird. Der vollständige Quellcode ist in unserem [webaudio-examples](https://github.com/mdn/webaudio-examples) Repository zu finden; eine [laufende Live-Version](https://mdn.github.io/webaudio-examples/audio-buffer/) ist ebenfalls verfügbar.

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
