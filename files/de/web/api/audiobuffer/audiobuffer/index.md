---
title: "AudioBuffer: Konstruktor AudioBuffer()"
short-title: AudioBuffer()
slug: Web/API/AudioBuffer/AudioBuffer
l10n:
  sourceCommit: 01501e37cc8a84b9193671f348ff2c7b10f5dffe
---

{{APIRef("Web Audio API")}}

Der Konstruktor **`AudioBuffer`** der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt ein neues [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)-Objekt.

## Syntax

```js-nolint
new AudioBuffer(options)
```

### Parameter

- `options`
  - : Die Optionen sind:
    - `length`
      - : Die Größe des Audiopuffers in Sample-Frames. Um `length` für eine bestimmte Anzahl von Sekunden Audiomaterial zu bestimmen, verwenden Sie `numSeconds * sampleRate`.
    - `numberOfChannels`
      - : Die Anzahl der Kanäle für den Puffer. Der Standardwert ist 1. Alle User Agents müssen mindestens 32 Kanäle unterstützen.
    - `sampleRate`
      - : Die Abtastrate des Puffers in Hz. User Agents müssen Abtastraten von 3.000 Hz bis einschließlich 768.000 Hz unterstützen.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine oder mehrere der Optionen negativ sind oder anderweitig einen ungültigen Wert haben (etwa wenn `numberOfChannels` höher ist als unterstützt oder `sampleRate` außerhalb des vorgesehenen Bereichs liegt).
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn nicht genügend Arbeitsspeicher verfügbar ist, um den Puffer zuzuweisen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
