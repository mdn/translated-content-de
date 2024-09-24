---
title: "ConstantSourceNode: ConstantSourceNode() Konstruktor"
short-title: ConstantSourceNode()
slug: Web/API/ConstantSourceNode/ConstantSourceNode
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("Web Audio API")}}

Der **`ConstantSourceNode()`** Konstruktor erstellt eine neue Instanz eines {{domxref("ConstantSourceNode")}}-Objekts, das eine Audioquelle darstellt, welche konstant Proben ausgibt, deren Werte immer gleich sind.

## Syntax

```js-nolint
new ConstantSourceNode(context, options)
```

### Parameter

- `context`
  - : Ein {{domxref("AudioContext")}}, der den Audiokontext repräsentiert, mit dem der Knoten verbunden werden soll.
- `options`

  - : Ein `ConstantSourceOptions` Wörterbuchobjekt, das die Eigenschaften definiert, die der `ConstantSourceNode` haben soll:

    - `offset`
      - : Ein schreibgeschützter {{domxref("AudioParam")}}, der den von der Quelle erzeugten konstanten Wert angibt. Der Standardwert ist 1.0. Der normale Bereich liegt zwischen \-1.0 und 1.0, aber der Wert kann überall im Bereich von `-Infinity` bis `+Infinity` liegen.

## Beispiele

In diesem Beispiel wird ein Audiokontext erstellt, dann wird ein `ConstantSourceNode` mit seinem initialisierten `offset` von 0.5 festgelegt.

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
