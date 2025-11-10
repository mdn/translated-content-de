---
title: "WaveShaperNode: WaveShaperNode() Konstruktor"
short-title: WaveShaperNode()
slug: Web/API/WaveShaperNode/WaveShaperNode
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Web Audio API")}}

Der **`WaveShaperNode()`**-Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt ein neues [`WaveShaperNode`](/de/docs/Web/API/WaveShaperNode)-Objekt, welches ein [`AudioNode`](/de/docs/Web/API/AudioNode) repräsentiert, das einen nichtlinearen Verzerrer darstellt.

## Syntax

```js-nolint
new WaveShaperNode(context, options)
```

### Parameter

- `context`
  - : Eine Referenz zu einem [`AudioContext`](/de/docs/Web/API/AudioContext).
- `options` {{optional_inline}}
  - : Die Optionen sind wie folgt:
    - `curve`
      - : Die Formungskurve, die für den Waveshaping-Effekt verwendet wird. Das Eingangssignal liegt nominell im Bereich \[-1;1].
    - `oversample`
      - : Gibt an, welcher Typ von Oversampling (falls vorhanden) verwendet werden soll, wenn die Formungskurve angewendet wird. Gültige Werte sind `"none"`, `"2x"` oder `"4x"`. Der Standardwert ist `"none"`.
    - `channelCount`
      - : Repräsentiert eine Ganzzahl, die bestimmt, wie viele Kanäle verwendet werden, wenn Verbindungen zu irgendeinem Eingang des Knotens [hochgemischt und runtergemischt](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) werden. (Sehen Sie [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount) für mehr Informationen.) Die Nutzung und genaue Definition hängt vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Repräsentiert einen aufgezählten Wert, der beschreibt, wie Kanäle zwischen den Eingängen und Ausgängen des Knotens abgeglichen werden müssen. (Sehen Sie [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für mehr Informationen einschließlich der Standardwerte.)
    - `channelInterpretation`
      - : Repräsentiert einen aufgezählten Wert, der die Bedeutung der Kanäle beschreibt. Diese Interpretation bestimmt, wie das Audio [hochgemischt und runtergemischt](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) wird. Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Sehen Sie [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für mehr Informationen einschließlich der Standardwerte.)

### Rückgabewert

Eine neue [`WaveShaperNode`](/de/docs/Web/API/WaveShaperNode) Objektinstanz.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
