---
title: "ConvolverNode: ConvolverNode() Konstruktor"
short-title: ConvolverNode()
slug: Web/API/ConvolverNode/ConvolverNode
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Web Audio API")}}

Der **`ConvolverNode()`** Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt eine neue Instanz des [`ConvolverNode`](/de/docs/Web/API/ConvolverNode)-Objekts.

## Syntax

```js-nolint
new ConvolverNode(context, options)
```

### Parameter

- `context`
  - : Ein Verweis auf einen [`AudioContext`](/de/docs/Web/API/AudioContext).
- `options` {{optional_inline}}
  - : Optionen sind wie folgt:
    - `buffer`
      - : Ein mono, stereo oder 4-Kanal [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), der die (möglicherweise mehrkanalige) Impulsantwort enthält, die vom `ConvolverNode` verwendet wird, um den Halleffekt zu erzeugen.
    - `disableNormalization`
      - : Ein boolescher Wert, der steuert, ob die Impulsantwort aus dem Puffer durch eine Gleichleistungs-Normalisierung skaliert wird oder nicht. Der Standardwert ist `false`.
    - `channelCount`
      - : Repräsentiert eine Ganzzahl, die bestimmt, wie viele Kanäle beim [Hoch- und Heruntermischen](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) von Verbindungen zu beliebigen Eingängen des Knotens verwendet werden.
        (Siehe [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount) für weitere Informationen.) Seine Nutzung und genaue Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Repräsentiert einen enumerierten Wert, der beschreibt, wie Kanäle zwischen den Eingängen und Ausgängen des Knotens abgeglichen werden müssen.
        (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen, einschließlich der Standardwerte.)
    - `channelInterpretation`
      - : Repräsentiert einen enumerierten Wert, der die Bedeutung der Kanäle beschreibt. Diese Interpretation bestimmt, wie [Hoch- und Heruntermischen](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) von Audio erfolgen wird.
        Die möglichen Werte sind `"speakers"` oder `"discrete"`.
        (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen, einschließlich der Standardwerte.)

### Rückgabewert

Eine neue Instanz des [`ConvolverNode`](/de/docs/Web/API/ConvolverNode)-Objekts.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der referenzierte [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) nicht die richtige Anzahl an Kanälen hat oder eine andere Abtastrate als der zugehörige [`AudioContext`](/de/docs/Web/API/AudioContext) aufweist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
