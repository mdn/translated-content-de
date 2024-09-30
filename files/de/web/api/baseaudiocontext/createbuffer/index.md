---
title: "BaseAudioContext: Methode createBuffer()"
short-title: createBuffer()
slug: Web/API/BaseAudioContext/createBuffer
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{ APIRef("Web Audio API") }}

Die Methode `createBuffer()` der [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)
Schnittstelle wird verwendet, um ein neues, leeres [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)-Objekt zu erstellen, das dann mit Daten gefüllt und über einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) abgespielt werden kann.

Für weitere Details zu Audiobuffern konsultieren Sie die [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)-Referenzseite.

> **Hinweis:** `createBuffer()` konnte früher komprimierte
> Daten verarbeiten und zurückgegebene dekodierte Samples bereitstellen, doch diese Fähigkeit wurde aus der Spezifikation entfernt, da die gesamte Dekodierung im Hauptthread durchgeführt wurde, wodurch `createBuffer()`
> die Ausführung von anderem Code blockierte. Die asynchrone Methode `decodeAudioData()`
> tut das Gleiche — sie nimmt komprimierte Audiodaten, wie eine MP3-Datei, und gibt Ihnen direkt ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) zurück, das Sie dann über einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) abspielen können. Für einfache Anwendungsfälle wie das Abspielen einer MP3 sollten Sie `decodeAudioData()` verwenden.

Für eine ausführliche Erklärung, wie Audiobuffer funktionieren und was die Parameter bewirken, lesen Sie [Audiobuffer: Frames, Samples und Kanäle](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_buffers_frames_samples_and_channels) in unserem Leitfaden zu den grundlegenden Konzepten.

## Syntax

```js-nolint
createBuffer(numOfChannels, length, sampleRate)
```

### Parameter

- `numOfChannels`
  - : Ein Ganzzahlwert, der die Anzahl der Kanäle darstellt, die dieser Puffer haben soll. Der Standardwert ist 1, und alle Benutzeragenten müssen mindestens 32 Kanäle unterstützen.
- `length`
  - : Ein Ganzzahlwert, der die Größe des Puffers in Sample-Frames darstellt (wobei jedes Sample-Frame die Größe eines Samples in Bytes multipliziert mit `numOfChannels` ist). Um die `length` für eine bestimmte Anzahl von Sekunden Audio zu bestimmen, verwenden Sie `numSeconds * sampleRate`.
- `sampleRate`
  - : Die Abtastrate der linearen Audiodaten in Sample-Frames pro Sekunde. Alle Browser müssen Abtastraten im Bereich von mindestens 8.000 Hz bis 96.000 Hz unterstützen.

### Rückgabewert

Ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), der basierend auf den angegebenen Optionen konfiguriert ist.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine oder mehrere der Optionen negativ oder anderweitig ungültig sind (wie zum Beispiel `numberOfChannels`, das höher ist als unterstützt, oder eine `sampleRate` außerhalb des nominalen Bereichs).
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn nicht genug Speicher verfügbar ist, um den Puffer zuzuweisen.

## Beispiele

Zuerst ein paar einfache triviale Beispiele, um zu erklären, wie die Parameter verwendet werden:

```js
const audioCtx = new AudioContext();
const buffer = audioCtx.createBuffer(2, 22050, 44100);
```

Wenn Sie diesen Aufruf verwenden, erhalten Sie einen Stereopuffer (zwei Kanäle), der, wenn er auf einem AudioContext läuft, der mit 44100Hz arbeitet (sehr häufig, die meisten normalen Soundkarten arbeiten mit dieser Rate), 0,5 Sekunden dauert: 22050 Frames / 44100Hz = 0,5 Sekunden.

```js
const audioCtx = new AudioContext();
const buffer = audioCtx.createBuffer(1, 22050, 22050);
```

Wenn Sie diesen Aufruf verwenden, erhalten Sie einen Monopuffer (ein Kanal), der, wenn er auf einem `AudioContext` läuft, der mit 44100Hz arbeitet, automatisch auf 44100Hz _umgesampelt_ wird (und daher 44100 Frames ergibt) und 1,0 Sekunde dauert: 44100 Frames / 44100Hz = 1 Sekunde.

> [!NOTE]
> Audio-Resampling ist sehr ähnlich zum Bildgrößenänderung: Angenommen, Sie haben ein 16 x 16 Bild, aber Sie möchten, dass es einen 32x32-Bereich ausfüllt: Sie ändern die Größe (resample) es. Das Ergebnis hat geringere Qualität (es kann verschwommen oder kantig sein, abhängig vom Resampling-Algorithmus), aber es funktioniert, und das veränderte Bild nimmt weniger Platz ein. Umgesampletes Audio ist genau das Gleiche — Sie sparen Platz, aber in der Praxis werden Sie nicht in der Lage sein, hochfrequente Inhalte (Hochton-Sound) korrekt wiederzugeben.

Schauen wir uns nun ein komplexeres `createBuffer()`-Beispiel an, in dem wir einen drei Sekunden langen Puffer erstellen, ihn mit Weißem Rauschen füllen und dann über einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) abspielen. Der Kommentar sollte deutlich erklären, was vor sich geht. Sie können den [Code live ausführen](https://mdn.github.io/webaudio-examples/audio-buffer/) oder [den Quellcode anzeigen](https://github.com/mdn/webaudio-examples/blob/main/audio-buffer/index.html).

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
