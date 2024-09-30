---
title: "ConvolverNode: ConvolverNode() Konstruktor"
short-title: ConvolverNode()
slug: Web/API/ConvolverNode/ConvolverNode
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("Web Audio API")}}

Der **`ConvolverNode()`** Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt eine neue
[`ConvolverNode`](/de/docs/Web/API/ConvolverNode) Objektinstanz.

## Syntax

```js-nolint
new ConvolverNode(context, options)
```

### Parameter

- `context`
  - : Eine Referenz zu einem [`AudioContext`](/de/docs/Web/API/AudioContext).
- `options` {{optional_inline}}

  - : Optionen sind wie folgt:

    - `buffer`
      - : Ein mono, stereo oder 4-Kanal [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), der die (möglicherweise mehrkanalige) Impulsantwort enthält, die vom `ConvolverNode` verwendet wird, um den Halleffekt zu erzeugen.
    - `disableNormalization`
      - : Ein boolescher Wert, der steuert, ob die Impulsantwort aus dem Buffer durch eine Gleichleistungs-Normalisierung skaliert wird oder nicht. Standardmäßig ist dies `false`.
    - `channelCount`
      - : Stellt eine ganze Zahl dar, die festlegt, wie viele Kanäle beim [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) von Verbindungen zu Eingaben des Knoten verwendet werden.
        (Siehe [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount) für weitere Informationen.)
        Die Verwendung und genaue Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Stellt einen enumerierten Wert dar, der beschreibt, wie die Kanäle zwischen den Eingaben und Ausgaben des Knotens abgeglichen werden müssen.
        (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen, einschließlich der Standardwerte.)
    - `channelInterpretation`
      - : Stellt einen enumerierten Wert dar, der die Bedeutung der Kanäle beschreibt.
        Diese Interpretation bestimmt, wie Audio [up-mixing und down-mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) durchgeführt wird.
        Die möglichen Werte sind `"speakers"` oder `"discrete"`.
        (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen, einschließlich der Standardwerte.)

### Rückgabewert

Eine neue [`ConvolverNode`](/de/docs/Web/API/ConvolverNode) Objektinstanz.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der referenzierte [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) nicht die korrekte Anzahl von Kanälen hat oder wenn er eine andere Abtastrate als der zugehörige [`AudioContext`](/de/docs/Web/API/AudioContext) hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
