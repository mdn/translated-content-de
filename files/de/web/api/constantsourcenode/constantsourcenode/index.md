---
title: "ConstantSourceNode: ConstantSourceNode() Konstruktor"
short-title: ConstantSourceNode()
slug: Web/API/ConstantSourceNode/ConstantSourceNode
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("Web Audio API")}}

Der **`ConstantSourceNode()`** Konstruktor erstellt eine neue [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode)-Objektinstanz, die eine Audioquelle darstellt, welche kontinuierlich Proben ausgibt, deren Werte immer gleich sind.

## Syntax

```js-nolint
new ConstantSourceNode(context, options)
```

### Parameter

- `context`
  - : Ein [`AudioContext`](/de/docs/Web/API/AudioContext), der den Audiokontext darstellt, mit dem der Knoten verknüpft werden soll.
- `options`

  - : Ein `ConstantSourceOptions`-Wörterbuchobjekt, das die Eigenschaften definiert, die der `ConstantSourceNode` haben soll:

    - `offset`
      - : Ein schreibgeschützter [`AudioParam`](/de/docs/Web/API/AudioParam), der den konstanten Wert angibt, der von der Quelle erzeugt wird. Der Standardwert ist 1.0. Der normale Bereich liegt zwischen \-1.0 und 1.0, aber der Wert kann sich überall im Bereich von `-Infinity` bis `+Infinity` befinden.

## Beispiele

In diesem Beispiel wird ein Audiokontext erstellt, dann wird ein `ConstantSourceNode` eingerichtet, dessen `offset` auf 0,5 initialisiert wird.

```js
let audioContext = new AudioContext();

let myConstantSource = new ConstantSourceNode(audioContext, { offset: 0.5 });
```

> [!NOTE]
> Der neue `ConstantSourceNode`, der durch den Konstruktor erstellt wird, hat eine [`channelCount`](/de/docs/Web/API/AudioNode/channelCount) von 2\.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
