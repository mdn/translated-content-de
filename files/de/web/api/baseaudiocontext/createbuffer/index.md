---
title: "BaseAudioContext: createBuffer()-Methode"
short-title: createBuffer()
slug: Web/API/BaseAudioContext/createBuffer
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{ APIRef("Web Audio API") }}

Die `createBuffer()`-Methode der Schnittstelle [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) wird verwendet, um ein neues, leeres [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)-Objekt zu erstellen. Dieses kann dann mit Daten gefüllt und über einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) abgespielt werden.

Für weitere Details über Audio-Puffer schauen Sie sich die [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)-Referenzseite an.

> [!NOTE] > `createBuffer()` konnte früher komprimierte Daten verarbeiten und dekodierte Samples zurückgeben, aber diese Fähigkeit wurde aus der Spezifikation entfernt, da die gesamte Dekodierung im Haupt-Thread durchgeführt wurde, was die Ausführung anderer Codes blockierte. Die asynchrone Methode `decodeAudioData()` übernimmt diese Aufgabe – sie nimmt komprimierte Audiodaten, wie eine MP3-Datei, und gibt direkt ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) zurück, das Sie dann über einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) abspielen können. Für einfache Anwendungsfälle wie das Abspielen eines MP3s sollten Sie `decodeAudioData()` verwenden.

Für eine ausführliche Erklärung, wie Audio-Puffer funktionieren, einschließlich der Funktion der Parameter, lesen Sie [Audio-Puffer: Frames, Samples und Kanäle](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_buffers_frames_samples_and_channels) aus unserem Leitfaden zu den Grundkonzepten.

## Syntax

```js-nolint
createBuffer(numOfChannels, length, sampleRate)
```

### Parameter

- `numOfChannels`
  - : Ein Integer, der die Anzahl der Kanäle darstellt, die dieser Puffer haben soll. Der Standardwert ist 1, und alle Benutzeragenten müssen mindestens 32 Kanäle unterstützen.
- `length`
  - : Ein Integer, der die Größe des Puffers in Sample-Frames darstellt (wobei jeder Sample-Frame die Größe eines Samples in Bytes multipliziert mit `numOfChannels` ist). Um die `length` für eine bestimmte Anzahl an Sekunden Audio zu bestimmen, verwenden Sie `numSeconds * sampleRate`.
- `sampleRate`
  - : Die Abtastrate der linearen Audiodaten in Sample-Frames pro Sekunde. Alle Browser müssen Abtastraten im Bereich von mindestens 8.000 Hz bis 96.000 Hz unterstützen.

### Rückgabewert

Ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), das basierend auf den angegebenen Optionen konfiguriert ist.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wirft einen Fehler, wenn eine oder mehrere Optionen negativ oder anderweitig ungültig sind (wie `numberOfChannels`, das höher ist als unterstützt, oder eine `sampleRate` außerhalb des Nominalbereichs).
- {{jsxref("RangeError")}}
  - : Wirft einen Fehler, wenn nicht genügend Speicher verfügbar ist, um den Puffer zuzuweisen.

## Beispiele

Zuerst ein paar einfache, triviale Beispiele, um zu erklären, wie die Parameter verwendet werden:

```js
const audioCtx = new AudioContext();
const buffer = audioCtx.createBuffer(2, 22050, 44100);
```

Wenn Sie diesen Aufruf verwenden, erhalten Sie einen Stereopuffer (zwei Kanäle), der, wenn er in einem `AudioContext` bei 44100 Hz (sehr üblich, die meisten normalen Soundkarten arbeiten mit dieser Rate) abgespielt wird, 0,5 Sekunden dauert: 22050 Frames / 44100 Hz = 0,5 Sekunden.

```js
const audioCtx = new AudioContext();
const buffer = audioCtx.createBuffer(1, 22050, 22050);
```

Wenn Sie diesen Aufruf verwenden, erhalten Sie einen Monopuffer (ein Kanal), der, wenn er in einem `AudioContext` bei 44100 Hz abgespielt wird, automatisch auf 44100 Hz _neu abgetastet_ wird (und daher 44100 Frames ergibt) und 1,0 Sekunde dauert: 44100 Frames / 44100 Hz = 1 Sekunde.

> [!NOTE]
> Audio-Neuabtastung ist sehr ähnlich zur Bildgrößenänderung: Wenn Sie ein 16 x 16 Bild haben und es auf ein 32 x 32 Gebiet vergrößern möchten, ändern (neuabtasten) Sie die Größe. Das Ergebnis hat weniger Qualität (es kann unscharf oder kantig sein, abhängig vom Vergrößerungsalgorithmus), aber es funktioniert, und das vergrößerte Bild nimmt weniger Platz ein. Neuabgetastetes Audio ist genau dasselbe – Sie sparen Platz, aber in der Praxis können Sie hohe Frequenzinhalte (Höhenklang) nicht richtig reproduzieren.

Schauen wir uns nun ein komplexeres `createBuffer()`-Beispiel an, in dem wir einen Dreisekunden-Puffer erstellen, ihn mit Weißem Rauschen füllen und dann über einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) abspielen. Die Kommentare sollten klar erklären, was vor sich geht. Sie können den Code auch [live ausführen](https://mdn.github.io/webaudio-examples/audio-buffer/) oder [den Quellcode ansehen](https://github.com/mdn/webaudio-examples/blob/main/audio-buffer/index.html).

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
  // This gives us the actual ArrayBuffer that contains the data
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
