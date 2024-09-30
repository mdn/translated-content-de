---
title: "AnalyserNode: AnalyserNode()-Konstruktor"
short-title: AnalyserNode()
slug: Web/API/AnalyserNode/AnalyserNode
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("'Web Audio API'")}}

Der **`AnalyserNode()`**-Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt eine neue Instanz des [`AnalyserNode`](/de/docs/Web/API/AnalyserNode)-Objekts.

## Syntax

```js-nolint
new AnalyserNode(context)
new AnalyserNode(context, options)
```

### Parameter

- `context`
  - : Eine Referenz zu einem [`AudioContext`](/de/docs/Web/API/AudioContext) oder [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext).
- `options` {{optional_inline}}

  - : Ein Objekt mit den folgenden, optionalen Eigenschaften:

    - `fftSize`
      - : Die gewünschte anfängliche Größe der [FFT](https://en.wikipedia.org/wiki/Fast_Fourier_transform) für die [Frequenzbereichs-](https://en.wikipedia.org/wiki/Frequency_domain)Analyse.
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
      - : Repräsentiert eine ganze Zahl, die bestimmt, wie viele Kanäle verwendet werden, wenn [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing)-Verbindungen zu Eingängen des Knotens hergestellt werden. (Siehe
        [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount) für weitere Informationen.) Die Nutzung und genaue
        Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Repräsentiert einen [auflistbaren](/de/docs/Glossary/Enumerated) Wert, der beschreibt, wie die Kanäle zwischen
        den Eingängen und Ausgängen des Knotens abgestimmt werden müssen. (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere
        Informationen, einschließlich Standardwerten.)
    - `channelInterpretation`
      - : Repräsentiert einen auflistbaren Wert, der die Bedeutung der Kanäle beschreibt. Diese
        Interpretation wird definieren, wie das Audio [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) erfolgen wird.
        Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Siehe
        [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen, einschließlich
        Standardwerten.)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`BaseAudioContext.createAnalyser()`](/de/docs/Web/API/BaseAudioContext/createAnalyser), die äquivalente Fabrikmethode
