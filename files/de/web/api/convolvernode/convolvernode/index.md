---
title: "ConvolverNode: ConvolverNode() Konstruktor"
short-title: ConvolverNode()
slug: Web/API/ConvolverNode/ConvolverNode
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("Web Audio API")}}

Der **`ConvolverNode()`**-Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt eine neue Instanz eines [`ConvolverNode`](/de/docs/Web/API/ConvolverNode)-Objekts.

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
      - : Ein mono-, stereo- oder 4-Kanal-`AudioBuffer`, der die (möglicherweise mehrkanalige) Impulsantwort enthält, die vom `ConvolverNode` verwendet wird, um den Halleffekt zu erzeugen.
    - `disableNormalization`
      - : Ein boolescher Wert, der steuert, ob die Impulsantwort aus dem Puffer mit einer Gleichleistungsnormalisierung skaliert wird oder nicht. Der Standardwert ist `false`.
    - `channelCount`
      - : Stellt eine ganze Zahl dar, die verwendet wird, um zu bestimmen, wie viele Kanäle beim [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) von Verbindungen zu Eingängen des Knotens verwendet werden.
        (Weitere Informationen finden Sie unter [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount).)
        Die Verwendung und genaue Definition hängen vom Wert des `channelCountMode` ab.
    - `channelCountMode`
      - : Stellt einen enumerierten Wert dar, der beschreibt, wie die Kanäle zwischen den Eingängen und Ausgängen des Knotens abgestimmt werden müssen.
        (Weitere Informationen, einschließlich der Standardwerte, finden Sie unter [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode).)
    - `channelInterpretation`
      - : Stellt einen enumerierten Wert dar, der die Bedeutung der Kanäle beschreibt.
        Diese Interpretation definiert, wie [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) durchgeführt werden.
        Die möglichen Werte sind `"speakers"` oder `"discrete"`.
        (Weitere Informationen, einschließlich der Standardwerte, finden Sie unter [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode).)

### Rückgabewert

Eine neue Instanz eines [`ConvolverNode`](/de/docs/Web/API/ConvolverNode)-Objekts.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der referenzierte [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) nicht die korrekte Anzahl von Kanälen hat oder wenn die Abtastrate von der des zugeordneten [`AudioContext`](/de/docs/Web/API/AudioContext) abweicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
