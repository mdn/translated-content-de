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
{{domxref("AudioBuffer")}}-Objekt.

## Syntax

```js-nolint
new AudioBuffer(options)
```

### Parameter

- `options`

  - : Optionen sind wie folgt:

    - `length`
      - : Die Größe des Audiopuffers in Sample-Frames. Um die `length` für eine bestimmte Anzahl von Sekunden Audio zu bestimmen, verwenden Sie `numSeconds * sampleRate`.
    - `numberOfChannels`
      - : Die Anzahl der Kanäle für den Puffer. Der Standardwert ist 1, und alle Benutzeragenten müssen mindestens 32 Kanäle unterstützen.
    - `sampleRate`
      - : Die Abtastrate in Hz für den Puffer. Der Standardwert ist die Abtastrate des `context`, das beim Erstellen dieses Objekts verwendet wird. Benutzeragenten müssen Abtastraten von 8.000 Hz bis 96.000 Hz unterstützen (dürfen jedoch auch darüber hinausgehen).
    - `channelCount`
      - : Repräsentiert eine ganze Zahl, die verwendet wird, um zu bestimmen, wie viele Kanäle beim [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) von Verbindungen zu irgendwelchen Eingängen zum Node verwendet werden.
        (Siehe {{domxref("AudioNode.channelCount")}} für weitere Informationen.) Seine Nutzung und genaue Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Repräsentiert einen enumerierten Wert, der beschreibt, wie Kanäle zwischen den Eingängen und Ausgängen des Nodes abgeglichen werden müssen. (Siehe {{domxref("AudioNode.channelCountMode")}} für weitere Informationen, einschließlich der Standardwerte.)
    - `channelInterpretation`
      - : Repräsentiert einen enumerierten Wert, der die Bedeutung der Kanäle beschreibt. Diese Interpretation definiert, wie Audio [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) stattfinden wird.
        Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Siehe {{domxref("AudioNode.channelCountMode")}} für weitere Informationen einschließlich der Standardwerte.)

#### Veraltete Parameter

- `context` {{Deprecated_Inline}}
  - : Ein Verweis auf ein {{domxref("AudioContext")}}. Dieser Parameter wurde aus der Spezifikation entfernt.

### Ausnahmen

- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn eine oder mehrere Optionen negativ oder anderweitig ungültig sind (wie `numberOfChannels` höher als unterstützt oder eine `sampleRate` außerhalb des nominalen Bereichs).
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn nicht genügend Speicher verfügbar ist, um den Puffer zuzuweisen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
