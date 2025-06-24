---
title: "AudioBuffer: AudioBuffer()-Konstruktor"
short-title: AudioBuffer()
slug: Web/API/AudioBuffer/AudioBuffer
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Web Audio API")}}

Der **`AudioBuffer`**-Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt ein neues [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)-Objekt.

## Syntax

```js-nolint
new AudioBuffer(options)
```

### Parameter

- `options`
  - : Optionen sind wie folgt:
    - `length`
      - : Die Größe des Audiobuffers in Sample-Frames. Um die `length` für eine bestimmte Anzahl von Sekunden Audio zu bestimmen, verwenden Sie `numSeconds * sampleRate`.
    - `numberOfChannels`
      - : Die Anzahl der Kanäle für den Buffer. Der Standardwert ist 1, und alle Benutzeragenten müssen mindestens 32 Kanäle unterstützen.
    - `sampleRate`
      - : Die Abtastrate in Hz für den Buffer. Der Standardwert ist die Abtastrate des `context`, der beim Erstellen dieses Objekts verwendet wird. Benutzeragenten müssen Abtastraten von 8.000 Hz bis 96.000 Hz unterstützen (dürfen aber auch außerhalb dieses Bereichs liegen).

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine oder mehrere Optionen negativ oder anderweitig einen ungültigen Wert haben (zum Beispiel `numberOfChannels` höher ist als unterstützt oder eine `sampleRate` außerhalb des nominalen Bereichs liegt).
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn nicht genügend Speicher verfügbar ist, um den Buffer zuzuweisen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
