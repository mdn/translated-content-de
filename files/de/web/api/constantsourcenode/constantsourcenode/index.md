---
title: "ConstantSourceNode: ConstantSourceNode() Konstruktor"
short-title: ConstantSourceNode()
slug: Web/API/ConstantSourceNode/ConstantSourceNode
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Web Audio API")}}

Der **`ConstantSourceNode()`** Konstruktor erstellt eine neue Instanz des [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode)-Objekts, das eine Audioquelle darstellt, die konstant Probenwerte ausgibt, die immer gleich sind.

## Syntax

```js-nolint
new ConstantSourceNode(context, options)
```

### Parameter

- `context`
  - : Ein [`AudioContext`](/de/docs/Web/API/AudioContext), der den Audio-Kontext darstellt, mit dem der Knoten verbunden werden soll.
- `options`
  - : Ein `ConstantSourceOptions`-Wörterbuchobjekt, das die Eigenschaften definiert, die der `ConstantSourceNode` haben soll:
    - `offset`
      - : Ein schreibgeschützter [`AudioParam`](/de/docs/Web/API/AudioParam), der den konstanten Wert angibt, der von der Quelle erzeugt wird. Der Standardwert ist 1,0. Der normale Bereich ist von \-1,0 bis 1,0, aber der Wert kann überall im Bereich von `-Infinity` bis `Infinity` liegen.

## Beispiele

In diesem Beispiel wird ein Audio-Kontext erstellt, dann ein `ConstantSourceNode` eingerichtet, dessen `offset` auf 0,5 initiiert wird.

```js
let audioContext = new AudioContext();

let myConstantSource = new ConstantSourceNode(audioContext, { offset: 0.5 });
```

> [!NOTE]
> Der neue `ConstantSourceNode`, der vom Konstruktor erstellt wird, hat eine [`channelCount`](/de/docs/Web/API/AudioNode/channelCount) von 2\.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
