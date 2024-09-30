---
title: "AudioBuffer: AudioBuffer() Konstruktor"
short-title: AudioBuffer()
slug: Web/API/AudioBuffer/AudioBuffer
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}

Der **`AudioBuffer`** Konstruktor der
[Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt ein neues
[`AudioBuffer`](/de/docs/Web/API/AudioBuffer)-Objekt.

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
      - : Die Anzahl der Kanäle für den Puffer. Der Standard ist 1, und alle Benutzeragenten müssen mindestens 32 Kanäle unterstützen.
    - `sampleRate`
      - : Die Abtastrate in Hz für den Puffer. Der Standard ist die Abtastrate des `context`, der beim Erstellen dieses Objekts verwendet wird. Benutzeragenten müssen Abtastraten von 8.000 Hz bis 96.000 Hz unterstützen (dürfen aber auch außerhalb dieses Bereichs gehen).
    - `channelCount`
      - : Stellt eine Ganzzahl dar, die verwendet wird, um zu bestimmen, wie viele Kanäle bei [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) Verbindungen zu Eingängen des Knotens verwendet werden.
        (Weitere Informationen finden Sie unter [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount).) Die Verwendung und genaue
        Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Stellt einen aufgezählten Wert dar, der beschreibt, wie die Kanäle zwischen den Eingängen und Ausgängen des Knotens abgeglichen werden müssen. (Weitere Informationen, einschließlich Standardwerte, finden Sie unter [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode).)
    - `channelInterpretation`
      - : Stellt einen aufgezählten Wert dar, der die Bedeutung der Kanäle beschreibt. Diese Interpretation bestimmt, wie Audio [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) durchgeführt wird.
        Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Weitere Informationen, einschließlich Standardwerte, finden Sie unter [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode).)

#### Veraltete Parameter

- `context` {{Deprecated_Inline}}
  - : Ein Verweis auf ein [`AudioContext`](/de/docs/Web/API/AudioContext). Dieser Parameter wurde aus der Spezifikation entfernt.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine oder mehrere Optionen negative oder anderweitig ungültige Werte haben (wie zum Beispiel `numberOfChannels`, die höher sind als unterstützt, oder eine `sampleRate`, die außerhalb des normalen Bereichs liegt).
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn nicht genügend Arbeitsspeicher zur Verfügung steht, um den Puffer zuzuweisen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
