---
title: "ConstantSourceNode: ConstantSourceNode() Konstruktor"
short-title: ConstantSourceNode()
slug: Web/API/ConstantSourceNode/ConstantSourceNode
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{APIRef("Web Audio API")}}

Der **`ConstantSourceNode()`**-Konstruktor erstellt eine neue Instanz eines [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode)-Objekts, das eine Audioquelle darstellt, die ständig Proben mit gleichbleibenden Werten ausgibt.

## Syntax

```js-nolint
new ConstantSourceNode(context, options)
```

### Parameter

- `context`
  - : Ein [`AudioContext`](/de/docs/Web/API/AudioContext), der den Audiokontext repräsentiert, mit dem der Knoten verknüpft werden soll.
- `options`

  - : Ein `ConstantSourceOptions`-Wörterbuchobjekt, das die Eigenschaften definiert, die der `ConstantSourceNode` haben soll:

    - `offset`
      - : Ein schreibgeschützter [`AudioParam`](/de/docs/Web/API/AudioParam), der den konstanten Wert angibt, der von der Quelle generiert wird. Der Standardwert ist 1,0. Der normale Bereich liegt zwischen \-1,0 und 1,0, aber der Wert kann überall im Bereich von `-Infinity` bis `Infinity` liegen.

## Beispiele

In diesem Beispiel wird ein Audiokontext erstellt, dann wird ein `ConstantSourceNode` eingerichtet, dessen `offset` auf 0,5 initialisiert wird.

```js
let audioContext = new AudioContext();

let myConstantSource = new ConstantSourceNode(audioContext, { offset: 0.5 });
```

> [!NOTE]
> Der neue `ConstantSourceNode`, der durch den Konstruktor erstellt wurde, hat einen [`channelCount`](/de/docs/Web/API/AudioNode/channelCount) von 2\.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
