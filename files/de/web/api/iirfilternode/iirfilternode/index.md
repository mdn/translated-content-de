---
title: "IIRFilterNode: IIRFilterNode() Konstruktor"
short-title: IIRFilterNode()
slug: Web/API/IIRFilterNode/IIRFilterNode
l10n:
  sourceCommit: ca3afa7533ac5bc2d552b0c7926d672fe79d71de
---

{{APIRef("Web Audio API")}}

Der **`IIRFilterNode()`**-Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt ein neues [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode)-Objekt, ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Prozessor, der einen allgemeinen Infinite Impulse Response-Filter implementiert.

## Syntax

```js-nolint
new IIRFilterNode(context, options)
```

### Parameter

- `context`
  - : Ein Verweis auf einen [`AudioContext`](/de/docs/Web/API/AudioContext).
- `options`

  - : Die Optionen sind wie folgt:

    - `feedforward`
      - : Eine Sequenz von Feedforward-Koeffizienten.
    - `feedback`
      - : Eine Sequenz von Feedback-Koeffizienten.
    - `channelCount`
      - : Repräsentiert eine Ganzzahl, die bestimmt, wie viele Kanäle beim [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) von Verbindungen zu beliebigen Eingängen des Knotens verwendet werden. (Weitere Informationen finden Sie unter [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount).) Die Nutzung und genaue
        Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Repräsentiert einen enumerierten Wert, der beschreibt, wie Kanäle zwischen den Eingängen und Ausgängen des Knotens abgeglichen werden müssen. (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für
        weitere Informationen, einschließlich Standardwerte.)
    - `channelInterpretation`
      - : Repräsentiert einen enumerierten Wert, der die Bedeutung der Kanäle beschreibt. Diese
        Interpretation definiert, wie das [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) erfolgt.
        Mögliche Werte sind `"speakers"` oder `"discrete"`. (Weitere Informationen, einschließlich Standardwerte, finden Sie unter
        [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode).)

Im Gegensatz zu anderen Knoten in der Web Audio API sind die Optionen, die beim Erstellen des IIR-Filters übergeben werden, nicht optional. Der Filter benötigt diese Werte, um zu funktionieren, und angesichts der Vielzahl von verfügbaren Filtern gibt es keinen Standard.

### Rückgabewert

Eine neue Instanz des [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode)-Objekts.

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
