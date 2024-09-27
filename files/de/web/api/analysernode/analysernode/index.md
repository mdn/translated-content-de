---
title: "AnalyserNode: AnalyserNode() Konstruktor"
short-title: AnalyserNode()
slug: Web/API/AnalyserNode/AnalyserNode
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("'Web Audio API'")}}

Der **`AnalyserNode()`** Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt eine neue Instanz eines [`AnalyserNode`](/de/docs/Web/API/AnalyserNode) Objekts.

## Syntax

```js-nolint
new AnalyserNode(context)
new AnalyserNode(context, options)
```

### Parameter

- `context`
  - : Ein Verweis auf einen [`AudioContext`](/de/docs/Web/API/AudioContext) oder [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext).
- `options` {{optional_inline}}

  - : Ein Objekt mit den folgenden Eigenschaften, alle optional:

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
      - : Repräsentiert eine ganze Zahl, die bestimmt, wie viele Kanäle beim [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) von Verbindungen zu allen Eingängen des Knotens verwendet werden. (Siehe
        [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount) für weitere Informationen.) Die Verwendung und genaue
        Definition hängen vom Wert des `channelCountMode` ab.
    - `channelCountMode`
      - : Repräsentiert einen [enumerierten](/de/docs/Glossary/Enumerated) Wert, der beschreibt, wie die Kanäle zwischen
        den Eingängen und Ausgängen des Knotens abgestimmt werden müssen. (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für
        weitere Informationen, einschließlich Standardwerte.)
    - `channelInterpretation`
      - : Repräsentiert einen enumerierten Wert, der die Bedeutung der Kanäle beschreibt. Diese
        Interpretation wird definieren, wie das Audio gemischt wird beim [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing).
        Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Siehe
        [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen, einschließlich
        der Standardwerte.)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`BaseAudioContext.createAnalyser()`](/de/docs/Web/API/BaseAudioContext/createAnalyser), die entsprechende Fabrikmethode
