---
title: "IIRFilterNode: IIRFilterNode() Konstruktor"
short-title: IIRFilterNode()
slug: Web/API/IIRFilterNode/IIRFilterNode
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Web Audio API")}}

Der **`IIRFilterNode()`** Konstruktor
der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt ein neues
[`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode) Objekt, das ein [`AudioNode`](/de/docs/Web/API/AudioNode) Prozessor ist,
welcher einen allgemeinen Filter mit unendlicher Impulsantwort implementiert.

## Syntax

```js-nolint
new IIRFilterNode(context, options)
```

### Parameter

- `context`
  - : Eine Referenz zu einem [`AudioContext`](/de/docs/Web/API/AudioContext).
- `options`
  - : Optionen sind wie folgt:
    - `feedforward`
      - : Eine Sequenz von Feedforward-Koeffizienten.
    - `feedback`
      - : Eine Sequenz von Feedback-Koeffizienten.
    - `channelCount`
      - : Stellt eine Ganzzahl dar, die bestimmt, wie viele Kanäle beim [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) von Verbindungen zu beliebigen Eingängen des Knotens verwendet werden. (Siehe [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount) für weitere Informationen.) Seine Verwendung und genaue Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Stellt einen enumerierten Wert dar, der beschreibt, wie die Kanäle zwischen den Eingängen und Ausgängen des Knotens übereinstimmen müssen. (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen einschließlich der Standardwerte.)
    - `channelInterpretation`
      - : Stellt einen enumerierten Wert dar, der die Bedeutung der Kanäle beschreibt. Diese Interpretation wird definieren, wie das Audio [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) erfolgen wird. Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen einschließlich der Standardwerte.)

Im Gegensatz zu anderen Knoten in der Web Audio API sind die Optionen, die beim Erstellen an den IIR-Filter übergeben werden, nicht optional. Der Filter benötigt diese Werte, um zu funktionieren, und bei der großen Anzahl verfügbarer Filter gibt es keinen Standard.

### Rückgabewert

Eine neue Instanz des [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode) Objekts.

## Beispiele

```js
let feedForward = [0.00020298, 0.0004059599, 0.00020298];
let feedBackward = [1.0126964558, -1.9991880801, 0.9873035442];

const audioCtx = new AudioContext();

const iirFilter = new IIRFilterNode(audioCtx, {
  feedforward: feedForward,
  feedback: feedBackward,
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
