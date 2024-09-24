---
title: AudioBuffer
slug: Web/API/AudioBuffer
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("Web Audio API")}}

Das **`AudioBuffer`**-Interface repräsentiert ein kurzes Audio-Asset, das sich im Speicher befindet und entweder aus einer Audiodatei mit der Methode {{ domxref("BaseAudioContext/decodeAudioData", "AudioContext.decodeAudioData()") }} oder aus Rohdaten mit {{ domxref("BaseAudioContext/createBuffer", "AudioContext.createBuffer()") }} erstellt wurde. Einmal in einem AudioBuffer platziert, kann das Audio wiedergegeben werden, indem es in einen {{ domxref("AudioBufferSourceNode") }} übergeben wird.

Objekte dieser Typen sind dafür konzipiert, kleine Audioclips zu enthalten, typischerweise weniger als 45 Sekunden. Für längere Sounds sind Objekte, die {{domxref("MediaElementAudioSourceNode")}} implementieren, besser geeignet. Der Puffer enthält die Audiosignalwellenform, die als eine Reihe von Amplituden in folgendem Format kodiert ist: nicht interleaved IEEE754 32-Bit-Linear-PCM mit einem nominalen Bereich zwischen `-1` und `+1`, das heißt, ein 32-Bit-Gleitkomma-Puffer, mit jedem Sample zwischen -1.0 und 1.0. Wenn der `AudioBuffer` mehrere Kanäle hat, werden diese in separaten Puffern gespeichert.

## Konstrukteur

- {{domxref("AudioBuffer.AudioBuffer", "AudioBuffer()")}}
  - : Erstellt und gibt eine neue Instanz des `AudioBuffer`-Objekts zurück.

## Instanz-Eigenschaften

- {{domxref("AudioBuffer.sampleRate")}} {{ReadOnlyInline}}
  - : Gibt einen Fließkommawert zurück, der die Abtastrate in Samples pro Sekunde der im Puffer gespeicherten PCM-Daten darstellt.
- {{domxref("AudioBuffer.length")}} {{ReadOnlyInline}}
  - : Gibt einen Integer zurück, der die Länge in Sample-Frames der im Puffer gespeicherten PCM-Daten darstellt.
- {{domxref("AudioBuffer.duration")}} {{ReadOnlyInline}}
  - : Gibt ein Double zurück, das die Dauer in Sekunden der im Puffer gespeicherten PCM-Daten darstellt.
- {{domxref("AudioBuffer.numberOfChannels")}} {{ReadOnlyInline}}
  - : Gibt einen Integer zurück, der die Anzahl der diskreten Audiokanäle beschreibt, die von den im Puffer gespeicherten PCM-Daten beschrieben werden.

## Instanz-Methoden

- {{domxref("AudioBuffer.getChannelData()")}}
  - : Gibt ein {{jsxref("Float32Array")}} zurück, das die PCM-Daten enthält, die mit dem durch den `channel`-Parameter definierten Kanal assoziiert sind (mit `0`, das den ersten Kanal darstellt).
- {{domxref("AudioBuffer.copyFromChannel()")}}
  - : Kopiert die Samples vom angegebenen Kanal des `AudioBuffer` in das `destination`-Array.
- {{domxref("AudioBuffer.copyToChannel()")}}
  - : Kopiert die Samples zum angegebenen Kanal des `AudioBuffer` aus dem `source`-Array.

## Beispiel

Das folgende einfache Beispiel zeigt, wie ein `AudioBuffer` erstellt und mit zufälligem weißen Rauschen gefüllt wird. Den vollständigen Quellcode finden Sie in unserem [webaudio-examples](https://github.com/mdn/webaudio-examples)-Repository; eine [laufende Live-Version](https://mdn.github.io/webaudio-examples/audio-buffer/) ist ebenfalls verfügbar.

```js
const audioCtx = new AudioContext();

// Erstellen Sie ein leeres Stereopuffer von drei Sekunden bei der Abtastrate des AudioContext
const myArrayBuffer = audioCtx.createBuffer(
  2,
  audioCtx.sampleRate * 3,
  audioCtx.sampleRate,
);

// Füllen Sie den Puffer mit weißem Rauschen;
// einfach zufällige Werte zwischen -1.0 und 1.0
for (let channel = 0; channel < myArrayBuffer.numberOfChannels; channel++) {
  // Dies gibt uns das tatsächliche Array, das die Daten enthält
  const nowBuffering = myArrayBuffer.getChannelData(channel);
  for (let i = 0; i < myArrayBuffer.length; i++) {
    // Math.random() ist in [0; 1.0]
    // Audio muss in [-1.0; 1.0] sein
    nowBuffering[i] = Math.random() * 2 - 1;
  }
}

// Holen Sie sich einen AudioBufferSourceNode.
// Dies ist der AudioNode, den wir verwenden, wenn wir einen AudioBuffer abspielen möchten
const source = audioCtx.createBufferSource();

// Setzen Sie den Puffer im AudioBufferSourceNode
source.buffer = myArrayBuffer;

// Verbinden Sie den AudioBufferSourceNode mit dem
// Ziel, damit wir den Klang hören können
source.connect(audioCtx.destination);

// Starten Sie die Wiedergabe des Quellkanals
source.start();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
