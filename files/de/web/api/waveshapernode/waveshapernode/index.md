---
title: "WaveShaperNode: WaveShaperNode()-Konstruktor"
short-title: WaveShaperNode()
slug: Web/API/WaveShaperNode/WaveShaperNode
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("Web Audio API")}}

Der **`WaveShaperNode()`**-Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt ein neues [`WaveShaperNode`](/de/docs/Web/API/WaveShaperNode)-Objekt, das ein [`AudioNode`](/de/docs/Web/API/AudioNode) darstellt und als nicht-linearer Verzerrer fungiert.

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
      - : Die Formungskurve, die für den Waveshaping-Effekt verwendet wird. Das Eingangssignal befindet sich normalerweise im Bereich \[-1;1].
    - `oversample`
      - : Gibt an, welcher Typ von Oversampling (falls vorhanden) beim Anwenden der Formungskurve verwendet werden soll. Gültige Werte sind `"none"`, `"2x"` oder `"4x"`. Der Standardwert ist `"none"`.
    - `channelCount`
      - : Stellt eine Ganzzahl dar, die angibt, wie viele Kanäle bei der [Hoch- und Heruntermischung](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) von Verbindungen zu den Eingängen des Knotens verwendet werden. (Siehe [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount) für weitere Informationen.) Die Nutzung und genaue Definition hängt vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Stellt einen enumerierten Wert dar, der beschreibt, wie die Kanäle zwischen den Eingängen und Ausgängen des Knotens abgeglichen werden müssen. (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen einschließlich Standardwerte.)
    - `channelInterpretation`
      - : Stellt einen enumerierten Wert dar, der die Bedeutung der Kanäle beschreibt. Diese Interpretation definiert, wie Audio [hoch- und heruntermischen](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) durchgeführt wird. Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen einschließlich Standardwerte.)

### Rückgabewert

Eine neue Instanz eines [`WaveShaperNode`](/de/docs/Web/API/WaveShaperNode)-Objekts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
