---
title: "AudioBuffer: AudioBuffer()-Konstruktor"
short-title: AudioBuffer()
slug: Web/API/AudioBuffer/AudioBuffer
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}

Der **`AudioBuffer`**-Konstruktor der
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
      - : Die Größe des Audiobuffers in Sample-Frames. Um die `length`
        für eine bestimmte Anzahl von Sekunden Audio zu bestimmen, verwenden Sie
        `numSeconds * sampleRate`.
    - `numberOfChannels`
      - : Die Anzahl der Kanäle für den Buffer. Der
        Standardwert ist 1, und alle User Agents müssen mindestens 32 Kanäle unterstützen.
    - `sampleRate`
      - : Die Abtastrate in Hz für den Buffer. Der Standard ist
        die Abtastrate des `context`, der zum Erstellen dieses Objekts verwendet wird.
        User Agents müssen Abtastraten von 8.000 Hz bis 96.000 Hz unterstützen (aber sie dürfen
        auch außerhalb dieses Bereichs gehen).
    - `channelCount`
      - : Stellt eine Ganzzahl dar, die bestimmt, wie viele Kanäle verwendet werden, wenn Verbindungen zu Eingängen des Knotens [up-mixing und down-mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) verwendet werden.
        (Weitere Informationen finden Sie unter [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount).)
        Seine Nutzung und genaue Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Stellt einen enumerierten Wert dar, der beschreibt, wie Kanäle zwischen
        den Eingängen und Ausgängen des Knotens abgeglichen werden müssen. (Weitere Informationen,
        einschließlich der Standardwerte, finden Sie unter [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode).)
    - `channelInterpretation`
      - : Stellt einen enumerierten Wert dar, der die Bedeutung der Kanäle beschreibt.
        Diese Interpretation wird bestimmen, wie Audio [up-mixing und down-mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) verarbeitet wird.
        Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Weitere Informationen, einschließlich der Standardwerte, finden Sie unter
        [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode).)

#### Veraltete Parameter

- `context` {{Deprecated_Inline}}
  - : Eine Referenz zu einem [`AudioContext`](/de/docs/Web/API/AudioContext). Dieser Parameter wurde aus der
    Spezifikation entfernt.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine oder mehrere der Optionen negativ oder anderweitig einen ungültigen Wert haben
    (wie `numberOfChannels`, die höher ist als unterstützt,
    oder eine `sampleRate` außerhalb des nominalen Bereichs).
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn nicht genügend Speicher verfügbar ist, um den Buffer zuzuweisen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
