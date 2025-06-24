---
title: "AnalyserNode: AnalyserNode() Konstruktor"
short-title: AnalyserNode()
slug: Web/API/AnalyserNode/AnalyserNode
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("'Web Audio API'")}}

Der **`AnalyserNode()`** Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erzeugt eine neue Instanz des [`AnalyserNode`](/de/docs/Web/API/AnalyserNode)-Objekts.

## Syntax

```js-nolint
new AnalyserNode(context)
new AnalyserNode(context, options)
```

### Parameter

- `context`
  - : Eine Referenz zu einem [`AudioContext`](/de/docs/Web/API/AudioContext) oder [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext).
- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden, alle optionalen, Eigenschaften:
    - `fftSize`
      - : Die gewünschte anfängliche Größe der [FFT](https://en.wikipedia.org/wiki/Fast_Fourier_transform) für die Analyse im [Frequenzbereich](https://en.wikipedia.org/wiki/Frequency_domain).
        Der Standardwert ist `2048`.
    - `maxDecibels`
      - : Die gewünschte anfängliche maximale Leistung in [dB](https://en.wikipedia.org/wiki/Decibel) für die FFT-Analyse.
        Der Standardwert ist `-30`.
    - `minDecibels`
      - : Die gewünschte anfängliche minimale Leistung in dB für die FFT-Analyse.
        Der Standardwert ist `-100`.
    - `smoothingTimeConstant`
      - : Die gewünschte anfängliche Glättungskonstante für die FFT-Analyse. Der Standardwert ist `0.8`.
    - `channelCount`
      - : Repräsentiert eine Ganzzahl, die bestimmt, wie viele Kanäle beim [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) für Verbindungen zu den Eingängen des Knotens verwendet werden. (Siehe
        [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount) für weitere Informationen.) Die Verwendung und genaue
        Definition hängt vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Repräsentiert einen {{Glossary("Enumerated", "aufgezählten")}} Wert, der beschreibt, wie die Kanäle zwischen
        den Eingängen und Ausgängen des Knotens abzugleichen sind. (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für
        weitere Informationen einschließlich der Standardwerte.)
    - `channelInterpretation`
      - : Repräsentiert einen aufgezählten Wert, der die Bedeutung der Kanäle beschreibt. Diese
        Interpretation definiert, wie Audio [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) durchgeführt wird.
        Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Siehe
        [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen einschließlich der Standardwerte.)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`BaseAudioContext.createAnalyser()`](/de/docs/Web/API/BaseAudioContext/createAnalyser), die entsprechende Factory-Methode
