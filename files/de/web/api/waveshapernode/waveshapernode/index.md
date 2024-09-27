---
title: "WaveShaperNode: WaveShaperNode() Konstruktor"
short-title: WaveShaperNode()
slug: Web/API/WaveShaperNode/WaveShaperNode
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("Web Audio API")}}

Der **`WaveShaperNode()`** Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt ein neues [`WaveShaperNode`](/de/docs/Web/API/WaveShaperNode)-Objekt, das ein [`AudioNode`](/de/docs/Web/API/AudioNode) darstellt, welches einen nichtlinearen Verzerrer repräsentiert.

## Syntax

```js-nolint
new WaveShaperNode(context, options)
```

### Parameter

- `context`
  - : Eine Referenz zu einem [`AudioContext`](/de/docs/Web/API/AudioContext).
- `options` {{optional_inline}}

  - : Optionen sind wie folgt:

    - `curve`
      - : Die Formungskurve, die für den Waveshaping-Effekt verwendet wird. Das Eingangssignal liegt nominal im Bereich \[-1;1].
    - `oversample`
      - : Gibt an, welcher Typ der Oversampling (falls vorhanden) angewendet werden soll, wenn die Formungskurve angewendet wird. Gültige Werte sind `"none"`, `"2x"` oder `"4x"`. Der Standardwert ist `"none"`.
    - `channelCount`
      - : Repräsentiert eine ganze Zahl, die bestimmt, wie viele Kanäle verwendet werden, wenn [up-mixing und down-mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) Verbindungen zu Eingängen des Knotens getroffen werden. (Siehe [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount) für weitere Informationen.) Die Verwendung und genaue Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Repräsentiert einen enumerierten Wert, der die Art und Weise beschreibt, wie Kanäle zwischen den Eingängen und Ausgängen des Knotens abgeglichen werden müssen. (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen, einschließlich Standardwerte.)
    - `channelInterpretation`
      - : Repräsentiert einen enumerierten Wert, der die Bedeutung der Kanäle beschreibt. Diese Interpretation definiert, wie [up-mixing und down-mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) durchgeführt werden. Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen, einschließlich Standardwerte.)

### Rückgabewert

Eine neue [`WaveShaperNode`](/de/docs/Web/API/WaveShaperNode)-Objektinstanz.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
