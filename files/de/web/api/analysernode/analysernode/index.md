---
title: "AnalyserNode: AnalyserNode() Konstruktor"
short-title: AnalyserNode()
slug: Web/API/AnalyserNode/AnalyserNode
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("'Web Audio API'")}}

Der **`AnalyserNode()`**-Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt eine neue {{domxref("AnalyserNode")}}-Objektinstanz.

## Syntax

```js-nolint
new AnalyserNode(context)
new AnalyserNode(context, options)
```

### Parameter

- `context`
  - : Eine Referenz auf ein {{domxref("AudioContext")}} oder {{domxref("OfflineAudioContext")}}.
- `options` {{optional_inline}}

  - : Ein Objekt mit den folgenden, alle optionalen Eigenschaften:

    - `fftSize`
      - : Die gewünschte anfängliche Größe des [FFT](https://en.wikipedia.org/wiki/Fast_Fourier_transform) für die [Frequenzbereichs-](https://en.wikipedia.org/wiki/Frequency_domain)Analyse. Der Standardwert ist `2048`.
    - `maxDecibels`
      - : Die gewünschte anfängliche maximale Leistung in [dB](https://en.wikipedia.org/wiki/Decibel) für die FFT-Analyse. Der Standardwert ist `-30`.
    - `minDecibels`
      - : Die gewünschte anfängliche minimale Leistung in dB für die FFT-Analyse. Der Standardwert ist `-100`.
    - `smoothingTimeConstant`
      - : Die gewünschte anfängliche Glättungskonstante für die FFT-Analyse. Der Standardwert ist `0.8`.
    - `channelCount`
      - : Stellt eine Ganzzahl dar, die verwendet wird, um zu bestimmen, wie viele Kanäle bei Verbindungen zu den Eingängen des Knotens beim [Up- und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) verwendet werden. (Siehe {{domxref("AudioNode.channelCount")}} für weitere Informationen.) Die Nutzung und genaue Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Stellt einen [aufgezählten](/de/docs/Glossary/Enumerated) Wert dar, der beschreibt, wie die Kanäle zwischen den Eingängen und Ausgängen des Knotens abgeglichen werden müssen. (Siehe {{domxref("AudioNode.channelCountMode")}} für weitere Informationen, einschließlich Standardeinstellungen.)
    - `channelInterpretation`
      - : Stellt einen aufgezählten Wert dar, der die Bedeutung der Kanäle beschreibt. Diese Interpretation definiert, wie das Audio beim [Up- und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) bearbeitet wird. Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Siehe {{domxref("AudioNode.channelCountMode")}} für weitere Informationen, einschließlich Standardeinstellungen.)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("BaseAudioContext.createAnalyser()")}}, die äquivalente Fabrikmethode
