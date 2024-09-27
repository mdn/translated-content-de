---
title: "BaseAudioContext: createBuffer() Methode"
short-title: createBuffer()
slug: Web/API/BaseAudioContext/createBuffer
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{ APIRef("Web Audio API") }}

Die `createBuffer()`-Methode der [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)
Schnittstelle wird verwendet, um ein neues, leeres [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)-Objekt zu erstellen, das dann mit Daten gefüllt und über einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) abgespielt werden kann.

Für weitere Details über Audiopuffer werfen Sie einen Blick auf die [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) Referenzseite.

> **Note:** `createBuffer()` konnte früher komprimierte
> Daten entgegennehmen und dekodierte Samples zurückgeben, aber diese Fähigkeit wurde aus der Spezifikation entfernt, weil die gesamte Dekodierung im Hauptthread erfolgte und deshalb das `createBuffer()` die Ausführung anderer Codes blockierte. Die asynchrone Methode `decodeAudioData()` übernimmt die gleiche Aufgabe — sie nimmt komprimierte Audiodaten, wie z.B. eine MP3-Datei, und liefert direkt ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) zurück, das dann über einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) abgespielt werden kann. Für einfache Anwendungsfälle wie das Abspielen einer MP3 sollte `decodeAudioData()` verwendet werden.

Für eine ausführliche Erklärung, wie Audiopuffer arbeiten und was die Parameter bewirken, lesen Sie [Audiopuffer: Frames, Samples und Kanäle](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_buffers_frames_samples_and_channels) aus unserem Leitfaden zu Grundkonzepten.

## Syntax

```js-nolint
createBuffer(numOfChannels, length, sampleRate)
```

### Parameter

- `numOfChannels`
  - : Eine Ganzzahl, die die Anzahl der Kanäle angibt, die dieser Puffer haben soll. Der Standardwert ist 1, und alle Benutzeragenten müssen mindestens 32 Kanäle unterstützen.
- `length`
  - : Eine Ganzzahl, die die Größe des Puffers in Sample-Frames angibt (wobei jedes Sample-Frame die Größe eines Samples in Bytes multipliziert mit `numOfChannels` ist). Um die `length` für eine bestimmte Anzahl von Sekunden Audio zu bestimmen, verwenden Sie `numSeconds * sampleRate`.
- `sampleRate`
  - : Die Abtastrate der linearen Audiodaten in Sample-Frames pro Sekunde. Alle Browser müssen Abtastraten im Bereich von mindestens 8.000 Hz bis 96.000 Hz unterstützen.

### Rückgabewert

Ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), der basierend auf den angegebenen Optionen konfiguriert ist.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine oder mehrere der Optionen negativ oder anderweitig ungültig sind (z. B. wenn `numberOfChannels` höher ist als unterstützt, oder eine `sampleRate` außerhalb des Nennbereichs liegt).
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn nicht genügend Speicher verfügbar ist, um den Puffer zuzuweisen.

## Beispiele

Zunächst ein paar einfache, triviale Beispiele, um zu erklären, wie die Parameter verwendet werden:

```js
const audioCtx = new AudioContext();
const buffer = audioCtx.createBuffer(2, 22050, 44100);
```

Wenn Sie diesen Aufruf verwenden, erhalten Sie einen stereophonen Puffer (zwei Kanäle), der, wenn er auf einem AudioContext bei 44100 Hz abgespielt wird (sehr üblich, die meisten normalen Soundkarten laufen mit dieser Rate), 0,5 Sekunden lang sein wird: 22050 Frames / 44100 Hz = 0,5 Sekunden.

```js
const audioCtx = new AudioContext();
const buffer = audioCtx.createBuffer(1, 22050, 22050);
```

Wenn Sie diesen Aufruf verwenden, erhalten Sie einen monosonischen Puffer (ein Kanal), der, wenn er auf einem `AudioContext` bei 44100 Hz abgespielt wird, automatisch auf 44100 Hz _resampled_ wird (und daher 44100 Frames ergibt) und 1,0 Sekunde lang sein wird: 44100 Frames / 44100 Hz = 1 Sekunde.

> [!NOTE]
> Resampling von Audio ist dem Ändern der Bildgröße sehr ähnlich: Angenommen, Sie haben ein 16 x 16 Bild, aber Sie möchten, dass es ein 32x32 Bereich füllt: Sie ändern die Größe (resampeln) es. Das Ergebnis hat weniger Qualität (es kann verschwommen oder kantig sein, abhängig vom Umrechnungsalgorithmus), aber es funktioniert, und das geänderte Bild nimmt weniger Platz ein. Resampeltes Audio ist genau dasselbe — Sie sparen Speicherplatz, aber praktisch werden Sie unfähig sein, hochfrequente Inhalte (Hochtonklang) korrekt wiederzugeben.

Schauen wir uns jetzt ein komplexeres `createBuffer()`-Beispiel an, bei dem wir einen drei Sekunden dauernden Puffer erstellen, ihn mit weißem Rauschen füllen und dann über einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) abspielen. Der Kommentar sollte klar erklären, was passiert. Sie können auch [den Code live ausführen](https://mdn.github.io/webaudio-examples/audio-buffer/), oder [den Quellcode ansehen](https://github.com/mdn/webaudio-examples/blob/main/audio-buffer/index.html).

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
