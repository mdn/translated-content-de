---
title: "ConstantSourceNode: ConstantSourceNode() Konstruktor"
short-title: ConstantSourceNode()
slug: Web/API/ConstantSourceNode/ConstantSourceNode
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("Web Audio API")}}

Der **`ConstantSourceNode()`** Konstruktor erstellt eine neue Instanz eines [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode)-Objekts, das eine Audioquelle darstellt, die konstant Proben ausgibt, deren Werte immer gleich sind.

## Syntax

```js-nolint
new ConstantSourceNode(context, options)
```

### Parameter

- `context`
  - : Ein [`AudioContext`](/de/docs/Web/API/AudioContext), der den Audiokontext repräsentiert, mit dem der Knoten verknüpft werden soll.
- `options`

  - : Ein `ConstantSourceOptions` Wörterbuch-Objekt, das die Eigenschaften definiert, die der `ConstantSourceNode` haben soll:

    - `offset`
      - : Ein schreibgeschütztes [`AudioParam`](/de/docs/Web/API/AudioParam), das den konstanten Wert angibt, der von der Quelle erzeugt wird. Der Standardwert ist 1.0. Der normale Bereich liegt zwischen \-1.0 und 1.0, aber der Wert kann irgendwo im Bereich von `-Infinity` bis `+Infinity` liegen.

## Beispiele

In diesem Beispiel wird ein Audiokontext erstellt, dann wird ein `ConstantSourceNode` mit einem `offset` von 0.5 eingerichtet.

```js
let audioContext = new AudioContext();

let myConstantSource = new ConstantSourceNode(audioContext, { offset: 0.5 });
```

> [!NOTE]
> Der neue `ConstantSourceNode`, der durch den Konstruktor erstellt wurde, hat eine [`channelCount`](/de/docs/Web/API/AudioNode/channelCount) von 2\.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
