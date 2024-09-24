---
title: "IIRFilterNode: IIRFilterNode() Konstruktor"
short-title: IIRFilterNode()
slug: Web/API/IIRFilterNode/IIRFilterNode
l10n:
  sourceCommit: ca3afa7533ac5bc2d552b0c7926d672fe79d71de
---

{{APIRef("Web Audio API")}}

Der **`IIRFilterNode()`** Konstruktor
der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt ein neues
{{domxref("IIRFilterNode")}}-Objekt, das einen {{domxref("AudioNode")}} Prozessor
darstellt, der einen allgemeinen Infinite Impulse Response-Filter implementiert.

## Syntax

```js-nolint
new IIRFilterNode(context, options)
```

### Parameter

- `context`
  - : Ein Verweis auf einen {{domxref("AudioContext")}}.
- `options`

  - : Optionen sind wie folgt:

    - `feedforward`
      - : Eine Sequenz von Vorwärts-Koeffizienten.
    - `feedback`
      - : Eine Sequenz von Rückkopplungs-Koeffizienten.
    - `channelCount`
      - : Stellt eine Ganzzahl dar, die verwendet wird, um zu bestimmen, wie viele Kanäle beim [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) von Verbindungen zu Eingaben des Knotens verwendet werden. (Siehe
        {{domxref("AudioNode.channelCount")}} für mehr Informationen.) Seine Nutzung und präzise
        Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Stellt einen enumerierten Wert dar, der beschreibt, wie Kanäle zwischen den
        Eingängen und Ausgängen des Knotens übereinstimmen müssen. (Siehe {{domxref("AudioNode.channelCountMode")}} für weitere
        Informationen einschließlich Standardwerte.)
    - `channelInterpretation`
      - : Stellt einen enumerierten Wert dar, der die Bedeutung der Kanäle beschreibt. Diese
        Interpretation definiert, wie Audio [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) durchgeführt wird.
        Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Siehe
        {{domxref("AudioNode.channelCountMode")}} für weitere Informationen einschließlich
        Standardwerte.)

Im Gegensatz zu anderen Knoten der Web Audio API sind die beim Erstellen an den IIR-Filter übergebenen Optionen nicht optional. Der Filter benötigt diese Werte, um zu funktionieren, und bei der Vielzahl von verfügbaren Filtern gibt es keinen Standard.

### Rückgabewert

Eine neue Instanz des {{domxref("IIRFilterNode")}}-Objekts.

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
