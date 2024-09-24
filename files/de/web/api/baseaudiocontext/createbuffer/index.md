---
title: "BaseAudioContext: Methode createBuffer()"
short-title: createBuffer()
slug: Web/API/BaseAudioContext/createBuffer
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{ APIRef("Web Audio API") }}

Die Methode `createBuffer()` der {{ domxref("BaseAudioContext") }}-Schnittstelle wird verwendet, um ein neues, leeres {{ domxref("AudioBuffer") }}-Objekt zu erstellen, das dann mit Daten gefüllt und über einen {{ domxref("AudioBufferSourceNode") }} abgespielt werden kann.

Für weitere Details zu Audio-Puffern, besuchen Sie die {{ domxref("AudioBuffer") }}-Referenzseite.

> **Note:** `createBuffer()` konnte früher komprimierte Daten entgegennehmen und dekodierte Samples zurückgeben. Diese Fähigkeit wurde aus der Spezifikation entfernt, da die gesamte Dekodierung im Haupt-Thread durchgeführt wurde, was die Ausführung anderer Codes blockierte. Die asynchrone Methode `decodeAudioData()` erfüllt die gleiche Aufgabe — sie nimmt komprimierte Audiodaten, wie z. B. eine MP3-Datei, und gibt direkt ein {{ domxref("AudioBuffer") }} zurück, das dann über einen {{ domxref("AudioBufferSourceNode") }} abgespielt werden kann. Für einfache Anwendungsfälle wie das Abspielen einer MP3-Datei sollten Sie `decodeAudioData()` verwenden.

Für eine detaillierte Erklärung, wie Audio-Puffer funktionieren und was die Parameter bewirken, lesen Sie [Audio buffers: frames, samples and channels](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_buffers_frames_samples_and_channels) aus unserem Leitfaden zu den grundlegenden Konzepten.

## Syntax

```js-nolint
createBuffer(numOfChannels, length, sampleRate)
```

### Parameter

- `numOfChannels`
  - : Eine Ganzzahl, die die Anzahl der Kanäle dieses Puffers darstellt. Der Standardwert ist 1 und alle Benutzeragenten müssen mindestens 32 Kanäle unterstützen.
- `length`
  - : Eine Ganzzahl, die die Größe des Puffers in Sample-Frames darstellt (wobei jeder Sample-Frame die Größe eines Samples in Bytes multipliziert mit `numOfChannels` ist). Um die `length` für eine bestimmte Anzahl von Sekunden Audio zu bestimmen, verwenden Sie `numSeconds * sampleRate`.
- `sampleRate`
  - : Die Abtastrate der linearen Audiodaten in Sample-Frames pro Sekunde. Alle Browser müssen Abtastraten im Bereich von mindestens 8.000 Hz bis 96.000 Hz unterstützen.

### Rückgabewert

Ein {{domxref("AudioBuffer")}}, das basierend auf den angegebenen Optionen konfiguriert ist.

### Ausnahmen

- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn eine oder mehrere der Optionen negativ sind oder anderweitig einen ungültigen Wert haben (z. B. wenn `numberOfChannels` höher als unterstützt ist oder eine `sampleRate` außerhalb des nominalen Bereichs liegt).
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn nicht genug Speicher verfügbar ist, um den Puffer zuzuweisen.

## Beispiele

Zuerst ein paar einfache triviale Beispiele, um zu erklären, wie die Parameter verwendet werden:

```js
const audioCtx = new AudioContext();
const buffer = audioCtx.createBuffer(2, 22050, 44100);
```

Wenn Sie diesen Aufruf verwenden, erhalten Sie einen Stereo-Puffer (zwei Kanäle), der, wenn er auf einem AudioContext abgespielt wird, der mit 44100Hz läuft (sehr verbreitet, die meisten normalen Soundkarten laufen mit dieser Rate), 0,5 Sekunden dauern wird: 22050 Frames / 44100Hz = 0,5 Sekunden.

```js
const audioCtx = new AudioContext();
const buffer = audioCtx.createBuffer(1, 22050, 22050);
```

Wenn Sie diesen Aufruf verwenden, erhalten Sie einen Mono-Puffer (ein Kanal), der, wenn er auf einem `AudioContext` abgespielt wird, der mit 44100Hz läuft, automatisch auf 44100Hz _resampled_ wird (und daher 44100 Frames liefert) und 1,0 Sekunde dauert: 44100 Frames / 44100Hz = 1 Sekunde.

> [!NOTE]
> Audio-Resampling ist sehr ähnlich wie das Ändern der Bildgröße: Angenommen, Sie haben ein 16 x 16 Bild, möchten es aber in einem 32x32 Bereich füllen: Sie ändern die Größe (resample) es. Das Ergebnis hat eine geringere Qualität (es kann unscharf oder kantig sein, je nach Resizing-Algorithmus), aber es funktioniert, und das verkleinerte Bild nimmt weniger Platz ein. Resampled Audio ist genau dasselbe — Sie sparen Platz, aber in der Praxis können Sie hochfrequenten Inhalt (Hochton-Sound) nicht richtig wiedergeben.

Schauen wir uns nun ein komplexeres `createBuffer()`-Beispiel an, in dem wir einen drei Sekunden langen Puffer erstellen, ihn mit weißem Rauschen füllen und dann über einen {{domxref("AudioBufferSourceNode")}} abspielen. Die Kommentare sollten klar erklären, was vor sich geht. Sie können den Code auch [live ausführen](https://mdn.github.io/webaudio-examples/audio-buffer/) oder [den Quellcode ansehen](https://github.com/mdn/webaudio-examples/blob/main/audio-buffer/index.html).

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
