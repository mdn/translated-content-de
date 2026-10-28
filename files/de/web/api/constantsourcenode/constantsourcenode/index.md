---
title: "ConstantSourceNode: Konstruktor ConstantSourceNode()"
short-title: ConstantSourceNode()
slug: Web/API/ConstantSourceNode/ConstantSourceNode
l10n:
  sourceCommit: 01501e37cc8a84b9193671f348ff2c7b10f5dffe
---

{{APIRef("Web Audio API")}}

Der Konstruktor **`ConstantSourceNode()`** erstellt eine neue Instanz des Objekts [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode). Sie stellt eine Audioquelle dar, die fortlaufend Samples mit stets demselben Wert ausgibt.

## Syntax

```js-nolint
new ConstantSourceNode(context)
new ConstantSourceNode(context, options)
```

### Parameter

- `context`
  - : Ein [`AudioContext`](/de/docs/Web/API/AudioContext), der den Audiokontext darstellt, dem der Node zugeordnet werden soll.
- `options` {{optional_inline}}
  - : Ein `ConstantSourceOptions`-Dictionary-Objekt, das die gewünschten Eigenschaften des `ConstantSourceNode` definiert:
    - `offset`
      - : Eine Gleitkommazahl, die den Anfangswert des [`offset`](/de/docs/Web/API/ConstantSourceNode/offset)-[`AudioParam`](/de/docs/Web/API/AudioParam) angibt. Dieser bestimmt den konstanten Wert, den die Quelle erzeugt. Der Standardwert ist 1,0. Der Wert muss endlich sein.

## Beispiele

In diesem Beispiel wird ein Audiokontext erstellt. Anschließend wird ein `ConstantSourceNode` eingerichtet, dessen `offset` mit 0,5 initialisiert wird.

```js
let audioContext = new AudioContext();

let myConstantSource = new ConstantSourceNode(audioContext, { offset: 0.5 });
```

> [!NOTE]
> Der vom Konstruktor erstellte neue `ConstantSourceNode` hat einen [`channelCount`](/de/docs/Web/API/AudioNode/channelCount) von 2\.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
