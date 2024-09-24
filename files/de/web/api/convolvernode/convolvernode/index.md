---
title: "ConvolverNode: ConvolverNode()-Konstruktor"
short-title: ConvolverNode()
slug: Web/API/ConvolverNode/ConvolverNode
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("Web Audio API")}}

Der **`ConvolverNode()`**-Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt eine neue Instanz eines {{domxref("ConvolverNode")}}-Objekts.

## Syntax

```js-nolint
new ConvolverNode(context, options)
```

### Parameter

- `context`
  - : Eine Referenz zu einem {{domxref("AudioContext")}}.
- `options` {{optional_inline}}

  - : Optionen sind wie folgt:

    - `buffer`
      - : Ein mono-, stereo- oder 4-Kanal-{{domxref("AudioBuffer")}}, welches das (möglicherweise mehrkanalige) Impuls-Antwortsignal enthält, das vom `ConvolverNode`
        verwendet wird, um den Halleffekt zu erzeugen.
    - `disableNormalization`
      - : Ein boolescher Wert, der steuert, ob das Impuls-Antwortsignal aus dem Puffer durch eine gleichmäßige Normalisierung skaliert wird oder nicht. Der Standardwert ist '`false`'.
    - `channelCount`
      - : Stellt eine ganze Zahl dar, die verwendet wird, um zu bestimmen, wie viele Kanäle beim [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) von Verbindungen zu allen Eingängen des Knotens verwendet werden.
        (Siehe {{domxref("AudioNode.channelCount")}} für weitere Informationen.)
        Die Verwendung und genaue Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Stellt einen enumerierten Wert dar, der beschreibt, wie die Kanäle zwischen den Eingängen und Ausgängen des Knotens abgeglichen werden müssen.
        (Siehe {{domxref("AudioNode.channelCountMode")}} für weitere Informationen einschließlich der Standardwerte.)
    - `channelInterpretation`
      - : Stellt einen enumerierten Wert dar, der die Bedeutung der Kanäle beschreibt.
        Diese Interpretation definiert, wie Audio [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) erfolgen wird.
        Die möglichen Werte sind `"speakers"` oder `"discrete"`.
        (Siehe {{domxref("AudioNode.channelCountMode")}} für weitere Informationen einschließlich der Standardwerte.)

### Rückgabewert

Eine neue Instanz eines {{domxref("ConvolverNode")}}-Objekts.

### Ausnahmen

- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das referenzierte {{domxref("AudioBuffer")}} nicht die korrekte Anzahl an Kanälen hat oder eine andere Abtastrate als das zugehörige {{domxref("AudioContext")}} aufweist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
